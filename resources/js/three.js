import gsap from 'gsap'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'

import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';

import Stats from 'three/examples/jsm/libs/stats.module'

import {
    animateParticles, enviroParticles, bisonHeadLoad, fpsChecker, navCameraPos, cameraInit, cameraMove,
    bisonHead, isFpsReadyToCheck, isNavOpened, width, height, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject
} from './components/threejs/threeJsClasses.js';
// ***
// *** MAIN PROPERITES
// ***

const fogParams = {
    density: 0.2,
}

//Objects
let icons = []

let scene, renderer, stats,
    parameters, cubeMaterial, controls, clock, iResolutionMultiplierValue;

//Shaders
let uniforms

//Loaders
const textureLoader = new THREE.TextureLoader()

let tl = gsap.timeline()

const gui = new GUI()

const canvas = document.querySelector('#web_gl')
const mouseOverlay = document.querySelector('#mouse_overlay')

clock = new THREE.Clock();

let mouseX = 0, mouseY = 0;
var mouse = { x: 0, y: 0 };
var mousePos;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

const materials = [], objects = [];

const postprocessing = {};

let fragmentTexture;
let wallGeo, wallMat, wall;

let readyToMove = false;
let readyToRotate = false;

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
    container.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onWindowResize);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        iResolutionMultiplierValue = (canvas.width / 1000) + (canvas.width / 1000);
        // iResolutionMultiplierValue = 5.0;
    } else {
        iResolutionMultiplierValue = (canvas.width / 2000);
    }

    loadModels()
    enviroParticles(30000)
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

    mouseX = event.pageX - windowHalfX;
    mouseY = event.pageY - windowHalfY;

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

let composer, shaderVignette, effectVignette, afterimagePass, renderPass;
function initPostprocessing() {
    renderPass = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);

    composer.addPass(renderPass)

    postprocessing.composer = composer;
}

function postProcessingEnable() {
    afterimagePass = new AfterimagePass();
    afterimagePass.uniforms["damp"].value = 0.875;

    shaderVignette = VignetteShader;
    effectVignette = new ShaderPass(shaderVignette);
    effectVignette.uniforms["offset"].value = 0;
    effectVignette.uniforms["darkness"].value = 2.0;

    composer.addPass(afterimagePass);
    composer.addPass(effectVignette);
}

function postProcessingDisable() {
    composer.removePass(afterimagePass)
    composer.removePass(effectVignette)
}

function rendererInit() {
    renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.autoClear = false;
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

var avgFps, delta;
function animate(time) {
    delta = clock.getDelta();
    time *= 0.001;

    uniforms.iTime.value = time;
    uniforms.iMouse.value.set(Math.abs(mouseX), Math.abs(mouseY), Math.abs(mouseX), Math.abs(mouseY));
    requestAnimationFrame(animate, renderer.domElement);

    stats.begin();
    render();
    stats.end();

    cameraMove(delta)
    cameraScrollPos()
    animateParticles(time)
    fpsChecker()
}

function render() {
    postprocessing.composer.render(0.1);
}

var path = location.pathname;
var postProcessingEnabled = false;
function cameraScrollPos() {
    switch (startSectionIndex) {
        case 0:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.copy(cameraTargetVector3)
                postProcessingEnabled = false;
                postProcessingDisable()

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }
            break;
        case 1:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 15)
                bisonHead.lookAt(cursorObject.position)
                setTimeout(() => {
                    if (postProcessingEnabled == false) {
                        postProcessingEnabled = true;
                        if (avgFps > 30) {
                            postProcessingEnable()
                        }
                    }
                }, 500);

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 2:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 30)

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 3:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 45)

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 4:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 60)

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 5:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 75)

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 6:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 90)

                gsap.to(cameraTargetLookAt.position, {
                    duration: 3,
                    ease: 'expo.out',
                    x: cameraTargetLookAtVector3.x,
                    y: cameraTargetLookAtVector3.y,
                    z: cameraTargetLookAtVector3.z
                })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }
    }
}

let humanMaterial;
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
    let bisonHeadPos = new THREE.Vector3(2, 0, 10)

    bisonHeadLoad(0.75, bisonHeadPos)
}

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
let navCameraPosValue = new THREE.Vector3(0, 2, -2)
const navBurger = document.getElementById("nav-burger")
// navBurger.addEventListener("click", navCameraPos(navCameraPosValue, cameraTargetVector3));

export { scene, renderer, readyToMove, readyToRotate };
