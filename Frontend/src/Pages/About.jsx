// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Atom,
  Rocket,
  Users,
  FileSpreadsheet,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const aboutPoints = [
  {
    icon: <FaReact className="text-[#61DBFB] w-6 h-6" />,
    text: "Frontend Developer — React.js & Tailwind specialist.",
  },
  {
    icon: <FaNodeJs className="text-[#68A063] w-6 h-6" />,
    text: "Backend Developer — Node.js & Express expert.",
  },
  {
    icon: <FaDatabase className="text-[#47A248] w-6 h-6" />,
    text: "Database Management — MongoDB & MySQL.",
  },
  {
    icon: <FaJs className="text-[#F7DF1E] w-6 h-6" />,
    text: "JavaScript Specialist — ES6+, MERN stack proficiency.",
  },
  {
    icon: <FaGitAlt className="text-[#F05032] w-6 h-6" />,
    text: "Version Control — Git & GitHub workflows.",
  },
  {
    icon: <FaHtml5 className="text-[#E34F26] w-6 h-6" />,
    text: "Markup & Styling — HTML5 & CSS3 best practices.",
  },
  {
    icon: <FaCss3Alt className="text-[#264DE4] w-6 h-6" />,
    text: "Responsive Design — Tailwind & CSS grid/flex layouts.",
  },
  {
    icon: <Palette className="text-cyan-400 w-6 h-6" />,
    text: "UI/UX Designer — Modern, clean, and user-friendly interfaces.",
  },
  {
    icon: <Rocket className="text-pink-400 w-6 h-6" />,
    text: "Optimized Builds — Fast, smooth, and efficient deployments.",
  },
  {
    icon: <Users className="text-amber-400 w-6 h-6" />,
    text: "Team Player — Collaborative and adaptable in projects.",
  },
  {
    icon: <FileSpreadsheet className="text-green-400 w-6 h-6" />,
    text: "MS Office Pro — Word, Excel, & PowerPoint for reporting.",
  },
  {
    icon: <Atom className="text-indigo-400 w-6 h-6" />,
    text: "Modern Stack — MERN: MongoDB, Express, React, Node.js.",
  },
];

// ✅ Store **component types** instead of JSX for background icons
const backgroundIcons = [
  FaReact, FaNodeJs, FaDatabase, FaJs, FaGitAlt, FaHtml5, FaCss3Alt
];

const About = () => {
  const primaryColor = "#000000";
  const secondaryColor = "#00d4ff";

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -top-20 -left-20 opacity-20"
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] -bottom-20 -right-20 opacity-10"
          style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        />
      </div>

      {/* Rotating Background Icons */}
      {Array.from({ length: 30 }).map((_, i) => {
        const Icon = backgroundIcons[i % backgroundIcons.length]; // component type
        const size = 24 + Math.random() * 36;
        const duration = 25 + Math.random() * 30;
        return (
          <motion.div
            key={i}
            className="absolute text-white/20 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <Icon size={size} /> {/* render component */}
          </motion.div>
        );
      })}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
      >
        About Me
      </motion.h2>

      {/* About Points Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1">{item.icon}</div>
            <p className="text-lg leading-relaxed text-white">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;