import React, { useState, useContext, useRef } from "react";
import EducationSection from "../EducationSection";
import AboutSection from "../AboutSection";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import { ThemeContext } from "../../../App";
import MyExperience from "../MyExperience";

export default function Home() {
  const [activeProjectCategory, setActiveProjectCategory] =
    useState("react-native");

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const contactRef = useRef(null);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <HeroSection
        isDarkMode={isDarkMode}
        onContactClick={handleContactClick}
      />
      <AboutSection isDarkMode={isDarkMode} />
      <EducationSection isDarkMode={isDarkMode} />
      <MyExperience isDarkMode={isDarkMode} />
      <MySkills isDarkMode={isDarkMode} />
      <MyPortfolio
        isDarkMode={isDarkMode}
        activeProjectCategory={activeProjectCategory}
        onCategoryChange={setActiveProjectCategory}
      />
      <ContactMe isDarkMode={isDarkMode} ref={contactRef} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
