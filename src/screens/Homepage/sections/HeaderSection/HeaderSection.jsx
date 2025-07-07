import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { text: "Home", active: activeSection === "Home" },
    { text: "About Us", active: activeSection === "About Us" },
    { text: "Our Services", active: activeSection === "Our Services" },
  ];

  const rightNavItems = [
    { text: "Testimonials", active: activeSection === "Testimonials" },
    { text: "Our Projects", active: activeSection === "Our Projects" },
    { text: "Contact Us", active: activeSection === "Contact Us" },
  ];

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="h-[80px] sm:h-[100px] w-full my-10" /> {/* Responsive spacer */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-center h-[80px] sm:h-[100px]">
          {/* Left nav */}
          <div className="flex flex-1 justify-end gap-2 sm:gap-3 md:gap-4">
            {leftNavItems.map((item, index) => (
              <button
                key={`left-nav-${index}`}
                onClick={() => handleNavClick(item.text)}
                className={`relative w-fit font-['Poppins'] text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] tracking-[0] whitespace-nowrap cursor-pointer transition-all duration-300 hover:text-[#FF3333] ${
                  item.active
                    ? "font-semibold text-[#1F1F1F]"
                    : "font-normal text-[#1F1F1F]"
                }`}
              >
                {item.text}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full shadow-[0_2px_4px_rgba(255,51,51,0.3)] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center mx-10 sm:mx-16">
            <img
              src="/src/screens/Homepage/imgs/logo 1 1.png"
              alt="Sumou Logo"
              className="w-[70px] sm:w-[100px] md:w-[120px] h-[50px] sm:h-[60px] md:h-[75px] object-contain hover:scale-110 transition-transform duration-300"
              style={{ opacity: 1, transform: "rotate(0deg)" }}
            />
          </div>

          {/* Right nav */}
          <div className="flex flex-1 justify-start gap-2 sm:gap-3 md:gap-4">
            {rightNavItems.map((item, index) => (
              <button
                key={`right-nav-${index}`}
                onClick={() => handleNavClick(item.text)}
                className={`relative w-fit font-['Poppins'] text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] tracking-[0] whitespace-nowrap cursor-pointer transition-all duration-300 hover:text-[#FF3333] ${
                  item.active
                    ? "font-semibold text-[#1F1F1F]"
                    : "font-normal text-[#1F1F1F]"
                }`}
              >
                {item.text}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full shadow-[0_2px_4px_rgba(255,51,51,0.3)] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Language Button */}
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            <Button className="bg-purple rounded-lg hover:bg-purple/90 transition-all duration-300 hover:rotate-12 text-[14px] sm:text-[18px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]">
              <span className="font-['Poppins'] font-normal text-white leading-[20px] sm:leading-[24px] tracking-[0] whitespace-nowrap">
                ع
              </span>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};
