import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import gsap from 'gsap'
import { computeStyles } from '@popperjs/core'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { AfterImagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'

// ***
// *** MAIN PROPERITES
// ***

const planeScale = 100
const planeResolution = 64

const bloomParams = {
    bloomStrength: 0.5,
    bloomThreshold: 0,
    bloomRadius: 0.01,
}

const filmParams = {
    noiseIntensity: 0.15,
    scanLinesIntensity: 0.015,
    scanLinesCount: 300,
    greyScale: false
}

const effectController = {
    focus: 500.0,
    aperture: 5,
    maxblur: 0.01
};

const cameraParams = {
    renderDistanceMin: 1,
    renderDistanceMax: 100,
    fov: 60,
}

const fogParams = {
    density: 0.01,
}

//Texture Loader
const textureLoader = new THREE.TextureLoader()

//GLTF loader
const gltfLoader = new GLTFLoader()

//gsap Timeline init
let tl = gsap.timeline()

//Gui init
const gui = new GUI()

// Canvas
const canvas = document.querySelector('#web_gl')

//! Scene
const scene = new THREE.Scene()

new THREE.CubeTextureLoader().load([
    '3d/textures/skybox/stars_ft.jpg',
    '3d/textures/skybox/stars_bk.jpg',
    '3d/textures/skybox/stars_up.jpg',
    '3d/textures/skybox/stars_dn.jpg',
    '3d/textures/skybox/stars_rt.jpg',
    '3d/textures/skybox/stars_lf.jpg'
], function (cubeTexture) {

    cubeTexture.encoding = THREE.sRGBEncoding;

    scene.background = cubeTexture;

    lightProbe.copy(LightProbeGenerator.fromCubeTexture(cubeTexture));

    const geometry = new THREE.SphereGeometry(5, 64, 64);

    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0,
        envMap: cubeTexture,
        envMapIntensity: API.envMapIntensity,
    });
});

scene.fog = new THREE.FogExp2(0x000000, fogParams.density)
// const fogCol = { color: '#ffffff' }
// gui.addColor(fogCol, 'color').onChange(() => {
//     scene.fog.color.set(fogCol.color)
// })

//!
//! Objects
//!
//Ground
const groundTexture = textureLoader.load('3d/textures/ground_texture.jpg')
const groundDisplacement = textureLoader.load('3d/textures/ground_displacement.jpg')
const groundRoughness = textureLoader.load('3d/textures/ground_roughness.jpg')

const groundScale = 1
// groundTexture.repeat.set(groundScale, groundScale)
// groundTexture.wrapS = THREE.RepeatWrapping;
// groundTexture.wrapT = THREE.RepeatWrapping;

// groundDisplacement.repeat.set(groundScale, groundScale)
// groundDisplacement.wrapS = THREE.RepeatWrapping;
// groundDisplacement.wrapT = THREE.RepeatWrapping;

groundRoughness.repeat.set(1, 1)
groundRoughness.wrapS = THREE.RepeatWrapping;
groundRoughness.wrapT = THREE.RepeatWrapping;

const groundGeo = new THREE.PlaneBufferGeometry(planeScale, planeScale, planeResolution, planeResolution)
const groundMat = new THREE.MeshStandardMaterial({
    map: groundTexture,
    roughnessMap: groundRoughness,
    roughness: 3.5,
    metalness: 0,
    displacementMap: groundDisplacement,
    displacementScale: 10,
})
const ground = new THREE.Mesh(groundGeo, groundMat)
scene.add(ground)
ground.rotation.x = -1.571
ground.rotation.z = 3.141

//Knot
const knotGeo = new THREE.TorusKnotGeometry(1, 0.2, 150, 20, 3, 10);

const knotMat = new THREE.MeshStandardMaterial({
    color: 0x95ff00,
    emissive: 0x95ff00,
    emissiveIntensity: 100,
})

const knotObj = new THREE.Mesh(knotGeo, knotMat);
const knotObj2 = new THREE.Mesh(knotGeo, knotMat);
knotObj.position.set(-25, 2, -20)
scene.add(knotObj)
scene.add(knotObj2)

knotObj2.position.set(0, 2, 0);

//!Lights

// let knobeLight = new THREE.PointLight(0x95ff00, 0.025)
// scene.add(knobeLight)
// knobeLight.position.set(-25, 2, -20)

let lightProbe;
let directionalLight;

const API = {
    lightProbeIntensity: .1,
    directionalLightIntensity: 0.55,
    envMapIntensity: 0.1
};

lightProbe = new THREE.LightProbe();
scene.add(lightProbe);

directionalLight = new THREE.DirectionalLight(0xffffff, API.directionalLightIntensity);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//!Base camera
const camera = new THREE.PerspectiveCamera(cameraParams.fov, sizes.width / sizes.height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
camera.position.set(-30, 1, -27.5)
camera.rotation.set(0, 4.1, 0)

scene.add(camera)

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



//!Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.toneMappingExposure = 1
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let bokehController = {
    focus: 11.5,
    aperture: 0.00005,
    maxblur: 0.01,
}

//composer + passes
const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
const ubloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), bloomParams.bloomStrength, bloomParams.bloomRadius, bloomParams.bloomThreshold)
const filmPass = new FilmPass(filmParams.noiseIntensity, filmParams.scanLinesIntensity, filmParams.scanLinesCount, filmParams.greyScale)
const bokehPass = new BokehPass(scene, camera, { focus: bokehController.focus, aperture: bokehController.aperture, maxblur: bokehController.maxblur, width: window.innerWidth, height: window.innerHeight })
composer.addPass(renderPass)
composer.addPass(ubloomPass)
composer.addPass(filmPass)
composer.addPass(bokehPass)



//! Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


//!
//! Animate
//!

document.addEventListener('mousemove', animateTerrain)

let mouseY = 0
let mouseX = 0

function animateTerrain(event) {
    mouseY = event.clientY
    mouseX = event.clientX
}

const clock = new THREE.Clock()
function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime()

    knotObj.rotation.x = mouseY * 0.001
    knotObj.rotation.y = mouseX * 0.0025

    //! Update Orbital Controls
    // controls.update()



    composer.render();
}
animate()


//!Helpers
// const gridHelper = new THREE.GridHelper(100, 100);
// scene.add(gridHelper);

// const axesHelper = new THREE.AxesHelper(20);
// scene.add(axesHelper);

// gui.add(camera.rotation, 'x').min(-5).max(5)
// gui.add(camera.rotation, 'y').min(-5).max(5)
// gui.add(camera.rotation, 'z').min(-5).max(5)

// gui.add(camera.position, 'x').min(-100).max(100)
// gui.add(camera.position, 'y').min(-100).max(100)
// gui.add(camera.position, 'z').min(-100).max(100)
