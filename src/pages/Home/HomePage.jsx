import React from "react";
import { HeroBannerSection } from "../../screens/Homepage/sections/HeroBannerSection/index.js";
import { AboutUsSection } from "../../screens/Homepage/sections/AboutUsSection/index.js";
import { ClientsTestimonialsSection } from "../../screens/Homepage/sections/ClientsTestimonialsSection/index.js";
import { ProjectsSection } from "../../screens/Homepage/sections/ProjectsSection/index.js";
import { OfferingsSection } from "../../screens/Homepage/sections/OfferingsSection/index.js";
import { TestimonialsSection } from "../../screens/Homepage/sections/TestimonialsSection/TestimonialsSection.jsx";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBannerSection />
      <AboutUsSection />
      <ClientsTestimonialsSection />
      <ProjectsSection />
      <OfferingsSection />
      <TestimonialsSection />
    </div>
  );
};
