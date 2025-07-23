import React, { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../../App";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // "Experience" inserted after "Education"
  const navItems = [
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-16 backdrop-blur-md border-b shadow-md ${
        isDarkMode ? "border-white/10" : "border-slate-300"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="text-[1.75rem] leading-[2.25rem] font-bold cursor-pointer bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kishan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`px-3 py-1.5 rounded-md text-base font-medium transition duration-300 ${
                  isDarkMode
                    ? `hover:text-cyan-400 hover:bg-white/10 ${
                        activeSection === item.toLowerCase()
                          ? "text-cyan-400 bg-white/10"
                          : "text-white"
                      }`
                    : `hover:text-pink-600 hover:bg-pink-100 ${
                        activeSection === item.toLowerCase()
                          ? "text-pink-600 bg-pink-100"
                          : "text-slate-800"
                      }`
                }`}
              >
                {item}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-full transition ${
                isDarkMode
                  ? "text-white hover:text-cyan-400 border border-white/30 bg-white/5"
                  : "text-slate-800 hover:text-pink-600 border border-gray-300 bg-white"
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden relative flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                isDarkMode
                  ? "text-white hover:text-cyan-400"
                  : "text-slate-800 hover:text-pink-600"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger */}
            <div className="relative">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={`p-2 rounded-md transition ${
                  isDarkMode
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-800 hover:text-pink-600"
                }`}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Animated Dropdown Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute right-0 top-full mt-2 w-48 rounded-xl shadow-xl ring-1 ring-black/10 z-40 backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-slate-900/80 text-white"
                        : "bg-white/80 text-slate-800"
                    }`}
                  >
                    <div className="absolute top-[-6px] right-4 w-3 h-3 rotate-45 z-[-1] bg-inherit shadow-sm border-t border-l border-black/10 dark:border-white/10" />

                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleNavClick(item.toLowerCase())}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition ${
                          isDarkMode
                            ? `hover:text-cyan-400 hover:bg-white/10 ${
                                activeSection === item.toLowerCase()
                                  ? "text-cyan-400 bg-white/10"
                                  : ""
                              }`
                            : `hover:text-pink-600 hover:bg-pink-100 ${
                                activeSection === item.toLowerCase()
                                  ? "text-pink-600 bg-pink-100"
                                  : ""
                              }`
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
