import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

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
    <section className="container flex flex-col items-center gap-14 py-16 sm:py-20 w-full">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-6">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[56px] tracking-[0] leading-[normal]">
            Consultation Sessions
          </h2>

          <p className="max-w-[1192px] opacity-75 [font-family:'Poppins',Helvetica] text-xl text-center leading-[normal] font-normal text-black tracking-[0]">
            Get specialized consultations that help you overcome challenges and
            achieve your goals.
            <br /> Our team is ready to support you with expertise, offering
            practical and innovative solutions tailored to your needs.
          </p>
        </div>

        <Card className="w-[567px] bg-[#dbd6ef] rounded-[20px] p-3 border-none">
          <CardContent className="p-0 flex items-center gap-1">
            <div className="flex items-baseline justify-end gap-2.5 px-3 py-2 flex-1 bg-white rounded-2xl">
              <Input
                className="flex-1 opacity-50 [font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0] leading-6 border-none shadow-none"
                placeholder="Enter your email address"
              />

              <Button className="bg-purple inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-xl">
                <span className="[font-family:'Poppins',Helvetica] text-white font-medium text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Send
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="flex flex-col items-start gap-8 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="relative w-[153px] h-[75.0px] bg-[url(/layer-1-2.png)] bg-[100%_100%]" />

          <nav className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0] leading-6 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </nav>

          <img
            className="flex-none"
            alt="Social media"
            src="/social-media.svg"
          />
        </div>

        <Separator className="w-full h-px" />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {copyrightInfo.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-base leading-[22px] whitespace-nowrap tracking-[0]`}
              >
                {item.text}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {policyLinks.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-base leading-[22px] whitespace-nowrap tracking-[0]`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
