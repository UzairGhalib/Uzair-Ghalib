// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FaQuoteLeft, FaLaptopCode, FaShoppingCart, FaShieldAlt, 
  FaChartLine, FaPaintBrush, FaSearch, FaEnvelope, FaGlobe 
} from "react-icons/fa";

import Mehran from "../assets/mehran.jpg";
import Usama from "../assets/usama.PNG";
import Uzair from "../assets/uzair.jpg";
import Farooq from "../assets/farooq.PNG";

const backgroundIcons = [
  <FaLaptopCode />, <FaShoppingCart />, <FaShieldAlt />, 
  <FaChartLine />, <FaPaintBrush />, <FaSearch />, 
  <FaEnvelope />, <FaGlobe />
];

const Testimonials = () => {
  const secondaryColor = "#00d4ff"; // Cyan Accent

  const testimonials = [
    {
      name: "Mehran Khan",
      role: "SEO Expert",
      img: Mehran,
      review: "Working with him was an exceptional experience. His ability to deliver high-quality full-stack solutions and optimize websites for maximum performance is remarkable.",
    },
    {
      name: "Osama Ali Shah",
      role: "AI Specialist",
      img: Usama,
      review: "His logical thinking and full-stack workflow are impressive. He consistently delivers scalable, clean, and efficient applications with strong backend logic.",
    },
    {
      name: "Muhammad shayan",
      role: "Web Developer",
      img: Uzair,
      review: "A creative and hardworking individual. His command over React, Tailwind and modern UI/UX principles makes him stand out in every project.",
    },
    {
      name: "Farooq Zia Yousafzai",
      role: "CEO – SAT Digital Uraan",
      img: Farooq,
      review: "A disciplined, reliable, and highly skilled developer with excellent problem-solving abilities.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animation-pulse-slow -top-40 -left-24 opacity-20" 
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[150px] animation-pulse-slower -bottom-36 -right-16 opacity-10" 
          style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        />
      </div>

      {/* Background Shimmer Icons */}
      {Array.from({ length: 15 }).map((_, i) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-5xl pointer-events-none"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              color: "rgba(0, 212, 255, 0.15)",
              zIndex: 0,
            }}
            animate={{ 
              y: [0, 20, 0], 
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Icon}
          </motion.div>
        );
      })}

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          What <span style={{ color: secondaryColor }}>People Say</span>
        </motion.h2>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Glow Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-[#00d4ff] to-transparent opacity-30 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-y-16 pt-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/40 transition-all duration-500 group shadow-2xl"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 text-4xl opacity-10 group-hover:opacity-30 group-hover:text-[#00d4ff] transition-all">
                   <FaQuoteLeft />
                </div>

                {/* Avatar & Header */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-white/10 group-hover:border-[#00d4ff] transition-colors shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#00d4ff]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F3F4F6]">{t.name}</h3>
                    <p style={{ color: secondaryColor }} className="text-sm font-medium tracking-wide uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed italic">
                  "{t.review}"
                </p>
                
                {/* Node Connector (Desktop) */}
                <div className={`absolute top-10 w-4 h-4 rounded-full bg-[#00d4ff] shadow-[0_0_15px_#00d4ff] hidden md:block
                  ${i % 2 === 0 ? "-right-[3.1rem]" : "-left-[3.1rem]"}`} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes pulseSlower {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
        .animation-pulse-slow { animation: pulseSlow 7s infinite ease-in-out; }
        .animation-pulse-slower { animation: pulseSlower 9s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default Testimonials;