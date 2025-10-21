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

const aboutPoints = [
  {
    icon: <Code className="w-6 h-6 text-teal-400" />,
    text: "Frontend Developer — React + Tailwind specialist.",
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    text: "Creative Designer — Clean and modern UI/UX.",
  },
  {
    icon: <Atom className="w-6 h-6 text-indigo-400" />,
    text: "Modern Stack — React, JS, Tailwind & Framer Motion.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    text: "Optimized Builds — Fast, smooth, and efficient.",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-400" />,
    text: "Team Player — Collaborative and adaptable.",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-green-400" />,
    text: "MS Office Pro — Word, Excel & PowerPoint.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
      >
        About Me
      </motion.h2>

      {/* Two-column responsive layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
        {aboutPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1">{item.icon}</div>
            <p className="text-lg leading-relaxed text-gray-300">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
  