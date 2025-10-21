import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Utensils,
  CloudSun,
  Timer,
  HelpCircle,
  Quote,
  Newspaper,
  ShoppingBag,
  UserCircle2,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "RECIPE_FINDER",
    desc: "A recipe finder using an external API to display detailed recipes with ingredients and cooking steps.",
    link: "https://recepie-finder-kappa.vercel.app",
    github: "https://github.com/UzairGhalib/Recepie-finder.git",
    icon: <Utensils size={52} className="text-teal-400" />,
  },
  {
    title: "WETHER_APP",
    desc: "A live weather web app with React and weather API for forecasts and temperature updates.",
    link: "https://wether-app-gamma.vercel.app",
    github: "https://github.com/UzairGhalib/Wether-app.git",
    icon: <CloudSun size={52} className="text-yellow-400" />,
  },
  {
    title: "STOP WATCH",
    desc: "A modern stopwatch app with start, pause, and reset functionality built with React.",
    link: "http://stopwacth-plum.vercel.app",
    github: "https://github.com/UzairGhalib/stopwacth.git",
    icon: <Timer size={52} className="text-cyan-400" />,
  },
  {
    title: "QUIZ_APP",
    desc: "A quiz app using React and Tailwind, allowing users to test their knowledge interactively.",
    link: "http://quiz-app-ivory-gamma.vercel.app",
    github: "https://github.com/UzairGhalib/Quiz-app.git",
    icon: <HelpCircle size={52} className="text-indigo-400" />,
  },
  {
    title: "QUOTE_GENERATOR",
    desc: "An API-powered quote generator that displays random motivational quotes instantly.",
    link: "http://qout-generator.vercel.app",
    github: "https://github.com/UzairGhalib/qout-generator.git",
    icon: <Quote size={52} className="text-pink-400" />,
  },
  {
    title: "NEWS_APP",
    desc: "A React-based news app showing global headlines and category-based articles via API.",
    link: "http://news-app-pht1.vercel.app",
    github: "https://github.com/UzairGhalib/News-app.git",
    icon: <Newspaper size={52} className="text-orange-400" />,
  },
  {
    title: "E-COMMERCE STORE",
    desc: "A stylish, responsive e-commerce web store featuring modern UI and product management.",
    link: "http://style-wear.vercel.app",
    github: "https://github.com/UzairGhalib/Style-Wear.git",
    icon: <ShoppingBag size={52} className="text-green-400" />,
  },
  {
    title: "PORTFOLIO WEBSITE",
    desc: "My modern portfolio site featuring smooth animations, project showcases, and skills section.",
    link: "#",
    icon: <UserCircle2 size={52} className="text-teal-400" />,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1),transparent_70%)]"></div>

      {/* ===== Section Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]">
          My Projects
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          A selection of my modern, interactive web projects powered by React and APIs.
        </p>
      </motion.div>

      {/* ===== Project Grid ===== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setSelected(p)}
            className="relative bg-gray-900/60 backdrop-blur-md border border-gray-700/50 hover:border-teal-400/70 rounded-2xl p-6 shadow-[0_0_15px_rgba(45,212,191,0.15)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-500 group cursor-pointer"
          >
            {/* Floating Icon */}
            <div className="flex justify-center items-center h-28 mb-6">
              <motion.div
                whileHover={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="drop-shadow-[0_0_15px_rgba(45,212,191,0.7)]"
              >
                {p.icon}
              </motion.div>
            </div>

            {/* Project Info */}
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
              {p.desc}
            </p>

            <span className="inline-block text-teal-400 font-medium text-sm group-hover:text-teal-300 transition">
              View Details →
            </span>
          </motion.div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl max-w-lg w-full relative border border-teal-500/40"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-300 hover:text-white transition"
              >
                <X size={22} />
              </button>

              <div className="flex justify-center mt-8">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="drop-shadow-[0_0_15px_rgba(45,212,191,0.7)]"
                >
                  {selected.icon}
                </motion.div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-teal-400 mb-3">
                  {selected.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selected.desc}</p>

                {/* Two Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold px-5 py-2 rounded-full transition"
                  >
                    Visit Project
                  </a>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-gray-900 font-semibold px-5 py-2 rounded-full transition"
                  >
                    <Github size={18} /> View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
