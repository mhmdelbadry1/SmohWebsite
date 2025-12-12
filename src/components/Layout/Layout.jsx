import React from "react";
import { Header } from "../../pages/Home/sections/Header/Header.jsx";
import { Consultation } from "../../pages/Home/sections/Consultation/Consultation.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full overflow-x-hidden">
        <div className="flex w-full flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Consultation />
        </div>
      </div>
    </div>
  );
};
