// src/components/admin/ProjectAdmin.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaSave } from "react-icons/fa";
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
  FaLink,
} from "react-icons/fa";

// === BACKGROUND ICONS ===
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
  FaLink,
];

// === Floating Background Icons ===
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

// === Tech Tag Options ===
const TECH_OPTIONS = [
  "Flutter", "Firebase", "Firestore", "Firebase Auth", "Real-time DB",
  "REST APIs", "Backend APIs", "Database", "Full Stack", "Dart",
  "Provider", "BLoC", "Firebase Storage", "HTML", "JavaScript",
  "Git & GitHub"
];

// === Custom Multi-Select Tags Input (Upwork-style dropdown) ===
const TagsInput = ({ selectedTags, setSelectedTags }) => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const addTag = (tag) => {
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setInputValue("");
    setDropdownOpen(false);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const filteredOptions = TECH_OPTIONS.filter(
    (tech) => tech.toLowerCase().includes(inputValue.toLowerCase()) && !selectedTags.includes(tech)
  );

  // Close dropdown if click outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col" ref={containerRef}>
      <div
        className="flex flex-wrap gap-2 items-center p-3 rounded-lg bg-black border border-white/20 text-white cursor-text"
        onClick={() => setDropdownOpen(true)}
      >
        {selectedTags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#00d4ff] text-black px-3 py-1 rounded-full flex items-center gap-2"
          >
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="font-bold">×</button>
          </span>
        ))}
        <input
          type="text"
          placeholder="Type or select a tag..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag(inputValue.trim());
            }
          }}
          className="bg-black flex-1 text-white outline-none min-w-[120px]"
        />
      </div>

      {dropdownOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto bg-black border border-white/20 rounded-lg text-white shadow-lg">
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              className="px-3 py-2 hover:bg-[#00d4ff] hover:text-black cursor-pointer transition"
              onClick={() => addTag(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProjectAdmin = () => {
  const primaryColor = "#000000";
  const secondaryColor = "#00d4ff";

  const [projects, setProjects] = useState([
    {
      title: "Example Project",
      desc: "Short description",
      tech: ["Flutter", "Firebase"],
      image: null,
      link: "",
    },
  ]);

  const addProject = () => {
    setProjects([...projects, { title: "", desc: "", tech: [], image: null, link: "" }]);
  };

  const deleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  return (
    <section
      className="relative min-h-screen px-6 py-20 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      <FloatingIcons />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Admin Panel <span style={{ color: secondaryColor }}>Projects</span>
        </h2>

        <button
          onClick={addProject}
          className="mb-6 px-6 py-3 rounded-full font-bold text-black bg-[#00d4ff] hover:bg-[#00b8e0] flex items-center gap-2 transition"
        >
          <FaPlus /> Add New Project
        </button>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => deleteProject(index)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-400 transition"
              >
                <FaTrash />
              </button>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  className="p-3 rounded-lg bg-black border border-white/20 text-white"
                  value={project.title}
                  onChange={(e) => updateProject(index, "title", e.target.value)}
                />

                <textarea
                  placeholder="Project Description"
                  className="p-3 rounded-lg bg-black border border-white/20 text-white resize-none"
                  rows={4}
                  value={project.desc}
                  onChange={(e) => updateProject(index, "desc", e.target.value)}
                />

                <TagsInput
                  selectedTags={project.tech}
                  setSelectedTags={(tags) => updateProject(index, "tech", tags)}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => updateProject(index, "image", e.target.files[0])}
                  className="p-2 rounded-lg bg-black border border-white/20 text-white"
                />

                <input
                  type="text"
                  placeholder="GitHub Link"
                  className="p-3 rounded-lg bg-black border border-white/20 text-white"
                  value={project.link}
                  onChange={(e) => updateProject(index, "link", e.target.value)}
                />

                <button
                  className="mt-2 px-6 py-3 rounded-full font-bold text-black bg-[#00d4ff] hover:bg-[#00b8e0] flex items-center gap-2 transition"
                  onClick={() => alert("Saved! (Implement backend integration)")}
                >
                  <FaSave /> Save Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAdmin;