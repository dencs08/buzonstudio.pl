import gsap from 'gsap'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';

// import Stats from 'three/examples/jsm/libs/stats.module'

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
let icons = []

let camera, cameraTargetLookAt, cameraTargetLookAtVector3, cameraTargetPos, scene, renderer, stats,
    parameters, cubeMaterial, controls, clock, cameraTargetVector3, cursorObject, cursorPosVector3, cursorPosObject, iResolutionMultiplierValue;

//Shaders
let uniforms

//Loaders
const textureLoader = new THREE.TextureLoader()
const gltfLoader = new GLTFLoader()

let tl = gsap.timeline()

// const gui = new GUI()

const canvas = document.querySelector('#web_gl')
const mouseOverlay = document.querySelector('#mouse_overlay')

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

let fragmentTexture;
let wallMatVideo, wallGeo, wallMat, wall;

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

    var mouseScreenVector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    mouseScreenVector.unproject(camera);
    var dir = mouseScreenVector.sub(camera.position).normalize();
    mousePos = camera.position.clone().add(dir.multiplyScalar(4));

    mouseInteractivity()
}

function mouseInteractivity() {
    // camera.position.x += (- (mouseX) - camera.position.x) * 0.00001;
    // camera.position.y += (- (mouseY) - camera.position.y) * 0.000002;
    // camera.position.z += (- (mouseX) - camera.position.z) * 0.00001;

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

var isFpsReadyToCheck = true;
var fpsChecked = false;
var lastLoop = new Date();
var thisLoop, fps, lastLoop, avgFps, delta;
var fpsArray = [];
let pushNumber = 0;
function animate(time) {
    delta = clock.getDelta();
    time *= 0.001;

    uniforms.iTime.value = time;
    uniforms.iMouse.value.set(Math.abs(mouseX), Math.abs(mouseY), Math.abs(mouseX), Math.abs(mouseY));
    requestAnimationFrame(animate, renderer.domElement);

    // stats.begin();
    render();
    // stats.end();

    cameraMove(delta)
    cameraScrollPos()
    animateParticles(time)
    fpsChecker()
}

function render() {
    postprocessing.composer.render(0.1);
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

function cameraMove(delta) {
    let alpha = 0
    alpha += delta * 2;
    if (readyToMove == true) {
        camera.position.lerp(cameraTargetPos.position, alpha);
        camera.lookAt(cameraTargetLookAt.position);
    }
}

let cameraPosi = 0;
function navCameraPos() {
    if (cameraPosi % 2 == 0) {
        cameraTargetPos.position.set(0, 2, -2);
    } else {
        cameraTargetPos.position.copy(cameraTargetVector3);
    }
    cameraPosi++
}

var path = location.pathname;
var postProcessingEnabled = false;
function cameraScrollPos() {
    switch (startSectionIndex) {
        case 0:
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
            if (cameraPosi % 2 == 0) {
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
var url = new URL("../", document.baseURI).href
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
    bisonHeadLoad()
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

let bisonHead, bisonHeadMaterialParam, bisonHeadMaterial;
function bisonHeadLoad() {
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
            bisonHead.scale.set(0.75, 0.75, 0.75)
            bisonHead.position.set(2, 0, 10)
        })
    });



}

let particleGeo, particleVerts, sprite, particleMat, particles;
function enviroParticles() {
    particleGeo = new THREE.BufferGeometry();
    particleVerts = [];

    sprite = new THREE.TextureLoader().load(url + '3d/textures/particle.png');

    for (let i = 0; i < 30000; i++) {

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