import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Shape1 = "/images/backgrounds/shape-1.png";
const Rectangle1471 = "/images/backgrounds/rectangle-1471.png";

export const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const navigate = useNavigate();

  // Navigate to contact page
  const handleContactNavigation = () => {
    navigate("/contact");
  };

  // Service cards data
  const serviceCards = [
    {
      id: "01",
      title: t("services.page.servicesList.logoDesign.title"),
      description: t("services.page.servicesList.logoDesign.description"),
    },
    {
      id: "02",
      title: t("services.page.servicesList.advertisingDesign.title"),
      description: t(
        "services.page.servicesList.advertisingDesign.description"
      ),
    },
    {
      id: "03",
      title: t("services.page.servicesList.printMaterial.title"),
      description: t("services.page.servicesList.printMaterial.description"),
    },
    {
      id: "04",
      title: t("services.page.servicesList.arabicCalligraphy.title"),
      description: t(
        "services.page.servicesList.arabicCalligraphy.description"
      ),
    },
    {
      id: "05",
      title: t("services.page.servicesList.socialMediaManagement.title"),
      description: t(
        "services.page.servicesList.socialMediaManagement.description"
      ),
    },
    {
      id: "06",
      title: t("services.page.servicesList.uiDesign.title"),
      description: t("services.page.servicesList.uiDesign.description"),
    },
    {
      id: "07",
      title: t("services.page.servicesList.brandConsultation.title"),
      description: t(
        "services.page.servicesList.brandConsultation.description"
      ),
    },
    {
      id: "08",
      title: t("services.page.servicesList.photography.title"),
      description: t("services.page.servicesList.photography.description"),
    },
    {
      id: "09",
      title: t("services.page.servicesList.motionGraphics.title"),
      description: t("services.page.servicesList.motionGraphics.description"),
    },
    {
      id: "10",
      title: t("services.page.servicesList.userGeneratedContent.title"),
      description: t(
        "services.page.servicesList.userGeneratedContent.description"
      ),
    },
  ];
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: -500,
      easing: "ease-out-cubic",
    });
  }, []);

  // Animation controls
  const headerControls = useAnimation();
  const lineControls = useAnimation();

  // Intersection Observer hooks
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const maskReveal = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.4,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  // Trigger animations when section is in view
  useEffect(() => {
    if (inView) {
      headerControls.start("visible");
      lineControls.start("visible");
    }
  }, [inView, headerControls, lineControls]);

  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 3 slides for mobile

  // Navigate carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-white w-full relative font-['Poppins'] overflow-hidden"
    >
      {/* Background Images - Top */}
      <div className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none transform hidden md:block translate-y-[50%]">
        <div className="relative w-full">
          <img
            src={Shape1}
            alt="Background Shape"
            className="w-full h-auto object-cover"
          />
          <img
            src={Rectangle1471}
            alt="Background Rectangle"
            className="absolute top-0 left-0 w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Background Images - Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none transform width-[100%] scale-[3.6] translate-y-[-160%] md:scale-[1] md:translate-y-[-10%] rotate-180">
        <div className="relative w-full">
          <img
            src={Shape1}
            alt="Background Shape"
            className="w-full h-auto object-cover transform rotate-180"
          />
          <img
            src={Rectangle1471}
            alt="Background Rectangle"
            className="absolute top-0 left-0 w-full h-auto object-cover transform rotate-180"
          />
        </div>
      </div>

      <div className="bg-transparent w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col w-full items-start relative">
          {/* Main Content - Services Section */}
          <section className="w-full px-4 md:px-8 lg:px-[100px] py-8 md:py-14">
            {/* Header Section */}
            <motion.div
              className="flex items-center w-full flex-col gap-6 relative mb-10"
              initial="hidden"
              animate={headerControls}
              variants={fadeUp}
              custom={0}
            >
              <div className="relative w-full font-['Poppins'] font-semibold text-center text-black">
                <motion.h1
                  className={`text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center leading-tight w-full mt-4 ${
                    currentLanguage === "ar" ? "font-alexandria" : ""
                  }`}
                  variants={fadeUp}
                  custom={0}
                >
                  {t("services.title")}
                </motion.h1>
              </div>

              <motion.p
                className={`w-full opacity-75 font-['Poppins'] text-lg md:text-xl text-center font-normal text-black ${
                  currentLanguage === "ar" ? "font-alexandria" : ""
                }`}
                variants={fadeUp}
                custom={1}
              >
                {t("services.subtitle")}
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            {/* Desktop Grid */}

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
              {/* Featured Service Box */}

              <div
                className="bg-[#4C31AF] text-white rounded-2xl shadow-lg h-[280px] p-6"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
              >
                <div className="mb-6">
                  <span
                    className={`text-white text-sm font-medium font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.creativityCard.question")}
                  </span>
                  <h3
                    className={`text-white text-lg font-semibold mt-1 font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.creativityCard.title")}
                  </h3>
                </div>
                <p
                  className={`text-white text-sm leading-relaxed font-['Poppins'] opacity-90 ${
                    currentLanguage === "ar" ? "font-alexandria" : ""
                  }`}
                >
                  {t("services.page.creativityCard.description")}
                </p>
              </div>

              {/* Service Cards */}
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[280px] p-6 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={200 * index}
                  data-aos-duration="600"
                >
                  <div className="mb-4">
                    <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                      {service.id}
                    </span>
                  </div>
                  <div className="flex flex-col h-full">
                    <h3
                      className={`font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[60px] flex items-start mb-4 ${
                        currentLanguage === "ar" ? "font-alexandria" : ""
                      }`}
                    >
                      {service.title}
                    </h3>
                    <div className="flex-1 flex items-start">
                      <p
                        className={`font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden ${
                          currentLanguage === "ar" ? "font-alexandria" : ""
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div
                className="bg-[#DB4063] text-white rounded-2xl shadow-lg relative h-[280px] p-8"
                data-aos="fade-up"
                data-aos-delay="2200"
                data-aos-duration="600"
              >
                <div className="mb-[90px]">
                  <h3
                    className={`text-[18px] font-normal font-['Poppins'] leading-tight ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.ctaCard.question")}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[20px] font-semibold font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.ctaCard.cta")}
                  </span>
                  <div
                    className="bg-white rounded-full p-4 hover:bg-gray-100 transition-all cursor-pointer"
                    onClick={handleContactNavigation}
                  >
                    <svg
                      className="w-[24px] h-[24px] text-[#DB4063] rotate-[-45deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M2 12h18m-6-6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden mb-16">
              {/* First Card - Creativity (Purple) */}
              <div
                className="bg-[#4C31AF] text-white rounded-2xl shadow-lg relative h-[250px] mb-6 p-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                <div className="mb-6">
                  <span
                    className={`text-white text-sm font-medium font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.creativityCard.question")}
                  </span>
                  <h3
                    className={`text-white text-lg font-semibold mt-1 font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.creativityCard.title")}
                  </h3>
                </div>
                <p
                  className={`text-white text-sm leading-relaxed font-['Poppins'] opacity-90 ${
                    currentLanguage === "ar" ? "font-alexandria" : ""
                  }`}
                >
                  {t("services.page.creativityCard.description")}
                </p>
              </div>

              {/* Service Cards Carousel */}
              <div
                className="relative"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Slide 1 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-4">
                        {serviceCards.slice(0, 4).map((service) => (
                          <div
                            key={service.id}
                            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px] p-6 flex flex-col"
                          >
                            <div className="mb-4">
                              <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                                {service.id}
                              </span>
                            </div>
                            <div className="flex flex-col h-full">
                              <h3
                                className={`font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4 ${
                                  currentLanguage === "ar"
                                    ? "font-alexandria"
                                    : ""
                                }`}
                              >
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p
                                  className={`font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden ${
                                    currentLanguage === "ar"
                                      ? "font-alexandria"
                                      : ""
                                  }`}
                                >
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-4">
                        {serviceCards.slice(4, 8).map((service) => (
                          <div
                            key={service.id}
                            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px] p-6 flex flex-col"
                          >
                            <div className="mb-4">
                              <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                                {service.id}
                              </span>
                            </div>
                            <div className="flex flex-col h-full">
                              <h3
                                className={`font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4 ${
                                  currentLanguage === "ar"
                                    ? "font-alexandria"
                                    : ""
                                }`}
                              >
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p
                                  className={`font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden ${
                                    currentLanguage === "ar"
                                      ? "font-alexandria"
                                      : ""
                                  }`}
                                >
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-4">
                        {serviceCards.slice(8, 10).map((service) => (
                          <div
                            key={service.id}
                            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px] p-6 flex flex-col"
                          >
                            <div className="mb-4">
                              <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                                {service.id}
                              </span>
                            </div>
                            <div className="flex flex-col h-full">
                              <h3
                                className={`font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4 ${
                                  currentLanguage === "ar"
                                    ? "font-alexandria"
                                    : ""
                                }`}
                              >
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p
                                  className={`font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden ${
                                    currentLanguage === "ar"
                                      ? "font-alexandria"
                                      : ""
                                  }`}
                                >
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card - CTA (Red) */}
              <div
                className="bg-[#DB4063] text-white rounded-2xl shadow-lg relative h-[250px] mt-8 p-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <div className="mb-6">
                  <h3
                    className={`text-[16px] font-normal font-['Poppins'] leading-tight ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.ctaCard.question")}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span
                    className={`text-[18px] font-semibold font-['Poppins'] ${
                      currentLanguage === "ar" ? "font-alexandria" : ""
                    }`}
                  >
                    {t("services.page.ctaCard.cta")}
                  </span>
                  <div
                    className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all cursor-pointer"
                    onClick={handleContactNavigation}
                  >
                    <svg
                      className="w-[20px] h-[20px] text-[#DB4063] rotate-[-45deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M2 12h18m-6-6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div
                className="flex justify-center items-center gap-4 mt-8"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="600"
              >
                <button
                  onClick={prevSlide}
                  className={`bg-[#4C31AF] text-white rounded-full p-3 ${
                    currentLanguage === "ar" ? "-scale-x-100" : ""
                  } hover:bg-[#3d2899] transition-all duration-200 disabled:opacity-50`}
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide ? "bg-[#4C31AF]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className={`bg-[#4C31AF] text-white rounded-full p-3 hover:bg-[#3d2899]  transition-all duration-200 disabled:opacity-50 ${
                    currentLanguage === "ar" ? "-scale-x-100" : ""
                  }`}
                  disabled={currentSlide === totalSlides - 1}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
