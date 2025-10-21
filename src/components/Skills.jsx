import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "MS Office", icon: <FaMicrosoft className="text-blue-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
      >
        Skills & Tools
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        A collection of technologies and tools I use to craft seamless,
        responsive, and high-performing web experiences.
      </motion.p>

      {/* ===== Skills Grid ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0 0 25px rgba(45,212,191,0.4)",
            }}
            className="flex flex-col items-center justify-center gap-3 bg-gray-800/50 p-6 rounded-2xl 
                       border border-gray-700/60 shadow-md backdrop-blur-md 
                       hover:border-teal-400 transition-all duration-500"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-gray-300 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
