// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBook,
  FaCode,
  FaMicrochip,
  FaUserGraduate,
} from "react-icons/fa";

const backgroundIcons = [
  <FaGraduationCap />,
  <FaCertificate />,
  <FaBook />,
  <FaCode />,
  <FaMicrochip />,
  <FaUserGraduate />,
];

const educations = [
  {
    year: "2020",
    title: "FSC",
    institute: "GHSS BAMKHEL",
    details: "740 (68% A)",
    icon: <FaBook className="text-teal-400" />,
  },
  {
    year: "2021 - 2025",
    title: "Bachelor of Science (Computer Science)",
    institute: "University of Swabi",
    icon: <FaGraduationCap className="text-cyan-400" />,
  },
  {
    year: "2022",
    title: "Hafiz Quran",
    institute: "Masjid Hamza Pak",
    icon: <FaUserGraduate className="text-yellow-400" />,
  },
  {
    year: "2023",
    title: "IT (Microsoft Office) Diploma",
    institute: "Falcon Computer Institute (PAK)",
    details: "Certified from SDC Peshawar",
    icon: <FaMicrochip className="text-green-400" />,
  },
  {
    year: "2023",
    title: "DIT (Diploma of Information Technology)",
    institute: "Government Technical College Swabi",
    icon: <FaCertificate className="text-indigo-400" />,
  },
  {
    year: "2025",
    title: "Web Development",
    institute: "SAT Software House Swabi",
    icon: <FaCode className="text-pink-400" />,
  },
];

export default function Education() {
  const primaryColor = "#000000";
  const secondaryColor = "#00d4ff";

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] animation-pulse-slow -top-40 -left-24 opacity-20"
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[180px] animation-pulse-slower -bottom-36 -right-16 opacity-10"
          style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        />
      </div>

      {/* Floating Background Icons */}
      {Array.from({ length: 20 }).map((_, i) => {
        const Icon =
          backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];

        return (
          <motion.div
            key={i}
            className="absolute text-5xl pointer-events-none"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
              color: "rgba(0,212,255,0.15)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Icon}
          </motion.div>
        );
      })}

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          My <span style={{ color: secondaryColor }}>Education</span>
        </motion.h2>

        <p className="text-gray-400 mt-4 tracking-widest uppercase text-sm">
          Academic background & certifications
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* center line only for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l border-teal-500/30"></div>

        <div className="space-y-12">

          {educations.map((edu, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start md:items-center"
            >

              {/* ICON */}
              <div className="flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-gray-900 border-2 border-teal-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.4)] z-20">
                {edu.icon}
              </div>

              {/* CARD */}
              <div
                className={`ml-6 md:ml-0 md:w-1/2 bg-gray-900/80 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_35px_rgba(45,212,191,0.4)] hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "md:mr-auto md:text-right md:pr-14"
                    : "md:ml-auto md:text-left md:pl-14"
                }`}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                  {edu.title}
                </h3>

                <p className="text-gray-300 mt-1 font-medium">
                  {edu.institute}
                </p>

                {edu.details && (
                  <p className="text-gray-400 text-sm mt-1 italic">
                    {edu.details}
                  </p>
                )}

                <p className="text-teal-400 mt-2 font-semibold">
                  {edu.year}
                </p>
              </div>

            </motion.div>

          ))}

        </div>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%,100%{transform:scale(1);opacity:.2}
          50%{transform:scale(1.1);opacity:.3}
        }
        @keyframes pulseSlower {
          0%,100%{transform:scale(1);opacity:.1}
          50%{transform:scale(1.2);opacity:.2}
        }
        .animation-pulse-slow{
          animation:pulseSlow 8s infinite ease-in-out;
        }
        .animation-pulse-slower{
          animation:pulseSlower 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}