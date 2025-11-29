import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-neutral-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden hover-lift"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-3 bg-glow-gradient rounded-2xl blur-2xl opacity-50 z-0 animate-pulse"></div>
              <motion.img
                src={personalInfo.aboutImage}
                alt="Kishan - Profile"
                loading="lazy"
                className="relative w-full h-full object-cover rounded-2xl z-10 shadow-2xl border-4 border-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
              Frontend Developer & Competitive Programmer
            </h3>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I'm a passionate frontend and React developer focused on crafting
              responsive, intuitive UIs. I'm also a competitive programmer
              skilled in C++, DSA, and problem solving. With a strong foundation
              in Electronics and Communication Engineering, I bring a unique
              perspective to web development, combining technical precision with
              creative design.
            </p>
            
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
              <div className="space-y-1.5">
                <p>
                  <strong>Birthday:</strong> {personalInfo.birthday}
                </p>
                <p>
                  <strong>Age:</strong> {personalInfo.age}
                </p>
                <p>
                  <strong>Phone:</strong> {personalInfo.phone}
                </p>
                <p>
                  <strong>City:</strong> {personalInfo.city}
                </p>
              </div>
              <div className="space-y-1.5">
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://kishan-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 hover:underline transition-colors touch-target inline-block"
                  >
                    kishan-eta.vercel.app
                  </a>
                </p>
                <p>
                  <strong>Email:</strong> {personalInfo.email}
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
