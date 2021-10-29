// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import gsap from 'gsap'
// import { computeStyles } from '@popperjs/core'

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
// import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
// import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
// import Stats from 'three/examples/jsm/libs/stats.module'
// import { last } from 'lodash'

// // ***
// // *** MAIN PROPERITES
// // ***

// const planeScale = 100
// const planeResolution = 64

// const bloomParams = {
//     bloomStrength: 0.1, //0.5
//     bloomThreshold: 0,
//     bloomRadius: 0.005, //0.1
// }

// const filmParams = {
//     noiseIntensity: 0.05,
//     scanLinesIntensity: 0,
//     scanLinesCount: 0,
//     greyScale: false
// }

// const bokehParams = {
//     focus: 6,
//     aperture: 10.7,
//     maxblur: 0.1,
// }

// const cameraParams = {
//     renderDistanceMin: 0.1,
//     renderDistanceMax: 100,
//     fov: 60,
// }

// const fogParams = {
//     density: 0.0125,
// }

// //Objects
// let knotObj, ground, human


// let camera, cameraTarget, cameraTargetPos, scene, renderer, stats,
//     parameters, cubeMaterial, controls, clock, cameraTargetVector3;

// //Shaders
// let uniforms

// //Loaders
// const textureLoader = new THREE.TextureLoader()
// const gltfLoader = new GLTFLoader()

// let tl = gsap.timeline()

// const gui = new GUI()

// const canvas = document.querySelector('#web_gl')
// const mouseOverlay = document.querySelector('#mouse_overlay')

// clock = new THREE.Clock();

// let mouseX = 0, mouseY = 0;

// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;

// let width = window.innerWidth;
// let height = window.innerHeight;

// const materials = [], objects = [];

// const postprocessing = {};

// let videoTexture, video;
// let fragmentTexture;
// let wallMatVideo, wallGeo, wallMat, wall;

// function init() {
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     scene = new THREE.Scene();

//     //!Base camera
//     const cameraTargetGeo = new THREE.SphereGeometry(1, 32, 16)
//     const cameraTargetMat = new THREE.MeshPhysicalMaterial({
//         transmission: 0.0,
//     })

//     camera = new THREE.PerspectiveCamera(cameraParams.fov, width / height, cameraParams.renderDistanceMin, cameraParams.renderDistanceMax)
//     cameraTargetVector3 = new THREE.Vector3(0, 2, 3.6)
//     camera.position.copy(cameraTargetVector3)
//     camera.rotation.set(0, 0, 0)

//     cameraTargetPos = new THREE.Mesh(cameraTargetGeo, cameraTargetMat)
//     cameraTargetPos.position.copy(cameraTargetVector3)
//     scene.add(cameraTargetPos)
//     cameraTargetPos.material.opacity = 0;
//     cameraTargetPos.material.transparent = true;
//     cameraTargetPos.transparent = true;

//     cameraTarget = new THREE.Mesh(cameraTargetGeo, cameraTargetMat)
//     cameraTarget.position.set(5, 0, -4)
//     scene.add(cameraTarget)
//     cameraTarget.material.opacity = 0;
//     cameraTarget.material.transparent = true;
//     cameraTarget.transparent = true;

//     renderer = new THREE.WebGLRenderer({
//         canvas: canvas
//     });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(width, height);

//     renderer.outputEncoding = THREE.sRGBEncoding
//     // renderer.toneMapping = THREE.ACESFilmicToneMapping

//     container.appendChild(renderer.domElement);

//     parameters = { color: 0xff1100 }; //, envMap: textureCube 
//     cubeMaterial = new THREE.MeshBasicMaterial(parameters);

//     //! Controls
//     // controls = new OrbitControls(camera, renderer.domElement)

//     //! Scene
//     // new THREE.CubeTextureLoader().load([
//     //     '3d/textures/skybox/stars_ft.jpg',
//     //     '3d/textures/skybox/stars_bk.jpg',
//     //     '3d/textures/skybox/stars_up.jpg',
//     //     '3d/textures/skybox/stars_dn.jpg',
//     //     '3d/textures/skybox/stars_rt.jpg',
//     //     '3d/textures/skybox/stars_lf.jpg'
//     // ], function (cubeTexture) {

//     //     cubeTexture.encoding = THREE.sRGBEncoding;

//     //     scene.background = cubeTexture;

//     //     lightProbe.copy(LightProbeGenerator.fromCubeTexture(cubeTexture));
//     // });

//     scene.fog = new THREE.FogExp2(0x000000, fogParams.density)

//     //!Lights
//     let lightProbe;
//     let directionalLight;

