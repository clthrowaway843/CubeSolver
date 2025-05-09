import './style.css'
import $ from 'jquery';
import { Subscription, interval } from 'rxjs';
import { TwistyPlayer } from 'cubing/twisty';
import { experimentalSolve3x3x3IgnoringCenters } from 'cubing/search';
import { KPattern, KPatternData, KPuzzle } from 'cubing/kpuzzle';
import Chart from 'chart.js/auto';

import * as THREE from 'three';

import {
  now,
  connectGanCube,
  GanCubeConnection,
  GanCubeEvent,
  GanCubeMove,
  MacAddressProvider,
  makeTimeFromTimestamp,
  cubeTimestampCalcSkew,
  cubeTimestampLinearFit
} from 'gan-web-bluetooth';

import * as UTILS from './utils';

const SOLVED_STATE = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";

var twistyPlayer = new TwistyPlayer({
  puzzle: '3x3x3',
  visualization: 'PG3D',
  alg: '',
  experimentalSetupAnchor: 'start',
  background: 'none',
  controlPanel: 'none',
  hintFacelets: 'none',
  experimentalDragInput: 'none',
  cameraLatitude: 0,
  cameraLongitude: 0,
  cameraLatitudeLimit: 0,
  tempoScale: 5
});

$('#cube').append(twistyPlayer);

var conn: GanCubeConnection | null;
var lastMoves: GanCubeMove[] = [];
var solutionMoves: GanCubeMove[] = [];

var twistyScene: THREE.Scene;
var twistyVantage: any;

const HOME_ORIENTATION = new THREE.Quaternion().setFromEuler(new THREE.Euler(15 * Math.PI / 180, -20 * Math.PI / 180, 0));
var cubeQuaternion: THREE.Quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(30 * Math.PI / 180, -30 * Math.PI / 180, 0));

async function amimateCubeOrientation() {
  if (!twistyScene || !twistyVantage) {
    var vantageList = await twistyPlayer.experimentalCurrentVantages();
    twistyVantage = [...vantageList][0];
    twistyScene = await twistyVantage.scene.scene();
  }
  twistyScene.quaternion.slerp(cubeQuaternion, 0.25);
  twistyVantage.render();
  requestAnimationFrame(amimateCubeOrientation);
}
requestAnimationFrame(amimateCubeOrientation);

var basis: THREE.Quaternion | null;

