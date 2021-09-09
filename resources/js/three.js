// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import gsap from 'gsap'


// const gltfLoader = new GLTFLoader()

// const gui = new GUI()

// // Canvas
// const canvas = document.querySelector('#web_gl')

// // Scene
// const scene = new THREE.Scene()

// let tl = gsap.timeline()

// //Phone
// gltfLoader.load('3d/phone.gltf', (gltf) => {

//     gltf.scene.scale.set(0.01, 0.01, 0.01)
//     gltf.scene.position.set(0, -1, 0)
//     // gltf.scene.rotation.set(0, -4, 0)
//     scene.add(gltf.scene)

//     gui.add(gltf.scene.rotation, 'x').min(-5).max(5)
//     gui.add(gltf.scene.rotation, 'y').min(-5).max(5)
//     gui.add(gltf.scene.rotation, 'z').min(-5).max(5)

//     tl.to(gltf.scene.rotation, { x: -1.7, z: 1, duration: 1 })
//     tl.to(gltf.scene.position, { x: 1, duration: 1 }, "=-1")
//     tl.to(gltf.scene.scale, { x: 0.75, y: 0.75, z: 0.75, duration: 1 }, "-=1")
// })

// // Objects
// const geometry = new THREE.SphereGeometry(15, 32, 16);

// // Materials

// const material = new THREE.PointsMaterial({
//     size: 0.01
// })

// // Mesh
// const sphere = new THREE.Points(geometry, material)
// sphere.scale.set(0.05, 0.05, 0.05)
// scene.add(sphere)

// // Lights

// // const pointLight = new THREE.PointLight(0xffffff, 0.5)
// // pointLight.position.set(5, 5, 5)
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
// scene.add(ambientLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(-2, 0, 2.5)
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */

// const clock = new THREE.Clock()

// const tick = () => {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     // sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()