//     const lightParam = {
//         lightProbeIntensity: 1.5,
//         directionalLightIntensity: 1.5,
//         envMapIntensity: 1
//     };

//     lightProbe = new THREE.LightProbe();
//     scene.add(lightProbe);

//     directionalLight = new THREE.DirectionalLight(0xffffff, lightParam.directionalLightIntensity);
//     directionalLight.position.set(10, 10, 10);
//     scene.add(directionalLight);

//     initPostprocessing();

//     renderer.autoClear = false;

//     stats = new Stats();
//     container.appendChild(stats.dom);

//     container.style.touchAction = 'none';
//     container.addEventListener('pointermove', onPointerMove);

//     window.addEventListener('resize', onWindowResize);

//     //bokehPass live changer
//     const matChanger = function () {

//         postprocessing.bokeh.uniforms["focus"].value = bokehParams.focus;
//         postprocessing.bokeh.uniforms["aperture"].value = bokehParams.aperture * 0.00001;
//         postprocessing.bokeh.uniforms["maxblur"].value = bokehParams.maxblur;

//     };
//     gui.add(bokehParams, "focus", -50, 300.0, 1).onChange(matChanger);
//     gui.add(bokehParams, "aperture", 0, 50, 0.1).onChange(matChanger);
//     gui.add(bokehParams, "maxblur", 0.0, 0.1, 0.001).onChange(matChanger);
//     gui.close();
//     matChanger();

//     //!
//     //! Objects
//     //!
//     //Ground
//     // const groundTexture = textureLoader.load('3d/textures/ground_texture.jpg')
//     // const groundDisplacement = textureLoader.load('3d/textures/ground_displacement.jpg')
//     // const groundRoughness = textureLoader.load('3d/textures/ground_roughness.jpg')

//     // groundRoughness.repeat.set(1, 1)
//     // groundRoughness.wrapS = THREE.RepeatWrapping;
//     // groundRoughness.wrapT = THREE.RepeatWrapping;

//     // const groundGeo = new THREE.PlaneBufferGeometry(planeScale, planeScale, planeResolution, planeResolution)
//     // const groundMat = new THREE.MeshStandardMaterial({
//     //     map: groundTexture,
//     //     roughnessMap: groundRoughness,
//     //     roughness: 3.5,
//     //     metalness: 0,
//     //     displacementMap: groundDisplacement,
//     //     displacementScale: 10,
//     // })

//     // ground = new THREE.Mesh(groundGeo, groundMat)
//     // scene.add(ground)
//     // ground.rotation.x = -1.571
//     // ground.rotation.z = 3.141

//     fragmentTexture = textureLoader.load('3d/textures/shader/shader1.png');
//     fragmentTexture.minFilter = THREE.NearestFilter;
//     fragmentTexture.magFilter = THREE.NearestFilter;
//     fragmentTexture.wrapS = THREE.RepeatWrapping;
//     fragmentTexture.wrapT = THREE.RepeatWrapping;

//     let iResolutionMultiplierValue;
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         iResolutionMultiplierValue = (canvas.width / 1000) + (canvas.width / 1000);
//         // iResolutionMultiplierValue = 5.0;
//     } else {
//         iResolutionMultiplierValue = (canvas.width / 2000);
//     }

//     uniforms = {
//         iTime: { value: 0.0 },
//         iResolution: { value: new THREE.Vector3(1920, 1080, 1) },
//         iMouse: { value: new THREE.Vector4() },
//         iChannel0: { value: fragmentTexture },
//         iResolutionMultiplier: { value: iResolutionMultiplierValue },
//     };


//     // video = document.getElementById('video');
//     // video.muted = true;
//     // video.play();
//     // videoTexture = new THREE.VideoTexture(video);
//     // wallMatVideo = new THREE.MeshLambertMaterial({ color: 0xffffff, map: videoTexture });

//     wallGeo = new THREE.PlaneGeometry(21.5, 10)
//     wallMat = new THREE.ShaderMaterial({
//         uniforms: uniforms,
//         vertexShader: vertexShader(),
//         fragmentShader: fragmentShaderPlasma2()
//     });

//     wall = new THREE.Mesh(wallGeo, wallMat)
//     scene.add(wall)
//     wall.position.set(0, 2, -5)

//     //human
//     const humanMaterial = new THREE.MeshStandardMaterial({
//         color: 0x95ff00,
//         emissive: 0x95ff00,
//         emissiveIntensity: 100,
//     })

//     // gltfLoader.load('3d/models/human.gltf', (gltf) => {
//     //     human = gltf.scene
//     //     human.traverse((o) => {
//     //         if (o.isMesh) o.material = humanMaterial;
//     //     });
//     //     scene.add(human)
//     //     human.position.set(0, 0, 0)
//     // })

