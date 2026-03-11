// src/components/ProfessionalExperience.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaServer, FaMobileAlt, FaProjectDiagram, FaTerminal, 
  FaDatabase, FaRocket, FaNetworkWired, FaMicrochip, FaUserShield, FaCloud, FaLayerGroup
} from "react-icons/fa";

/* ================= BACKGROUND ICON SET ================= */
const backgroundIcons = [
  FaCode,
  FaServer,
  FaMobileAlt,
  FaProjectDiagram,
  FaTerminal,
  FaDatabase,
  FaRocket,
  FaNetworkWired,
  FaMicrochip,
];

/* ================= EXPERIENCE DATA ================= */
const experiences = [
  {
    company: "SAT Software House, Swabi",
    role: "Web Developer",
    period: "Feb 2025 – Present",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    details: [
      "Developed responsive web applications using modern frontend frameworks.",
      "Integrated backend APIs and managed database connections.",
      "Implemented authentication, security, and production-ready features.",
    ],
    icon: <FaCode color="#007ACC" />, // Blue for coding / web
  },
  {
    company: "Soft Skills & Professional Attributes",
    role: "Critical Thinking & Problem Solving",
    period: "",
    tech: ["Professionalism", "Strong Work Ethic"],
    details: [
      "Demonstrates critical thinking and effective problem-solving skills.",
      "Maintains professionalism and strong work ethics in all projects.",
    ],
    icon: <FaUserShield color="#FF4500" />, // Red/Orange for professional skills
  },
];

/* ================= MAIN COMPONENT ================= */
export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="bg-black py-24 px-6 md:px-12 text-white relative overflow-hidden"
    >
      {/* ================= GLOWING FLOATING ICONS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 45 }).map((_, i) => {
          const Icon = backgroundIcons[i % backgroundIcons.length];
          const size = Math.random() * 36 + 18;
          const duration = Math.random() * 40 + 25;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.08,
                filter: "drop-shadow(0 0 12px rgba(0,212,255,0.45))",
              }}
              animate={{
                rotate: 360,
                y: [0, -25, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon size={size} color={i % 2 === 0 ? "#00d4ff" : "#61DAFB"} />
            </motion.div>
          );
        })}
      </div>

      {/* ================= RADIAL GLOW ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.04), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional <span style={{ color: "#00d4ff" }}>History</span>
          </h2>
          <p className="text-white/40 mt-3 uppercase tracking-widest text-xs">
            Web Development & Professional Skills
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#080808]/80 backdrop-blur-sm border border-white/5 p-8 rounded-4xl hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl flex flex-col group"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="text-3xl mb-4 w-fit p-3 rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] transition-all">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-wide">
                  {exp.company}
                </p>
                {exp.period && (
                  <p className="text-white/30 text-xs font-mono mt-2">{exp.period}</p>
                )}
              </div>

              {/* Details */}
              <ul className="space-y-4 grow mb-8">
                {exp.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/60 text-sm group-hover:text-white/80 transition-colors"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00d4ff]" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Tech / Skills */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md group-hover:border-[#00d4ff]/30 border border-transparent transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}