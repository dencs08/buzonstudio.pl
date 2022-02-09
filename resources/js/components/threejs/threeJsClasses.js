import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { random } from 'gsap/all'

const gltfLoader = new GLTFLoader()

// import { threeJsDNone } from '../app/onWebEntered';

var url = new URL("../", document.baseURI).href
let bisonHead, bisonHeadMaterialParam, bisonHeadMaterial;
let balloonModel, balloonMaterialParam1, balloonMaterialParam2, balloonMaterial1, balloonMaterial2;
let handModel, handsMaterialParam, handsMaterial;
let coinsModel, coinsMaterialParam, coinsMaterial;

let ballonsArr = [];
let handsArr = [];
let coinsArr = [];
function bisonHeadLoad(bisonScale, bisonPos, scene) {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        bisonHeadMaterialParam = {
            color: 0x007A7C,
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
            bisonHead.scale.set(bisonScale, bisonScale, bisonScale)
            bisonHead.position.set(bisonPos.x, bisonPos.y, bisonPos.z)
        })
    });
}
let balloonIndex = 0;
function balloonLoad(balloonScale, balloonPosX, balloonPosY, balloonPosZ, balloonRotX, balloonRotY, balloonRotZ, scene) {

    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        balloonMaterialParam1 = {
            color: 0x292929,
            metalness: 0.9,
            roughness: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 0,
            // normalMap: texture,
            // normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        }

        balloonMaterial1 = new THREE.MeshPhysicalMaterial(balloonMaterialParam1)

        gltfLoader.load(url + "3d/models/balloon.glb", (glb) => {
            balloonModel = glb.scene
            balloonModel.traverse((o) => {
                if (o.isMesh) o.material = balloonMaterial1;
            });
            scene.add(balloonModel)
            balloonModel.scale.set(balloonScale, balloonScale, balloonScale)
            balloonModel.position.set(balloonPosX[balloonIndex], balloonPosY[balloonIndex], balloonPosZ[balloonIndex])
            balloonModel.rotation.set(balloonRotX[balloonIndex], balloonRotY[balloonIndex], balloonRotZ[balloonIndex])
            ballonsArr.push(balloonModel)
            balloonIndex++;
        })
    });
}
function balloonLoadSpecial(balloonScale, balloonPosX, balloonPosY, balloonPosZ, balloonRotX, balloonRotY, balloonRotZ, scene) {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        balloonMaterialParam2 = {
            color: 0x007A7C,
            metalness: 0.9,
            roughness: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 0,
            // normalMap: texture,
            // normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        }

        balloonMaterial2 = new THREE.MeshPhysicalMaterial(balloonMaterialParam2)

        gltfLoader.load(url + "3d/models/balloon.glb", (glb) => {
            balloonModel = glb.scene
            balloonModel.traverse((o) => {
                if (o.isMesh) o.material = balloonMaterial2;
            });
            scene.add(balloonModel)
            balloonModel.scale.set(balloonScale, balloonScale, balloonScale)
            balloonModel.position.set(balloonPosX[2], balloonPosY[2], balloonPosZ[2])
            balloonModel.rotation.set(balloonRotX[2], balloonRotY[2], balloonRotZ[2])
            ballonsArr.push(balloonModel)
        })
    });
}
let handsIndex = 0;
function handsLoad(handScale, handPosX, handPosY, handPosZ, handRot, scene) {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        handsMaterialParam = {
            color: 0x007A7C,
            metalness: 0.9,
            roughness: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 0,
            // normalMap: texture,
            // normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        }

        handsMaterial = new THREE.MeshPhysicalMaterial(handsMaterialParam)

        gltfLoader.load(url + "3d/models/hand.glb", (glb) => {
            handModel = glb.scene
            handModel.traverse((o) => {
                if (o.isMesh) o.material = handsMaterial;
            });
            scene.add(handModel)
            handModel.scale.set(handScale, handScale, handScale)
            handModel.position.set(handPosX[handsIndex], handPosY[handsIndex], handPosZ[handsIndex])
            handModel.rotation.set(handRot.x, handRot.y, handRot.z)
            handsArr.push(handModel)
            handsIndex++;
        })
    });
}

function coinsLoad(coinScale, coinPosY, scene) {
    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().load(url + '3d/studio_small_09_1k.hdr', function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        coinsMaterialParam = {
            color: 0x007A7C,
            metalness: 0.9,
            roughness: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 0,
            // normalMap: texture,
            // normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        }

        coinsMaterial = new THREE.MeshPhysicalMaterial(coinsMaterialParam)

        gltfLoader.load(url + "3d/models/coin.glb", (glb) => {
            let randomCoinZPos = Math.random() * (43.75 - 43.2) + 43.2
            let randomCoinXRot = Math.random() * (1 - 0 + 1) + 0
            let randomCoinYRot = Math.random() * (1 - 0 + 1) + 0
            let randomCoinZRot = Math.random() * (1 - 0 + 1) + 0
            coinsModel = glb.scene
            coinsModel.traverse((o) => {
                if (o.isMesh) o.material = coinsMaterial;
            });
            scene.add(coinsModel)
            coinsModel.scale.set(coinScale, coinScale, coinScale)
            coinsModel.position.set(0, coinPosY, randomCoinZPos)
            coinsModel.rotation.set(randomCoinXRot, randomCoinYRot, randomCoinZRot)
            coinsArr.push(coinsModel)
        })
    });
}