//     readyToMove = true
// }

// //! get scrolled amount
// // function getDocHeight() {
// //     var D = document;
// //     return Math.max(
// //         D.body.scrollHeight, D.documentElement.scrollHeight,
// //         D.body.offsetHeight, D.documentElement.offsetHeight,
// //         D.body.clientHeight, D.documentElement.clientHeight
// //     )
// // }

// // var pctScrolled, docheight, scrollTop, trackLength, winheight;
// // function amountscrolled() {
// //     var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
// //     var docheight = getDocHeight()
// //     var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
// //     var trackLength = docheight - winheight
// //     var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
// //     console.log(pctScrolled + '% scrolled')
// // }

// // window.addEventListener("scroll", function () {
// //     amountscrolled()
// // }, false)

// function onPointerMove(event) {
//     if (event.isPrimary === false) return;

//     mouseX = event.pageX - windowHalfX;
//     mouseY = event.pageY - windowHalfY;
// }

// function onWindowResize() {
//     windowHalfX = window.innerWidth / 2;
//     windowHalfY = window.innerHeight / 2;

//     width = window.innerWidth;
//     height = window.innerHeight;

//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     renderer.setSize(width, height);
//     postprocessing.composer.setSize(width, height);
// }

// function initPostprocessing() {
//     const renderPass = new RenderPass(scene, camera);

//     const bokehPass = new BokehPass(scene, camera, {
//         focus: 6,
//         aperture: 10.7,
//         maxblur: 0.1,

//         width: width,
//         height: height
//     })

//     const ubloomPass = new UnrealBloomPass(
//         new THREE.Vector2(window.innerWidth, window.innerHeight),
//         bloomParams.bloomStrength,
//         bloomParams.bloomRadius,
//         bloomParams.bloomThreshold)

//     const filmPass = new FilmPass(
//         filmParams.noiseIntensity,
//         filmParams.scanLinesIntensity,
//         filmParams.scanLinesCount,
//         filmParams.greyScale)

//     const composer = new EffectComposer(renderer);

//     composer.addPass(renderPass)
//     composer.addPass(ubloomPass)
//     composer.addPass(bokehPass)
//     composer.addPass(filmPass)

//     postprocessing.composer = composer;
//     postprocessing.bokeh = bokehPass;
// }

// var isFpsReadyToCheck = true;
// var fpsChecked = false;
// var lastLoop = new Date();
// var thisLoop, fps, lastLoop, avgFps, delta;
// var fpsArray = [];
// let pushNumber = 0;
// let readyToMove = false;

// function animate(time) {
//     delta = clock.getDelta();
//     time *= 0.001;

//     uniforms.iTime.value = time;
//     uniforms.iMouse.value.set(mouseX, mouseY, mouseX, mouseY);
//     // controls.update();
//     requestAnimationFrame(animate, renderer.domElement);

//     stats.begin();
//     render();
//     stats.end();

//     cameraMove(delta)

//     thisLoop = new Date();
//     fps = 1000 / (thisLoop - lastLoop);
//     lastLoop = thisLoop;

//     if (pushNumber < 30) {
//         fpsArray.push(fps);
//         pushNumber++;
//     }

//     if (isFpsReadyToCheck == true && fpsChecked == false) {
//         if (sessionStorage.noFirstVisit == "1") {
//             isFpsReadyToCheck = false;
//             setTimeout(() => {
//                 avgFps = ArrayAvg(fpsArray);
//                 console.log(canvas.width)
//                 console.log(avgFps)
//                 if (avgFps < 20) {
//                     threeJsDNone()
//                     // scene.remove(wall);
//                     // wallVideoAdd();
//                 }
//             }, 2500);
//         }
//     }

//     cameraScrollPos()
// }

// function render() {
//     mouseInteractivity()

//     postprocessing.composer.render(0.1);
// }

// function mouseInteractivity() {
//     // camera.position.x += (- (mouseX) - camera.position.x) * 0.00001;
//     // camera.position.y += (- (mouseY) - camera.position.y) * 0.000002;
//     // camera.position.z += (- (mouseX) - camera.position.z) * 0.00001;
//     // camera.lookAt(cameraTarget.position);
// }

// function ArrayAvg(myArray) {
//     var i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
//     }
//     fpsChecked = true;
//     return summ / ArrayLen;
// }

// function wallVideoAdd() {
//     scene.remove(wall);
//     console.log("wall removed")

//     wall = new THREE.Mesh(wallGeo, wallMatVideo)
//     console.log("wall video added")

