import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()

// Canvas
const canvas = document.querySelector('#web_gl')

// Scene
const scene = new THREE.Scene()

//Phone
gltfLoader.load('3d/phone.gltf', (gltf) => {
    scene.add(gltf.scene)
})

// Objects
// const geometry = new THREE.IcosahedronGeometry(1, 0)

// Materials

// const material = new THREE.MeshPhongMaterial
// material.color = new THREE.Color(0xffffff)

// Mesh
// const sphere = new THREE.Mesh(geometry, material)
// scene.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.5)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
pointLight.position.set(5, 5, 5)
scene.add(pointLight, ambientLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-2, 0, 2.5)
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()