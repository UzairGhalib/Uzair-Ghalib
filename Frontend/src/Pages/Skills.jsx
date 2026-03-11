// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaProjectDiagram,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaUserShield,
  FaCode,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "REST APIs", icon: <FaServer />, color: "#00AEEF" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Git & GitHub", icon: <SiGithub />, color: "#181717" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Teamwork", icon: <FaUsers />, color: "#FFD700" },
  { name: "Communication", icon: <FaLightbulb />, color: "#FFA500" },
  { name: "Time Management", icon: <FaClock />, color: "#00FF00" },
  { name: "Security Awareness", icon: <FaUserShield />, color: "#FF4500" },
];

const backgroundIcons = [
  <FaCode />,
  <FaServer />,
  <FaDatabase />,
  <SiReact />,
  <SiJavascript />,
  <SiMongodb />,
  <SiGit />,
  <SiDocker />,
];

export default function Skills() {
  const primaryColor = "#000000";

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Effect */}
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.05), transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Rotating Background Icons */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl pointer-events-none opacity-20"
          style={{
            top: `${Math.random() * 95}%`,
            left: `${Math.random() * 95}%`,
            zIndex: 0,
            color: "#00d4ff",
          }}
          animate={{ rotate: [0, 360], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {backgroundIcons[index % backgroundIcons.length]}
        </motion.div>
      ))}

      {/* Heading */}
      <div className="relative z-10 text-center max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-[#00d4ff]">Skills</span>
          </h2>
          <p className="text-white/40 mb-16 max-w-xl mx-auto">
            Expertise in scalable full stack development, modern frameworks,
            databases, DevOps, and professional soft skills.
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group bg-gradient-to-tr from-gray-900/40 to-gray-900/70 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-105 transition-all duration-500 cursor-default"
          >
            <div
              className="text-5xl mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.7)]"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="text-sm font-bold text-white group-hover:text-[#00d4ff] uppercase text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}