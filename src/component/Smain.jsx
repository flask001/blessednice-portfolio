// src/components/ShowcaseSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vid from '../assets/vid.mp4'
const Card = ({ title, description, image, onRequest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} z
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 text-white">
        <h3 className="text-base md:text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-xs md:text-sm opacity-90 mb-4 leading-relaxed">
          {description}
        </p>

        <button
          onClick={onRequest}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg text-sm md:text-base"
        >
          Request Project
        </button>
      </div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      title: "Economic Website",
      description:
        "Transform complex financial data into powerful insights with a modern, data-driven economic platform that helps businesses make smarter decisions faster.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
    {
      title: "Real Estate Website",
      description:
        "Showcase properties beautifully with advanced filters, maps, and a seamless user experience that converts visitors into serious buyers.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      title: "Portfolio Website",
      description:
        "Stand out with a stunning personal brand website designed to impress clients and turn your skills into real opportunities.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Boost your revenue with a high-converting affiliate system built to promote products effectively and maximize your earnings.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
    {
      title: "Mobile App",
      description:
        "Deliver exceptional user experiences with fast, scalable mobile apps that users love and businesses rely on.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Investment Website",
      description:
        "Build trust with a secure and intuitive investment platform featuring real-time tracking and powerful financial tools.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
  ];

  return (
    <section id="offer" className="relative w-full min-h-screen flex items-center justify-center">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Vid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10 underline">
          What We Offer
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              onRequest={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-center"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Let’s Build Something Amazing 🚀
              </h3>

              <p className="mb-6 text-gray-600 text-sm md:text-base">
                Ready to bring your idea to life? Contact us now and let's create
                a high-performing solution tailored just for you.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:nicetoonice5@gmail.com"
                  className="bg-blue-600 text-white py-2 rounded-lg"
                >
                  Email Us
                </a>

                <a
                  href="https://wa.link/yhgkhm"
                  className="bg-green-600 text-white py-2 rounded-lg"
                >
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 text-sm text-gray-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowcaseSection;