import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import AboutUsImage from "../../imgs/AboutUs.png"

export const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex flex-col items-center gap-8 py-16 sm:py-20 bg-white px-4">
      <header className="flex flex-col items-center gap-4 w-full">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[56px] animate-fade-in">
          About Us
        </h2>
        <p className="opacity-75 font-['Poppins',Helvetica] text-xl text-center font-normal text-black">
          Get to know Sumou up close.
        </p>
      </header>

      <Card
        className="w-[1000px] h-[520px] border border-solid p-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-[16px] opacity-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="flex flex-col items-center gap-8 p-8">
          <div
            className={`transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <img
              className="w-full max-w-[800px] h-[200px] object-cover"
              alt="Sumou logo"
              src= {AboutUsImage}
            />
          </div>

          <p className="font-['Poppins',Helvetica] font-normal text-black text-[22px] leading-[35px] text-left">
            <span className="font-light">
              Sumou is a company specialized in{" "}
            </span>
            <span className=" font-bold text-purple text-[22px] leading-[35px] hover:scale-105  transition-transform duration-300">
              visual identity design, advertising content creation
            </span>
            <span className="font-light">, and </span>
            <span className=" font-bold text-purple text-[22px] leading-[35px] hover:scale-105 inline-block transition-transform duration-300">
              creative consulting
            </span>
            <span className="font-light">
              {" "}
              for entrepreneurs and emerging brands. 
              </span>
              <br/>

              <span>
              Our goal is to empower
              brands to stand out in the market through creative solutions built
              on strategic vision and refined taste.
            </span>
          </p>

          <div className="flex items-start gap-6">
            <Button className="bg-purple text-white px-8 py-3 rounded-xl font-['Alexandria',Helvetica] font-medium text-lg tracking-[0.18px] leading-6 hover:bg-purple/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Our Services
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[#4c31af] text-purple px-8 py-3 rounded-xl font-['Alexandria',Helvetica] font-medium text-lg tracking-[0.18px] leading-6 hover:bg-purple hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
