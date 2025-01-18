"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFull } from "react-icons/bs";

const themes = { winter: "winter", dracula: "dracula" };

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);
  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "winter" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFull className="h-4 w-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
