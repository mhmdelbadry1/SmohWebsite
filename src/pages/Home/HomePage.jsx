import React from "react";
import { HeroBanner } from "./sections/HeroBanner/HeroBanner.jsx";
import { AboutUs } from "./sections/AboutUs/AboutUs.jsx";
import { Services } from "./sections/Services/Services.jsx";
import { Projects } from "./sections/Projects/Projects.jsx";
import { Offerings } from "./sections/Offerings/Offerings.jsx";
import { Testimonials } from "./sections/Testimonials/Testimonials.jsx";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutUs />
      <Services />
      <Projects />
      <Offerings />
      <Testimonials />
    </div>
  );
};