let icons = []
function iconsLoad() {
    let iconsName = [
        'share',
        'megaphone',
        'arrow',
        'trend',
        'happy',
        'email',
        'star',
    ]

    const iconsPos = [
        new THREE.Vector3(0, 2, -10),
        new THREE.Vector3(2.5, 2, 10),
        new THREE.Vector3(-2.5, 2, 25),
        new THREE.Vector3(2.5, 2, 40),
        new THREE.Vector3(0, 2, 55),
        new THREE.Vector3(0, 2, 70),
        new THREE.Vector3(0, 2, 85),
    ]

    let pos = 0
    for (let index = 0; index < iconsName.length; index++) {
        const icon = iconsName[index];



        gltfLoader.load("3d/models/icons/icon-" + icon + ".glb", (glb) => {
            icon = glb.scene
            icon.traverse((o) => {
                if (o.isMesh) o.material = humanMaterial;
            });
            scene.add(icon)
            icon.position.set(iconsPos[index].x, iconsPos[index].y, iconsPos[index].z)
            pos += 15
            icons.push(icon);
        })
    }
}

let particleGeo, particleVerts, sprite, particleMat, particles;
function enviroParticles(particleAmount, minX, maxX, minY, maxY, minZ, maxZ, scene) {
    particleGeo = new THREE.BufferGeometry();
    particleVerts = [];

    sprite = new THREE.TextureLoader().load(url + '3d/textures/particle.png');

    for (let i = 0; i < particleAmount; i++) {

        const x = Math.random() * (minX - (maxX) + 1) + (maxX);
        const y = Math.random() * (minY - (maxY) + 1) + (maxY);
        const z = Math.random() * (minZ - maxZ + 1) + maxZ;

        particleVerts.push(x, y, z);
    }

    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particleVerts, 3));
    particleMat = new THREE.PointsMaterial({ size: 0.01, sizeAttenuation: true, map: sprite, alphaTest: 0, transparent: true });
    particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
}

function animateParticles(time, locoScrollPosValue, scene) {
    for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
            object.position.y = locoScrollPosValue / 1000;
            object.rotation.z = (time / 100) * (i < 4 ? i + 1 : - (i + 1));
        }
    }
}

var thisLoop, fps, lastLoop, avgFps
var fpsChecked = false
var lastLoop = new Date()
var fpsArray = []
let pushNumber = 0
let isFpsReadyToCheck = {
    isReady: false,
    get check() {
        return this.isReady;
    },
    set set(value) {
        this.isReady = value
    }
};
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
                // console.log(avgFps)
                if (avgFps < 20) {
                    // threeJsDNone()
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
        cameraTargetPos.position.set(camera.position.x + navCameraPos.x, camera.position.y + navCameraPos.y, camera.position.z + navCameraPos.z);
    } else {
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

let camera, cameraTargetLookAt, cameraTargetLookAtVector3, cameraTargetPos, cameraTargetVector3, cursorPosVector3, cursorObject, cursorPosObject
function cameraInit(scene, width, height) {
    let screenRatio = width / height

    const cameraTargetGeo = new THREE.SphereGeometry(1, 32, 16)
    const invisibleMat = new THREE.MeshPhysicalMaterial({
        transmission: 0.0,
    })


    camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)

    if (screenRatio > 2.2) {
        cameraTargetVector3 = new THREE.Vector3(0, 2, 3.6 - (screenRatio))
    } else {
        cameraTargetVector3 = new THREE.Vector3(0, 2, 3.6)
    }
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

function cameraMove(delta, readyToMove) {
    let alpha = 0
    alpha += delta * 2;
    if (readyToMove == true) {
        camera.position.lerp(cameraTargetPos.position, alpha);
        camera.lookAt(cameraTargetLookAt.position);
    }
}

let pixelRatio = window.devicePixelRatio
let AA = true
if (pixelRatio > 1) {
    AA = false
}
let renderer, canvas
function rendererInit(width, height) {
    canvas = document.querySelector('#web_gl')
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: AA,
        powerPreference: "high-performance",
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.autoClear = false;
}

function sceneInit(fogStart, fogEnd, scene) {
    // scene.fog = new THREE.FogExp2(0x111111, 0.2)
    scene.fog = new THREE.Fog(0x111111, fogStart, fogEnd);
    // scene.background = new THREE.Color(0x111111);
}

function clearThree(scene) {
    while (scene.children.length > 0) {
        clearThree(obj.children[0])
        obj.remove(obj.children[0]);
    }
    if (scene.geometry) scene.geometry.dispose()

    if (scene.material) {
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

export {
    bisonHeadLoad, balloonLoad, balloonLoadSpecial, handsLoad, coinsLoad, animateParticles, enviroParticles, fpsChecker, navCameraPos, cameraInit, cameraMove, sceneInit, rendererInit,
    bisonHead, coinsArr, ballonsArr, handsArr, balloonModel, isFpsReadyToCheck, isNavOpened, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject, avgFps, renderer, canvas
};
