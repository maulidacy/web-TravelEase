import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Form({ onResults, theme }) {
  const [budget, setBudget] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fetch data dari Flask API
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ budget }),
    });
    const data = await res.json();

    onResults(data);
    setIsLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`p-8 rounded-2xl shadow-xl ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="space-y-6">
        {/* Floating Label Input */}
        <div className="relative">
          <input
            id="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={`peer w-full p-4 pt-6 font-light border-2 rounded-md outline-none transition ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-neutral-300"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="budget"
            className={`absolute left-4 top-2 text-sm transition-all duration-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Budget (IDR)
          </label>
        </div>

        {/* Animated Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 rounded-md font-medium transition-colors ${
            theme === "dark"
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:to-blue-700 text-white"
          }`}
        >
          {isLoading ? "Memproses..." : "Dapatkan Rekomendasi"}
        </motion.button>
      </div>
    </motion.form>
  );
}
