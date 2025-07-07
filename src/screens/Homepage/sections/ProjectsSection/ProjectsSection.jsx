import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container flex flex-col items-center gap-8 py-16 sm:py-20 bg-white w-full">
      <header className="flex flex-col items-center gap-4 w-full">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[56px] animate-fade-in">
          About Us
        </h2>
        <p className="opacity-75 font-['Poppins',Helvetica] text-xl text-center font-normal text-black">
          Get to know Sumou up close.
        </p>
      </header>

      <Card
        className="w-full max-w-3xl border border-solid p-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
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
              className="w-[500px] h-[155px] object-cover rounded-lg shadow-lg"
              alt="Sumou logo"
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=500&h=155&fit=crop"
            />
          </div>

          <p className="font-['Poppins',Helvetica] font-normal text-black text-[22px] leading-[35px] text-center">
            <span className="font-light">
              Sumou is a company specialized in{" "}
            </span>
            <span className="font-['Poppins',Helvetica] font-bold text-purple text-[22px] leading-[35px] hover:scale-105 inline-block transition-transform duration-300">
              visual identity design
            </span>
            <span className="font-light">, </span>
            <span className="font-['Poppins',Helvetica] font-bold text-purple text-[22px] leading-[35px] hover:scale-105 inline-block transition-transform duration-300">
              advertising content creation
            </span>
            <span className="font-light">, and </span>
            <span className="font-['Poppins',Helvetica] font-bold text-purple text-[22px] leading-[35px] hover:scale-105 inline-block transition-transform duration-300">
              creative consulting
            </span>
            <span className="font-light">
              {" "}
              for entrepreneurs and emerging brands. Our goal is to empower
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