//     scene.add(wall)
//     wall.position.set(0, 2, -5)
//     console.log("scene wall added")
// }

// function threeJsDNone() {
//     canvas.style.display = "none"
// }

// function cameraMove(delta) {
//     let alpha = 0
//     alpha += delta * 2;
//     if (readyToMove == true) {
//         camera.position.lerp(cameraTargetPos.position, alpha);
//     }
// }

// let cameraPosi = 0;
// function cameraSetPos() {
//     if (cameraPosi % 2 == 0) {
//         cameraTargetPos.position.set(0, 2, -2);
//     } else {
//         cameraTargetPos.position.copy(cameraTargetVector3);
//     }
//     cameraPosi++
// }
// //pctScrolled
// var path = location.pathname;
// function cameraScrollPos() {
//     if (path == "/start" || path == "/") {
//         switch (startSectionIndex) {
//             case 0:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.copy(cameraTargetVector3)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }
//                 break;
//             case 1:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 15)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }

//                 break;
//             case 2:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 30)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }

//                 break;
//             case 3:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 40)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }

//                 break;
//             case 4:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 50)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }

//                 break;
//             case 5:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 60)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }

//                 break;
//             case 6:
//                 if (cameraPosi % 2 == 0) {
//                     cameraTargetPos.position.set(0, 2, 70)
//                 } else {
//                     cameraTargetPos.position.set(0, 2, -2);
//                 }
//         }
//     } else {
//         // console.log(pctScrolled)
//     }
// }

// function mainInit() {

// }

// function vertexShader() {
//     return `
//     varying vec2 vUv;

//     void main()
//     {
//         vUv = uv;
//         vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
//         gl_Position = projectionMatrix * mvPosition;
//     }
//     `
// }

// function fragmentShaderPlasma2() {
//     return `
//     varying vec2 vUv;
//     uniform vec3 iResolution;
//     uniform float iTime;
//     uniform vec4 iMouse;
//     uniform float iResolutionMultiplier;

//     const int deg = 5;
//     vec2 roots[deg];

//     vec2 mul(vec2 a, vec2 b) {
//         return vec2(
//             a.x*b.x - a.y*b.y,
//             a.x*b.y + a.y*b.y
//         );
//     }

//     vec2 div(vec2 a, vec2 b) {
//         return mul(a, vec2(b.x, -b.y))/(b.x*b.x+b.y*b.y);
//     }

//     vec2 inv(vec2 a) {
//         return vec2(a.x, -a.y) / (a.x*a.x + a.y*a.y);
//     }

//     vec2 f(vec2 a) {
//         vec2 ret = vec2(1.0, 0.0);
//         for (int i = 0; i < deg; i++) {
//             ret = mul(ret, a-roots[i]);
//         }
//         return ret;
//     }

//     vec2 fp(vec2 a) {
//         vec2 sum = vec2(0.0, 0.0);
//         for (int i = 0; i < deg; i++) {
//             sum += inv(a-roots[i]);
//         }
//         return inv(sum);
//     }

//     vec4 col(vec2 a) {
//         return vec4(
//             0.75/(1.5+abs(a.x)),
//             0.75/(1.5+abs(a.y)),
//             0.75/(1.25+0.01*abs(a.y)),
//             0.75
//             );
//         }

//         void mainImage(out vec4 fragColor, in vec2 fragCoord) {
//         roots[0] = vec2(cos(0.6*iTime), sin(0.3*iTime));
//         roots[1] = vec2(cos(0.4*iTime), sin(0.25*iTime));
//         roots[2] = vec2(cos(0.1*iTime), sin(0.05*iTime));
//         roots[3] = vec2(cos(0.1*iTime), sin(0.15*iTime));
//         roots[4] = vec2(cos(0.3*iTime), sin(0.2*iTime));
//         vec2 u0 = iResolutionMultiplier*(fragCoord-iResolution.xy/2.0)/min(iResolution.x, iResolution.y);
//         vec2 u = u0;
//         for(int i = 0; i < 3; i++) {
//             u -= div(f(u), fp(u));
//         }
//         fragColor = col(u);
//     }

//     void main( void )	{
//         mainImage(gl_FragColor, vUv * iResolution.xy);
//     }
// `
// }

// function fragmentShaderTunnel1() {
//     return `
//     varying vec2 vUv;
//     uniform vec3 iResolution;
//     uniform float iTime;
//     uniform vec4 iMouse;

//     //Base values modified with depth later
//     float intensity = 1.0;
//     float radius = 0.05;