async function handleGyroEvent(event: GanCubeEvent) {
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

async function handleMoveEvent(event: GanCubeEvent) {
    if (event.type == "MOVE") {
    if (timerState == "READY") {
      setTimerState("RUNNING");
        }

    twistyPlayer.experimentalAddMove(event.move, { cancel: false });
        lastMoves.push(event);

    if (timerState == "RUNNING") {
      solutionMoves.push(event);
        }

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
        const whiteCrossSolved = UTILS.isWhiteCrossSolved(currentPattern);

        if (whiteCrossSolved && !isWhiteCrossCompleted) {
            crossCompletionTime = now(); // Record the time when the cross is completed
            console.log(`White cross is solved! Time: ${(crossCompletionTime - (solveStartTime || 0)) / 1000}s`);
            isWhiteCrossCompleted = true;
        }

        // Check if F2L is complete
        if (isWhiteCrossCompleted) {
            const f2lSolved = UTILS.isF2LSolved(currentPattern);
            if (f2lSolved && !isF2LCompleted) {
                f2lCompletionTime = now(); // Record the time when F2L is completed
                console.log(`F2L is solved! Time: ${(f2lCompletionTime - (crossCompletionTime || 0)) / 1000}s`);
                isF2LCompleted = true;
            }

            if (!isF2LCompleted) {
                const f2lPairs = UTILS.findF2LPairs(currentPattern);
                //console.log("F2L Pairs:", f2lPairs);
            }

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
                        
                        solveDetailsHistory.push({
                            totalTime: totalSolveTime,
                            crossTime: (crossCompletionTime! - solveStartTime!) / 1000,
                            f2lTime: (f2lCompletionTime! - crossCompletionTime!) / 1000,
                            ollTime: (ollCompletionTime! - f2lCompletionTime!) / 1000,
                            pllTime: (pllCompletionTime! - ollCompletionTime!) / 1000,
                        });

                        // Keep only the 5 most recent solves
                        if (solveDetailsHistory.length > 5) {
                            solveDetailsHistory.shift();
                        }

                        // Print the 5 most recent solve times
                        console.log("Last 5 solve times:");
                        solveDetailsHistory.forEach((solve, index) => {
                            console.log(`Solve ${index + 1}: ${solve.totalTime}s`);
                        });

                        // Calculate the average of the 5 most recent solves
                        const averageSolveTime =
                            solveDetailsHistory.reduce((sum, solve) => sum + solve.totalTime, 0) /
                            solveDetailsHistory.length;
                        console.log(`Average of the last 5 solves: ${averageSolveTime}s`);
                        onSolveComplete();

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

var cubeStateInitialized = false;

async function handleFaceletsEvent(event: GanCubeEvent) {
  if (event.type == "FACELETS" && !cubeStateInitialized) {
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

function handleCubeEvent(event: GanCubeEvent) {
  //if (event.type != "GYRO")
    //console.log("GanCubeEvent", event);
  if (event.type == "GYRO") {
    handleGyroEvent(event);
  } else if (event.type == "MOVE") {
    handleMoveEvent(event);
  } else if (event.type == "FACELETS") {
    handleFaceletsEvent(event);
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

const CUBE_MAC_ADDRESS = "AB:12:34:62:A2:02"; // Replace with your cube's MAC address

const customMacAddressProvider: MacAddressProvider = async (device, isFallbackCall): Promise<string | null> => {
    return CUBE_MAC_ADDRESS; // Always return the constant MAC address
};
/*const customMacAddressProvider: MacAddressProvider = async (device, isFallbackCall): Promise<string | null> => {
  if (isFallbackCall) {
    return prompt('Unable do determine cube MAC address!\nPlease enter MAC address manually:');
  } else {
    return typeof device.watchAdvertisements == 'function' ? null :
      prompt('Seems like your browser does not support Web Bluetooth watchAdvertisements() API. Enable following flag in Chrome:\n\nchrome://flags/#enable-experimental-web-platform-features\n\nor enter cube MAC address manually:');
  }
};*/

$('#reset-state').on('click', async () => {
  await conn?.sendCubeCommand({ type: "REQUEST_RESET" });
  twistyPlayer.alg = '';
});

$('#reset-gyro').on('click', async () => {
  basis = null;
});

$('#connect').on('click', async () => {
  if (conn) {
    conn.disconnect();
    conn = null;
  } else {
    conn = await connectGanCube(customMacAddressProvider);
    conn.events$.subscribe(handleCubeEvent);
    await conn.sendCubeCommand({ type: "REQUEST_HARDWARE" });
    await conn.sendCubeCommand({ type: "REQUEST_FACELETS" });
    await conn.sendCubeCommand({ type: "REQUEST_BATTERY" });
    $('#deviceName').val(conn.deviceName);
    $('#deviceMAC').val(conn.deviceMAC);
    $('#connect').html('Disconnect');
  }
});

var timerState: "IDLE" | "READY" | "RUNNING" | "STOPPED" = "IDLE";

function setTimerState(state: typeof timerState) {
  timerState = state;
  switch (state) {
    case "IDLE":
      stopLocalTimer();
      $('#timer').hide();
      break;
    case 'READY':
      setTimerValue(0);
      $('#timer').show();
      $('#timer').css('color', '#0f0');
      break;
    case 'RUNNING':
      solutionMoves = [];
      startLocalTimer();
      $('#timer').css('color', '#999');
      break;
    case 'STOPPED':
      stopLocalTimer();
      $('#timer').css('color', '#fff');
      var fittedMoves = cubeTimestampLinearFit(solutionMoves);
      var lastMove = fittedMoves.slice(-1).pop();
      setTimerValue(lastMove ? lastMove.cubeTimestamp! : 0);
      break;
  }
}

twistyPlayer.experimentalModel.currentPattern.addFreshListener(async (kpattern) => {
    var facelets = UTILS.patternToFacelets(kpattern);
  if (facelets == SOLVED_STATE) {
    if (timerState == "RUNNING") {
      setTimerState("STOPPED");
    }
    twistyPlayer.alg = '';
  }
});

function setTimerValue(timestamp: number) {
  let t = makeTimeFromTimestamp(timestamp);
  $('#timer').html(`${t.minutes}:${t.seconds.toString(10).padStart(2, '0')}.${t.milliseconds.toString(10).padStart(3, '0')}`);
}

var localTimer: Subscription | null = null;
function startLocalTimer() {
  var startTime = now();
  localTimer = interval(30).subscribe(() => {
    setTimerValue(now() - startTime);
  });
}

function stopLocalTimer() {
  localTimer?.unsubscribe();
  localTimer = null;
}

function activateTimer() {
  if (timerState == "IDLE" && conn) {
    setTimerState("READY");
  } else {
    setTimerState("IDLE");
  }
}

$(document).on('keydown', (event) => {
  if (event.which == 32) {
    event.preventDefault();
    activateTimer();
  }
});

$("#cube").on('touchstart', () => {
  activateTimer();
});

function printPieceInfo(pattern: KPattern, orbit: "CORNERS" | "EDGES" | "CENTERS", pieceIndices: number[]): void {
    console.log(`Orbit: ${orbit}`);
    pieceIndices.forEach((index) => {
        const position = pattern.patternData[orbit].pieces[index];
        const orientation = pattern.patternData[orbit].orientation[index];
        console.log(`Piece ${index}: Position = ${position}, Orientation = ${orientation}`);
    });
}
interface SolveDetails {
    totalTime: number;
    crossTime: number;
    f2lTime: number;
    ollTime: number;
    pllTime: number;
}

const solveDetailsHistory: SolveDetails[] = [];

function updateSolveTimesUI() {
    const tableBody = document.querySelector('#solve-times-table tbody')!;
    tableBody.innerHTML = ''; // Clear existing rows

    solveDetailsHistory.forEach((solve, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${solve.totalTime.toFixed(2)}s</td>
            <td>${solve.crossTime.toFixed(2)}s</td>
            <td>${solve.f2lTime.toFixed(2)}s</td>
            <td>${solve.ollTime.toFixed(2)}s</td>
            <td>${solve.pllTime.toFixed(2)}s</td>
        `;
        tableBody.appendChild(row);
    });
}

let crossGraphChart: Chart | null = null;
let f2lGraphChart: Chart | null = null;
let ollGraphChart: Chart | null = null;
let pllGraphChart: Chart | null = null;
function updateGraphs() {
    const labels = solveDetailsHistory.map((_, index) => `Solve ${index + 1}`);
    const crossTimes = solveDetailsHistory.map((solve) => solve.crossTime);
    const f2lTimes = solveDetailsHistory.map((solve) => solve.f2lTime);
    const ollTimes = solveDetailsHistory.map((solve) => solve.ollTime);
    const pllTimes = solveDetailsHistory.map((solve) => solve.pllTime);

    const createGraph = (ctx: string, label: string, data: number[], chartInstance: Chart | null): Chart => {
        // Destroy the existing chart instance if it exists
        if (chartInstance) {
            chartInstance.destroy();
        }

        return new Chart(document.getElementById(ctx) as HTMLCanvasElement, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label,
                        data: data.map((time) => time / 1000), // Convert to seconds
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                },
                scales: {
                    y: { beginAtZero: true },
                },
            },
        });
    };

    // Update each graph and store the new chart instance
    crossGraphChart = createGraph('cross-graph', 'Cross Times', crossTimes, crossGraphChart);
    f2lGraphChart = createGraph('f2l-graph', 'F2L Times', f2lTimes, f2lGraphChart);
    ollGraphChart = createGraph('oll-graph', 'OLL Times', ollTimes, ollGraphChart);
    pllGraphChart = createGraph('pll-graph', 'PLL Times', pllTimes, pllGraphChart);
}

// Call these functions after each solve
function onSolveComplete() {
    updateSolveTimesUI();
    updateGraphs();
}