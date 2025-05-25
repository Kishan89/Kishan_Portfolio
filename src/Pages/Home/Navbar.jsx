import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../../App";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) closeMenu();
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/img/kishan-logo.svg"}
          alt="Kishan-logo"
        />
      </div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              to="heroSection"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="mySkills"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="AboutMe"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="MyPortfolio"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              My Portfolio
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="icon sun-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="orange"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <g className="rays">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          ) : (
            <svg
              className="icon moon-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gold"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </div>
      </div>
      <Link
        onClick={closeMenu}
        to="Contact"
        className="btn btn-outline-primary"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