//     //Distance functions from 
//     //https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
//     float triangleDist(vec2 p){ 
//         const float k = sqrt(3.0);
//         p.x = abs(p.x) - 1.0;
//         p.y = p.y + 1.0/k;
//         if( p.x+k*p.y>0.0 ) p=vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
//         p.x -= clamp( p.x, -2.0, 0.0 );
//         return -length(p)*sign(p.y);
//     }

//     float boxDist(vec2 p){
//         vec2 d = abs(p)-1.0;
//         return length(max(d,vec2(0))) + min(max(d.x,d.y),0.0);
//     }

//     float circleDist( vec2 p){
//       return length(p) - 1.0;
//     }

//     //https://www.shadertoy.com/view/3s3GDn
//     float getGlow(float dist, float radius, float intensity){
//         return pow(radius/dist, intensity);
//     }

//     void mainImage( out vec4 fragColor, in vec2 fragCoord ){

//         vec2 uv = fragCoord/iResolution.xy;
//         float widthHeightRatio = iResolution.x/iResolution.y;
//         vec2 centre;
//         vec2 pos;

//         float t = iTime * 0.05;

//         float dist;
//         float glow;
//         vec3 col = vec3(0);

//         //The spacing between shapes
//         float scale = 500.0;
//         //Number of shapes
//         float layers = 15.0;

//         float depth;
//         vec2 bend;

//         vec3 purple = vec3(0.611, 0.129, 0.909);
//         vec3 green = vec3(0.133, 0.62, 0.698);

//         float angle;
//         float rotationAngle;
//         mat2 rotation;

//         //For movement of the anchor point in time
//         float d = 2.5*(sin(t) + sin(3.0*t));

//         //Create an out of frame anchor point where all shapes converge to    
//         vec2 anchor = vec2(0.5 + cos(d), 0.5 + sin(d));

//         //Create light purple glow at the anchor loaction
//         pos = anchor - uv;
//         pos.y /= widthHeightRatio;
//         dist = length(pos);
//         glow = getGlow(dist, 0.25, 3.5);
//         col += glow * vec3(0.6,0.4,1.0);

//         for(float i = 0.0; i < layers; i++){

//             //Time varying depth information depending on layer
//             depth = fract(i/layers + t);

//             //Move the focus of the camera in a circle
//             centre = vec2(0.5 + 0.2 * sin(t), 0.5 + 0.2 * cos(t));

//             //Position shapes between the anchor and the camera focus based on depth
//             bend = mix(anchor, centre, depth);

//             pos = bend - uv;
//             pos.y /= widthHeightRatio;

//             //Rotate shapes
//                rotationAngle = 3.14 * sin(depth + fract(t) * 6.28) + i;
//             rotation = mat2(cos(rotationAngle), -sin(rotationAngle), 
//                             sin(rotationAngle),  cos(rotationAngle));

//             pos *= rotation;

//             //Position shapes according to depth
//             pos *= mix(scale, 0.0, depth);

//             float m = mod(i, 3.0);
//             if(m == 0.0){
//                 dist = abs(boxDist(pos));
//             }else if(m == 1.0){
//                 dist = abs(triangleDist(pos));
//             }else{
//                 dist = abs(circleDist(pos));
//             }

//             //Get glow from base radius and intensity modified by depth
//             glow = getGlow(dist, radius+(1.0-depth)*2.0, intensity + depth);

//             //Find angle along shape and map from [-PI; PI] to [0; 1]
//             angle = (atan(pos.y, pos.x)+3.14)/6.28;
//             //Shift angle depending on layer and map to [1...0...1]
//             angle = abs((2.0*fract(angle + i/layers)) - 1.0);

//             //White core
//             //col += 10.0*vec3(smoothstep(0.03, 0.02, dist));

//             //Glow according to angle value
//              col += glow * mix(green, purple, angle);
//         }

//         //Tone mapping
//         col = 1.0 - exp(-col);

//         //Gamma
//         col = pow(col, vec3(0.4545));

//         //Output to screen
//         fragColor = vec4(col,1.0);
//     }

//     void main( void )	{
//         mainImage(gl_FragColor, vUv * iResolution.xy);
//     }
// `
// }

// function fragmentShader() {
//     return `
//     varying vec2 vUv;
//     uniform vec3 iResolution;
//     uniform float iTime;
//     uniform vec4 iMouse;
//     uniform sampler2D iChannel0;


//     void main( void )	{
//         mainImage(gl_FragColor, vUv * iResolution.xy);
//     }
// `
// }

// init()
// animate()


// //other stuff
// const navBurger = document.getElementById("nav-burger")
// navBurger.addEventListener("click", cameraSetPos);