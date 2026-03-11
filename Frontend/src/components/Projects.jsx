// src/components/Experience.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

// ===== PROJECT ASSETS =====
import recipeImg from "../assets/recipe.png";
import weatherImg from "../assets/weather.png";
import stopwatchImg from "../assets/stopwatch.png";
import quizImg from "../assets/quiz.png";
import quoteImg from "../assets/quote.png";
import newsImg from "../assets/news.png";
import ecommerceImg from "../assets/ecommerce.png";
import SATimg from "../assets/sat.png";
import portfolioImg from "../assets/portfolio.png";

// ===== BACKGROUND ICONS =====
import {
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaCogs,
  FaChartBar,
  FaUserShield,
  FaBoxOpen,
  FaTools,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";

const backgroundIcons = [
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaCogs,
  FaChartBar,
  FaUserShield,
  FaBoxOpen,
  FaTools,
  FaNetworkWired,
  FaLayerGroup,
];

const FloatingIcons = () => {
  const iconCount = 32;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: iconCount }).map((_, i) => {
        const Icon = backgroundIcons[i % backgroundIcons.length];
        const size = Math.random() * 40 + 18;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: `${top}%`, left: `${left}%`, color: "#00d4ff", opacity: 0.08 }}
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

// ===== PROJECT DATA =====
const projects = [
  { title: "RECIPE_FINDER", desc: "A recipe finder using an external API to display detailed recipes with ingredients and cooking steps.", tech: ["React", "API", "Tailwind"], image: recipeImg, link: "https://recepie-finder-kappa.vercel.app" },
  { title: "WETHER_APP", desc: "A live weather web app with React and weather API for forecasts and temperature updates.", tech: ["React", "API", "Weather"], image: weatherImg, link: "https://wether-app-gamma.vercel.app" },
  { title: "STOP WATCH", desc: "A modern stopwatch app with start, pause, and reset functionality built with React.", tech: ["React", "JS", "Timer"], image: stopwatchImg, link: "http://stopwacth-plum.vercel.app" },
  { title: "QUIZ_APP", desc: "A quiz app using React and Tailwind, allowing users to test their knowledge interactively.", tech: ["React", "Tailwind", "Quiz"], image: quizImg, link: "http://quiz-app-ivory-gamma.vercel.app" },
  { title: "QUOTE_GENERATOR", desc: "An API-powered quote generator that displays random motivational quotes instantly.", tech: ["React", "API", "Quotes"], image: quoteImg, link: "http://qout-generator.vercel.app" },
  { title: "NEWS_APP", desc: "A React-based news app showing global headlines and category-based articles via API.", tech: ["React", "API", "News"], image: newsImg, link: "http://news-app-pht1.vercel.app" },
  { title: "E-COMMERCE STORE", desc: "A stylish, responsive e-commerce web store featuring modern UI and product management.", tech: ["React", "Tailwind", "E-Commerce"], image: ecommerceImg, link: "http://style-wear.vercel.app" },
  { title: "PORTFOLIO WEBSITE", desc: "My modern portfolio site featuring smooth animations, project showcases, and skills section.", tech: ["React", "Framer Motion", "Tailwind"], image: portfolioImg, link: "#" },
  { title: "LMS for SAT SOFTWARE HOUSE", desc: "A professional LMS for SAT Software House, built with React, featuring course management, user authentication, and interactive learning modules.", tech: ["React", "Framer Motion", "Tailwind"], image: SATimg, link: "#" },
];

// ===== MAIN COMPONENT =====
export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const primaryColor = "#000000";
  const secondaryColor = "#00d4ff";

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="experience" className="relative min-h-screen px-6 py-20 overflow-hidden" style={{ backgroundColor: primaryColor }}>
      <FloatingIcons />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.06), transparent 70%)", zIndex: 0 }} />

      <motion.div className="text-center mb-20 relative z-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My Modern <span style={{ color: secondaryColor }}>Projects</span>
        </h2>
        <p className="text-white/40 mt-4 max-w-2xl mx-auto">
          Interactive React projects with APIs, modern UI, and real-world functionality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 max-w-7xl mx-auto">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0a0a0a] rounded-3xl border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-500 group shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-52 overflow-hidden bg-gray-900">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent" />
            </div>

            <div className="p-8 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest bg-white/5 text-[#00d4ff] px-3 py-1 rounded-full border border-[#00d4ff]/20">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">{project.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 hover:bg-[#00d4ff] hover:text-black group/btn">
                <span>View Case Study</span>
                <FaLink className="group-hover/btn:rotate-45 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toggle Show All / See Less */}
      <div className="flex justify-center mt-10 relative z-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 font-bold rounded-full bg-[#00d4ff] text-black hover:bg-teal-400 transition"
        >
          {showAll ? "See Less" : "See All Projects"}
        </button>
      </div>
    </section>
  );
}