import React from "react";
import { Download } from "lucide-react";
import { personalInfo } from "./data/portfolioData";
import { motion } from "framer-motion";

export default function HeroSection({ isDarkMode, onContactClick }) {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ${
        isDarkMode ? "bg-[#0f172a]" : "bg-slate-100"
      }`}
    >
      {isDarkMode && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 opacity-50"></div>
      )}

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className={`text-lg sm:text-xl md:text-2xl mb-2 ${
                isDarkMode ? "text-gray-300" : "text-slate-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              className={`text-base sm:text-lg mb-1 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Roll No: {personalInfo.rollNo}
            </motion.p>

            <motion.p
              className={`text-base sm:text-lg mb-4 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {personalInfo.degree}
            </motion.p>

            <motion.p
              className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 ${
                isDarkMode ? "text-gray-300" : "text-slate-800"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                onClick={onContactClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full text-base sm:text-lg transition duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>

              <a
                href="/Kishan_Resume.pdf"
                download
                className={`flex items-center justify-center border-2 px-6 py-3 rounded-full text-base sm:text-lg transition duration-300 ${
                  isDarkMode
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    : "border-cyan-600 text-cyan-600 hover:bg-cyan-100 hover:text-black"
                }`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          {/* Right: Image */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-cyan-400/30 z-0"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 transition-all duration-500 ease-in-out">
                <motion.img
                  src={personalInfo.profileImage || "/fallback-profile.png"}
                  alt={`${personalInfo.name || "Profile"} - Portfolio`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
