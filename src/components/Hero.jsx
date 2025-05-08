import React from "react";

export default function Hero({ theme }) {
  return (
    <section className={`py-20 text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-5xl font-bold mb-4">Welcome to Travel Ease</h1>
      <p className="text-xl max-w-xl mx-auto">
        Discover your perfect travel destinations based on your budget and preferences.
      </p>
    </section>
  );
}
