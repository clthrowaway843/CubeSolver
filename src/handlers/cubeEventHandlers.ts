import * as UTILS from '../utils';
import { experimentalSolve3x3x3IgnoringCenters } from 'cubing/search';
import { now, GanCubeEvent, GanCubeMove, cubeTimestampCalcSkew } from 'gan-web-bluetooth';
import { TwistyPlayer } from 'cubing/twisty';
import * as THREE from 'three';
import $ from 'jquery';
import { addSolveDetails } from './solveHistoryHandler';
import { findMatchingOLLMask, getOLLAlgorithm } from './ollHandler';
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

let currentOLLMask: { index: number; rotation: number } | null = null;
let currentAlgorithm: string | null = null; // Stores the current algorithm
let currentAlgorithmMoves: string[] = []; // Stores the moves of the current algorithm
let lastMove: string | null = null; // The last move received
let lastMoveCount = 0; // The count of consecutive occurrences of the last move

async function handleMoveEvent(event: GanCubeEvent, twistyPlayer: TwistyPlayer) {
    if (event.type == "MOVE") {
        const currentMove = event.move; // Transform the move for orientation

        // Check if the current move matches the last move
        if (currentMove === lastMove) {
            lastMoveCount++; // Increment the count for consecutive moves
        } else {
            // Process the previous move(s) before resetting
            processBufferedMove(lastMove, lastMoveCount);

            // Reset the buffer for the new move
            lastMove = currentMove;
            lastMoveCount = 1;
        }

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

                    const match = findMatchingOLLMask(patternToFacelets(currentPattern));
                    if (match) {
                        const { index: ollNumber, rotation } = match;
                        console.log(`Matching OLL Mask Number: ${ollNumber}, Rotation: ${rotation}`);

                        const ollAlgorithm = getOLLAlgorithm(ollNumber, rotation);
                        
                        if (ollAlgorithm) {
                            currentAlgorithm = ollAlgorithm.original; // Store the current algorithm
                            currentAlgorithmMoves = currentAlgorithm.split(/\s+/); // Split the algorithm into moves
                            currentMoveIndex = 0; // Reset the move index
                            const originalMovesHtml = currentAlgorithmMoves
                                .map(move => `<span class="algorithm-move">${move}</span>`)
                                .join(' ');

                                // Display the algorithm
                                $('#ollAlgorithm').html(`
                                <div>
                                    <h4>Original</h4>
                                    <p>${originalMovesHtml}</p>
                                </div>
                                <div>
                                    <h4>Nicknamed</h4>
                                    <p>${ollAlgorithm.nicknamed}</p>
                                </div>
                            `);
                            updateAlgorithmDisplay(currentAlgorithm, currentMoveIndex); // Initialize the display
                        }
                        else {
                            console.log("No algorithm found for this OLL mask.");
                        }
                    } else {
                        console.log("No matching OLL mask found.");
                    }
                }

                
                if (currentAlgorithm && currentMoveIndex < currentAlgorithmMoves.length) {
                    // Check if the buffered move matches the current move in the algorithm
                    if (doesMoveMatch(currentMove, currentAlgorithmMoves[currentMoveIndex])) {
                        currentMoveIndex++; // Increment the move index if the move matches
                        updateAlgorithmDisplay(currentAlgorithm, currentMoveIndex);
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

let currentMoveIndex = 0; // Tracks the current move in the algorithm
function updateAlgorithmDisplay(algorithm: string, currentMoveIndex: number) {
    const moves = document.querySelectorAll('.algorithm-move');

    moves.forEach((move, index) => {
        if (index < currentMoveIndex) {
            move.classList.add('completed');
            move.classList.remove('next');
        } else if (index === currentMoveIndex) {
            move.classList.add('next');
            move.classList.remove('completed');
        } else {
            move.classList.remove('completed', 'next');
        }
    });
}

function transformMove(move: string): string {
    const moveMap: { [key: string]: string } = {
        "D": "U", // Bottom becomes Top
        "U": "D", // Top becomes Bottom
        "L": "R", // Left becomes Right
        "R": "L", // Right becomes Left
        "F": "F", // Front stays Front
        "B": "B",  // Back stays Back

    };

    const baseMove = move[0]; // The base move (e.g., 'D' in 'D2')
    const modifier = move.slice(1); // The modifier (e.g., '2' or "'")

    // Ensure the base move exists in the map
    if (!moveMap[baseMove]) {
        console.error(`Invalid move: ${move}`);
        return move; // Return the original move if it's invalid
    }

    return moveMap[baseMove] + modifier; // Transform the base move and append the modifier
}

function doesMoveMatch(userMove: string, expectedMove: string): boolean {
    console.log(`Matching userMove: ${userMove} with expectedMove: ${expectedMove}`);

    // Map single-layer moves to their corresponding double-layer moves
    const doubleLayerMap: { [key: string]: string } = {
        "L": "r", // Left matches Right double-layer
        "R": "l", // Right matches Left double-layer
        "D": "u", // Bottom matches Top double-layer
        "U": "d", // Top matches Bottom double-layer
        "F": "b", // Front matches Back double-layer
        "B": "f"  // Back matches Front double-layer
    };

    // Handle repeated moves (e.g., U U for U2)
    if (expectedMove.endsWith("2")) {
        const baseMove = expectedMove[0];
        return userMove === baseMove; // Match each individual move
    }

    // If the expected move is a double-layer move, check if the user's move matches
    if (expectedMove in doubleLayerMap) {
        return userMove === doubleLayerMap[expectedMove];
    }

    // Otherwise, check for a direct match
    return userMove === expectedMove;
}


function processBufferedMove(move: string | null, count: number) {
    if (!move || count === 0) return; // No move to process

    // Interpret the move based on the count
    for (let i = 0; i < count; i++) {
        if (currentAlgorithm && currentMoveIndex < currentAlgorithmMoves.length) {
            // Check if the buffered move matches the current move in the algorithm
            if (doesMoveMatch(move, currentAlgorithmMoves[currentMoveIndex])) {
                currentMoveIndex++; // Increment the move index if the move matches
                updateAlgorithmDisplay(currentAlgorithm, currentMoveIndex);
            }
        }
    }
}
