import gsap from 'gsap'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';

import Stats from 'three/examples/jsm/libs/stats.module'

// ***
// *** MAIN PROPERITES
// ***

const cameraParams = {
    renderDistanceMin: 0.1,
    renderDistanceMax: 15,
    fov: 60,
}

const fogParams = {
    density: 0.2,
}

//Objects
let camera, cameraTargetLookAt, cameraTargetLookAtVector3, cameraTargetPos, scene, renderer, stats, controls, clock, cameraTargetVector3, cursorObject, cursorPosVector3, cursorPosObject;

//Loaders
const gltfLoader = new GLTFLoader()

let tl = gsap.timeline()

const gui = new GUI()

const canvas = document.querySelector('#web_gl')

clock = new THREE.Clock();

let mouseX = 0, mouseY = 0;
var mouse = { x: 0, y: 0 };
var mousePos;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let width = window.innerWidth;
let height = window.innerHeight;

const materials = [], objects = [];

const postprocessing = {};

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();

    //!Inits
    cameraInit()
    rendererInit()
    sceneInit()
    lightsInit()
    container.appendChild(renderer.domElement);

    //! Controls
    // controls = new OrbitControls(camera, renderer.domElement)
    stats = new Stats();
    container.appendChild(stats.dom);
    container.style.touchAction = 'none';
    window.addEventListener('resize', onWindowResize);
    // container.addEventListener('pointermove', onPointerMove);
    // document.addEventListener('pointermove', render);

    loadModels()
    enviroParticles()
    initPostprocessing();

    setTimeout(() => {
        readyToMove = true
        readyToRotate = true
        isFpsReadyToCheck = true
    }, 100);
}

document.onmousemove = onPointerMove;
function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.pageX - windowHalfX;
    mouseY = event.pageY - windowHalfY;

    // event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    var mouseScreenVector = new THREE.Vector3(-mouse.x * 2, -mouse.y + 1.5, 5);
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

let composer, shaderVignette, effectVignette, afterimagePass;
function initPostprocessing() {
    const renderPass = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);

    postprocessing.composer = composer;
    composer.addPass(renderPass)
    postProcessingEnable()
}

function postProcessingEnable() {
    afterimagePass = new AfterimagePass();
    afterimagePass.uniforms["damp"].value = 0.875;

    shaderVignette = VignetteShader;
    effectVignette = new ShaderPass(shaderVignette);
    effectVignette.uniforms["offset"].value = 0.4;
    effectVignette.uniforms["darkness"].value = 2.0;

    composer.addPass(afterimagePass);
    composer.addPass(effectVignette);
}

function postProcessingDisable() {
    composer.removePass(afterimagePass);
    composer.removePass(effectVignette);
}

function cameraInit() {
    const cameraTargetGeo = new THREE.SphereBufferGeometry(1, 32, 16)
    const invisibleMat = new THREE.MeshPhysicalMaterial({
        transmission: 0.0,
    })

    camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
    cameraTargetVector3 = new THREE.Vector3(0, 1, 5)
    camera.position.copy(cameraTargetVector3)
    camera.rotation.set(0, 0, 0)

    cameraTargetPos = new THREE.Mesh(cameraTargetGeo, invisibleMat)
    cameraTargetPos.position.copy(cameraTargetVector3)
    scene.add(cameraTargetPos)
    cameraTargetPos.material.opacity = 0;
    cameraTargetPos.material.transparent = true;
    cameraTargetPos.transparent = true;

    cameraTargetLookAtVector3 = new THREE.Vector3(0, 3, -4)
    cameraTargetLookAt = new THREE.Mesh(cameraTargetGeo, invisibleMat)
    cameraTargetLookAt.position.copy(cameraTargetLookAtVector3)
    scene.add(cameraTargetLookAt)
    cameraTargetLookAt.material.opacity = 0;
    cameraTargetLookAt.material.transparent = true;
    cameraTargetLookAt.transparent = true;

    cursorPosVector3 = new THREE.Vector3(0, 2, -4)
    cursorObject = new THREE.Mesh(cameraTargetGeo, invisibleMat)
    cursorObject.position.copy(cursorPosVector3)
    scene.add(cursorObject)
    cursorObject.scale.set(0.1, 0.1, 0.1)
    cursorObject.material.opacity = 0;
    cursorObject.material.transparent = true;
    cursorObject.transparent = true;
}

let pixelRatio = window.devicePixelRatio
let AA = true
if (pixelRatio > 1) {
    AA = false
}

