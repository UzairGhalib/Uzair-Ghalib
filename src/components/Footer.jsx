import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Projects", link: "/#projects" },
    { name: "Education", link: "/#education" },
    { name: "Contact", link: "/#contact" },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, link: "https://wa.me/923191723237" },
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <SiTiktok />, link: "https://tiktok.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-400 pt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* === About === */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">
            Uzair Ghalib
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Passionate Frontend Developer focused on crafting responsive,
            modern, and visually appealing web experiences.
          </p>
        </div>

        {/* === Quick Links === */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-teal-400 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* === Social Links === */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* === Newsletter === */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to receive updates and project news.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="mt-12 border-t border-gray-800 py-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-teal-400">Uzair Ghalib</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
