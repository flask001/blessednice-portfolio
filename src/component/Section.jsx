"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, BarChart3, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import img from "../assets/headimg.jpeg"
import * as THREE from "three"

export default function AboutAffiliate() {
  const cardHover = {
    rest: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: { rotateX: -6, rotateY: 6, scale: 1.05 }
  }

  const [mousePosition,setMousePosition] = useState({x:0,y:0})
  const starCanvasRef = useRef(null)

  useEffect(()=>{
    const move = (e)=>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove",move)
    return ()=> window.removeEventListener("mousemove",move)
  },[])

  // STAR BACKGROUND
  useEffect(() => {
    if (!starCanvasRef.current) return

    const width = starCanvasRef.current.clientWidth
    const height = starCanvasRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    starCanvasRef.current.appendChild(renderer.domElement)

    // Stars
    const starsGeometry = new THREE.BufferGeometry()
    const starCount = 500
    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    let frameId
    const animate = () => {
      stars.rotation.y += 0.0005
      stars.rotation.x += 0.0003
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!starCanvasRef.current) return
      const newWidth = starCanvasRef.current.clientWidth
      const newHeight = starCanvasRef.current.clientHeight
      renderer.setSize(newWidth, newHeight)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
      starsGeometry.dispose()
      starsMaterial.dispose()
      renderer.dispose()
      scene.clear()
      if (starCanvasRef.current && renderer.domElement.parentNode === starCanvasRef.current) {
        starCanvasRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section id="about" className="bg-gradient-to-br from-purple-950 via-black via-50% to-purple-950 relative min-h-screen text-white py-24 overflow-hidden">

      {/* STAR BACKGROUND */}
      <div ref={starCanvasRef} className="absolute inset-0 z-0" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Affiliate marketing and digital growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={img} className="w-full h-full object-cover" alt="Affiliate marketer" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm an affiliate marketer focused on helping brands grow through
              strategic partnerships and performance-driven marketing. I build
              high-converting funnels, SEO content systems, and targeted
              traffic strategies that connect the right audience with the
              right offers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              What started as simple niche blogs and product reviews evolved
              into scalable affiliate ecosystems powered by automation,
              analytics, and smart marketing strategies. My focus is building
              trust-driven recommendations that generate sustainable revenue
              for both brands and audiences.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ duration: 0.4 }}
                whileInView={{ opacity: [0,1], y:[40,0] }}
                viewport={{ once:true }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-bl from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition duration-500"/>
                <Card className="relative bg-black border-neutral-800 backdrop-blur-xl shadow-xl transition">
                  <CardContent className="p-6">
                    <Lightbulb className="text-pink-600 mb-3 " />
                    <h4 className="font-semibold text-lg mb-2 text-sky-400">Smart Strategy</h4>
                    <p className="text-sm text-gray-400">
                      Strategic affiliate campaigns designed to match high-intent audiences with profitable offers.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ duration: 0.4 }}
                whileInView={{ opacity: [0,1], y:[40,0] }}
                viewport={{ once:true }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition duration-500"/>
                <Card className="relative bg-black border-neutral-800 backdrop-blur-xl shadow-xl transition">
                  <CardContent className="p-6">
                    <Target className="text-pink-600 mb-3" />
                    <h4 className="font-semibold text-sky-400 text-lg mb-2">Conversion Focused</h4>
                    <p className="text-sm text-gray-400">
                      Every funnel and landing page is optimized for engagement, trust, and maximum conversions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ duration: 0.4 }}
                whileInView={{ opacity: [0,1], y:[40,0] }}
                viewport={{ once:true }}
                className="sm:col-span-2 relative group"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition duration-500"/>
                <Card className="relative bg-black border-neutral-800 backdrop-blur-xl shadow-xl transition">
                  <CardContent className="p-6">
                    <BarChart3 className="text-pink-600 mb-3" />
                    <h4 className="font-semibold text-lg text-sky-500 mb-2">Data Driven</h4>
                    <p className="text-sm text-gray-400">
                      Performance analytics and testing guide every optimization decision to maximize ROI.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}