import React from "react";
import { HeaderSection } from "../../screens/Homepage/sections/HeaderSection/index.js";
import { ConsultationSection } from "../../screens/Homepage/sections/ConsultationSection/index.js";

export const Layout = ({ children }) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full overflow-x-hidden">
        <div className="flex w-full flex-col">
          <HeaderSection />
          <main className="flex-1">
            {children}
          </main>
          <ConsultationSection />
        </div>
      </div>
    </div>
  );
};
