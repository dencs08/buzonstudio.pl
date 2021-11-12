import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()

import { threeJsDNone, threeJsDBlock } from '../../app.js';
import { scene, renderer, readyToMove, readyToRotate } from "../../three.js"

var url = new URL("../", document.baseURI).href

let bisonHead, bisonHeadMaterialParam, bisonHeadMaterial;
function bisonHeadLoad(bisonScale, bisonPos) {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load('3d/studio_small_09_1k.hdr', function (hdrmap) {
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

        gltfLoader.load("3d/models/bison_head.glb", (glb) => {
            bisonHead = glb.scene
            bisonHead.traverse((o) => {
                if (o.isMesh) o.material = bisonHeadMaterial;
            });
            scene.add(bisonHead)
            bisonHead.scale.set(bisonScale, bisonScale, bisonScale)
            bisonHead.position.set(bisonPos.x, bisonPos.y, bisonPos.z)
        })
    });
}

let particleGeo, particleVerts, sprite, particleMat, particles;
function enviroParticles(particleAmount) {
    particleGeo = new THREE.BufferGeometry();
    particleVerts = [];

    sprite = new THREE.TextureLoader().load(url + '3d/textures/particle.png');

    for (let i = 0; i < particleAmount; i++) {

        const x = Math.random() * (3 - (-10) + 1) + -(10);
        const y = Math.random() * (2.5 - (-10) + 1) + -(10);
        const z = Math.random() * (10 - 90 + 1) + 90;

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
            object.rotation.z = (time / 100) * (i < 4 ? i + 1 : - (i + 1));
        }
    }
}

var thisLoop, fps, lastLoop, avgFps
var fpsChecked = false
var lastLoop = new Date()
var fpsArray = []
let isFpsReadyToCheck = {
    isReady: false,
    get check() {
        return this.isReady;
    },
    set set(value) {
        this.isReady = value
    }
};
let pushNumber = 0
function fpsChecker() {
    thisLoop = new Date();
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;

    if (pushNumber < 30) {
        fpsArray.push(fps);
        pushNumber++;
    }

    if (isFpsReadyToCheck.check == true && fpsChecked == false) {
        if (sessionStorage.noFirstVisit == "1") {
            isFpsReadyToCheck.set = false;
            setTimeout(() => {
                avgFps = ArrayAvg(fpsArray);
                // console.log(canvas.width)
                console.log(avgFps)
                if (avgFps < 20) {
                    threeJsDNone()
                } else if (avgFps > 30) {
                    // postProcessingEnable()
                }
            }, 2000);
        }
    }
}

let isNavOpened = 0;
function navCameraPos(navCameraPos, cameraTargetVector3) {
    if (isNavOpened % 2 == 0) {
        console.log("nav is opened" + navCameraPos)
        cameraTargetPos.position.set(navCameraPos.x, navCameraPos.y, navCameraPos.z);
    } else {
        console.log("nav is closed" + cameraTargetVector3)
        cameraTargetPos.position.copy(cameraTargetVector3);
    }
    isNavOpened++
}

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    fpsChecked = true;
    return summ / ArrayLen;
}

const cameraParams = {
    renderDistanceMin: 0.1,
    renderDistanceMax: 15,
    fov: 60,
}

let width = window.innerWidth;
let height = window.innerHeight;
let camera, cameraTargetLookAt, cameraTargetLookAtVector3, cameraTargetPos, cameraTargetVector3, cursorPosVector3, cursorObject, cursorPosObject
function cameraInit() {
    const cameraTargetGeo = new THREE.SphereGeometry(1, 32, 16)
    const invisibleMat = new THREE.MeshPhysicalMaterial({
        transmission: 0.0,
    })

    camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
    cameraTargetVector3 = new THREE.Vector3(0, 2, 3.6)
    camera.position.copy(cameraTargetVector3)
    camera.rotation.set(0, 0, 0)

    cameraTargetPos = new THREE.Mesh(cameraTargetGeo, invisibleMat)
    cameraTargetPos.position.copy(cameraTargetVector3)
    scene.add(cameraTargetPos)
    cameraTargetPos.material.opacity = 0;
    cameraTargetPos.material.transparent = true;
    cameraTargetPos.transparent = true;

    cameraTargetLookAtVector3 = new THREE.Vector3(0, 2, -4)
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

function cameraMove(delta) {
    let alpha = 0
    alpha += delta * 2;
    if (readyToMove == true) {
        camera.position.lerp(cameraTargetPos.position, alpha);
        camera.lookAt(cameraTargetLookAt.position);
    }
}

export {
    bisonHeadLoad, animateParticles, enviroParticles, fpsChecker, navCameraPos, cameraInit, cameraMove,
    bisonHead, isFpsReadyToCheck, isNavOpened, width, height, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject
};
