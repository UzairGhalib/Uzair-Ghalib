// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import shafatImage from "../assets/uzair.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "Full Stack Developer",
  "React & Node.js Developer",
  "MERN Stack Developer",
];

const Home = () => {
  const primaryColor = "#000000";   // Black
  const secondaryColor = "#00d4ff"; // Cyan

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-24 pb-10"
      style={{ backgroundColor: primaryColor }}
    >

      {/* LEFT CONTENT */}
      <div className="flex-1 text-center md:text-left mt-10">

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#F3F4F6" }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
         Uzair Ghalib
        </motion.h1>

        {/* Typing Effect */}
        <div className="text-xl md:text-2xl font-medium h-10 mb-6" style={{ color: "#00d4ff" }}>
          <Typewriter
            words={roles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        <p className="text-base md:text-lg max-w-md mb-6" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Building scalable full stack web applications that combine powerful backend systems
          with modern, responsive user interfaces for high-performance digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6">
          <a
            href="/src/assets/uzairghalibCV.pdf"
            download
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
            style={{ backgroundColor: "#00d4ff", color: "#000000" }}
          >
            Download CV
          </a>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
            style={{ backgroundColor: "#00d4ff", color: "#000000" }}
          >
            Hire Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">

          <a
            href="https://github.com/UzairGhalib"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
            onMouseEnter={(e) => e.target.style.filter = "drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))"} 
            onMouseLeave={(e) => e.target.style.filter = "none"}
          >
            <AiFillGithub className="text-3xl" style={{ color: "#00d4ff" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/uzair-ghalib"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
            onMouseEnter={(e) => e.target.style.filter = "drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))"} 
            onMouseLeave={(e) => e.target.style.filter = "none"}
          >
            <AiFillLinkedin className="text-3xl" style={{ color: "#00d4ff" }} />
          </a>

<a
  href="https://mail.google.com/mail/?view=cm&to=Uzairghalib590@gmail.com&su=From%20Portfolio&body=Hello%20Uzair%20Ghalib,%0AI%20am%20contacting%20you%20regarding%20your%20portfolio."
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
  onMouseEnter={(e) => e.target.style.filter = "drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))"} 
  onMouseLeave={(e) => e.target.style.filter = "none"}
>
  <AiOutlineMail className="text-3xl" style={{ color: "#00d4ff" }} />
</a>
  

          <a
            href="https://wa.me/923329477052"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
            onMouseEnter={(e) => e.target.style.filter = "drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))"} 
            onMouseLeave={(e) => e.target.style.filter = "none"}
          >
            <FaWhatsapp className="text-3xl" style={{ color: "#00d4ff" }} />
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={shafatImage}
          alt="Uzair Ghalib"
          className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 shadow-lg"
          style={{ borderColor: secondaryColor }}
        />
      </motion.div>
    </section>
  );
};

export default Home;