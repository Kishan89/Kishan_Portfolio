/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  safelist: [
    // Gradient utilities
    "text-gradient-cyan",
    "text-gradient-purple",
    "text-gradient-pink",
    "text-gradient-emerald",
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
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },

  plugins: [],
};
