import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import gsap from 'gsap'
import { computeStyles } from '@popperjs/core'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import Stats from 'three/examples/jsm/libs/stats.module'
import { fromPairs, last } from 'lodash'

// ***
// *** MAIN PROPERITES
// ***

const planeScale = 100
const planeResolution = 64

const bloomParams = {
    bloomStrength: 0.1, //0.5
    bloomThreshold: 0,
    bloomRadius: 0.005, //0.1
}

const filmParams = {
    noiseIntensity: 0.05,
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
    renderDistanceMax: 15,
    fov: 60,
}

const fogParams = {
    density: 0.2,
}

//Objects
let knotObj, ground, human

let icons = []


let camera, cameraTargetLookAt, cameraTargetLookAtVector3, cameraTargetPos, scene, renderer, stats,
    parameters, cubeMaterial, controls, clock, cameraTargetVector3, cursorObject, cursorPosVector3, cursorPosObject;

//Shaders
let uniforms

//Loaders
const textureLoader = new THREE.TextureLoader()
const gltfLoader = new GLTFLoader()
const exrLoader = new EXRLoader()

let tl = gsap.timeline()

const gui = new GUI()

const canvas = document.querySelector('#web_gl')
const mouseOverlay = document.querySelector('#mouse_overlay')

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
    scene = new THREE.Scene();

    //!Base camera
    const cameraTargetGeo = new THREE.SphereGeometry(1, 32, 16)
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

    renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    parameters = { color: 0xff1100 }; //, envMap: textureCube 
    cubeMaterial = new THREE.MeshBasicMaterial(parameters);

    //! Controls
    // controls = new OrbitControls(camera, renderer.domElement)

    //! Scene
    scene.fog = new THREE.FogExp2(0x111111, fogParams.density)
    scene.background = new THREE.Color(0x111111);

    //!Lights
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

    initPostprocessing();

    renderer.autoClear = false;

    stats = new Stats();
    container.appendChild(stats.dom);

    container.style.touchAction = 'none';
    container.addEventListener('pointermove', onPointerMove);

    window.addEventListener('resize', onWindowResize);

    //bokehPass live changer
    // const matChanger = function () {

    //     postprocessing.bokeh.uniforms["focus"].value = bokehParams.focus;
    //     postprocessing.bokeh.uniforms["aperture"].value = bokehParams.aperture * 0.00001;
    //     postprocessing.bokeh.uniforms["maxblur"].value = bokehParams.maxblur;

    // };
    // gui.add(bokehParams, "focus", -50, 300.0, 1).onChange(matChanger);
    // gui.add(bokehParams, "aperture", 0, 50, 0.1).onChange(matChanger);
    // gui.add(bokehParams, "maxblur", 0.0, 0.1, 0.001).onChange(matChanger);
    // gui.close();
    // matChanger();

    loadModels()
    enviroParticles()

    setTimeout(() => {
        readyToMove = true
        readyToRotate = true
        isFpsReadyToCheck = true
    }, 1500);
}

//! get scrolled amount
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

var pctScrolled, docheight, scrollTop, trackLength, winheight;
function amountscrolled() {
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')
}

window.addEventListener("scroll", function () {
    amountscrolled()
}, false)

var mouse = { x: 0, y: 0 };
var mousePos;
document.onmousemove = onPointerMove;
function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.pageX - windowHalfX;
    mouseY = event.pageY - windowHalfY;

    // event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    var mouseScreenVector = new THREE.Vector3(mouse.x * 2, mouse.y + 1.5, 5);
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
let composer, bokehPass, ubloomPass, filmPass;
function initPostprocessing() {
    const renderPass = new RenderPass(scene, camera);

    bokehPass = new BokehPass(scene, camera, {
        focus: 6,
        aperture: 10.7,
        maxblur: 0.1,

        width: width,
        height: height
    })

    ubloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        bloomParams.bloomStrength,
        bloomParams.bloomRadius,
        bloomParams.bloomThreshold)

    filmPass = new FilmPass(
        filmParams.noiseIntensity,
        filmParams.scanLinesIntensity,
        filmParams.scanLinesCount,
        filmParams.greyScale)

    composer = new EffectComposer(renderer);

    composer.addPass(renderPass)

    postprocessing.composer = composer;
}

function render() {
    postprocessing.composer.render(0.1);
}

function postProcessingEnable() {
    composer.addPass(ubloomPass)
    composer.addPass(bokehPass)
    composer.addPass(filmPass)
    postprocessing.bokeh = bokehPass;
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

    // controls.update();
    requestAnimationFrame(animate, renderer.domElement);

    stats.begin();
    render();
    stats.end();

    cameraMove(delta)
    animateParticles(time)

    thisLoop = new Date();
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;

    if (pushNumber < 30) {
        fpsArray.push(fps);
        pushNumber++;
    }

    if (isFpsReadyToCheck == true && fpsChecked == false) {
        if (sessionStorage.noFirstVisit == "1") {
            isFpsReadyToCheck = false;
            setTimeout(() => {
                avgFps = ArrayAvg(fpsArray);
                console.log(canvas.width)
                console.log(avgFps)
                if (avgFps < 20) {
                    threeJsDNone()
                } else if (avgFps > 30) {
                    postProcessingEnable()
                }
            }, 2500);
        }
    }

    // cameraScrollPos()
}

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    fpsChecked = true;
    return summ / ArrayLen;
}

function threeJsDNone() {
    canvas.style.display = "none"
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
        cameraTargetPos.position.set(0, 3, 0.5);
    } else {
        readyToRotate = true;
        // cameraTargetPos.position.copy(cameraTargetVector3);
    }
    cameraPosi++
}

//pctScrolled
function cameraScrollPos() {
    console.log(pctScrolled)
}
var url = new URL("../", document.baseURI).href
let humanMaterial;
function loadModels() {
    //! Human
    humanMaterial = new THREE.MeshStandardMaterial({
        color: 0x95ff00,
        emissive: 0x95ff00,
        emissiveIntensity: 100,
    })
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

        let iResolutionMultiplierValue = 10000;
        let fragmentTexture;
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

        let wallMat = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader(),
            fragmentShader: fragmentShaderPlasma2(),
        });

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

    for (let i = 0; i < 10000; i++) {

        const x = Math.random() * 10 - 5;
        const y = Math.random() * 60 - 3;
        const z = Math.random() * 5;

        particleVerts.push(x, y, z);
    }

    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particleVerts, 3));

    particleMat = new THREE.PointsMaterial({ size: 0.01, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });
    // particleMat.color.setHSL(1.0, 0.3, 0.7);

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

        roots[0] = vec2(cos(0.6*iTime), sin(0.3*iTime));
        roots[1] = vec2(cos(0.4*iTime), sin(0.25*iTime));
        roots[2] = vec2(cos(0.1*iTime), sin(0.05*iTime));
        roots[3] = vec2(cos(0.1*iTime), sin(0.15*iTime));
        roots[4] = vec2(cos(0.3*iTime), sin(0.2*iTime));
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
const navBurger = document.getElementById("nav-burger")
navBurger.addEventListener("click", navCameraPos);