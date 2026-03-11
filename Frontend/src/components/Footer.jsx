// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/#faq" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/uzair-ghalib", color: "#0077B5" },
    { icon: <FaWhatsapp />, href: "https://wa.me/9233229477052", color: "#25D366" },
    { icon: <FaEnvelope />,   href:"https://mail.google.com/mail/?view=cm&to=Uzairghalib590@gmail.com&su=From%20Portfolio&body=Hello%20Uzair%20Ghalib,%0AI%20am%20contacting%20you%20regarding%20your%20portfolio."
        , color: "#D44638" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@uzairghalib09?_r=1&_t=ZS-94ZNFuogPZd", color: "#000000" },
  ];

  return (
    <footer className="relative text-white py-12 px-6 md:px-20 overflow-hidden" style={{ backgroundColor: "#000022" }}>

      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[140px] opacity-20 animate-pulse-slow"
          style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[180px] opacity-20 animate-pulse-slower"
          style={{ background: "radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent)" }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* Logo Section */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span style={{ color: "#00d4ff" }}>{`</`}</span>Uzair Ghalib
          <span style={{ color: "#00d4ff" }}>{`>`}</span>
          <p className="text-sm font-normal text-white/50 mt-2 italic">Building digital excellence.</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-[#F3F4F6] hover:text-[#00d4ff] transition-all font-medium relative group text-sm md:text-base"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-5 justify-center md:justify-end max-w-[250px]">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all transform hover:scale-125 text-2xl hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10 mt-12"></div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-6 text-sm text-white/50">
        © {new Date().getFullYear()} <span className="text-[#00d4ff]">Designed by Ghalib.</span> All rights reserved.
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        @keyframes pulseSlower {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.25; }
        }
        .animate-pulse-slow { animation: pulseSlow 8s infinite ease-in-out; }
        .animate-pulse-slower { animation: pulseSlower 10s infinite ease-in-out; }
      `}</style>
    </footer>
  );
}