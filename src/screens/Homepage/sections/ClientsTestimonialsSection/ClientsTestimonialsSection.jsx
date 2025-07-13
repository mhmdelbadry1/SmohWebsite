import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import insta from "../../imgs/insta.png";
import facebook from "../../imgs/facebook.png";
import linkedin from "../../imgs/linkedin.png";
import logo from '../../imgs/logo 1 1.png'

export const ClientsTestimonialsSection = () => {
  // Navigation links data
  const navLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Testimonials",
    "Our Projects",
    "Contact Us",
  ];

  // Footer copyright data
  const copyrightInfo = [
    { text: "©", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: "Sumou Advertising & Marketing Company",
      className: "[font-family:'Poppins',Helvetica]",
    },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: "All rights reserved",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  // Footer policy links data
  const policyLinks = [
    { text: "Privacy Policy", className: "[font-family:'Poppins',Helvetica]" },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: "Terms and Conditions",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  return (
    <section className="container flex flex-col items-center gap-8 md:gap-14 py-8 md:py-16 lg:py-20 w-full px-4">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl md:text-4xl lg:text-[56px] tracking-[0] leading-[normal] text-center">
            Consultation Sessions
          </h2>

          <p className="max-w-[1192px] opacity-75 [font-family:'Poppins',Helvetica] text-base md:text-lg lg:text-xl text-center leading-[normal] font-normal text-black tracking-[0] px-4">
            Get specialized consultations that help you overcome challenges and
            achieve your goals.
            <br className="hidden sm:block" /> 
            Our team is ready to support you with expertise, offering
            practical and innovative solutions tailored to your needs.
          </p>
        </div>

        <Card className="w-full max-w-[567px] bg-[#dbd6ef] rounded-[20px] p-3 border-none">
          <CardContent className="p-0 flex items-center gap-1">
            <div className="flex items-center justify-between gap-2.5 px-3 py-2 flex-1 bg-white rounded-2xl">
              <Input
                className="flex-1 opacity-50 [font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-6 border-none shadow-none bg-transparent min-h-[44px]"
                placeholder="Enter your email address"
              />

              <Button className="bg-[#4C31AF] inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3 rounded-xl flex-shrink-0">
                <span className="[font-family:'Poppins',Helvetica] text-white font-medium text-base md:text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Send
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="flex flex-col items-start gap-6 md:gap-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
          <img className="flex-none h-16 lg:h-auto order-1" alt="Logo" src={logo} />
          
          <nav className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 order-3 lg:order-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm lg:text-base xl:text-lg tracking-[0] leading-6 whitespace-nowrap hover:text-[#4C31AF] hover:scale-105 transition-all duration-300 cursor-pointer">
                {link}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-5 lg:gap-4 order-2 lg:order-3">
            <img className="flex-none w-12 h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" alt="Social media" src={facebook} />
            <img className="flex-none w-12 h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" alt="Social media" src={insta} />
            <img className="flex-none w-12 h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" alt="Social media" src={linkedin} />
          </div>
        </div>

        <Separator className="w-full h-px" />

        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-0">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 lg:gap-2">
            {copyrightInfo.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center lg:text-left hover:opacity-70 transition-opacity duration-300 cursor-pointer`}>
                {item.text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1 lg:gap-2">
            {policyLinks.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center lg:text-right hover:opacity-70 hover:text-[#4C31AF] transition-all duration-300 cursor-pointer`}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
