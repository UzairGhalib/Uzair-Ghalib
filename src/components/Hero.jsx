import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import uzairImg from "./uzair.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center 
      text-center lg:text-left px-6 md:px-12 lg:px-20 pt-20 md:pt-24 
      bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 gap-10 lg:gap-16"
    >
      {/* === Left Content === */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight 
          text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
        >
          Hi, I’m Uzair Ghalib
        </motion.h1>

        {/* Type Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-teal-400 font-semibold mb-4"
        >
          <TypeAnimation
            sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md text-gray-300 leading-relaxed"
        >
          I build modern, responsive, and visually engaging interfaces using
          <span className="text-teal-400 font-medium"> React</span>,
          <span className="text-teal-400 font-medium"> Tailwind CSS</span>, and
          <span className="text-teal-400 font-medium"> Framer Motion</span>.
          I focus on delivering clean design, smooth interactions, and
          performance-driven creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="/src/assets/uzairghalibCV.pdf"
            download
            className="px-6 py-2 rounded-full font-medium text-white 
            bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 
            shadow-[0_0_15px_rgba(20,184,166,0.6)] hover:shadow-[0_0_25px_rgba(20,184,166,0.9)] 
            transition duration-300 text-center text-sm sm:text-base"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-2 rounded-full font-medium border-2 border-teal-400 text-teal-400 
            hover:bg-teal-400 hover:text-white shadow-[0_0_12px_rgba(20,184,166,0.5)] 
            transition duration-300 text-center text-sm sm:text-base"
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* === Right Side (Image) === */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center lg:justify-end flex-1 mb-8 lg:mb-0"
      >
        <div
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 
          rounded-full border-4 border-teal-400 
          shadow-[0_0_25px_rgba(20,184,166,0.6)] overflow-hidden bg-gray-900"
        >
          <img
            src={uzairImg}
            alt="Uzair Ghalib"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
