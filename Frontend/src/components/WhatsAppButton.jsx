// src/components/WhatsAppButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({ language = "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const whatsappNumber = "+923329477052";

  // Multi-language messages
  const messages = {
    en: {
      default: "Hi! I’d like to discuss a project with you.",
      header: "Contact me - I'm Online",
      send: "Send",
    },
    ur: {
      default: "سلام! میں آپ سے پروجیکٹ کے بارے میں بات کرنا چاہتا ہوں۔",
      header: "مجھ سے رابطہ کریں - میں آن لائن ہوں",
      send: "ارسال کریں",
    },
    // Add more languages as needed
  };

  const handleSend = () => {
    const text = encodeURIComponent(
      document.getElementById("waMessage").value || messages[language].default
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  // Optional: Toggle online/offline every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => setIsOnline((prev) => !prev), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {/* Chat Bubble */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 80, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm md:w-80 bg-gray-900 text-white rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
            drag="y"
            dragConstraints={{ top: 0, bottom: 100 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              // Close if dragged down
              if (info.point.y > 50) setIsOpen(false);
            }}
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-2 flex justify-between items-center rounded-t-2xl">
              <h4 className="font-semibold text-sm md:text-base">
                {messages[language].header}
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white font-bold text-lg md:text-xl"
              >
                &times;
              </button>
            </div>

            {/* Textarea */}
            <div className="p-4">
              <textarea
                id="waMessage"
                defaultValue={messages[language].default}
                className="w-full h-24 p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none resize-none text-sm md:text-base"
              />
              <button
                onClick={handleSend}
                className="mt-3 w-full bg-[#25D366] hover:bg-[#1DA851] py-2 rounded-lg font-semibold transition text-sm md:text-base"
              >
                {messages[language].send}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Online/Offline Pulse */}
        <span
          className={`absolute top-0 right-0 w-3 h-3 rounded-full border border-white animate-pulse`}
          style={{
            backgroundColor: isOnline ? "#22c55e" : "#9ca3af",
          }}
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] shadow-lg rounded-full w-14 h-14 text-white text-2xl cursor-pointer"
        >
          <FaWhatsapp />
        </button>

        {/* Tooltip for Desktop */}
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:inline-block bg-black/80 text-white text-sm font-medium px-3 py-1 rounded-lg absolute right-full mr-4 whitespace-nowrap"
        >
          Contact me on WhatsApp
        </motion.span>
      </motion.div>
    </>
  );
}