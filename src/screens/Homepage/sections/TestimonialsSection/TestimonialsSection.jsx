import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = () => {
  // Service items data
  const serviceItems = [
    {
      number: "01",
      title: "Logo and Visual Identity Design",
    },
    {
      number: "02",
      title: "Advertising Post Design",
    },
    {
      number: "03",
      title: "Print Material Design",
    },
    {
      number: "04",
      title: "Arabic Calligraphy Creation",
    },
    {
      number: "05",
      title: "Content and Social Media Account Management",
    },
  ];

  return (
    <section className="container flex flex-col items-center gap-10 py-16 sm:py-20 relative w-full bg-white">
      <div className="flex items-center w-full flex-col gap-6 relative">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-black text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-[normal]">
          What Do We Offer You?
        </div>

        <div className="relative w-[400px] h-3">
          <img
            className="w-full h-full"
            alt="Decorative underline"
            src="/vector-6.svg"
          />
        </div>

        <p className="w-full opacity-75 [font-family:'Poppins',Helvetica] text-lg md:text-xl text-center leading-[normal] font-normal text-black tracking-[0]">
          Whatever service you need, we promise professionalism and innovation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-14 relative w-full">
        <div className="flex flex-col items-start gap-6 relative flex-1 w-full">
          {serviceItems.map((item, index) => (
            <Card
              key={index}
              className="w-full border border-solid rounded-2xl overflow-hidden"
            >
              <CardContent className="flex items-center p-6">
                <div className="inline-flex items-center gap-4">
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-purple text-2xl tracking-[0] leading-[normal]">
                    {item.number}
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                    {item.title}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="hidden lg:block absolute w-[178px] h-[534px] top-[184px] left-[179px] rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
          <Card className="w-full lg:w-[375px] flex-shrink-0 rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="relative w-full aspect-square max-w-[367px] mx-auto">
                <img
                  className="w-full h-full object-contain"
                  alt="Design illustration"
                  src="/group-8.png"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-purple rounded-[32px]">
              <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                  Have you ever wondered how creativity turns into impact?
                </p>
                <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  At Sumou, we don&apos;t just design — we bring ideas to life.
                  Discover our journey in crafting visual magic.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-red rounded-[32px]">
              <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                  Looking for design experts who can turn your vision into
                  reality?
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
                    Talk to our specialists.
                  </p>
                  <div className="flex w-[50px] h-[50px] items-center justify-center p-2 bg-[#f8d9e0] rounded-[40px] overflow-hidden rotate-180">
                    <img
                      className="w-10 h-10 -rotate-180"
                      alt="Arrow"
                      src="/arrow-narrow-left.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <img
        className="absolute w-20 h-20 top-[18px] left-[298px]"
        alt="Decorative element"
        src="/sketch-annotation-element-stroke-icon-lines-pin.svg"
      />
    </section>
  );
};
