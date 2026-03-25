// app/components/SkillsSection.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Code2,
  Server,
  Smartphone,
  Megaphone,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const skills = [
  {
    title: "Frontend Dev",
    description: "React, Next.js, Tailwind, GSAP, Three.js",
    icon: Monitor,
  },
  {
    title: "Backend Dev",
    description: "Node.js, Express, MongoDB, APIs",
    icon: Server,
  },
  {
    title: "App Dev",
    description: "React Native, Flutter, Cross-platform apps",
    icon: Smartphone,
  },
  {
    title: "Affiliate Marketing",
    description: "Funnels, SEO, traffic & conversion strategies",
    icon: Megaphone,
  },
  {
    title: "YouTube Automation",
    description: "Content systems, scripting, growth automation",
    icon: Code2,
  },
]

export default function SkillsSection() {
  const threeRef = useRef(null) // ✅ FIXED

  useEffect(() => {
    if (!threeRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // ✅ FIXED (no black screen)

    if (threeRef.current) {
      threeRef.current.appendChild(renderer.domElement) // ✅ SAFE
    }

    // Particles
    const particlesCount = 1200
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )

    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: "#a855f7",
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      particles.rotation.y += 0.0008
      particles.rotation.x += 0.0004

      renderer.render(scene, camera)
    }

    animate()

    // Resize fix
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (threeRef.current) {
        threeRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* ✅ Three.js Background */}
      <div
        ref={threeRef}
        className="absolute inset-0 z-10" // ✅ FIXED (was hiding UI)
      />

      {/* Animated Gradient Background */}
      <div id="skills" className="absolute inset-0 -z-10 animate-bgMove bg-[linear-gradient(135deg,#0b0f2a,#1a103d,#0b0f2a,#1a103d)] bg-[length:400%_400%]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-pink-900 to-pink-950 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div  className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm tracking-widest text-purple-400 mb-4">
          TECHNICAL EXPERTISE
        </p>

    <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 
          bg-gradient-to-r from-purple-900 via-white to-purple-50 
          bg-[length:200%_200%] bg-clip-text text-transparent 
          animate-gradient"
        >
          Skills
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-14">
          A blend of technical execution and digital strategy to build scalable
          online systems.
        </p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="relative bg-black/60 border border-white/15 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden">

                  {/* Light border glow */}
                  <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-300 border border-pink-400/10 blur-sm" />

                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-purple-500/10">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {skill.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Background animation keyframes */}
      <style jsx>{`
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bgMove {
          animation: bgMove 13s ease infinite;
        }
      `}</style>
    </section>
  )
}