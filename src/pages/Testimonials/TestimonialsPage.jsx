import React from "react";
import { TestimonialsSection } from "../../screens/Homepage/sections/TestimonialsSection/TestimonialsSection.jsx";

export const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <TestimonialsSection />
      {/* Add more Testimonials specific content here */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their goals and transform their digital presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">150% Increase in Sales</h3>
            <p className="text-gray-700 mb-4">
              "After partnering with Sumou, our e-commerce platform saw a remarkable transformation. 
              The new design and marketing strategy resulted in a 150% increase in online sales within just 3 months."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-purple-700">SA</span>
              </div>
              <div>
                <p className="font-semibold">Sarah Ahmed</p>
                <p className="text-gray-600">CEO, Fashion Forward</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">300% Growth in Brand Awareness</h3>
            <p className="text-gray-700 mb-4">
              "The comprehensive brand identity and marketing campaign created by Sumou helped us achieve 
              unprecedented brand recognition in our target market."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-700">MK</span>
              </div>
              <div>
                <p className="font-semibold">Mohammed Khan</p>
                <p className="text-gray-600">Founder, Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">120+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
