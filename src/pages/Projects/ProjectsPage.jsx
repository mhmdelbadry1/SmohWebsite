import React from "react";
import { ProjectsSection } from "../../screens/Homepage/sections/ProjectsSection/index.js";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <ProjectsSection />
      {/* Add more Projects specific content here */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Project Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio across different industries and project types
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
            <p className="text-gray-600 mb-4">Complete brand identity packages including logos, color schemes, and brand guidelines</p>
            <span className="text-purple-600 font-medium">15+ Projects</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
            <p className="text-gray-600 mb-4">Modern, responsive websites that convert visitors into customers</p>
            <span className="text-purple-600 font-medium">25+ Projects</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Marketing Campaigns</h3>
            <p className="text-gray-600 mb-4">Integrated marketing campaigns across digital and traditional channels</p>
            <span className="text-purple-600 font-medium">20+ Projects</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
            <p className="text-gray-600 mb-4">User-friendly mobile applications for iOS and Android platforms</p>
            <span className="text-purple-600 font-medium">12+ Projects</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
            <p className="text-gray-600 mb-4">Complete e-commerce solutions with payment integration and inventory management</p>
            <span className="text-purple-600 font-medium">18+ Projects</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Print Design</h3>
            <p className="text-gray-600 mb-4">Professional print materials including brochures, business cards, and packaging</p>
            <span className="text-purple-600 font-medium">30+ Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
