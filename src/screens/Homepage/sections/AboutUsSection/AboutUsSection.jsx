import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      name: "Noura Al-Kuwari",
      company: "Oasis Touch – لمسات الواحة للعناية بالبشرة (Doha)",
      isRtl: true,
      content:
        "Sumou helped me shape the brand's path from the very beginning. From the first consultation, I knew I was with the right team. They provided me with a full launch strategy and an opening campaign that elevated me to the competitive level. The team is cooperative and quick to understand.",
    },
    {
      name: "Maryam Al-Muhairi",
      company: "Saherat Abaya – ساحرات للعبايات (Dubai)",
      isRtl: true,
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

  return (
    <section className="container flex flex-col items-center gap-14 py-16 sm:py-20 overflow-hidden relative w-full bg-white">
      {/* Background decorative elements */}
      <div className="absolute w-full max-w-none h-[386px] top-[207px] left-0 overflow-hidden opacity-75">
        <div className="relative w-[1448px] h-[395px] -top-1 -left-1">
          <img
            className="absolute w-[1440px] h-[386px] top-1 left-1"
            alt="Layer"
            src="/layer-1-1.png"
          />
        </div>
      </div>

      <div className="absolute w-[390px] h-[1440px] top-[-322px] left-[525px] -rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Section header */}
      <div className="flex items-center w-full flex-col gap-6 relative self-stretch flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[56px] tracking-[0] leading-[normal]">
          Our Clients&#39; Testimonials
        </h2>

        <p className="self-stretch opacity-75 [font-family:'Poppins',Helvetica] text-xl text-center leading-[normal] relative font-normal text-black tracking-[0]">
          Our clients&#39; feedback is a living testament to our commitment to
          delivering comprehensive services.
        </p>
      </div>

      <img
        className="absolute w-[217px] h-3 top-[142px] left-[487px]"
        alt="Vector"
        src="/vector-160.svg"
      />

      {/* Testimonial cards */}
      <div className="items-start flex gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex-1 self-stretch border rounded-3xl">
            <CardContent className="flex flex-col gap-3 p-6">
              <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto]">
                <Avatar className="w-10 h-10 rounded-3xl border border-solid">
                  <AvatarFallback className="bg-white">
                    <UserIcon className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>

                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm text-right tracking-[0] leading-[21px] whitespace-nowrap">
                    {testimonial.name}
                  </div>

                  <div
                    className={`relative w-fit [font-family:'Poppins',Helvetica] font-normal text-gray-500 text-xs tracking-[0] leading-[21px] whitespace-nowrap ${
                      testimonial.isRtl ? "[direction:rtl]" : "text-right"
                    }`}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-[normal]">
                {testimonial.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex w-[1328px] items-start justify-between absolute top-[330px] left-14">
        <Button
          className="w-[50px] h-[50px] p-2 bg-purple rounded-[40px] overflow-hidden"
          variant="default"
        >
          <ArrowLeftIcon className="w-7 h-7" />
        </Button>

        <Button
          className="w-[50px] h-[50px] p-2 bg-purple rounded-[40px] overflow-hidden"
          variant="default"
        >
          <ArrowRightIcon className="w-7 h-7" />
        </Button>
      </div>
    </section>
  );
};
