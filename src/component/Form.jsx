"use client"

import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3,
      duration: Math.random() * 5 + 2,
    }))
    setStars(generatedStars)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          setStatus("Message sent successfully ✅")
          formRef.current.reset()
        },
        (error) => {
          setLoading(false)
          setStatus("Failed to send ❌")
          console.error(error)
        }
      )
  }

  return (
    <div id="contact" className="relative min-h-screen bg-black overflow-hidden">

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">

        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="animate-float">
            <svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              className="drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]"
            >
              <circle cx="100" cy="100" r="60" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-6">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-white text-center">
              Contact Me
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-white">{status}</p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}