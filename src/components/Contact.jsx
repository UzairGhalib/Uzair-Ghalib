import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-teal-400" />,
    label: "Email",
    value: "uzairghalib590@gmail.com",
    link: "mailto:uzairghalib590@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6 text-cyan-400" />,
    label: "Phone",
    value: "+92 319 1723237",
    link: "tel:+923191723237",
  },
  {
    icon: <MapPin className="w-6 h-6 text-indigo-400" />,
    label: "Location",
    value: "Islamabad, Pakistan",
    link: "https://www.google.com/maps?q=Islamabad+Pakistan",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate. Let’s build something amazing together!
      </motion.p>

      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 via-gray-850/60 to-gray-900/50 
                       p-6 rounded-2xl shadow-md hover:shadow-teal-500/30 border border-gray-700/60 
                       backdrop-blur-md hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-gray-800 rounded-xl border border-gray-700">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">{item.label}</h4>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-400">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.a
        href="mailto:uzairghalib590@gmail.com"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 
                   text-white px-10 py-4 rounded-full font-medium shadow-lg 
                   hover:shadow-cyan-500/40 transition-all duration-500"
      >
        <Send className="w-5 h-5" />
        Send a Message
      </motion.a>
    </section>
  );
};

export default Contact;
