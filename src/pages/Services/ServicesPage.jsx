import React from "react";
import { OfferingsSection } from "../../screens/Homepage/sections/OfferingsSection/index.js";

export const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <OfferingsSection />
      {/* Add more Services specific content here */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Service Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure every project delivers exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-gray-600">We understand your business, goals, and target audience</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategy</h3>
            <p className="text-gray-600">We develop a comprehensive strategy tailored to your needs</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p className="text-gray-600">We bring your vision to life with precision and creativity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
