// app/components/Hero.tsx
"use client"

import React, { useEffect, useState } from "react"
import img from "../assets/img2.jpeg"
import { Button } from "@/components/ui/button"
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { ArrowRight, MessageCircle, Github, Linkedin, Twitter, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {

  const [greeting, setGreeting] = useState("")
  const [typedText, setTypedText] = useState("")
  const [cursor, setCursor] = useState(true)

  const text = "BlessedNice Digital World — Where Innovation Meets Impact."

  useEffect(() => {

    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) setGreeting("Good Morning 👋")
    else if (hour >= 12 && hour < 18) setGreeting("Good Afternoon 👋")
    else if (hour >= 18 && hour < 24) setGreeting("Good Evening 👋")
    else setGreeting("Good Night 👋")

    let i = 0

    const typing = setInterval(() => {
      setTypedText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(typing)
    }, 120)

    const blink = setInterval(() => {
      setCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typing)
      clearInterval(blink)
    }

  }, [])

  return (

    <motion.section
      initial={{ scale: 1.15, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >

      {/* Cosmic Gradient */}
      <div id="home" className="cosmic-gradient absolute inset-0"></div>

      {/* Perspective Grid */}
      <div
        className="absolute inset-0 [transform:perspective(800px)_rotateX(60deg)]"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 2px),
          linear-gradient(to bottom, rgba(255,255,255,0.06) 2px, transparent 1px)
        `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_20%)] blur-3xl"></div>

      {/* Stars */}
      <div className="stars"></div>
      <div className="stars opacity-30 scale-80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-8">

          <div className="text-purple-400 text-lg font-semibold">
            {greeting}
          </div>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-br from-purple-700 via-white to-pink-700 bg-clip-text text-transparent">
              {typedText}
              {cursor && " |"}
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg text-lg ">
           I specialize in building high-performing websites, affiliate systems, and result-driven digital marketing strategies.
I help individuals and businesses discover powerful tools, profitable opportunities, and proven systems to grow online. 
<p className="text-gray-400">
        Beyond that, I guide beginners step-by-step on how to create engaging animation videos, launch and grow successful YouTube channels, and scale with automated YouTube systems that generate consistent results.
       </p>   </p>

          <div className="flex flex-wrap gap-4">
            <Button className=" rounded-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-90 px-6 py-6 text-base">  <a href="https://whatsapp.com/channel/0029VaB3pOqKAwEgYPoPdv2G">
              Join my Whatsapp Community</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="border-4 rounded-4xl border-purple-500 text-purple-300 px-6 py-6 bg-purple-500/10 text-base hover:bg-purple-500/50"
            >
              <a href="https://wa.link/yhgkhm">
              Get In Touch</a>
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-4">

            <a
              href="https://www.facebook.com/share/18JRuv598W/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/30 bg-black/40 backdrop-blur hover:bg-green-500/20 transition"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/blessednicedigital?igsh=amtubGoyeXlxODhv"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/30 bg-black/40 backdrop-blur hover:bg-blue-500/20 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.link/yhgkhm"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/30 bg-black/40 backdrop-blur hover:bg-purple-500/20 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="https://t.me/+XHx7_9fJo_80NDI8"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/30 bg-black/40 backdrop-blur hover:bg-purple-500/20 transition"
            >
              <FaTelegram size={20} />
            </a>

           

          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="relative flex justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={img}
              alt="profile"
              width={450}
              height={450}
              className="rounded-full object-cover border border-purple-500"
            />

            {/* Floating Affiliate Marketing Card */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-[-60px] w-[260px] p-5 rounded-2xl bg-gradient-to-br from-[#0f0c29] via-[#1a1a3a] to-[#000000] border border-purple-500/20 shadow-xl backdrop-blur"
            >

              <div className="text-pink-500 font-semibold text-lg mb-4">
                Affiliate Marketing
              </div>

              <svg viewBox="0 0 200 80" className="w-full h-16">
                <motion.path
                  d="M10 60 L60 30 L110 45 L170 10"
                  fill="transparent"
                  stroke="#a855f7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}

                  // ADDED glow + pulse
                  style={{ filter: "drop-shadow(0px 0px 6px #a855f7)" }}
                  animate={{
                    pathLength: 1,
                    strokeWidth: [3,4,3],
                  }}
                />
              </svg>

              <div className="absolute right-20 top-12 text-green-400 text-sm  ">
                Digital Growth
              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

      <style>{`

        .cosmic-gradient{
          position:absolute;
          inset:0;
          background:
          radial-gradient(circle at 30% 40%, rgba(168,85,247,0.25), transparent 10%),
          radial-gradient(circle at 70% 60%, rgba(59,130,246,0.25), transparent 10%);
          background-size:200% 200%;
          animation:gradientFloat 12s ease-in-out infinite;
        }

        @keyframes gradientFloat{
          0%{background-position:50% 0%;}
          50%{background-position:50% 100%;}
          100%{background-position:50% 0%;}
        }

        .stars{
          position:absolute;
          inset:0;
          background-image:
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 120px, white, transparent);
          background-repeat:repeat;
          background-size:200px 200px;
          animation:twinkle 6s infinite alternate;
          opacity:.5;
        }

        @keyframes twinkle{
          0%{opacity:.2}
          50%{opacity:.8}
          100%{opacity:.3}
        }

      `}</style>

    </motion.section>
  )
}