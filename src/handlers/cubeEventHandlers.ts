import * as UTILS from '../utils';
import { experimentalSolve3x3x3IgnoringCenters } from 'cubing/search';
import { now, GanCubeEvent, GanCubeMove, cubeTimestampCalcSkew } from 'gan-web-bluetooth';
import { TwistyPlayer } from 'cubing/twisty';
import * as THREE from 'three';
import $ from 'jquery';
import { addSolveDetails } from './solveHistoryHandler';
import { findMatchingOLLMask, getOLLAlgorithm, getRandomOLLAlgorithm } from './ollHandler';
import { patternToFacelets } from '../utils';
import { KPattern } from 'cubing/kpuzzle';
import { Alg } from 'cubing/alg';

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

let inactivityTimer: NodeJS.Timeout | null = null; // Timer for detecting inactivity
const MIN_SCRAMBLE_MOVES = 5; // Minimum number of moves required for scrambling

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

// Declare basis as a global variable
let basis: THREE.Quaternion | null = null;

// Add this function:
export function resetGyroBasis() {
    basis = null;
}

async function handleGyroEvent(event: GanCubeEvent, cubeQuaternion: THREE.Quaternion) {
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
    cubeQuaternion: THREE.Quaternion
) {
    
    if (event.type == "GYRO") {
        handleGyroEvent(event, cubeQuaternion); // only pass cubeQuaternion
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

function detectOLLMask(currentPattern: KPattern): { index: number; rotation: number } | null {
    return findMatchingOLLMask(patternToFacelets(currentPattern));
}

// Track the current solve mode globally
let solveMode: "standard" | "ollTrainer" = "standard";

// Listen for solve mode changes from the UI and reset state accordingly
window.addEventListener('solveModeChanged', (e: Event) => {
    const customEvent = e as CustomEvent;
    const mode = customEvent.detail.mode;
    if (mode === "oll") {
        solveMode = "ollTrainer";
        // Reset solve state for OLL Trainer mode
        solveState = "solved";
        resetSolve();
        // Optionally, hide/show UI elements here if needed
    } else {
        solveMode = "standard";
        // Reset solve state for Timed Solve mode
        solveState = "solved";
        resetSolve();
        // Optionally, hide/show UI elements here if needed
    }
});

// Create a new TwistyPlayer instance
const OllTwisty = new TwistyPlayer({
    experimentalSetupAnchor: "end",
    puzzle: "3x3x3",
});

// Append the player to the container
const ollTwistyContainer = document.getElementById('oll-twisty-container');
if (ollTwistyContainer) {
    ollTwistyContainer.innerHTML = "";
    ollTwistyContainer.appendChild(OllTwisty);
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

        // Handle logic based on the solve mode
        if (solveMode === "standard") {
            handleStandardSolveMode(currentPattern);
        } else if (solveMode === "ollTrainer") {
            handleOLLTrainerMode(currentPattern);
        }

    }
}

function handleStandardSolveMode(currentPattern: KPattern) {
    if (solveState === "solved") {
        console.log("Scrambling started...");
        solveState = "scrambling";
        lastMoves = [];
        return;
    }

    if (solveState === "scrambling") {
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
        }

        inactivityTimer = setTimeout(() =>
        {
            if (lastMoves.length >= MIN_SCRAMBLE_MOVES) {
                console.log("Scrambling complete. Ready for the next solve.");
                solveState = "readyToSolve";
            }
        }, 1500); // 1.5 seconds of inactivity

        return; // Do not check checkpoints during scrambling
    }

    if (solveState === "readyToSolve") {
        console.log("Solve started!");
        solveState = "solving";
        solveStartTime = now();
    }


    if (solveState === "solving") 
    {
        const whiteCrossSolved = UTILS.isWhiteCrossSolved(currentPattern);

        if (whiteCrossSolved && !isWhiteCrossCompleted)
        {
            crossCompletionTime = now();
            console.log(`White cross solved in ${(crossCompletionTime - (solveStartTime || 0)) / 1000}s`);
            isWhiteCrossCompleted = true;
        }

        if (isWhiteCrossCompleted)
        {
            const f2lSolved = UTILS.isF2LSolved(currentPattern);

            if (f2lSolved && !isF2LCompleted)
            {
                f2lCompletionTime = now();
                console.log(`F2L solved in ${(f2lCompletionTime - (crossCompletionTime || 0)) / 1000}s`);
                isF2LCompleted = true;
            }

            if (isF2LCompleted)
            {
                const ollMask = detectOLLMask(currentPattern);
                if (ollMask) {
                    const { index: ollNumber, rotation } = ollMask;
                    console.log(`OLL Case #${ollNumber} detected with rotation ${rotation}`);
                    const ollAlgorithm = getOLLAlgorithm(ollNumber, rotation);
                    if (ollAlgorithm) {
                        console.log(`OLL Algorithm: ${ollAlgorithm.original}`);
                        OllTwisty.alg = ollAlgorithm.original;
                        updateOLLAlgorithmDisplay(ollNumber, rotation, ollAlgorithm.original, ollAlgorithm.nicknamed);
                    }
                }

                const ollSolved = UTILS.isOLLSolved(currentPattern);
                if (ollSolved && !isOLLCompleted)
                {
                    ollCompletionTime = now();
                    console.log(`OLL solved in ${(ollCompletionTime - (f2lCompletionTime || 0)) / 1000}s`);
                    isOLLCompleted = true;
                }

                if (isOLLCompleted)
                {
                    const pllSolved = UTILS.isPLLSolved(currentPattern);
                    if (pllSolved && !isPLLCompleted) {
                        pllCompletionTime = now();
                        console.log(`PLL solved in ${(pllCompletionTime - (ollCompletionTime || 0)) / 1000}s`);
                        isPLLCompleted = true;

                        const totalSolveTime = (pllCompletionTime - (solveStartTime || 0)) / 1000;
                        console.log(`Solve completed in ${totalSolveTime}s`);

                        addSolveDetails({
                            totalTime: totalSolveTime,
                            crossTime: (crossCompletionTime! - solveStartTime!) / 1000,
                            f2lTime: (f2lCompletionTime! - crossCompletionTime!) / 1000,
                            ollTime: (ollCompletionTime! - f2lCompletionTime!) / 1000,
                            pllTime: (pllCompletionTime! - ollCompletionTime!) / 1000,
                        });

                        resetSolve();
                    }
                }
            }
        }
    }
}

