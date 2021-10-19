


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
import { last } from 'lodash'

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
const mouseOverlay = document.querySelector('#mouse_overlay')

clock = new THREE.Clock();

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let width = window.innerWidth;
let height = window.innerHeight;

const materials = [], objects = [];

const postprocessing = {};

let videoTexture, video;
let fragmentTexture;
let wallMatVideo, wallGeo, wallMat, wall;

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    //!Base camera
    camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
    camera.position.set(0, 2, 3.6) //0, 2, 3.60
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

    renderer.outputEncoding = THREE.sRGBEncoding
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

    const lightParam = {
        lightProbeIntensity: 1.5,
        directionalLightIntensity: 1.5,
        envMapIntensity: 1
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

    fragmentTexture = textureLoader.load('3d/textures/shader/shader1.png');
    fragmentTexture.minFilter = THREE.NearestFilter;
    fragmentTexture.magFilter = THREE.NearestFilter;
    fragmentTexture.wrapS = THREE.RepeatWrapping;
    fragmentTexture.wrapT = THREE.RepeatWrapping;

    uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(1920, 1080, 1) },
        iMouse: { value: new THREE.Vector4() },
        iChannel0: { value: fragmentTexture },
    };

    // video = document.getElementById('video');
    // video.muted = true;
    // video.play();
    // videoTexture = new THREE.VideoTexture(video);
    // wallMatVideo = new THREE.MeshLambertMaterial({ color: 0xffffff, map: videoTexture });

    wallGeo = new THREE.PlaneGeometry(21.5, 10)
    wallMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader(),
        fragmentShader: fragmentShaderPlasma2()
    });

    wall = new THREE.Mesh(wallGeo, wallMat)
    scene.add(wall)
    wall.position.set(0, 2, -5)
    //human
    // const humanMaterial = new THREE.MeshStandardMaterial({
    //     // color: 0x95ff00,
    //     // emissive: 0x95ff00,
    //     // emissiveIntensity: 100,
    // })

    // gltfLoader.load('3d/models/human.gltf', (gltf) => {
    //     human = gltf.scene
    //     human.traverse((o) => {
    //         if (o.isMesh) o.material = humanMaterial;
    //     });
    //     scene.add(human)
    //     human.position.set(0, 0, 0)
    // })
}

function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.pageX - windowHalfX;
    mouseY = event.pageY - windowHalfY;
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
    composer.addPass(bokehPass)
    composer.addPass(filmPass)

    postprocessing.composer = composer;
    postprocessing.bokeh = bokehPass;
}

var fpsChecked = false;
var lastLoop = new Date();
var thisLoop, fps, lastLoop, avgFps;
var fpsArray = [];
let pushNumber = 0;
function animate(time) {
    time *= 0.001;

    uniforms.iTime.value = time;
    uniforms.iMouse.value.set(mouseX, mouseY, mouseX, mouseY);
    // controls.update();
    requestAnimationFrame(animate, renderer.domElement);

    stats.begin();
    render();
    stats.end();

    thisLoop = new Date();
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;


    if (pushNumber < 30) {
        fpsArray.push(fps);
        pushNumber++;
    }

    if (fpsChecked == false) {
        fpsChecked = true;
        setTimeout(() => {
            avgFps = ArrayAvg(fpsArray);
            console.log(canvas.width)
            console.log(avgFps)
            if (avgFps < 20) {
                // wallVideoAdd();
            }
        }, 1000);
    }

}

