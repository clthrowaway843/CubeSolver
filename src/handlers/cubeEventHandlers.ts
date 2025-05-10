import * as UTILS from '../utils';
import { experimentalSolve3x3x3IgnoringCenters } from 'cubing/search';
import { now, GanCubeEvent, GanCubeMove, cubeTimestampCalcSkew } from 'gan-web-bluetooth';
import { TwistyPlayer } from 'cubing/twisty';
import * as THREE from 'three';
import $ from 'jquery';
import { addSolveDetails } from './solveHistoryHandler';
import { findMatchingOLLMask } from './ollHandler';
import { patternToFacelets } from '../utils';

let isWhiteCrossCompleted = false;
let isF2LCompleted = false;
let isOLLCompleted = false;
let isPLLCompleted = false;
let solveState: "solved" | "scrambling" | "solving" | "readyToSolve" = "solved";

// Track timestamps for each step
let solveStartTime: number | null = null;
let crossCompletionTime: number | null = null;
let f2lCompletionTime: number | null = null;
let ollCompletionTime: number | null = null;
let pllCompletionTime: number | null = null;

let lastMoveTime: number | null = null; // Timestamp of the last move
let inactivityTimer: NodeJS.Timeout | null = null; // Timer for detecting inactivity
const MIN_SCRAMBLE_MOVES = 10; // Minimum number of moves required for scrambling

var cubeStateInitialized = false;
export const SOLVED_STATE = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";

async function handleFaceletsEvent(event: GanCubeEvent, twistyPlayer: TwistyPlayer) {
    if (event.type == "FACELETS" && !cubeStateInitialized) { // Initialize cube!
        if (event.facelets != SOLVED_STATE) {
            var kpattern = UTILS.faceletsToPattern(event.facelets);
            var solution = await experimentalSolve3x3x3IgnoringCenters(kpattern);
            var scramble = solution.invert();
            twistyPlayer.alg = scramble;
        } else {
            twistyPlayer.alg = '';
        }
        cubeStateInitialized = true;
        console.log("Initial cube state is applied successfully", event.facelets);
    }
}

const HOME_ORIENTATION = new THREE.Quaternion().setFromEuler(new THREE.Euler(15 * Math.PI / 180, -20 * Math.PI / 180, 0));

async function handleGyroEvent(event: GanCubeEvent, basis: THREE.Quaternion | null, cubeQuaternion: THREE.Quaternion) {
    if (event.type == "GYRO") {
        let { x: qx, y: qy, z: qz, w: qw } = event.quaternion;
        let quat = new THREE.Quaternion(qx, qz, -qy, qw).normalize();
        if (!basis) {
            basis = quat.clone().conjugate();
        }

        cubeQuaternion.copy(quat.premultiply(basis).premultiply(HOME_ORIENTATION));
        $('#quaternion').val(`x: ${qx.toFixed(3)}, y: ${qy.toFixed(3)}, z: ${qz.toFixed(3)}, w: ${qw.toFixed(3)}`);
        if (event.velocity) {
            let { x: vx, y: vy, z: vz } = event.velocity;
            $('#velocity').val(`x: ${vx}, y: ${vy}, z: ${vz}`);
        }
    }
}

var lastMoves: GanCubeMove[] = [];

export function handleCubeEvent(
    event: GanCubeEvent,
    twistyPlayer: TwistyPlayer,
    basis: THREE.Quaternion | null,
    cubeQuaternion: THREE.Quaternion
    ) {
    
    if (event.type == "GYRO") {
        handleGyroEvent(event, basis, cubeQuaternion);
    } else if (event.type == "MOVE") {
        handleMoveEvent(event, twistyPlayer);
    } else if (event.type == "FACELETS") {
        handleFaceletsEvent(event, twistyPlayer);
    } else if (event.type == "HARDWARE") {
        $('#hardwareName').val(event.hardwareName || '- n/a -');
        $('#hardwareVersion').val(event.hardwareVersion || '- n/a -');
        $('#softwareVersion').val(event.softwareVersion || '- n/a -');
        $('#productDate').val(event.productDate || '- n/a -');
        $('#gyroSupported').val(event.gyroSupported ? "YES" : "NO");
    } else if (event.type == "BATTERY") {
        $('#batteryLevel').val(event.batteryLevel + '%');
    } else if (event.type == "DISCONNECT") {
        twistyPlayer.alg = '';
        $('.info input').val('- n/a -');
        $('#connect').html('Connect');
    }
}

