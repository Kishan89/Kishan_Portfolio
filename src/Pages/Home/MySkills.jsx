import React from "react";
import { Code, Brain, Zap } from "lucide-react";
import { skills } from "./data/portfolioData";

export default function SkillsSection({ isDarkMode }) {
  const cardClasses = `card-bg border rounded-xl shadow-md p-6 transition-all duration-300 ${
    isDarkMode
      ? "border-white/10 text-white"
      : "border-slate-200 text-slate-800 bg-white/90"
  }`;

  const getIcon = (category) => {
    if (category === "Programming Languages")
      return <Code className="w-5 h-5 mr-2" />;
    if (category === "Soft Skills") return <Brain className="w-5 h-5 mr-2" />;
    if (category === "Interests") return <Zap className="w-5 h-5 mr-2" />;
    return <Code className="w-5 h-5 mr-2" />;
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary ${
        isDarkMode ? "text-white" : "text-slate-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient-pink dark:text-gradient-cyan">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className={`${cardClasses} hover:shadow-lg hover:scale-[1.02]`}
            >
              <div
                className={`mb-4 flex items-center text-lg font-semibold ${
                  isDarkMode ? "text-cyan-400" : "text-sky-600"
                }`}
              >
                {getIcon(category)}
                {category}
              </div>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm border font-medium transition duration-300 ${
                      isDarkMode
                        ? "text-white border-white/20 hover:border-cyan-400 hover:text-cyan-400"
                        : "text-slate-700 border-slate-300 hover:border-sky-500 hover:text-sky-600"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
