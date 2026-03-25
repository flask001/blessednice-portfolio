// src/components/Alert.jsx
import React, { useState } from "react";

const Alert = ({
  title = "Welcome 👋",
  message = `We develop professional 💼 websites 🌐 & mobile apps 📱 for businesses 🏢 to grow fast 📈 and reach more customers 👥 online 🌍🔥
🚀 Digital Marketing | 🎨 Graphics Design
💻 Digital Entrepreneur
💰 Finance | 📈 Sales | 🎬 Content Creator | 📺 YouTuber`,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-50 animate-slide-in">
      <div className="w-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-4 sm:p-5">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 text-gray-400 hover:text-red-500 transition text-lg"
          >
            ✕
          </button>
        </div>

        {/* Message */}
        <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {message}
        </p>

        {/* CTA */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="px-3 py-2 text-xs sm:text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Get Started 🚀
          </button>
          <button className="px-3 py-2 text-xs sm:text-sm border rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-slide-in {
            animation: slideIn 0.4s ease-out;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px) translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Alert;