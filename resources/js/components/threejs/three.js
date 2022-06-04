import gsap from 'gsap'

import * as THREE from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import Stats from 'three/examples/jsm/libs/stats.module'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'

import {
    animateParticles, enviroParticles, balloonLoadSpecial, handsLoad, coinsLoad, bisonHeadLoad, fpsChecker, cameraInit, cameraMove, sceneInit, navCameraPos, rendererInit,
    bisonHead, coinsArr, ballonsArr, handsArr, balloonModel, balloonLoad, isFpsReadyToCheck, isNavOpened, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject, avgFps, renderer, canvas
} from './threeJsClasses.js';

//Objects
let scene, stats, controls, clock, iResolutionMultiplierValue;

//Shaders
let uniforms

clock = new THREE.Clock();

var mouse = { x: 0, y: 0 };
var mousePos;

const postprocessing = {};

let fragmentTexture;
let wallGeo, wallMat, wall;

let readyToMove = false;
let readyToRotate = false;

// const textureLoader = new THREE.TextureLoader()
// const materials = [], objects = [];
// let tl = gsap.timeline()
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
    sceneInit(1, 8, scene)
    lightsInit()
    container.appendChild(renderer.domElement);

    //! Controls
    // controls = new OrbitControls(camera, renderer.domElement)
    // stats = new Stats();
    // container.appendChild(stats.dom);
    container.style.touchAction = 'none';
    container.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onWindowResize);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        iResolutionMultiplierValue = (canvas.width / 1000) + (canvas.width / 1000);
        // iResolutionMultiplierValue = 5.0;
    } else {
        iResolutionMultiplierValue = (canvas.width / 2000);
    }

    loadModels()
    enviroParticles(40000, 7.5, -7.5, -7.5, 7.5, 10, 90, scene)
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

    var mouseScreenVector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    mouseScreenVector.unproject(camera);
    var dir = mouseScreenVector.sub(camera.position).normalize();
    mousePos = camera.position.clone().add(dir.multiplyScalar(4));

    mouseInteractivity()
}

function mouseInteractivity() {
    cursorObject.position.copy(mousePos);
    cursorObject.position.z = camera.position.z

    cameraTargetPos.position.set((mousePos.x / 10), 2 + (mousePos.y / 10), cameraTargetPos.position.z)
}

let composer, effectVignette, afterimagePass, renderPass;
function initPostprocessing() {
    renderPass = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);

    composer.addPass(renderPass)

    postprocessing.composer = composer;
}

function postProcessingEnable() {
    afterimagePass = new AfterimagePass();
    afterimagePass.uniforms["damp"].value = 0.5;
    composer.addPass(afterimagePass);
}

function postProcessingDisable() {
    composer.removePass(afterimagePass)
    composer.removePass(effectVignette)
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

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    width = window.innerWidth;
    height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    postprocessing.composer.setSize(width, height);

    itemsResponsive()
}

//!phone interactions
// window.addEventListener('deviceorientation', handleOrientation);
// function handleOrientation(event) {
//     const alpha = event.alpha;
//     const beta = event.beta;
//     const gamma = event.gamma;

//     // bisonHead.rotation.x = Math.min(Math.max(beta / 100, -1), 1)
//     bisonHead.rotation.y = Math.min(Math.max(gamma / 20 + 5, 0), 50)
//     // bisonHead.rotation.z = Math.min(Math.max(alpha / 100, -1), 1)
// }

var delta;
function animate(time) {
    delta = clock.getDelta();
    time *= 0.001;

    uniforms.iTime.value = time;
    uniforms.iMouse.value.set(Math.abs(mouse.x), Math.abs(mouse.y), Math.abs(mouse.x), Math.abs(mouse.y));
    requestAnimationFrame(animate, renderer.domElement);

    // stats.begin();
    render();
    // stats.end();

    cameraMove(delta, readyToMove)
    cameraScrollPos()
    animateParticles(time, locoScrollPosValue, scene)
    // fpsChecker()

    for (let i = 0; i < ballonsArr.length; i++) {
        const balloon = ballonsArr[i];
        balloon.position.y = balloonPosY[i] + Math.sin(randomBalloonFloatPoint[i] + time) * 0.075;
    }

    for (let i = 0; i < handsArr.length; i++) {
        const hand = handsArr[i];
        hand.position.y = handPosY[i] + Math.sin(randomHandFloatPoint[i] + time) * 0.05;
    }

    for (let i = 0; i < coinsArr.length; i++) {
        const coin = coinsArr[i];
        coin.position.y = coinsPosYArr[i] + Math.sin(randomCoinFloatPoint[i] + time) * 0.05;
    }
}

function render() {
    postprocessing.composer.render(0.1);
    // renderer.render(scene, camera);
}

