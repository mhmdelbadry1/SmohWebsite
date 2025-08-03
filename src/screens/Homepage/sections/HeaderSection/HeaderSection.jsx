import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { toggleLanguage, currentLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active section based on current route
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveSection("Home");
        break;
      case "/about":
        setActiveSection("About Us");
        break;
      case "/services":
        setActiveSection("Our Services");
        break;
      case "/projects":
        setActiveSection("Our Projects");
        break;
      case "/testimonials":
        setActiveSection("Testimonials");
        break;
      case "/contact":
        setActiveSection("Contact Us");
        break;
      default:
        setActiveSection("Home");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const allNavItems = [
    { text: t('header.home'), path: "/", active: activeSection === "Home" },
    { text: t('header.about'), path: "/about", active: activeSection === "About Us" },
    { text: t('header.services'), path: "/services", active: activeSection === "Our Services" },
    { text: t('header.testimonials'), path: "/testimonials", active: activeSection === "Testimonials" },
    { text: t('header.projects'), path: "/projects", active: activeSection === "Our Projects" },
    { text: t('header.contact'), path: "/contact", active: activeSection === "Contact Us" },
  ];

  const leftNavItems = allNavItems.slice(0, 3);
  const rightNavItems = allNavItems.slice(3);

  const handleNavClick = (item) => {
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="h-[100px] sm:h-[120px] w-full my-0" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isMobileMenuOpen ? "hidden" : ""
        } ${
          isScrolled
            ? "bg-white  shadow-lg"
            : "bg-transparent"
        }`}>
        <nav className="container flex items-center justify-between h-[80px] sm:h-[100px] px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full">
            {/* Left nav */}
            <div className="flex flex-1 justify-end gap-4">
              {leftNavItems.map((item, index) => (
                <button
                  key={`left-nav-${index}`}
                  onClick={() => handleNavClick(item)}
                  className={`relative font-poppins text-[16px] lg:text-[18px] transition-all duration-300 hover:text-[#FF3333] ${
                    item.active
                      ? "font-semibold text-[#1F1F1F]"
                      : "font-normal text-[#1F1F1F]"
                  }`}>
                  {item.text}
                  {item.active && (
                    <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full shadow" />
                  )}
                </button>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 mx-10">
              <img
                src="/logo.png"
                alt="Sumou Logo"
                className="w-[100px] h-[60px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Right nav */}
            <div className="flex flex-1 justify-start gap-4">
              {rightNavItems.map((item, index) => (
                <button
                  key={`right-nav-${index}`}
                  onClick={() => handleNavClick(item)}
                  className={`relative font-poppins text-[16px] lg:text-[18px] transition-all duration-300 hover:text-[#FF3333] ${
                    item.active
                      ? "font-semibold text-[#1F1F1F]"
                      : "font-normal text-[#1F1F1F]"
                  }`}>
                  {item.text}
                  {item.active && (
                    <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full shadow" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-[40px] h-[40px] space-y-1 transition-all duration-300"
              aria-label="Toggle mobile menu">
              <span
                className={`block w-6 h-0.5 bg-[#4C31AF] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#4C31AF] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#4C31AF] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo 1 1.png"
                alt="Sumou Logo"
                className="w-[90px] h-[90px] object-contain"
              />
            </div>

            {/* Lang Button */}
            <Button 
              onClick={toggleLanguage}
              className="bg-purple rounded-lg text-white text-sm w-[40px] h-[40px] hover:bg-purple-700 transition-colors duration-300"
            >
              {currentLanguage === 'en' ? 'ع' : 'EN'}
            </Button>
          </div>

          {/* Desktop Language Button */}
          <div className="hidden lg:flex ml-4">
            <Button 
              onClick={toggleLanguage}
              className="bg-purple rounded-lg text-white text-lg w-[50px] h-[50px] hover:bg-purple-700 transition-colors duration-300"
            >
              {currentLanguage === 'en' ? 'ع' : 'EN'}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}>
        {/* Solid background to block home page content */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-white"></div>

        {/* Purple background with opacity over the solid background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#4C31AF4D]"></div>

        {/* White background with rounded bottom corners */}
        <div className="absolute h-[85%] inset-0 bg-white rounded-b-[60px] pb-24"></div>

        {/* Content container */}
        <div
          className={`relative z-10 h-full w-full px-6 py-12 pt-20 flex flex-col items-center transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}>
          {/* Mobile Logo */}
          <img
            src="/logo 1 1.png"
            alt="Sumou Logo"
            className="w-[140px] h-auto mb-8 object-contain"
          />

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 mb-auto">
            {/* Navigation items without dashed border */}
            <div className="flex flex-col items-center gap-6">
              {allNavItems.map((item, index) => (
                <button
                  key={`mobile-nav-${index}`}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-[20px] font-poppins transition-all duration-300 hover:text-[#4C31AF] hover:scale-105 ${
                    item.active
                      ? "font-semibold text-[#4C31AF]"
                      : "font-normal text-[#1F1F1F]"
                  }`}>
                  {item.text}
                  {item.active && (
                    <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#4C31AF] to-[#6B46C1] rounded-full shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Center Close Button positioned exactly at the curve intersection */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute bottom-[11%] left-1/2 transform -translate-x-1/2  w-[60px] h-[60px] bg-[#4C31AF] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 z-20">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
