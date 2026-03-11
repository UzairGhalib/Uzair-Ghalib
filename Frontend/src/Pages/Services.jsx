// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaChartLine, 
  FaPaintBrush, 
  FaCloud, 
  FaCode, 
  FaNetworkWired,
  FaShieldAlt
} from "react-icons/fa";

// Services data with official brand colors & short description
const servicesList = [
  { 
    name: "Full Stack Web Development", 
    icon: <FaLaptopCode />, 
    color: "#007ACC", // Blue for coding
    description: "Complete web app solutions"
  },
  { 
    name: "Frontend Development (React.js, Tailwind)", 
    icon: <FaPaintBrush />, 
    color: "#61DAFB", // React color
    description: "Modern responsive interfaces"
  },
  { 
    name: "Backend Development (Node.js & Express)", 
    icon: <FaServer />, 
    color: "#339933", // Node green
    description: "Robust server-side logic"
  },
  { 
    name: "Database Design & Integration (MongoDB)", 
    icon: <FaDatabase />, 
    color: "#47A248", // MongoDB green
    description: "Efficient data storage"
  },
  { 
    name: "REST API Development & Integration", 
    icon: <FaCode />, 
    color: "#F7DF1E", // JS yellow
    description: "Seamless API connections"
  },
  { 
    name: "JWT Authentication & Security", 
    icon: <FaShieldAlt />, 
    color: "#FF4500", // Security red/orange
    description: "Secure user access"
  },
  { 
    name: "Responsive Web Design & UI/UX", 
    icon: <FaNetworkWired />, 
    color: "#6C63FF", // UI purple
    description: "Intuitive user experiences"
  },
  { 
    name: "Performance Optimization & Deployment", 
    icon: <FaChartLine />, 
    color: "#00BFFF", // Optimization cyan
    description: "Fast and scalable apps"
  },
];

// Background icons (same as before)
const backgroundIcons = [
  <FaLaptopCode />,
  <FaServer />,
  <FaDatabase />,
  <FaChartLine />,
  <FaPaintBrush />,
  <FaCloud />,
  <FaCode />,
  <FaNetworkWired />,
  <FaShieldAlt />,
];

const Services = () => {
  const primaryColor = "#000000";   // Black background

  return (
    <section className="relative min-h-screen px-6 py-16 overflow-hidden" style={{ backgroundColor: primaryColor }}>
      
      {/* Subtle Gradient Overlay */}
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Rotating Background Icons */}
      {Array.from({ length: 25 }).map((_, index) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        const size = 24 + Math.random() * 36;
        const duration = 20 + Math.random() * 20;
        return (
          <motion.div
            key={index}
            className="absolute text-white/20 pointer-events-none"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
            }}
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            {React.cloneElement(Icon, { size })}
          </motion.div>
        );
      })}

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 z-10 relative"
        style={{ color: "#F3F4F6" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span style={{ color: "#00d4ff" }}>Services</span>
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center shadow-sm cursor-pointer border-2 border-transparent hover:border-[#00d4ff]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-5xl mb-4" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
            <p className="text-white/70 text-sm font-medium">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="mt-16 text-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-white text-lg mb-4">
          I'm just a click away! Hire me for your next project.
        </p>
      <Link
        to="/contact"
        className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
        style={{ backgroundColor: "#00d4ff", color: "#000000" }}
      >
        Hire Me
      </Link>
      </motion.div>
    </section>
  );
};

export default Services;