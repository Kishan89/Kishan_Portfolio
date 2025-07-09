/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  safelist: [
    // Gradient utilities
    "text-gradient-cyan",
    "text-gradient-purple",
    "text-gradient-pink",
    "bg-gradient-primary",
    "bg-glow-gradient",

    // Card + hover effects
    "card-bg",
    "hover:text-cyan-400",
    "hover:text-purple-400",
    "hover:text-pink-400",
    "hover:text-emerald-400",

    // Text and backgrounds (used conditionally)
    "text-gray-800",
    "text-gray-700",
    "text-gray-900",
    "bg-white",
    "border-gray-300",
  ],

  theme: {
    extend: {
      colors: {
        "cyan-600": "#06b6d4",
        "gray-100": "#f3f4f6",
        "gray-800": "#1f2937",
      },
    },
  },

  plugins: [],
};
