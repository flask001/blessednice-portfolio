"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"


import ytVideo from "../assets/auto.mp4"
import webVideo from "../assets/web1.mp4"
import affVideo from "../assets/blessed.mp4"
/* =========================
   MAIN COMPONENT
========================= */
export default function CourseCards() {
 const courses = [
  {
    title: "YouTube Automation",
    video: ytVideo,
    desc: "Build faceless YouTube channels that generate income 24/7. Learn automation, viral strategies, and monetization secrets."
  },
  {
    title: "Web Development",
    video: webVideo,
    desc: "Master React, Tailwind, and real-world projects. Start freelancing, build client websites, and earn as a developer."
  },
  {
    title: "Affiliate Marketing",
    video: affVideo,
    desc: "Turn traffic into daily income. Learn how to promote products and earn commissions without owning any product."
  }
]
  const bubbleContainerRef = useRef(null)

  useEffect(() => {
    const container = bubbleContainerRef.current
    if (!container) return

    const createBubble = () => {
      const bubble = document.createElement("div")
      bubble.className = "bubble"
      bubble.style.left = Math.random() * 100 + "vw"
      bubble.style.animationDuration = 5 + Math.random() * 5 + "s"
      bubble.style.width = 10 + Math.random() * 20 + "px"
      bubble.style.height = bubble.style.width
      container.appendChild(bubble)
      setTimeout(() => bubble.remove(), 10000)
    }

    const interval = setInterval(createBubble, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="course" className="relative py-20 px-4 md:px-10 overflow-hidden min-h-screen">
      
      {/* =========================
         BACKGROUND GRADIENT + BUBBLES
      ========================== */}
      <div
        ref={bubbleContainerRef}
        className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-tr from-purple-950  via-black to-purple-950"
      ></div>

      {/* =========================
         CONTENT
      ========================== */}
      <div className="max-w-7xl mx-auto text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 
          bg-gradient-to-r from-purple-400 via-white to-purple-400 
          bg-[length:200%_200%] bg-clip-text text-transparent 
          animate-gradient"
        >
          High Income Digital Course
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              <video
                src={course.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition"></div>

              <div className="absolute inset-0 border border-white/10 group-hover:border-purple-400 transition rounded-2xl"></div>

              <div className="relative z-10 p-6 flex flex-col justify-end h-[320px] md:h-[380px]">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-purple-600 transition">
                  {course.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  {course.desc}
                </p>
                <button className="mt-auto bg-purple-500 hover:bg-purple-400 text-black px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================
         STYLES
      ========================== */}
      <style jsx>{`
        .animate-gradient {
          animation: gradientMove 7s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-bg {
          background: linear-gradient(-45deg, #0f172a, #1e3a8a);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: rise 10s linear forwards;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}