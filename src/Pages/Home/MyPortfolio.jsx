import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink, Github } from "lucide-react";
import { projectCategories, projects } from "./data/portfolioData";

export default function MyPortfolio({ isDarkMode }) {
  const [activeProjectCategory, setActiveProjectCategory] =
    useState("react-native");

  const sectionBg = isDarkMode
    ? "bg-gradient-primary text-white"
    : "bg-slate-100 text-slate-900";

  const cardClasses = isDarkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10 text-white"
    : "bg-white border border-slate-200 text-slate-800";

  const gradientText = {
    "react-native": "text-gradient-cyan",
    frontend: "text-gradient-purple",
    react: "text-gradient-pink",
    nextjs: "text-gradient-cyan",
  };

  const chipColors = {
    "react-native":
      "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
    frontend:
      "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    react:
      "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30",
    nextjs:
      "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
  };

  const githubBtn = isDarkMode
    ? "border border-gray-700 text-white hover:bg-gray-800"
    : "border border-gray-300 text-gray-700 hover:bg-gray-100";

  const liveBtn = isDarkMode
    ? "border border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white"
    : "border border-cyan-500 text-cyan-600 hover:bg-cyan-100";

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg} relative overflow-hidden`}
    >
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[120%] h-[400px] bg-glow-gradient opacity-10 animate-pulse rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-14 text-gradient-pink dark:text-gradient-cyan leading-tight">
          Projects
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectCategories.map((category) => {
            const isActive = activeProjectCategory === category.id;
            const gradientBtn =
              category.color === "cyan"
                ? "from-cyan-500 to-blue-500"
                : category.color === "purple"
                ? "from-purple-500 to-indigo-500"
                : category.color === "pink"
                ? "from-pink-500 to-rose-500"
                : "from-emerald-500 to-teal-500";

            return (
              <button
                key={category.id}
                onClick={() => setActiveProjectCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${
                  isActive
                    ? `bg-gradient-to-r ${gradientBtn} text-white shadow-lg border-transparent`
                    : isDarkMode
                    ? "border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                    : "border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Mobile horizontal scroll cards */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-4 px-1 -mx-1">
          {projects[activeProjectCategory]?.map((project, index) => (
            <Card
              key={index}
              className={`${cardClasses} min-w-[270px] max-w-[300px] flex-shrink-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
            >
              {project.image && (
                <div className="overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90"
                  />
                </div>
              )}
              <CardHeader className="p-4 pb-2">
                <CardTitle
                  className={`text-lg font-bold ${gradientText[activeProjectCategory]}`}
                >
                  {project.title}
                </CardTitle>
                <CardDescription
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p
                  className={`text-sm font-medium mb-2 ${gradientText[activeProjectCategory]}`}
                >
                  Role: {project.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full border font-medium ${chipColors[activeProjectCategory]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${githubBtn}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${liveBtn}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Grid view */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects[activeProjectCategory]?.map((project, index) => (
            <Card
              key={index}
              className={`${cardClasses} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
            >
              {project.image && (
                <div className="overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90"
                  />
                </div>
              )}
              <CardHeader className="p-4 pb-2">
                <CardTitle
                  className={`text-lg font-bold ${gradientText[activeProjectCategory]}`}
                >
                  {project.title}
                </CardTitle>
                <CardDescription
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p
                  className={`text-sm font-medium mb-2 ${gradientText[activeProjectCategory]}`}
                >
                  Role: {project.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full border font-medium ${chipColors[activeProjectCategory]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${githubBtn}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${liveBtn}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
