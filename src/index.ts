import './style.css'
import $ from 'jquery';
import { TwistyPlayer } from 'cubing/twisty';
import * as UTILS from './utils';
import { handleCubeEvent, resetGyroBasis } from './handlers/cubeEventHandlers';
import { SOLVED_STATE } from './handlers/cubeEventHandlers';
import * as THREE from 'three';
import
    {
        connectGanCube,
        GanCubeConnection,
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

var cubeQuaternion: THREE.Quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(30 * Math.PI / 180, -30 * Math.PI / 180, 0));

async function animateCubeOrientation()
{
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

$('#reset-state').on('click', async () =>
{
    await conn?.sendCubeCommand({ type: "REQUEST_FACELETS" });
});

$('#reset-gyro').on('click', async () =>
{
    // Call a function to reset basis in cubeEventHandlers.ts
    resetGyroBasis();
});

// Set default MAC on page load if not present
const DEFAULT_MAC = "AB:12:34:62:A2:02";
const userMacInput = $('#userMacInput');
const macDisplay = $('#deviceMAC');

// Don't prefill userMacInput; let it be empty unless user enters something

const customMacAddressProvider: MacAddressProvider = async (): Promise<string | null> => {
    let mac = (userMacInput.val() as string)?.trim();
    if (!mac) mac = DEFAULT_MAC;
    localStorage.setItem('cubeMac', mac); // Optionally remember last used MAC
    return mac;
};

$('#connect').on('click', async () =>
{
    if (conn) {
        conn.disconnect();
        conn = null;
    } else {
        // You need a BluetoothDevice to call customMacAddressProvider, so use connectGanCube with the provider directly
        conn = await connectGanCube(customMacAddressProvider);
        conn.events$.subscribe((event) =>
            handleCubeEvent(event, twistyPlayer, cubeQuaternion)
        );
        await conn.sendCubeCommand({ type: "REQUEST_HARDWARE" });
        await conn.sendCubeCommand({ type: "REQUEST_FACELETS" });
        await conn.sendCubeCommand({ type: "REQUEST_BATTERY" });
        $('#deviceName').val(conn.deviceName);
        macDisplay.val(conn.deviceMAC); // Show the actual connected MAC
        $('#connect').html('Disconnect');
    }
});

twistyPlayer.experimentalModel.currentPattern.addFreshListener(async (kpattern) =>
{
    var facelets = UTILS.patternToFacelets(kpattern);
    if (facelets == SOLVED_STATE) {
        twistyPlayer.alg = '';
    }
});