function resetSolve()
{
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

async function handleOLLTrainerMode(currentPattern: KPattern) {
    const ollMask = detectOLLMask(currentPattern);

    if (ollMask) {
        const { index: ollNumber, rotation } = ollMask;
        console.log(`OLL Case #${ollNumber} detected with rotation ${rotation}`);

        const ollAlgorithm = getOLLAlgorithm(ollNumber, rotation);
        if (ollAlgorithm) {
            console.log(`OLL Algorithm: ${ollAlgorithm.original}`);
            OllTwisty.alg = ollAlgorithm.original;
            updateOLLAlgorithmDisplay(ollNumber, rotation, ollAlgorithm.original, ollAlgorithm.nicknamed);
        }
    }
}

function updateOLLAlgorithmDisplay(ollNumber: number, rotation: number, algorithm: string, nicknamed: string): void
{
    // Update the header with the OLL case number and rotation
    const ollAlgorithmHeader = document.querySelector('#ollAlgorithmContainer h3');
    if (ollAlgorithmHeader) {
        ollAlgorithmHeader.textContent = `OLL Algorithm (Case #${ollNumber}, Rotation: ${rotation})`;
    }

    // Update the rest of the content
    const ollAlgorithmContainer = document.getElementById('ollAlgorithm');
    if (!ollAlgorithmContainer) return;

    ollAlgorithmContainer.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 20px;">
            <div>
                <h4>Original</h4>
                <p>${algorithm}</p>
                <h4>Nicknamed</h4>
                <p>${nicknamed}</p>
            </div>
        </div>
    `;
}
