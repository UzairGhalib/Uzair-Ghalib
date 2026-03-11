// src/components/FAQSection.jsx
import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaQuestionCircle, FaCommentDots, FaLightbulb, 
  FaInfoCircle, FaHeadset, FaSearchPlus 
} from "react-icons/fa";

const faqs = [
  {
    question: "Which technologies do you use for Full Stack Web Development?",
    answer: "React.js, Node.js, Express, MongoDB/MySQL, REST APIs, JWT authentication.",
  },
  {
    question: "How do you structure your web applications?",
    answer: "I follow a modular, clean architecture with separate frontend, backend, and database layers.",
  },
  {
    question: "Do you deploy web applications?",
    answer: "Yes, I deploy apps on AWS, Vercel, or Netlify with proper environment and server setup.",
  },
  {
    question: "How do you ensure web application security?",
    answer: "JWT authentication, secure APIs, input validation, HTTPS, and other best practices.",
  },
  {
    question: "How do you optimize performance of web applications?",
    answer: "Optimized rendering, lazy loading, caching, and efficient API handling for scalability.",
  },
];

const backgroundIcons = [
  <FaQuestionCircle />, <FaCommentDots />, <FaLightbulb />, 
  <FaInfoCircle />, <FaHeadset />, <FaSearchPlus />
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const primaryColor = "#000000";
  const secondaryColor = "#00d4ff";

  return (
    <section
      id="faq"
      className="relative w-full min-h-screen py-24 px-4 md:px-20 overflow-hidden text-white"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -top-20 -left-20 opacity-20" 
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] -bottom-20 -right-20 opacity-10" 
          style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        />
      </div>

      {/* Rotating Shimmer Background Icons */}
      {Array.from({ length: 25 }).map((_, i) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-5xl pointer-events-none"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
              color: "rgba(0, 212, 255, 0.2)",
            }}
            animate={{ 
              rotate: [0, 360, 0], 
              scale: [0.8, 1.1, 0.8],
              color: [
                "rgba(0, 212, 255, 0.2)",
                "rgba(0, 255, 255, 0.5)",
                "rgba(255, 255, 255, 0.2)",
                "rgba(0, 212, 255, 0.2)",
              ],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Icon}
          </motion.div>
        );
      })}

      {/* Title */}
      <motion.div 
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Common <span style={{ color: secondaryColor }}>Questions</span>
        </h2>
        <p className="text-gray-400 tracking-widest uppercase text-sm">Everything you need to know about my Full Stack Web Development workflow</p>
      </motion.div>

      {/* FAQ Grid */}
      <div className="relative grid md:grid-cols-2 gap-6 max-w-6xl mx-auto z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl cursor-pointer hover:border-[#00d4ff]/40 transition-all duration-300 group"
          >
            <div className="relative flex justify-between items-start z-10 gap-4">
              <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? "text-[#00d4ff]" : "text-white"}`}>
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0, color: openIndex === index ? secondaryColor : "#fff" }}
                className="text-2xl mt-1"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-4 text-white/70 leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}