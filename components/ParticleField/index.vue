<template><canvas id="canvas" class="canvas_background"></canvas></template>

<script>
// import * as THREE from 'three'
const THREE = require('THREE')

export default {
  name: 'ParticleField',
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
    }
  },
  beforeCreate() {},
  mounted() {
    this.init()
    // this.animate()
  },
  methods: {
    onWindowResize() {
      this.init()
      // this.animate()
    },
    init() {
      // Canvas
      const canvas = document.querySelector('.canvas_background')

      // Scene
      const scene = new THREE.Scene()

      // Objects
      // const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100)

      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCnt = 5000

      const posArray = new Float32Array(particlesCnt * 3)
      // xyz, xyz, xyz, xyz

      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5)
        // -0.5: put particles at center
        // *5 (Math.random() * 5): expand particles at the whole screen
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
      )

      // Materials
      // const material = new THREE.MeshBasicMaterial()
      // const material = new THREE.PointsMaterial({
      //   size: 0.005,
      // })
      // material.color = new THREE.Color(0xff0000)

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.0015,
        // map: cross, // add material
        // transparent: true, // add material
        // color: new THREE.Color(`rgba(0, 255, 255, 0.3)`),
        blending: THREE.AdditiveBlending,
      }) // add material texture, loading png file

      // Mesh
      // const sphere = new THREE.Mesh(geometry, material)
      // const sphere = new THREE.Points(geometry, material)
      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      )
      // scene.add(sphere, particlesMesh)
      scene.add(particlesMesh)

      // Lights
      const pointLight = new THREE.PointLight(0xffffff, 0.1)
      pointLight.position.x = 2
      pointLight.position.y = 3
      pointLight.position.z = 4
      scene.add(pointLight)

      /**
       * Sizes
       */
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
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
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      )
      camera.position.x = 0
      camera.position.y = 0
      camera.position.z = 2
      scene.add(camera)

      // Controls
      // const controls = new OrbitControls(camera, canvas)
      // controls.enableDamping = true

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas,
      })
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(new THREE.Color('#121212'), 1) // color, opacity - background

      // Mouse
      document.addEventListener('mousemove', animateParticles)

      let mouseX = 0
      let mouseY = 0

      function animateParticles(event) {
        mouseY = event.clientY
        mouseX = event.clientX
      }

      /**
       * Animate
       */

      const clock = new THREE.Clock()

      const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        // Update objects
        // sphere.rotation.y = 0.5 * elapsedTime
        // particlesMesh.roation.y = -0.1 * elapsedTime

        const randomBlue = Math.floor(Math.random() * (150 - 100) + 100)
        const randomGreen = Math.floor(Math.random() * (125 - 100) + 100)
        particlesMaterial.color.set(`rgb(0, ${randomBlue}, ${randomGreen})`)

        // console.log('isMobile?', this.$device.isMobie)

        // if (mouseX > -1) {
        if (mouseX === 0) {
          particlesMesh.rotation.x = elapsedTime * 0.008
          particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008)
        } else {
          particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008)
          particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008)
        }

        // Update Orbital Controls
        // controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
      }

      tick()
    },
    // init() {
    // this.scene = new THREE.Scene()
    // this.camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // )
    // this.renderer = new THREE.WebGLRenderer()
    // this.renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(this.rendere.domElement)

    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // this.cube = new THREE.Mesh(geometry, material)
    // this.scene.add(this.cube)

    // this.camera.position.z = 5
    // },
    // animate() {
    // requestAnimationFrame(this.animate)
    // this.cube.rotation.x += 0.01
    // this.cube.roatation.y += 0.01
    // },
  },
}
</script>
<style lang="scss" scoped>
.area_particle_field {
  width: 100%;
  height: 100%;
}
</style>
