import React from "react";
import { AboutUsSection } from "../../screens/Homepage/sections/AboutUsSection/index.js";

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutUsSection />
      {/* Add more About Us specific content here */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a vision to transform businesses through innovative design and marketing solutions, 
              we have been at the forefront of creative excellence for years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey began with a simple belief: every brand has a unique story waiting to be told. 
              We help businesses discover and share their stories with the world.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To empower businesses with creative solutions that drive growth, build lasting relationships, 
              and create meaningful impact in their communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of design, strategy, and technology to transform ideas into 
              successful ventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
