import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/index.js";
import { ClientsTestimonialsSection } from "./sections/ClientsTestimonialsSection/index.js";
import { HeroBannerSection } from "./sections/HeroBannerSection/index.js";
import { OfferingsSection } from "./sections/OfferingsSection/index.js";
import { ProjectsSection } from "./sections/ProjectsSection/index.js";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection.jsx";

export const Homepage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full overflow-x-hidden">
        <div className="flex w-full flex-col">
          <HeroBannerSection />
          <AboutUsSection />
          <ClientsTestimonialsSection />
          <ProjectsSection />
          <OfferingsSection />
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
};
