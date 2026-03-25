"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Course", href: "#course" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about"},
  { name: "Contact", href: "#contact" },
  { name: "Offer", href: "#offer" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all text-white",
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold  bg-gradient-to-r from-purple-900 via-pink-300 to-purple-700 bg-clip-text text-transparent ">
          Blessed-Nice Digital <div className="h-2 rounded-full bg-green-400 w-2 animate-caret-blink"></div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 relative">

          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onClick={() => setActive(item.name)}
            >

              <a
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-purple-300 transition"
              >
                {item.name}
              </a>

              {active === item.name && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-2 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          ))}

  <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-lg shadow-purple-500/30"
          >
            Get Started
          </Button>

        </nav>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-purple-400 hover:text-pink-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={44} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/70 backdrop-blur-xl border-t border-purple-500/20"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col p-6 space-y-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  onClick={() => {
                    setActive(item.name)
                    setOpen(false)
                  }}
                  className="text-sm font-medium text-gray-200 hover:text-purple-500"
                >
                  {item.name}
                </motion.a>
              ))}

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
                Get Started
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}