async function handleMoveEvent(event: GanCubeEvent, twistyPlayer: TwistyPlayer) {
    if (event.type == "MOVE") {

        twistyPlayer.experimentalAddMove(event.move, { cancel: false });
        lastMoves.push(event);

        if (lastMoves.length > 256) {
            lastMoves = lastMoves.slice(-256);
        }

        if (lastMoves.length > 10) {
            var skew = cubeTimestampCalcSkew(lastMoves);
            $('#skew').val(skew + '%');
        }

        const currentPattern = await twistyPlayer.experimentalModel.currentPattern.get();

        // Handle solve state transitions
        if (solveState === "solved") {
            console.log("Scrambling started...");
            solveState = "scrambling";
            lastMoves = []; // Reset lastMoves to track scrambling moves
            lastMoveTime = now();
            return; // Do not check checkpoints during scrambling
        }

        if (solveState === "readyToSolve") {
            console.log("Solve started!");
            solveState = "solving"; // Transition to solving state
            solveStartTime = now(); // Set the solve start time
        }

        if (solveState === "scrambling") {
            lastMoveTime = now();

            if (inactivityTimer) {
                clearTimeout(inactivityTimer);
            }

            inactivityTimer = setTimeout(() => {
                if (lastMoves.length >= MIN_SCRAMBLE_MOVES) {
                    console.log("Scrambling complete. Ready for the next solve.");
                    solveState = "readyToSolve";
                }
            }, 3000); // 5 seconds of inactivity

            return; // Do not check checkpoints during scrambling
        }

        if (solveState === "solving") {
            // Check if the white cross is solved
            var whiteCrossSolved = UTILS.isWhiteCrossSolved(currentPattern);

            if (whiteCrossSolved && !isWhiteCrossCompleted) {
                crossCompletionTime = now(); // Record the time when the cross is completed
                console.log(`White cross is solved! Time: ${(crossCompletionTime - (solveStartTime || 0)) / 1000}s`);
                isWhiteCrossCompleted = true;
            }

            // Check if F2L is complete
            if (isWhiteCrossCompleted) {
                var f2lSolved = UTILS.isF2LSolved(currentPattern);

                if (whiteCrossSolved && f2lSolved && !isF2LCompleted) {
                    f2lCompletionTime = now(); // Record the time when F2L is completed
                    console.log(`F2L is solved! Time: ${(f2lCompletionTime - (crossCompletionTime || 0)) / 1000}s`);
                    isF2LCompleted = true;

                    // Call findMatchingOLLMask to determine the OLL mask
                    const ollMaskIndex = findMatchingOLLMask(patternToFacelets(currentPattern));
                    if (ollMaskIndex !== -1) {
                        const ollNumber = ollMaskIndex + 1; // OLL mask numbers start from 1
                        console.log(`Matching OLL Mask Number: ${ollNumber}`);
                    } else {
                        console.log("No matching OLL mask found.");
                    }
                }

                //if (!isF2LCompleted) {
                    //const f2lPairs = UTILS.findF2LPairs(currentPattern);
                    //console.log("F2L Pairs:", f2lPairs);
                //}

                // Check if OLL is complete
                if (isF2LCompleted) {
                    const ollSolved = UTILS.isOLLSolved(currentPattern);
                    if (ollSolved && !isOLLCompleted) {
                        ollCompletionTime = now(); // Record the time when OLL is completed
                        console.log(`OLL Solved! Time: ${(ollCompletionTime - (f2lCompletionTime || 0)) / 1000}s`);
                        isOLLCompleted = true;
                    }

                    // Check if PLL is complete
                    if (isOLLCompleted) {
                        const pllSolved = UTILS.isPLLSolved(currentPattern);
                        if (pllSolved && !isPLLCompleted) {
                            pllCompletionTime = now(); // Record the time when PLL is completed
                            console.log(`PLL solved! Time: ${(pllCompletionTime - (ollCompletionTime || 0)) / 1000}s`);
                            isPLLCompleted = true;

                            // Calculate total solve time
                            const totalSolveTime = (pllCompletionTime - (solveStartTime || 0)) / 1000;
                            console.log(`Solve completed! Total time: ${totalSolveTime}s`);

                            addSolveDetails({
                                totalTime: totalSolveTime,
                                crossTime: (crossCompletionTime! - solveStartTime!) / 1000,
                                f2lTime: (f2lCompletionTime! - crossCompletionTime!) / 1000,
                                ollTime: (ollCompletionTime! - f2lCompletionTime!) / 1000,
                                pllTime: (pllCompletionTime! - ollCompletionTime!) / 1000,
                            });
                            //onSolveComplete();
                            //TODO : call SolveHistoryHandler functions

                            // Reset all completion variables and set solveState to "solved"
                            console.log("Resetting checkpoints...");
                            isWhiteCrossCompleted = false;
                            isF2LCompleted = false;
                            isOLLCompleted = false;
                            isPLLCompleted = false;
                            solveState = "solved"; // Mark the cube as solved
                            lastMoves = []; // Reset lastMoves to track scrambling moves

                            // Reset timers
                            solveStartTime = null;
                            crossCompletionTime = null;
                            f2lCompletionTime = null;
                            ollCompletionTime = null;
                            pllCompletionTime = null;
                        }
                    }
                }
            }
        }
    }
}