var postProcessingEnabled = false;
var scrollCamTl = new gsap.timeline()
function cameraRotateOnScroll() {
    scrollCamTl.to(cameraTargetLookAt.position, {
        duration: 3,
        ease: 'expo.out',
        x: cameraTargetLookAtVector3.x,
        y: cameraTargetLookAtVector3.y,
        z: cameraTargetLookAtVector3.z,
    })
}

function cameraScrollPos() {
    switch (startSectionIndex) {
        case 0:
            // if (postProcessingEnabled == true) {
            //     postProcessingEnabled = false;
            //     postProcessingDisable()
            // }
            gsap.to(wall.position, {
                duration: 3,
                ease: 'expo.out',
                x: 0,
                y: 2,
                z: -5
            })
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, cameraTargetVector3.z)
                // console.log(cameraTargetPos);
                // cameraTargetLookAtVector3.x = 0
                // cameraTargetLookAtVector3.y = 2
                // cameraTargetLookAtVector3.z = 0
                // cameraRotateOnScroll()
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, -2);
            }
            break;
        case 1:
            gsap.to(wall.position, {
                duration: 3,
                ease: 'expo.out',
                x: 0,
                y: 20,
                z: 0
            })
            // if (postProcessingEnabled == false) {
            //     postProcessingEnabled = true;
            //     if (avgFps > 30) {
            //         setTimeout(() => {
            //             postProcessingEnable()
            //         }, 500);
            //     }
            // }
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 15)
                // bisonHead.lookAt(cursorObject.position)

                // cameraTargetLookAtVector3.x = 90
                // cameraTargetLookAtVector3.y = 2
                // cameraTargetLookAtVector3.z = 0

                // cameraRotateOnScroll()
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 14);
            }

            break;
        case 2:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 30)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 29);
            }

            break;
        case 3:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 45)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 44);
            }

            break;
        case 4:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 60)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 59);
            }

            break;
        case 5:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 75)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 74);
            }

            break;
        case 6:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 90)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(cameraTargetPos.position.x, cameraTargetPos.position.y, 89);
            }
    }
}

