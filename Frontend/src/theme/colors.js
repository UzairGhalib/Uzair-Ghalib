// src/theme/colors.js - Comprehensive Color Palette

export const colors = {
  // Primary Colors
  primary: {
    background: "#000000",      // Pure Black for that deep, cinematic base
    text: "#F3F4F6",            // Off-white for high readability
    textMuted: "rgba(255, 255, 255, 0.7)", // 70% opacity white for descriptions
  },

  // Secondary (Accent)
  secondary: {
    accent: "#00d4ff",          // Vibrant Cyan used for headings, icons, and highlights
    accentBright: "#00ffff",    // Brighter cyan for peak animations
  },

  // Surface (Card)
  surface: {
    card: "rgba(255, 255, 255, 0.05)", // Very subtle white with 5% opacity for glassmorphism
  },

  // Borders
  border: {
    default: "transparent",     // Keeping cards clean until interaction
    hover: "#00d4ff",          // The Cyan accent used to define the card on hover
  },

  // Background Icons & Decorative Elements
  decorative: {
    icon: "rgba(0, 212, 255, 0.3)",    // Muted Cyan (30% opacity) for background decorative elements
    iconBright: "rgba(0, 212, 255, 0.5)", // 50% opacity Cyan
    iconPeak: "rgba(0, 255, 255, 0.7)",   // Brighter, 70% opacity Cyan for pulse animation
  },

  // Glow Effects
  glow: {
    primary: "rgba(0, 212, 255, 0.5)",  // 50% opacity Cyan used for text-shadow or box-shadow
    peak: "rgba(0, 255, 255, 0.7)",     // Brighter, 70% opacity Cyan for the pulse animation
    subtle: "rgba(0, 212, 255, 0.2)",   // Subtle glow
    medium: "rgba(0, 212, 255, 0.4)",   // Medium glow
  },
};

// Preset Shadows & Glows
export const glows = {
  sm: "0 0 15px rgba(0, 212, 255, 0.3)",
  md: "0 0 30px rgba(0, 212, 255, 0.5)",
  lg: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)",
  xl: "0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)",
};

// Preset Gradients
export const gradients = {
  glassCard: "rgba(255, 255, 255, 0.05)",
  cyanGlow: "radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)",
  cyanGlowSubtle: "radial-gradient(circle at 30% 30%, rgba(0,212,255,0.08), transparent 70%), radial-gradient(circle at 70% 70%, rgba(0,212,255,0.05), transparent 80%)",
};

// Export as default
export default colors;
