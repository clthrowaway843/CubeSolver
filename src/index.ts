import './style.css'
import $ from 'jquery';
import { TwistyPlayer } from 'cubing/twisty';
import * as UTILS from './utils';
import { handleCubeEvent } from './handlers/cubeEventHandlers';
import { SOLVED_STATE } from './handlers/cubeEventHandlers';
import * as THREE from 'three';
import {
    connectGanCube,
    GanCubeConnection,
    GanCubeMove,
    MacAddressProvider
} from 'gan-web-bluetooth';


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


var twistyScene: THREE.Scene;
var twistyVantage: any;

var basis: THREE.Quaternion | null;
var cubeQuaternion: THREE.Quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(30 * Math.PI / 180, -30 * Math.PI / 180, 0));

async function animateCubeOrientation() {
  if (!twistyScene || !twistyVantage) {
    var vantageList = await twistyPlayer.experimentalCurrentVantages();
    twistyVantage = [...vantageList][0];
    twistyScene = await twistyVantage.scene.scene();
  }
  twistyScene.quaternion.slerp(cubeQuaternion, 0.25);
  twistyVantage.render();
  requestAnimationFrame(animateCubeOrientation);
}

requestAnimationFrame(animateCubeOrientation);

$('#reset-state').on('click', async () => {
  await conn?.sendCubeCommand({ type: "REQUEST_RESET" });
  twistyPlayer.alg = '';
});

$('#reset-gyro').on('click', async () => {
  basis = null;
});

const customMacAddressProvider: MacAddressProvider = async (): Promise<string | null> => {
    return "AB:12:34:62:A2:02"; // Always return the constant MAC address
};

$('#connect').on('click', async () => {
  if (conn) {
    conn.disconnect();
    conn = null;
  } else {
      conn = await connectGanCube(customMacAddressProvider);
      conn.events$.subscribe((event) =>
          handleCubeEvent(event, twistyPlayer, basis, cubeQuaternion)
      );
    await conn.sendCubeCommand({ type: "REQUEST_HARDWARE" });
    await conn.sendCubeCommand({ type: "REQUEST_FACELETS" });
    await conn.sendCubeCommand({ type: "REQUEST_BATTERY" });
    $('#deviceName').val(conn.deviceName);
    $('#deviceMAC').val(conn.deviceMAC);
    $('#connect').html('Disconnect');
  }
});

twistyPlayer.experimentalModel.currentPattern.addFreshListener(async (kpattern) => {
    var facelets = UTILS.patternToFacelets(kpattern);
  if (facelets == SOLVED_STATE) {
    twistyPlayer.alg = '';
  }
});