function rendererInit() {
    renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
        canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
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

function sceneInit() {
    scene.fog = new THREE.FogExp2(0x111111, fogParams.density)
    scene.background = new THREE.Color(0x111111);
}

function render() {
    // renderer.render(scene, camera)
    postprocessing.composer.render(0.1);
}

var isFpsReadyToCheck = false;
var fpsChecked = false;
var lastLoop = new Date();
var thisLoop, fps, lastLoop, avgFps, delta;
var fpsArray = [];
let pushNumber = 0;
let readyToMove = false;
let readyToRotate = false;
function animate(time) {
    delta = clock.getDelta();
    time *= 0.001;

    requestAnimationFrame(animate, renderer.domElement);

    stats.begin();
    render();
    stats.end();

    cameraMove(delta)
    animateParticles(time)
    fpsChecker()

    // console.log(renderer.info.render)
}

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    fpsChecked = true;
    return summ / ArrayLen;
}

function fpsChecker() {
    thisLoop = new Date()
    fps = 1000 / (thisLoop - lastLoop)
    lastLoop = thisLoop

    if (isFpsReadyToCheck == true && fpsChecked == false) {
        if (sessionStorage.noFirstVisit == "1") {
            isFpsReadyToCheck = false;
            setTimeout(() => {
                if (pushNumber < 100) {
                    fpsArray.push(fps);
                    pushNumber++;
                }
                avgFps = ArrayAvg(fpsArray);
                // console.log(canvas.width)
                console.log(avgFps)
                if (avgFps < 25) {
                    postProcessingDisable()
                }
            }, 3250);
        }
    }
}

function cameraMove(delta) {
    let alpha = 0
    alpha += delta * 2;
    if (readyToMove == true) {
        camera.position.lerp(cameraTargetPos.position, alpha);
        camera.lookAt(cameraTargetLookAt.position)
    }
}

let cameraPosi = 0;
function navCameraPos() {
    if (cameraPosi % 2 == 0) {
        readyToRotate = false;
        cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.x, cameraTargetPos.position.z - 2);
    } else {
        readyToRotate = true;
        // cameraTargetPos.position.copy(cameraTargetVector3);
    }
    cameraPosi++
}

var url = new URL("../", document.baseURI).href
function loadModels() {
    bisonHeadLoad()
}

let bisonHead, bisonHeadMaterialParam, bisonHeadMaterial;
function bisonHeadLoad() {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        bisonHeadMaterialParam = {
            color: 0x00ffff,
            metalness: 0.9,
            roughness: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 0,
            // normalMap: texture,
            // normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        }

        bisonHeadMaterial = new THREE.MeshPhysicalMaterial(bisonHeadMaterialParam)

        gltfLoader.load(url + "3d/models/bison_head.glb", (glb) => {
            bisonHead = glb.scene
            bisonHead.traverse((o) => {
                if (o.isMesh) o.material = bisonHeadMaterial;
            });
            scene.add(bisonHead)
            // bisonHead.scale.set(0.75, 0.75, 0.75)
            bisonHead.position.set(0, 0, -1.5)
        })
    });
}

let particleGeo, particleVerts, sprite, particleMat, particles;
function enviroParticles() {
    particleGeo = new THREE.BufferGeometry();
    particleVerts = [];

    sprite = new THREE.TextureLoader().load(url + '3d/textures/particle.png');

    for (let i = 0; i < 3000; i++) {

        const x = Math.random() * (3 - (-10) + 1) + -(10);
        const y = Math.random() * (2.5 - (-10) + 1) + -(10);
        const z = Math.random() * (1 - 5 + 1) + 5;

        particleVerts.push(x, y, z);
    }

    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particleVerts, 3));
    particleMat = new THREE.PointsMaterial({ size: 0.01, sizeAttenuation: true, map: sprite, alphaTest: 0.1, transparent: true });
    particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
}

function animateParticles(time) {
    for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
            object.position.y = locoScrollPosValue / 1000;
            object.rotation.z = (time / 100) * (i < 4 ? i + 1 : - (i + 1));
        }
    }
}

function threeJsDNone() {
    clearThree(scene)
    postProcessingDisable()
}

function clearThree(obj) {
    while (obj.children.length > 0) {
        clearThree(obj.children[0])
        obj.remove(obj.children[0]);
    }
    if (obj.geometry) obj.geometry.dispose()

    if (obj.material) {
        Object.keys(obj.material).forEach(prop => {
            if (!obj.material[prop])
                return
            if (obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')
                obj.material[prop].dispose()
        })
        obj.material.dispose()
    }
    renderer.dispose()
    renderer.domElement = null;
    scene = null;
    camera = null;
    canvas.style.display = "none"
}

init()
animate()

//other stuff
const navBurger = document.getElementById("nav-burger")
navBurger.addEventListener("click", navCameraPos);