let bisonHeadResponsivePosX, bisonHeadScaleResponsive, balloonResponsivePosX, balloonScaleResponsive, handResponsivePosX, handScaleResponsive, coinResponsivePosX, coinResponsivePosY, coinScaleResponsive
let isSmallScreen = false;
function itemsResponsive() {
    // bisonHeadResponsivePosX = Math.min(Math.max(2.5 - (1000 / width), 0), 3);
    // bisonHeadScaleResponsive = Math.min(Math.max((width / 1000), 0.5), 0.75)
    // bisonHead.position.set(bisonHeadResponsivePosX, bisonHead.position.y, bisonHead.position.z)
    // bisonHead.scale.set(bisonHeadScaleResponsive, bisonHeadScaleResponsive, bisonHeadScaleResponsive)

    if (width <= 767) {
        isSmallScreen = true;
    } else {
        isSmallScreen = false;
    }

    //(0.5, 1.35, 13.1)
    //(0.6, 1.35, 13)
    //(0.6, 1.35, 13.2)
    for (let i = 0; i < ballonsArr.length; i++) {
        const element = ballonsArr[i];
        if (isSmallScreen == true) {
            element.visible = false;
        } else {
            element.visible = true;
        }

        if (i == 0) {
            balloonResponsivePosX = Math.min(Math.max(1.25 - (1000 / width), 0.25), 2.25);
            element.position.set(balloonResponsivePosX, element.position.y, element.position.z)
            balloonScaleResponsive = Math.min(Math.max((width / 1000), 0.8), 1)
            element.scale.set(balloonScaleResponsive, balloonScaleResponsive, balloonScaleResponsive)
        } else if (i == 1) {
            balloonResponsivePosX = Math.min(Math.max(1.3 - (1000 / width), 0.25), 2);
            element.position.set(balloonResponsivePosX, element.position.y, element.position.z)
            balloonScaleResponsive = Math.min(Math.max((width / 750), 1), 1.25)
            element.scale.set(balloonScaleResponsive, balloonScaleResponsive, balloonScaleResponsive)
        } else {
            balloonResponsivePosX = Math.min(Math.max(1.35 - (1000 / width), 0.25), 1.75);
            element.position.set(balloonResponsivePosX, element.position.y, element.position.z)
            balloonScaleResponsive = Math.min(Math.max((width / 1000), 0.8), 1)
            element.scale.set(balloonScaleResponsive, balloonScaleResponsive, balloonScaleResponsive)
        }
    }

    //(-1.9, 1.65, 27)
    //(-1, 2.25, 27)
    for (let i = 0; i < handsArr.length; i++) {
        const element = handsArr[i];
        if (isSmallScreen == true) {
            element.visible = false;
        } else {
            element.visible = true;
        }

        if (i == 0) {
            handResponsivePosX = -Math.min(Math.max(2.55 - (1250 / width), 0), 4);
            element.position.set(handResponsivePosX, element.position.y, element.position.z)
        } else {
            handResponsivePosX = -Math.min(Math.max(1.75 - (1250 / width), 0), 4);
            element.position.set(handResponsivePosX, element.position.y, element.position.z)
        }
        handScaleResponsive = Math.min(Math.max((width / 1000), 0.35), 0.45)
        element.scale.set(handScaleResponsive, handScaleResponsive, handScaleResponsive)
    }

    //X
    //0.21, 0.49, 0.81,
    //0.19, 0.52, 0.78,
    //0.2, 0.5, 0.8

    //Y
    //2.31, 2.29, 2.32,
    //1.99, 2.01, 2.02,
    //1.69, 1.71, 1.69
    for (let i = 0; i < coinsArr.length; i++) {
        const element = coinsArr[i];
        if (isSmallScreen == true) {
            element.visible = false;
        } else {
            element.visible = true;
        }

        if (i == 0) {
            coinResponsivePosX = Math.min(Math.max(1 - (900 / width), 0.09), 0.18);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 2.15), 2.31);
        } else if (i == 1) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.15), 0.34);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 2.13), 2.29);
        } else if (i == 2) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.23), 0.56);
            // coinResponsivePosY = Math.min(Math.max(1.5 - (300 / width), 2.26), 2.32);
        } else if (i == 3) {
            coinResponsivePosX = Math.min(Math.max(1 - (900 / width), 0.15), 0.29);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.93), 1.99);
        } else if (i == 4) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.21), 0.43);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.95), 2.01);
        } else if (i == 5) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.23), 0.45);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.96), 2.02);
        } else if (i == 6) {
            coinResponsivePosX = Math.min(Math.max(1 - (900 / width), 0.06), 0.18);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.93), 1.69);
        } else if (i == 7) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.1), 0.23);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.65), 1.71);
        } else if (i == 8) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.2), 0.37);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.63), 1.69);
        } else if (i == 9) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.16), 0.30);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 2.13), 2.29);
        } else if (i == 10) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.21), 0.41);
            // coinResponsivePosY = Math.min(Math.max(1.5 - (300 / width), 2.26), 2.32);
        } else if (i == 11) {
            coinResponsivePosX = Math.min(Math.max(1 - (900 / width), 0.27), 0.53);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.93), 1.99);
        } else if (i == 12) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.29), 0.57);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.95), 2.01);
        } else if (i == 13) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.16), 0.30);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.96), 2.02);
        } else if (i == 14) {
            coinResponsivePosX = Math.min(Math.max(1 - (900 / width), 0.1), 0.18);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.93), 1.69);
        } else if (i == 15) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.18), 0.37);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.65), 1.71);
        } else if (i == 16) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.2), 0.41);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.63), 1.69);
        } else if (i == 17) {
            coinResponsivePosX = Math.min(Math.max(1 - (600 / width), 0.21), 0.51);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.65), 1.71);
        } else if (i == 18) {
            coinResponsivePosX = Math.min(Math.max(1 - (350 / width), 0.13), 0.25);
            // coinResponsivePosY = Math.min(Math.max(1 - (300 / width), 1.63), 1.69);
        }
        coinScaleResponsive = Math.min(Math.max((width / 3000), 0.1), 0.3)
        element.position.set(coinResponsivePosX, element.position.y, element.position.z)
        element.scale.set(coinScaleResponsive, coinScaleResponsive, coinScaleResponsive)
    }
}

let humanMaterial;
// let bisonHeadPos = new THREE.Vector3(0, 0, 85)

//rembember that it is only inital position - the poisition is going to auto change in itemsResponsive function
let balloonPosX = [
    0,
    0,
    0,
]

let balloonPosY = [
    1.35,
    1.35,
    1.35,
]

let balloonPosZ = [
    12.975,
    13,
    13.025,
]

let balloonRotX = [
    -1.1,
    -0.1,
    0,
]

let balloonRotY = [
    1.3,
    0.3,
    0,
]

let balloonRotZ = [
    1.35,
    -0.25,
    0,
]

let handsRot = new THREE.Vector3(2, 0, 0)
let handsRot2 = new THREE.Vector3(3, 0, 3)

let handPosX = [
    -1.9,
    -1
]

let handPosY = [
    1.6,
    2.2
]

let handPosZ = [
    27,
    27,
]

const coinsPosYArr = [
    2.65, 2.5, 2.45,
    2.43, 2.39, 2.33,
    2.28, 2.2, 2.24,
    2.18, 2.20, 2.15,
    1.99, 2.0, 1.95,
    1.76, 1.96, 1.86];

let randomBalloonFloatPoint = [0.25, 1.25, 0.8];
let randomHandFloatPoint = [0, 2.15];
let randomCoinFloatPoint = [];


