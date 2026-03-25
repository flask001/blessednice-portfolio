import React from "react";

export default function GalaxyGrid() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Cosmic Gradient (Animated) */}
      <div className="cosmic-gradient absolute inset-0"></div>

      {/* Perspective Grid */}
      <div
        className="absolute inset-0 [transform:perspective(800px)_rotateX(60deg)]"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)] blur-3xl"></div>

      {/* Twinkling Stars */}
      <div className="stars"></div>
      <div className="stars opacity-30 scale-150"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen"></div>

      {/* CSS */}
      <style>{`

        /* Animated Gradient */
        .cosmic-gradient{
          position:absolute;
          inset:0;
          background:
          radial-gradient(circle at 30% 40%, rgba(168,85,247,0.25), transparent 40%),
          radial-gradient(circle at 70% 60%, rgba(59,130,246,0.25), transparent 40%);
          background-size: 200% 200%;
          animation: gradientFloat 12s ease-in-out infinite;
        }

        @keyframes gradientFloat {
          0%{
            background-position:50% 0%;
          }
          50%{
            background-position:50% 100%;
          }
          100%{
            background-position:50% 0%;
          }
        }

        /* Stars */
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
          animation: twinkle 6s infinite alternate;
          opacity:.5;
        }

        @keyframes twinkle{
          0%{opacity:.2}
          50%{opacity:.8}
          100%{opacity:.3}
        }

      `}</style>

    </div>
  );
}