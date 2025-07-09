import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="w-full bg-gradient-primary text-slate-900 dark:text-white py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:gap-5">
        {/* Logo */}
        <img
          src={process.env.PUBLIC_URL + "/img/kishan-logo.svg"}
          alt="Kishan Logo"
          className="h-10 dark:invert"
        />

        {/* Divider */}
        <hr className="w-full border-white/10" />

        {/* Policy Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base font-medium text-slate-600 dark:text-white/70 text-center">
          {["Privacy_Policy", "Terms_of_Service", "Cookies_Settings"].map(
            (section, idx) => (
              <li key={idx}>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={section}
                  className="cursor-pointer hover:text-cyan-500 transition-colors"
                >
                  {section.replaceAll("_", " ")}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 text-center">
          © {new Date().getFullYear()} Kishan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
