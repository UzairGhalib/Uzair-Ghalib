import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Laptop,
  Code,
  Star,
} from "lucide-react";

const education = [
  {
    year: "2020",
    title: "FSC",
    institute: "GHSS BAMKHEL",
    details: "740 (68% A)",
    icon: <BookOpen className="text-teal-400" size={26} />,
  },
  {
    year: "2021 - 2025",
    title: "Bachelor of Science (Computer Science)",
    institute: "University of Swabi",
    icon: <GraduationCap className="text-cyan-400" size={26} />,
  },
  {
    year: "2022",
    title: "Hafiz Quran",
    institute: "Masjid Hamza Pak",
    icon: <Star className="text-yellow-400" size={26} />,
  },
  {
    year: "2023",
    title: "IT (Microsoft Office) Diploma",
    institute: "Falcon Computer Institute (PAK)",
    details: "Certified from SDC Peshawar",
    icon: <Laptop className="text-green-400" size={26} />,
  },
  {
    year: "2023",
    title: "DIT (Diploma of Information Technology)",
    institute: "Government Technical College Swabi",
    icon: <Award className="text-indigo-400" size={26} />,
  },
  {
    year: "2025",
    title: "Web Development",
    institute: "SAT Software House Swabi",
    icon: <Code className="text-pink-400" size={26} />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-center"
    >
      {/* === Background Glow === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_75%)]"></div>

      {/* === Heading === */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_12px_rgba(45,212,191,0.5)]">
          Education
        </h2>
        <div className="mt-3 w-24 h-[3px] mx-auto rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
      </motion.div>

      {/* === Timeline === */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-teal-500/30"></div>

        <div className="space-y-14">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* === Timeline Dot === */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border-2 border-teal-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(45,212,191,0.4)] z-20">
                {item.icon}
              </div>

              {/* === Card === */}
              <div
                className={`sm:w-1/2 bg-gray-900/80 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_35px_rgba(45,212,191,0.4)] hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:text-right sm:pr-12"
                    : "sm:ml-auto sm:text-left sm:pl-12"
                }`}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-1 font-medium">
                  {item.institute}
                </p>
                {item.details && (
                  <p className="text-gray-400 text-sm mt-1 italic">
                    {item.details}
                  </p>
                )}
                <p className="text-teal-400 mt-2 font-semibold">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
