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
    animateParticles, enviroParticles, bisonHeadLoad, fpsChecker, cameraInit, cameraMove, sceneInit, navCameraPos, rendererInit,
    bisonHead, isFpsReadyToCheck, isNavOpened, camera, cameraTargetPos, cameraTargetVector3, cameraTargetLookAtVector3, cameraTargetLookAt, cursorObject, avgFps, renderer, canvas
} from './components/threejs/threeJsClasses.js';

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
    enviroParticles(30000, 3, -10, 2.5, -10, 10, 90, scene)
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

let bisonHeadResponsivePosX, bisonHeadScaleResponsive
function bisonResponsive() {
    bisonHeadResponsivePosX = Math.min(Math.max(2.5 - (1000 / width), 0), 3);
    bisonHeadScaleResponsive = Math.min(Math.max((width / 1000), 0.5), 0.75)
    bisonHead.position.set(bisonHeadResponsivePosX, bisonHead.position.y, bisonHead.position.z)
    bisonHead.scale.set(bisonHeadScaleResponsive, bisonHeadScaleResponsive, bisonHeadScaleResponsive)
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

    bisonResponsive()
}

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

    stats.begin();
    render();
    stats.end();

    cameraMove(delta, readyToMove)
    cameraScrollPos()
    animateParticles(time, locoScrollPosValue, scene)
    // fpsChecker()
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
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.copy(cameraTargetVector3)

                // cameraTargetLookAtVector3.x = 0
                // cameraTargetLookAtVector3.y = 2
                // cameraTargetLookAtVector3.z = 0
                // cameraRotateOnScroll()

            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }
            break;
        case 1:
            // if (postProcessingEnabled == false) {
            //     postProcessingEnabled = true;
            //     if (avgFps > 30) {
            //         setTimeout(() => {
            //             postProcessingEnable()
            //         }, 500);
            //     }
            // }
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 15)
                bisonHead.lookAt(cursorObject.position)

                // cameraTargetLookAtVector3.x = 90
                // cameraTargetLookAtVector3.y = 2
                // cameraTargetLookAtVector3.z = 0

                // cameraRotateOnScroll()
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 2:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 30)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 3:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 45)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 4:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 60)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 5:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 75)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
            } else {
                cameraTargetPos.position.set(0, 2, -2);
            }

            break;
        case 6:
            if (isNavOpened % 2 == 0) {
                cameraTargetPos.position.set(0, 2, 90)

                // gsap.to(cameraTargetLookAt.position, {
                //     duration: 3,
                //     ease: 'expo.out',
                //     x: cameraTargetLookAtVector3.x,
                //     y: cameraTargetLookAtVector3.y,
                //     z: cameraTargetLookAtVector3.z
                // })
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

    bisonHeadLoad(0.75, bisonHeadPos, scene)
    setTimeout(() => {
        bisonResponsive()
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
let navCameraPosValue = new THREE.Vector3(0, 2, -1)
const navBurger = document.getElementById("nav-burger")
navBurger.addEventListener("click", function () {
    navCameraPos(navCameraPosValue, cameraTargetVector3);
});