function render() {
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

function fragmentShaderPlasma1() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;

    #define PI 3.14159265359
    #define EXP 2.71828182846

    float w1 = 3.0;
    float w2 = 1.5;
    float w3 = 30.0;
    float A = 0.5;
    float R = 10.0;

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

    void mainImage( out vec4 fragColor, in vec2 fragCoord )	{
        float t = iTime * 0.2;
        vec2 xy = fragCoord.xy / iResolution.xy;
        float v = horizontal(xy,t);
        v += diagonal(xy,t);
        v += radial(xy,t);
        v /= 3.0;
        float r = map(-1.0,1.0,   0.1,0.23,sin(PI*v));
        float g = map(-1.0,1.0,   0.35,0.5,sin(PI*v));
        g += log_map(-1.0,1.0,   0.335,0.435,cos(PI*v));
        float b = map(-1.0,1.0,   0.8,0.93,sin(PI*v));
        fragColor = vec4(pow(r,R),pow(g,R),pow(b,R),1.0);
    }

    void main( void )	{
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
`
}

function fragmentShaderPlasma2() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;

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
            1.0/(1.5+abs(a.x)),
            1.0/(1.25+abs(a.y)),
            1.0/(1.1+0.01*abs(a.y)),
            1.0
            );
        }

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        roots[0] = vec2(cos(0.6*iTime), sin(0.3*iTime));
        roots[1] = vec2(cos(0.4*iTime), sin(0.25*iTime));
        roots[2] = vec2(cos(0.1*iTime), sin(0.05*iTime));
        roots[3] = vec2(cos(0.1*iTime), sin(0.15*iTime));
        roots[4] = vec2(cos(0.3*iTime), sin(0.2*iTime));
        vec2 u0 = 2.0*(fragCoord-iResolution.xy/2.0)/min(iResolution.x, iResolution.y);
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

function fragmentShaderAurora() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;
    uniform sampler2D iChannel0;

// Auroras by nimitz 2017 (twitter: @stormoid)
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
// Contact the author for other licensing options

#define time iTime

mat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}
mat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);
float tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}
vec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}

float triNoise2d(in vec2 p, float spd)
{
    float z=1.8;
    float z2=2.5;
	float rz = 0.;
    p *= mm2(p.x*0.06);
    vec2 bp = p;
	for (float i=0.; i<5.; i++ )
	{
        vec2 dg = tri2(bp*1.85)*.75;
        dg *= mm2(time*spd);
        p -= dg/z2;

        bp *= 1.3;
        z2 *= .45;
        z *= .42;
		p *= 1.21 + (rz-1.0)*.02;

        rz += tri(p.x+tri(p.y))*z;
        p*= -m2;
	}
    return clamp(1./pow(rz*29., 1.3),0.,.55);
}

float hash21(in vec2 n){ return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
vec4 aurora(vec3 ro, vec3 rd)
{
    vec4 col = vec4(0);
    vec4 avgCol = vec4(0);

    for(float i=0.;i<50.;i++)
    {
        float of = 0.006*hash21(gl_FragCoord.xy)*smoothstep(0.,15., i);
        float pt = ((.8+pow(i,1.4)*.002)-ro.y)/(rd.y*2.+0.4);
        pt -= of;
    	vec3 bpos = ro + pt*rd;
        vec2 p = bpos.zx;
        float rzt = triNoise2d(p, 0.06);
        vec4 col2 = vec4(0,0,0, rzt);
        col2.rgb = (sin(1.-vec3(2.15,-.5, 1.2)+i*0.043)*0.5+0.5)*rzt;
        avgCol =  mix(avgCol, col2, .5);
        col += avgCol*exp2(-i*0.065 - 2.5)*smoothstep(0.,5., i);

    }

    col *= (clamp(rd.y*15.+.4,0.,1.));


    //return clamp(pow(col,vec4(1.3))*1.5,0.,1.);
    //return clamp(pow(col,vec4(1.7))*2.,0.,1.);
    //return clamp(pow(col,vec4(1.5))*2.5,0.,1.);
    //return clamp(pow(col,vec4(1.8))*1.5,0.,1.);

    //return smoothstep(0.,1.1,pow(col,vec4(1.))*1.5);
    return col*1.8;
    //return pow(col,vec4(1.))*2.
}


//-------------------Background and Stars--------------------

vec3 nmzHash33(vec3 q)
{
    uvec3 p = uvec3(ivec3(q));
    p = p*uvec3(374761393U, 1103515245U, 668265263U) + p.zxy + p.yzx;
    p = p.yzx*(p.zxy^(p >> 3U));
    return vec3(p^(p >> 16U))*(1.0/vec3(0xffffffffU));
}

vec3 stars(in vec3 p)
{
    vec3 c = vec3(0.);
    float res = iResolution.x*1.;

	for (float i=0.;i<4.;i++)
    {
        vec3 q = fract(p*(.15*res))-0.5;
        vec3 id = floor(p*(.15*res));
        vec2 rn = nmzHash33(id).xy;
        float c2 = 1.-smoothstep(0.,.6,length(q));
        c2 *= step(rn.x,.0005+i*i*0.001);
        c += c2*(mix(vec3(1.0,0.49,0.1),vec3(0.75,0.9,1.),rn.y)*0.1+0.9);
        p *= 1.3;
    }
    return c*c*.8;
}

vec3 bg(in vec3 rd)
{
    float sd = dot(normalize(vec3(-0.5, -0.6, 0.9)), rd)*0.5+0.5;
    sd = pow(sd, 5.);
    vec3 col = mix(vec3(0.05,0.1,0.2), vec3(0.1,0.05,0.2), sd);
    return col*.63;
}
//-----------------------------------------------------------


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 q = fragCoord.xy / iResolution.xy;
    vec2 p = q - 0.5;
	p.x*=iResolution.x/iResolution.y;

    vec3 ro = vec3(0,0,-6.7);
    vec3 rd = normalize(vec3(p,1.3));
    vec2 mo = iMouse.xy / iResolution.xy-.5;
    mo = (mo==vec2(-.5))?mo=vec2(-0.1,0.1):mo;
	mo.x *= iResolution.x/iResolution.y;
    rd.yz *= mm2(0.001);
    rd.xz *= mm2(mo.x + sin(time*0.05)*0.2);

    vec3 col = vec3(0.);
    vec3 brd = rd;
    float fade = smoothstep(0.,0.01,abs(brd.y))*0.1+0.9;

    col = bg(rd)*fade;

    if (rd.y > 0.){
        vec4 aur = smoothstep(0.,1.5,aurora(ro,rd))*fade;
        col += stars(rd);
        col = col*(1.-aur.a) + aur.rgb;
    }
    else //Reflections
    {
        rd.y = abs(rd.y);
        col = bg(rd)*fade*0.6;
        vec4 aur = smoothstep(0.0,2.5,aurora(ro,rd));
        col += stars(rd)*0.1;
        col = col*(1.-aur.a) + aur.rgb;
        vec3 pos = ro + ((0.5-ro.y)/rd.y)*rd;
        float nz2 = triNoise2d(pos.xz*vec2(.5,.7), 0.);
        col += mix(vec3(0.2,0.25,0.5)*0.08,vec3(0.3,0.3,0.5)*0.7, nz2*0.4);
    }

	fragColor = vec4(col, 1.);
}


    void main( void )	{
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
    `
}

function fragmentShaderTunnel1() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;

    //Base values modified with depth later
    float intensity = 1.0;
    float radius = 0.05;

    //Distance functions from 
    //https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
    float triangleDist(vec2 p){ 
        const float k = sqrt(3.0);
        p.x = abs(p.x) - 1.0;
        p.y = p.y + 1.0/k;
        if( p.x+k*p.y>0.0 ) p=vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
        p.x -= clamp( p.x, -2.0, 0.0 );
        return -length(p)*sign(p.y);
    }

    float boxDist(vec2 p){
        vec2 d = abs(p)-1.0;
        return length(max(d,vec2(0))) + min(max(d.x,d.y),0.0);
    }

    float circleDist( vec2 p){
      return length(p) - 1.0;
    }

    //https://www.shadertoy.com/view/3s3GDn
    float getGlow(float dist, float radius, float intensity){
        return pow(radius/dist, intensity);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord ){

        vec2 uv = fragCoord/iResolution.xy;
        float widthHeightRatio = iResolution.x/iResolution.y;
        vec2 centre;
        vec2 pos;

        float t = iTime * 0.05;

        float dist;
        float glow;
        vec3 col = vec3(0);

        //The spacing between shapes
        float scale = 500.0;
        //Number of shapes
        float layers = 15.0;

        float depth;
        vec2 bend;

        vec3 purple = vec3(0.611, 0.129, 0.909);
        vec3 green = vec3(0.133, 0.62, 0.698);

        float angle;
        float rotationAngle;
        mat2 rotation;

        //For movement of the anchor point in time
        float d = 2.5*(sin(t) + sin(3.0*t));

        //Create an out of frame anchor point where all shapes converge to    
        vec2 anchor = vec2(0.5 + cos(d), 0.5 + sin(d));

        //Create light purple glow at the anchor loaction
        pos = anchor - uv;
        pos.y /= widthHeightRatio;
        dist = length(pos);
        glow = getGlow(dist, 0.25, 3.5);
        col += glow * vec3(0.6,0.4,1.0);

        for(float i = 0.0; i < layers; i++){

            //Time varying depth information depending on layer
            depth = fract(i/layers + t);

            //Move the focus of the camera in a circle
            centre = vec2(0.5 + 0.2 * sin(t), 0.5 + 0.2 * cos(t));

            //Position shapes between the anchor and the camera focus based on depth
            bend = mix(anchor, centre, depth);

            pos = bend - uv;
            pos.y /= widthHeightRatio;

            //Rotate shapes
               rotationAngle = 3.14 * sin(depth + fract(t) * 6.28) + i;
            rotation = mat2(cos(rotationAngle), -sin(rotationAngle), 
                            sin(rotationAngle),  cos(rotationAngle));

            pos *= rotation;

            //Position shapes according to depth
            pos *= mix(scale, 0.0, depth);

            float m = mod(i, 3.0);
            if(m == 0.0){
                dist = abs(boxDist(pos));
            }else if(m == 1.0){
                dist = abs(triangleDist(pos));
            }else{
                dist = abs(circleDist(pos));
            }

            //Get glow from base radius and intensity modified by depth
            glow = getGlow(dist, radius+(1.0-depth)*2.0, intensity + depth);

            //Find angle along shape and map from [-PI; PI] to [0; 1]
            angle = (atan(pos.y, pos.x)+3.14)/6.28;
            //Shift angle depending on layer and map to [1...0...1]
            angle = abs((2.0*fract(angle + i/layers)) - 1.0);

            //White core
            //col += 10.0*vec3(smoothstep(0.03, 0.02, dist));

            //Glow according to angle value
             col += glow * mix(green, purple, angle);
        }

        //Tone mapping
        col = 1.0 - exp(-col);

        //Gamma
        col = pow(col, vec3(0.4545));

        //Output to screen
        fragColor = vec4(col,1.0);
    }

    void main( void )	{
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
`
}

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}

function wallVideoAdd() {
    scene.remove(wall);
    console.log("wall removed")

    wall = new THREE.Mesh(wallGeo, wallMatVideo)
    console.log("wall video added")

    scene.add(wall)
    wall.position.set(0, 2, -5)
    console.log("scene wall added")
}

init()
animate()


function fragmentShader() {
    return `
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;
    uniform sampler2D iChannel0;


    void main( void )	{
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
`
}