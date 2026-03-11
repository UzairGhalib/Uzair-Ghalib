import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {

  const accent = "#00d4ff";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* NAVBAR */}
      <div
        className={`flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-lg bg-[#000000]/90 shadow-xl border-b border-white/5"
            : "backdrop-blur-sm bg-white/5"
        }`}
      >

        {/* LOGO */}
        <NavLink to="/">
          <div
            className="text-3xl font-extrabold tracking-wide"
            style={{ color: "#F3F4F6" }}
          >
            <span style={{ color: accent }}>{`</`}</span>
            Uzair Ghalib
            <span style={{ color: accent }}>{`>`}</span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative group py-2 ${
                    isActive
                      ? "text-[#00d4ff] drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]"
                      : "text-gray-200 hover:text-[#00d4ff]"
                  }`
                }
              >
                {link.name}

                {/* Animated underline */}
                <motion.span
                  layout
                  className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full"
                  style={{ background: accent }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl transition-colors hover:text-[#00d4ff]"
          style={{ color: "#F3F4F6" }}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#000000]/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="space-y-2 py-8 px-8">

              {LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-medium ${
                        isActive
                          ? "text-[#00d4ff] border-l-4 border-[#00d4ff] pl-4"
                          : "text-gray-200"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;