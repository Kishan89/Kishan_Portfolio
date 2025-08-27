import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-neutral-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient-pink dark:text-gradient-cyan"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden">
              <div className="absolute -inset-2 bg-glow-gradient rounded-2xl blur-2xl opacity-40 z-0 animate-pulse"></div>
              <img
                src={personalInfo.aboutImage}
                alt="Kishan - Profile"
                className="relative w-full h-full object-cover rounded-2xl z-10 shadow-2xl border-[4px] border-white/10"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Frontend Developer & Competitive Programmer
            </h3>

            <p className="text-base sm:text-lg leading-relaxed">
              I'm a passionate frontend and React developer focused on crafting
              responsive, intuitive UIs. I'm also a competitive programmer
              skilled in C++, DSA, and problem solving. With a strong foundation
              in Electronics and Communication Engineering, I bring a unique
              perspective to web development, combining technical precision with
              creative design.
            </p>
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="space-y-1">
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
              <div className="space-y-1">
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://kishan-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline"
                  >
                    https://kishan-eta.vercel.app/
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
