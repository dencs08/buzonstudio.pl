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
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import Stats from 'three/examples/jsm/libs/stats.module'

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

const bokehParams = {
    focus: 6,
    aperture: 10.7,
    maxblur: 0.1,
}

const cameraParams = {
    renderDistanceMin: 0.1,
    renderDistanceMax: 100,
    fov: 60,
}

const fogParams = {
    density: 0.0125,
}

//Objects
let knotObj, ground, human


let camera, cameraTarget, scene, renderer, stats,
    parameters, cubeMaterial, controls, clock;

//Shaders
let uniforms

//Loaders
const textureLoader = new THREE.TextureLoader()
const gltfLoader = new GLTFLoader()

let tl = gsap.timeline()

const gui = new GUI()

const canvas = document.querySelector('#web_gl')

clock = new THREE.Clock();

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let width = window.innerWidth;
let height = window.innerHeight;

const materials = [], objects = [];

const postprocessing = {};

function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    //!Base camera
    camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
    camera.position.set(0, 1.5, -2)
    camera.rotation.set(0, 0, 0)

    const cameraTargetGeo = new THREE.SphereGeometry(1, 32, 16)
    const cameraTargetMat = new THREE.MeshStandardMaterial()

    cameraTarget = new THREE.Mesh(cameraTargetGeo, cameraTargetMat)
    cameraTarget.position.set(-25, 1, -20)

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // renderer.outputEncoding = THREE.sRGBEncoding
    // renderer.toneMapping = THREE.ACESFilmicToneMapping

    container.appendChild(renderer.domElement);

    parameters = { color: 0xff1100 }; //, envMap: textureCube 
    cubeMaterial = new THREE.MeshBasicMaterial(parameters);

    //! Controls
    controls = new OrbitControls(camera, renderer.domElement)

    //! Scene
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
    });

    scene.fog = new THREE.FogExp2(0x000000, fogParams.density)

    //!Lights
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

    initPostprocessing();

    renderer.autoClear = false;

    stats = new Stats();
    container.appendChild(stats.dom);

    container.style.touchAction = 'none';
    container.addEventListener('pointermove', onPointerMove);

    window.addEventListener('resize', onWindowResize);

    //bokehPass live changer
    const matChanger = function () {

        postprocessing.bokeh.uniforms["focus"].value = bokehParams.focus;
        postprocessing.bokeh.uniforms["aperture"].value = bokehParams.aperture * 0.00001;
        postprocessing.bokeh.uniforms["maxblur"].value = bokehParams.maxblur;

    };
    gui.add(bokehParams, "focus", -50, 300.0, 1).onChange(matChanger);
    gui.add(bokehParams, "aperture", 0, 50, 0.1).onChange(matChanger);
    gui.add(bokehParams, "maxblur", 0.0, 0.1, 0.001).onChange(matChanger);
    gui.close();
    matChanger();

    //!
    //! Objects
    //!
    //Ground
    // const groundTexture = textureLoader.load('3d/textures/ground_texture.jpg')
    // const groundDisplacement = textureLoader.load('3d/textures/ground_displacement.jpg')
    // const groundRoughness = textureLoader.load('3d/textures/ground_roughness.jpg')

    // groundRoughness.repeat.set(1, 1)
    // groundRoughness.wrapS = THREE.RepeatWrapping;
    // groundRoughness.wrapT = THREE.RepeatWrapping;

    // const groundGeo = new THREE.PlaneBufferGeometry(planeScale, planeScale, planeResolution, planeResolution)
    // const groundMat = new THREE.MeshStandardMaterial({
    //     map: groundTexture,
    //     roughnessMap: groundRoughness,
    //     roughness: 3.5,
    //     metalness: 0,
    //     displacementMap: groundDisplacement,
    //     displacementScale: 10,
    // })

    // ground = new THREE.Mesh(groundGeo, groundMat)
    // scene.add(ground)
    // ground.rotation.x = -1.571
    // ground.rotation.z = 3.141


    uniforms = {
        "time": { value: 1.0 }
    };

    const wallGeo = new THREE.PlaneGeometry(2, 2)
    const wallMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader()
    });

    const wall = new THREE.Mesh(wallGeo, wallMat)

    scene.add(wall)
    wall.position.set(0, 2, -5)


    //human
    const humanMaterial = new THREE.MeshStandardMaterial({
        color: 0x95ff00,
        emissive: 0x95ff00,
        emissiveIntensity: 100,
    })

    gltfLoader.load('3d/models/human.gltf', (gltf) => {
        human = gltf.scene
        human.traverse((o) => {
            if (o.isMesh) o.material = humanMaterial;
        });
        scene.add(human)
        human.position.set(0, 0, 0)
    })

}

function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
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

function initPostprocessing() {
    const renderPass = new RenderPass(scene, camera);

    const bokehPass = new BokehPass(scene, camera, {
        focus: 6,
        aperture: 10.7,
        maxblur: 0.1,

        width: width,
        height: height
    })

    const ubloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        bloomParams.bloomStrength,
        bloomParams.bloomRadius,
        bloomParams.bloomThreshold)

    const filmPass = new FilmPass(
        filmParams.noiseIntensity,
        filmParams.scanLinesIntensity,
        filmParams.scanLinesCount,
        filmParams.greyScale)

    const composer = new EffectComposer(renderer);

    composer.addPass(renderPass);
    composer.addPass(ubloomPass)
    composer.addPass(filmPass)
    composer.addPass(bokehPass);

    postprocessing.composer = composer;
    postprocessing.bokeh = bokehPass;
}

function animate() {
    // controls.update();
    requestAnimationFrame(animate, renderer.domElement);

    stats.begin();
    render();
    stats.end();
}

function render() {
    const time = Date.now() * 0.00005;

    const delta = clock.getDelta()
    uniforms["time"].value += delta * 5

    mouseInteractivity()

    postprocessing.composer.render(0.1);
}

function mouseInteractivity() {
    // camera.position.x += (- (mouseX) - camera.position.x) * 0.00001;
    // camera.position.y += (- (mouseY) - camera.position.y) * 0.000002;
    // camera.position.z += (- (mouseX) - camera.position.z) * 0.00001;
    // camera.lookAt(cameraTarget.position);
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

function fragmentShader() {
    return `
    uniform float time;

    varying vec2 vUv;

    void main( void ) {

        vec2 position = - 1.0 + 2.0 * vUv;

        float red = abs( sin( position.x * position.y + time / 5.0 ) );
        float green = abs( sin( position.x * position.y + time / 4.0 ) );
        float blue = abs( sin( position.x * position.y + time / 3.0 ) );
        gl_FragColor = vec4( red, green, blue, 1.0 );

    }
`
}

init()
animate()