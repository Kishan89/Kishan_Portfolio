import React, { useRef } from "react";
import { experience } from "./data/portfolioData";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection({ isDarkMode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const textGradientMap = {
    cyan: "text-gradient-cyan",
    purple: "text-gradient-purple",
    pink: "text-gradient-pink",
  };

  const dotColorMap = {
    cyan: "from-cyan-400 via-cyan-500 to-cyan-600",
    purple: "from-purple-400 via-purple-500 to-purple-600",
    pink: "from-pink-400 via-pink-500 to-pink-600",
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary overflow-hidden ${
        isDarkMode ? "text-white" : "text-slate-800"
      }`}
    >
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[120%] h-[400px] bg-glow-gradient opacity-10 animate-pulse rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-gradient-purple dark:text-gradient-cyan"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-500 to-cyan-400">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-400 via-pink-500 to-cyan-400"
              style={{ height: timelineHeight }}
            />
          </div>

          {/* Timeline items */}
          {experience.map((exp, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            const dotColor =
              dotColorMap[exp.color] ||
              "from-cyan-400 via-purple-500 to-pink-500";

            const card = (
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`transition-all duration-300 rounded-xl shadow-md border p-6 max-w-xl hover:shadow-lg ${
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-md border-white/10 text-white"
                    : "bg-white/90 backdrop-blur-md border-slate-200 text-slate-800"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 ${
                    textGradientMap[exp.color] || "text-gradient-cyan"
                  }`}
                >
                  {exp.icon || <Briefcase className="inline w-4 h-4 mr-1" />}{" "}
                  {exp.title} – {exp.company}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    isDarkMode ? "text-white/70" : "text-slate-600"
                  }`}
                >
                  {exp.dates}
                </p>
                <div
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-white/90" : "text-slate-700"
                  }`}
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </motion.div>
            );

            const dot = (
              <motion.div
                className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-[3px] border-white bg-gradient-to-br ${dotColor} shadow-md`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
              />
            );

            return (
              <motion.div
                key={index}
                ref={ref}
                className="relative flex flex-col md:flex-row items-center mb-16 gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-full md:flex-1 md:pr-8">{card}</div>
                    {dot}
                    <div className="hidden md:block md:flex-1 md:pl-8" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:flex-1 md:pr-8" />
                    {dot}
                    <div className="w-full md:flex-1 md:pl-8">{card}</div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
