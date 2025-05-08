import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}
