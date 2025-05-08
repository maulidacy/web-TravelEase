import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import Hero from "./components/Hero";
import Form from "./components/Form";
import DestinationCard from "./components/Card";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");
  const [results, setResults] = useState(null);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-cyan-100"
      }`}
    >
      {/* Theme Toggle */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Form & Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <Form onResults={setResults} theme={theme} />

        {/* Result Grid */}
        {results && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.rekomendasi.map((item, index) => (
              <DestinationCard key={index} data={item} theme={theme} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
