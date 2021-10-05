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
    noiseIntensity: 0.2,
    scanLinesIntensity: 0,
    scanLinesCount: 0,
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
    camera.position.set(0, 2, -4.5)
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
    // controls = new OrbitControls(camera, renderer.domElement)

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
        "time": { value: 1 },
        "resolution": { value: 1 }
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

    composer.addPass(renderPass)
    composer.addPass(ubloomPass)
    // composer.addPass(filmPass)
    composer.addPass(bokehPass)

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

    #define PI 3.14159265359
    #define EXP 2.71828182846

    float w1 = 3.0;
    float w2 = 1.0;
    float w3 = 5.0;
    float A = -2.0;
    float R = 7.0;

    float timer = 30.0;
    
    uniform float time;
    float resolution = 2.0;
    varying vec2 vUv;

    float horizontal(in vec2 xy, float t)	{
        float v = cos(w1*xy.x + A*t);
        return v;
    }
        
    float diagonal(in vec2 xy, float t)	{
        float v = cos(w2*(xy.x*cos(t) + 5.0*xy.y*sin(t)) + A*t);
        return v;
    }

    float radial(in vec2 xy, float t)	{
        float x = 0.3*xy.x - 0.5 + cos(t);
        float y = 0.3*xy.y - 0.5 + sin(t*0.5);
        float v = sin(w3*sqrt(x*x+y*y+1.0)+A*t);
        return v;
    }
    
    float map(float a,float b,float c,float d,float x) {
        return ((x-a)*(d-c)/(b-a))+c;
    }
    
    float log_map(float a,float b,float c,float d,float x) {
        float x1 = map(a,b,1.0,EXP,x);
        return log(x1)*(d-c)+c;
    }

    void main( void )	{
        float t = time / timer;
        vec2 xy = vUv * resolution;
        float v = horizontal(xy,t);
        v += diagonal(xy,t);
        v += radial(xy,t);
        v /= 3.0;
        float r = map(-1.0, 1.0,   0.05, 0.1, sin(PI*v));
        float g = map(-1.0, 1.0,   0.2, 0.4, sin(PI*v));
        g += log_map(-1.0, 1.0,   0.15, 0.3, cos(PI*v));
        float b = map(-1.0, 1.0,   0.5, 0.65, sin(PI*v));
        gl_FragColor = vec4(pow(r,R),pow(g,R),pow(b,R),1.0);
    }

    // void main( void ) {
    //     vec2 position = - 1.0 + 2.0 * vUv;

    //     float red = abs( sin( position.x * position.y + time / 5.0 ) );
    //     float green = abs( sin( position.x * position.y + time / 20.0 ) );
    //     float blue = abs( sin( position.x * position.y + time / 15.0 ) );
    //     gl_FragColor = vec4( red, green, blue, 1.0 );
    // }
`
}

init()
animate()

