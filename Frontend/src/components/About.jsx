// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const primaryColor = "#000000";   // Black
  const secondaryColor = "#00d4ff"; // Cyan

  const shapes = [
    { size: 32, top: "10%", left: "5%", rotate: 45, border: "border-t-2 border-l-2" },
    { size: 24, top: "70%", left: "80%", rotate: 12, border: "border-r-2 border-b-2" },
    { size: 48, top: "50%", left: "50%", rotate: 0, border: "rounded-full border" },
    { size: 20, top: "30%", left: "75%", rotate: 30, border: "border-l border-b" },
    { size: 40, top: "80%", left: "20%", rotate: 60, border: "border-t-2 border-r-2" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.border} opacity-10 pointer-events-none`}
          style={{
            borderColor: "#00d4ff",
            width: `${shape.size}rem`,
            height: `${shape.size}rem`,
            top: shape.top,
            left: shape.left,
            transform: `rotate(${shape.rotate}deg)`,
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
          }}
          animate={{
            y: [0, 20, -10, 0],
            x: [0, -15, 10, 0],
            rotate: [shape.rotate, shape.rotate + 360, shape.rotate],
            boxShadow: [
              "0 0 20px rgba(0, 212, 255, 0.2)",
              "0 0 40px rgba(0, 212, 255, 0.3)",
              "0 0 20px rgba(0, 212, 255, 0.2)",
            ],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <motion.div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,212,255,0.08), transparent 70%), radial-gradient(circle at 70% 70%, rgba(0,212,255,0.05), transparent 80%)",
        }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 z-10"
        style={{ color: "#F3F4F6" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span style={{ color: "#00d4ff" }}>Me</span>
      </motion.h2>

      {/* Description */}
      <motion.div
        className="max-w-3xl text-center backdrop-blur-md p-8 rounded-2xl border z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "transparent",
          boxShadow:
            "0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Hello! I'm{" "}
          <span style={{ color: "#00d4ff" }} className="font-semibold">
            Uzair Ghalib
          </span>{" "}
          - a passionate Full Stack Developer specializing in building modern
          and scalable web applications. I work with technologies like React,
          Node.js, Express, and MongoDB to develop complete web solutions.
          My focus is on creating fast, secure, and user-friendly applications
          with clean architecture and efficient backend systems.
        </p>
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {[
          "Full Stack Development",
          "React.js",
          "Node.js & Express",
          "MongoDB Database",
          "REST API Development",
          "Web Deployement",
          "Responsive Web Design",
          "Frontend UI/UX",
          "Git & GitHub",
          "Performance Optimization",
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 rounded-full text-center font-medium text-xs md:text-sm border backdrop-blur-sm transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "transparent",
              color: "#F3F4F6",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "#00d4ff",
              backgroundColor: "#00d4ff",
              color: "#000000",
              boxShadow:
                "0 0 15px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;