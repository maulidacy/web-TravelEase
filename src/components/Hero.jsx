import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80')] bg-cover bg-center h-screen flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Unleash Your Wanderlust
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Book Your Next Journey
        </p>
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto shadow-xl">
          <p className="text-gray-800 italic text-lg mb-4">
            "Crafting Exceptional Journeys: Your Global Escape Planner"
          </p>
          <p className="text-gray-600">
            Unleash Your Wanderlust: Seamless Travel, Extraordinary Adventures
          </p>
        </div>
        
        <button className="mt-12 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default HeroSection;