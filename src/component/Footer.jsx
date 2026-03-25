import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Footer() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return
    const mount = mountRef.current

    const width = mount.clientWidth || 800
    const height = mount.clientHeight || 300

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 3

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    mount.appendChild(renderer.domElement)

    // DEBUG: clear color to ensure canvas is visible
    renderer.setClearColor(0x000000, 0) // transparent so gradient shows

    // Particles
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    const speeds = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      speeds[i] = 0.002 + Math.random() * 0.003
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({ size: 0.03, color: 0xffffff })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Animate particles
    let frameId
    const animate = () => {
      const positionsArray = geometry.attributes.position.array
      const time = Date.now() * 0.001
      for (let i = 0; i < particlesCount; i++) {
        // Move vertically
        positionsArray[i * 3 + 1] -= speeds[i]
        if (positionsArray[i * 3 + 1] < -5) positionsArray[i * 3 + 1] = 5

        // Sway horizontally and in depth
        positionsArray[i * 3] += Math.sin(time + i) * 0.001
        positionsArray[i * 3 + 2] += Math.cos(time + i) * 0.001
      }
      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      if (!mount) return
      const newWidth = mount.clientWidth || 800
      const newHeight = mount.clientHeight || 300
      renderer.setSize(newWidth, newHeight)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      scene.clear()
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-[300px]" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Blessednice Digital
        </h2>

        <p className="mt-4 text-gray-300 max-w-md">
          Affiliate Marketing • Growth • Automation • Digital Domination 🚀
        </p>

        <div className="flex gap-6 mt-6">


          <a href="#home" className="hover:text-pink-400 transition">Home</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          <a href="#offer" className="hover:text-pink-400 transition">Offer</a>
          <a href="#course" className="hover:text-pink-400 transition">Course</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Blessednice Digital. All rights reserved.
        </div>
      </div>
    </footer>
  )
}