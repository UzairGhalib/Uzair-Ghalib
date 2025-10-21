import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", icon: <FaHome />, to: "home" },
    { name: "About", icon: <FaUser />, to: "about" },
    { name: "Skills", icon: <FaCode />, to: "skills" },
    { name: "Projects", icon: <FaProjectDiagram />, to: "projects" },
    { name: "Contact", icon: <FaEnvelope />, to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-teal-400 tracking-wide hover:text-teal-300 transition-all duration-300 cursor-pointer">
          Uzair <span className="text-gray-100">Ghalib</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 sm:gap-8 text-gray-300 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                className="flex items-center gap-2 cursor-pointer hover:text-teal-400 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-teal-400 text-xl sm:text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-sm border-t border-gray-800/30">
          <ul className="flex flex-col items-center py-4 sm:py-6 gap-4 sm:gap-6 text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:text-teal-400 transition-all duration-300 text-sm sm:text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
