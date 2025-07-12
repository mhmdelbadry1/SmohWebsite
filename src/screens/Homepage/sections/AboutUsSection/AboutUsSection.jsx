import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import Rectangle from "../../imgs/Rectangle 1471.png";
import Background from "../../imgs/shape 1.png";

import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial data for mapping
  const testimonials = [
    {
      name: "Noura Al-Kuwari",
      company: "Oasis Touch – لمسات الواحة للعناية بالبشرة (Doha)",
      isRtl: false,
      content:
        "Sumou helped me shape the brand's path from the very beginning. From the first consultation, I knew I was with the right team. They provided me with a full launch strategy and an opening campaign that elevated me to the competitive level. The team is cooperative and quick to understand.",
    },
    {
      name: "Maryam Al-Muhairi",
      company: "Saherat Abaya – ساحرات للعبايات (Dubai)",
      isRtl: false,
      content:
        "I was looking for a team that understands the Emirati market taste while giving me a unique identity. Sumou impressed me with their deep understanding of luxury brands, and their designs were world-class. I worked with them on the visual identity and Instagram content strategy, and the results were very satisfying.",
    },
    {
      name: "Abdullah Al-Qahtani",
      company: "Q-Print – Digital Printing Press",
      isRtl: false,
      content:
        "I had worked with several agencies before Sumou, but none matched their level of professionalism and honesty. They helped me launch the brand from scratch, and every step with them was well thought out.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full min-h-[80vh] bg-white py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute w-full h-[386px] top-[207px] left-0 overflow-hidden opacity-75">
        <div className="relative w-full h-[395px] -top-1 -left-1">
          <img
            className="absolute w-full h-[386px] top-1 left-1"
            alt="Background"
            src={Background}
          />
          <img
            className="absolute w-full h-[386px] top-1 left-1"
            alt="Rectangle"
            src={Rectangle}
          />
        </div>
      </div>

      <div className="absolute w-[390px] h-[1440px] top-[-322px] left-[525px] -rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="relative">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-4xl md:text-5xl lg:text-6xl text-center">
              Our Clients' Testimonials
            </h2>

            {/* Underline decoration */}
            <div className="absolute -bottom-2 left-[35%] transform -translate-x-1/2 w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="217"
                height="12"
                viewBox="0 0 217 12"
                fill="none"
                className="w-full h-auto">
                <path
                  d="M1.47808 9.41159C37.324 9.41159 73.1699 9.5099 109.143 9.80479C126.685 9.90308 144.226 10.2963 161.768 10.2963C170.284 10.2963 178.928 10.2963 187.445 10.7877C191.512 10.9843 195.453 11.3775 199.393 11.7707C204.351 12.2621 207.783 11.8689 212.74 11.4758C216.935 11.1809 218.715 7.15086 214.901 5.28328C211.215 3.41571 208.8 1.843 204.351 1.25324C200.283 0.663484 196.215 0.466897 192.021 0.27031C183.504 -0.122864 174.86 -0.0245764 166.344 0.172011C148.04 0.565184 129.862 1.35153 111.558 2.13788C74.8224 3.61228 38.0867 5.28328 1.47808 7.15085C-0.428623 7.15085 -0.555736 9.41159 1.47808 9.41159Z"
                  fill="#DB4063"
                />
              </svg>
            </div>
          </div>

          <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-lg md:text-xl text-center max-w-4xl leading-relaxed">
            Our clients' feedback is a living testament to our commitment to
            delivering comprehensive services.
          </p>
        </div>

        {/* Testimonial cards container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg">
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </Button>

          {/* Testimonial cards */}
          <div className="flex gap-6 justify-center items-center">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-none bg-white rounded-[24px] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                style={{
                  width: "392px",
                  height: "249px",
                }}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* User info header */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="font-['Poppins',Helvetica] font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="font-['Poppins',Helvetica] font-normal text-gray-500 text-sm leading-relaxed">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="relative flex-1">
                    <p className="font-['Poppins',Helvetica] font-normal text-gray-700 text-[14px] leading-[140%] tracking-[0%]">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-[#4C31AF]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
