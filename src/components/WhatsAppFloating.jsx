import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "923191723237"; // ✅ Your WhatsApp number

  const handleSend = () => {
    if (!message.trim()) return;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ===== Floating WhatsApp Button ===== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </button>

      {/* ===== Chat Popup ===== */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 text-white p-3">
            <div>
              <h3 className="font-semibold text-base">Chat with Uzair</h3>
              <p className="text-xs text-green-100">
                Typically replies in minutes
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 bg-gray-50">
            <div className="bg-green-100 text-gray-800 p-2 rounded-lg text-sm mb-3">
              👋 Hi there! How can I help you today?
            </div>
            <textarea
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm text-black 
                         focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-100 flex justify-end">
            <button
              onClick={handleSend}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloating;

/* ===== Fade Animation (add below or in your global CSS) ===== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
`;
document.head.appendChild(style);
