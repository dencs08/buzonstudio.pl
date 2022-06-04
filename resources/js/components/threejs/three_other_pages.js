import gsap from 'gsap'

import * as THREE from 'three'

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import Stats from 'three/examples/jsm/libs/stats.module'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

// ***
// *** MAIN PROPERITES
// ***

import {
    animateParticles, enviroParticles, bisonHeadLoad, fpsChecker, cameraInit, cameraMove, sceneInit, navCameraPos, rendererInit,
    bisonHead, isFpsReadyToCheck, isNavOpened, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject, avgFps, renderer, canvas
} from './threeJsClasses.js';

//Objects
let scene, stats, controls, clock;

//Loaders
// const gltfLoader = new GLTFLoader()
// let tl = gsap.timeline()
// const gui = new GUI()

clock = new THREE.Clock();

var mouse = { x: 0, y: 0 };
var mousePos;

const materials = [], objects = [];

const postprocessing = {};

let readyToMove = false;
let readyToRotate = false;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let width = window.innerWidth;
let height = window.innerHeight;
function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();

    //!Inits
    cameraInit(scene, width, height)
    rendererInit(width, height)
    sceneInit(0, 8, scene)
    lightsInit()
    container.appendChild(renderer.domElement);

    //! Controls
    // controls = new OrbitControls(camera, renderer.domElement)
    // stats = new Stats();
    // container.appendChild(stats.dom);
    container.style.touchAction = 'none';
    window.addEventListener('resize', onWindowResize);
    // container.addEventListener('pointermove', onPointerMove);
    // document.addEventListener('pointermove', render);

    loadModels()
    enviroParticles(3000, 3, -10, 2.5, -10, -3, 6, scene)
    initPostprocessing();

    setTimeout(() => {
        readyToMove = true
        readyToRotate = true
        isFpsReadyToCheck.set = true
    }, 100);
}

document.onmousemove = onPointerMove;
function onPointerMove(event) {
    if (event.isPrimary === false) return;

    // event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    var mouseScreenVector = new THREE.Vector3(-mouse.x * 2, -mouse.y + 1.5, 3);
    mousePos = mouseScreenVector;

    mouseInteractivity()
}

function mouseInteractivity() {
    if (readyToRotate == true) {
        cameraTargetPos.position.copy(mousePos)
    }
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    width = window.innerWidth;
    height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    postprocessing.composer.setSize(width, height);
}

let composer, afterimagePass;
function initPostprocessing() {
    const renderPass = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);

    postprocessing.composer = composer;
    composer.addPass(renderPass)
    // postProcessingEnable()
}

function postProcessingEnable() {
    afterimagePass = new AfterimagePass();
    afterimagePass.uniforms["damp"].value = 0.5;

    composer.addPass(afterimagePass);
}

function postProcessingDisable() {
    composer.removePass(afterimagePass);
}

function lightsInit() {
    let lightProbe;
    let directionalLight;

    const lightParam = {
        lightProbeIntensity: 3,
        directionalLightIntensity: 3,
        envMapIntensity: 2
    };

    lightProbe = new THREE.LightProbe();
    scene.add(lightProbe);

    directionalLight = new THREE.DirectionalLight(0xffffff, lightParam.directionalLightIntensity);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
}

function render() {
    // renderer.render(scene, camera)
    postprocessing.composer.render(0.1);
}

var delta;
function animate(time) {
    delta = clock.getDelta();
    time *= 0.001;

    requestAnimationFrame(animate, renderer.domElement);

    // stats.begin();
    render();
    // stats.end();

    cameraMove(delta, readyToMove)
    animateParticles(time, locoScrollPosValue, scene)
    // fpsChecker()

    // console.log(renderer.info.render)
}

function loadModels() {
    let bisonHeadPos = new THREE.Vector3(0, 0, -2.25)

    bisonHeadLoad(0.8, bisonHeadPos, scene)
}

init()
animate()

//other stuff
let navCameraPosValue = new THREE.Vector3(0, 0, 1.5)
const navBurger = document.getElementById("nav-burger")
navBurger.addEventListener("click", function () {
    navCameraPos(navCameraPosValue, cameraTargetVector3);
});
