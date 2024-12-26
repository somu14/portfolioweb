import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selected_theme") === "dark"
  );

  // Apply theme based on state
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").setAttribute("theme", "dark");
      localStorage.setItem("selected_theme", "dark");
    } else {
      document.querySelector("body").setAttribute("theme", "light");
      localStorage.setItem("selected_theme", "light");
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav
      className="w-full top-0 shadow-md md:shadow-none md:ml-0 md:mr-32"
      style={{ backgroundColor: "var(--backgroundcolor)" }}
    >
      <ul className="flex flex-col sm:flex-row items-center justify-between list-none p-4 max-w-5xl mx-auto">
        
        <li className="font-bold inline-flex items-center mb-4 sm:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-3xl ${
                isActive ? "text-orange-400" : "text-[var(--textcolor)]"
              }`
            }
          >
            Tathagata
          </NavLink>
          <div className="ml-2 mt-1 transform transition-transform duration-500 hover:animate-spin-slow">
            {isDarkMode ? (
              <FiMoon onClick={toggleTheme} size={22} />
            ) : (
              <FiSun onClick={toggleTheme} size={22} />
            )}
          </div>
        </li>

        {/* Right Section - Links */}
        <div className="flex space-x-4">
          {["/Contact", "/Blog", "/Project"].map((link, index) => (
            <li key={index} className="p-2">
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `text-xl ${
                    isActive ? "text-orange-400" : "text-[var(--textcolor)]"
                  }`
                }
              >
                {link.replace("/", "")}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
