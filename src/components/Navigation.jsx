import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navigation({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl cursor-pointer select-none">
            TravelEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-500 transition">Home</a>
            <a href="#destinations" className="hover:text-cyan-500 transition">Destinations</a>
            <a href="#about" className="hover:text-cyan-500 transition">About</a>
            <a href="#contact" className="hover:text-cyan-500 transition">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
          <a href="#home" className="block px-3 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition">Home</a>
          <a href="#destinations" className="block px-3 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition">Destinations</a>
          <a href="#about" className="block px-3 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition">About</a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
