import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { 
  FaLaptopCode, FaShoppingCart, FaShieldAlt, 
  FaChartLine, FaPaintBrush, FaWordpress, 
  FaSearch, FaPhone, FaEnvelope, FaGlobe, FaCloud 
} from "react-icons/fa";

// Background icons for cinematic consistency
const backgroundIcons = [
  <FaLaptopCode />, <FaShoppingCart />, <FaShieldAlt />, 
  <FaChartLine />, <FaPaintBrush />, <FaWordpress />, 
  <FaSearch />, <FaPhone />, <FaEnvelope />, 
  <FaGlobe />, <FaCloud />
];

export default function ContactForm() {
  const secondaryColor = "#00d4ff";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {

        console.log("Sending Data:", values);

        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          alert("Message sent successfully!");
          resetForm();
        } else {
          alert(data.message || "Failed to send message.");
        }

      } catch (error) {

        console.error("Submission error:", error);
        alert("Server error. Please try again.");

      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.05), transparent 80%)",
          zIndex: 0,
        }}
      />

      {Array.from({ length: 20 }).map((_, index) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        return (
          <motion.div
            key={index}
            className="absolute text-6xl pointer-events-none"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
              color: "rgba(0, 212, 255, 0.2)",
            }}
            animate={{ 
              rotate: [0, 360, 0], 
              scale: [0.8, 1.1, 0.8],
              color: [
                "rgba(0, 212, 255, 0.25)",
                "rgba(0, 255, 255, 0.5)",
                "rgba(255, 255, 255, 0.3)",
                "rgba(0, 212, 255, 0.25)",
              ],
              textShadow: [
                "0 0 20px rgba(0, 212, 255, 0.2)",
                "0 0 50px rgba(0, 212, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.2)",
                "0 0 20px rgba(0, 212, 255, 0.2)",
              ],
            }}
            transition={{ duration: 20 + Math.random() * 15, repeat: Infinity, ease: "linear" }}
          >
            {Icon}
          </motion.div>
        );
      })}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative z-10"
      >
        Contact <span style={{ color: secondaryColor }}>Me</span>
      </motion.h2>

      <motion.form
        onSubmit={formik.handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto grid gap-6 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
      >

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all resize-none h-40"
        />

        <motion.button
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)",
            backgroundColor: "#00e5ff" 
          }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-[#00d4ff] text-black font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
        >
          {formik.isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

      </motion.form>
    </section>
  );
}