function loadModels() {
    //! Human
    humanMaterial = new THREE.MeshStandardMaterial({
        color: 0x95ff00,
        emissive: 0x95ff00,
        emissiveIntensity: 100,
    })

    uniforms = {
        iTime: { value: 0.0 },
        iResolution: { value: new THREE.Vector3(1920, 1080, 1) },
        iMouse: { value: new THREE.Vector4() },
        iChannel0: { value: fragmentTexture },
        iResolutionMultiplier: { value: iResolutionMultiplierValue },
        fogColor: { type: "c", value: scene.fog.color },
        fogNear: { type: "f", value: 200 },
        fogFar: { type: "f", value: 500 }
    };

    wallGeo = new THREE.PlaneGeometry(21.5, 10)
    wallMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader(),
        fragmentShader: fragmentShaderPlasma2(),
    });

    wall = new THREE.Mesh(wallGeo, wallMat)
    scene.add(wall)
    wall.position.set(0, 2, -5)

    // iconsLoad()

    balloonLoad(1, balloonPosX, balloonPosY, balloonPosZ, balloonRotX, balloonRotY, balloonRotZ, scene)
    balloonLoadSpecial(1.25, balloonPosX, balloonPosY, balloonPosZ, balloonRotX, balloonRotY, balloonRotZ, scene)
    balloonLoad(1, balloonPosX, balloonPosY, balloonPosZ, balloonRotX, balloonRotY, balloonRotZ, scene)

    handsLoad(0.45, handPosX, handPosY, handPosZ, handsRot, scene)
    handsLoad(0.45, handPosX, handPosY, handPosZ, handsRot2, scene)

    for (let i = 0; i < 17; i++) {
        coinsLoad(0.3, coinsPosYArr, scene)
        randomCoinFloatPoint.push(Math.random() * (1.5 - 0.75 + 1) + 0.75)
    }

    // bisonHeadLoad(0.75, bisonHeadPos, scene)
    setTimeout(() => {
        itemsResponsive()
    }, 1000);
}

function vertexShader() {
    return `
    varying vec2 vUv;

    void main()
    {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
    }
    `
}

function fragmentShaderPlasma2() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;
    uniform float iResolutionMultiplier;
    uniform vec3 fogColor;
    uniform float fogNear;
    uniform float fogFar;

    const int deg = 5;
    vec2 roots[deg];

    vec2 mul(vec2 a, vec2 b) {
        return vec2(
            a.x*b.x - a.y*b.y,
            a.x*b.y + a.y*b.y
        );
    }

    vec2 div(vec2 a, vec2 b) {
        return mul(a, vec2(b.x, -b.y))/(b.x*b.x+b.y*b.y);
    }

    vec2 inv(vec2 a) {
        return vec2(a.x, -a.y) / (a.x*a.x + a.y*a.y);
    }

    vec2 f(vec2 a) {
        vec2 ret = vec2(1.0, 0.0);
        for (int i = 0; i < deg; i++) {
            ret = mul(ret, a-roots[i]);
        }
        return ret;
    }

    vec2 fp(vec2 a) {
        vec2 sum = vec2(0.0, 0.0);
        for (int i = 0; i < deg; i++) {
            sum += inv(a-roots[i]);
        }
        return inv(sum);
    }

    vec4 col(vec2 a) {
        return vec4(
            0.75/(1.5+abs(a.x)),
            0.75/(1.5+abs(a.y)),
            0.75/(1.25+0.01*abs(a.y)),
            0.75
            );
        }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 mo = iMouse.xy / iResolution.xy-.5;
        mo = (mo==vec2(-.5))?mo=vec2(-0.1,0.1):mo;
	    mo.x *= iResolution.x/iResolution.y;

        roots[0] = vec2(cos(0.45*iTime), sin(0.25*iTime));
        roots[1] = vec2(cos(0.275*iTime), sin(0.2*iTime));
        roots[2] = vec2(cos(0.075*iTime), sin(0.05*iTime));
        roots[3] = vec2(cos(0.075*iTime), sin(0.1*iTime));
        roots[4] = vec2(cos(0.45*iTime), sin(0.275*iTime));
        vec2 u0 = iResolutionMultiplier*(fragCoord-iResolution.xy/2.0)/min(iResolution.x, iResolution.y);
        vec2 u = u0;
        for(int i = 0; i < 3; i++) {
            u -= div(f(u), fp(u));
        }
        fragColor = col(u);
    }

    void main( void )	{
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
`
}

init()
animate()

//other stuff
let navCameraPosValue = new THREE.Vector3(0, 2, -1)
const navBurger = document.getElementById("nav-burger")
navBurger.addEventListener("click", function () {
    navCameraPos(navCameraPosValue, cameraTargetVector3);
});
