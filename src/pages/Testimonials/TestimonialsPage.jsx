import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Shape1 = "/images/backgrounds/shape-1.png";
const Rectangle1471 = "/images/backgrounds/rectangle-1471.png";

export const TestimonialsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Animation controls
  const headerControls = useAnimation();
  const lineControls = useAnimation();

  // Intersection Observer hooks
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
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
        duration: 1.3,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  // Trigger animations when header is in view
  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
      lineControls.start("visible");
    }
  }, [headerInView, headerControls, lineControls]);

  // Testimonial data using translations
  const testimonials = [
    {
      name: t('testimonials.page.clients.noura.name'),
      company: t('testimonials.page.clients.noura.company'),
      content: t('testimonials.page.clients.noura.testimonial'),
    },
    {
      name: t('testimonials.page.clients.maryam.name'),
      company: t('testimonials.page.clients.maryam.company'),
      content: t('testimonials.page.clients.maryam.testimonial'),
    },
    {
      name: t('testimonials.page.clients.abdullah.name'),
      company: t('testimonials.page.clients.abdullah.company'),
      content: t('testimonials.page.clients.abdullah.testimonial'),
    },
    {
      name: t('testimonials.page.clients.dalal.name'),
      company: t('testimonials.page.clients.dalal.company'),
      content: t('testimonials.page.clients.dalal.testimonial'),
    },
    {
      name: t('testimonials.page.clients.noura.name'),
      company: t('testimonials.page.clients.noura.company'),
      content: t('testimonials.page.clients.noura.testimonial'),
    },
    {
      name: t('testimonials.page.clients.maryam.name'),
      company: t('testimonials.page.clients.maryam.company'),
      content: t('testimonials.page.clients.maryam.testimonial'),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // On mobile, show next 3 cards from the 6 total
      if (window.innerWidth < 1024) {
        return prev === 0 ? 3 : 0; // Toggle between first 3 (0-2) and last 3 (3-5)
      }
      // On desktop, move by 1 item
      return (prev + 1) % testimonials.length;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      // On mobile, show previous 3 cards from the 6 total
      if (window.innerWidth < 1024) {
        return prev === 0 ? 3 : 0; // Toggle between first 3 (0-2) and last 3 (3-5)
      }
      // On desktop, move by 1 item
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[80vh] bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DB4063]/5 via-transparent to-[#4C31AF]/5"></div>
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

        <div className="w-full px-4 relative z-10">
          {/* Section header */}
          <motion.div 
            ref={headerRef}
            className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16"
            initial="hidden"
            animate={headerControls}
          >
            <div className="relative">
              <motion.h2 
                className={`font-['Poppins',Helvetica] font-semibold text-black text-[28px] sm:text-4xl md:text-5xl lg:text-6xl text-center px-4 ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}
                variants={fadeUp}
                custom={0}
              >
                {t('testimonials.page.title')}
              </motion.h2>

              {/* Underline decoration - hidden on mobile */}
              <div className="absolute -bottom-2 left-[35%] transform -translate-x-1/2 w-64 hidden sm:block">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="217"
                  height="12"
                  viewBox="0 0 217 12"
                  fill="none"
                  className="w-full h-auto"
                  initial="hidden"
                  animate={lineControls}
                >
                  <defs>
                    <mask id="revealMask">
                      <motion.rect
                        x="0"
                        y="0"
                        height="100%"
                        fill="white"
                        variants={maskReveal}
                      />
                    </mask>
                  </defs>
                  <path
                    d="M1.47808 9.41159C37.324 9.41159 73.1699 9.5099 109.143 9.80479C126.685 9.90308 144.226 10.2963 161.768 10.2963C170.284 10.2963 178.928 10.2963 187.445 10.7877C191.512 10.9843 195.453 11.3775 199.393 11.7707C204.351 12.2621 207.783 11.8689 212.74 11.4758C216.935 11.1809 218.715 7.15086 214.901 5.28328C211.215 3.41571 208.8 1.843 204.351 1.25324C200.283 0.663484 196.215 0.466897 192.021 0.27031C183.504 -0.122864 174.86 -0.0245764 166.344 0.172011C148.04 0.565184 129.862 1.35153 111.558 2.13788C74.8224 3.61228 38.0867 5.28328 1.47808 7.15085C-0.428623 7.15085 -0.555736 9.41159 1.47808 9.41159Z"
                    fill="#DB4063"
                    mask="url(#revealMask)"
                  />
                </motion.svg>
              </div>
            </div>

            <motion.p 
              className={`font-['Poppins',Helvetica] font-normal text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-4xl leading-relaxed px-4 ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}
              variants={fadeUp}
              custom={1}
            >
              {t('testimonials.page.subtitle')}
            </motion.p>
          </motion.div>

          {/* Testimonial cards container */}
          <div className="relative w-full flex justify-center">
            <div className="w-full">
              {/* Testimonial cards */}
              <div className={`${isMobile ? 'flex flex-col items-center gap-6' : 'grid grid-cols-3 gap-6 lg:gap-8'} w-full    xl:px-20 2xl:px-24`}>
                {(isMobile ? testimonials.slice(currentSlide, currentSlide + 3) : testimonials.slice(0, 6)).map((testimonial, index) => (
                <motion.div
                  key={isMobile ? `${currentSlide}-${index}` : index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card
                    className={`bg-white rounded-[24px] shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 h-auto flex flex-col group h-full ${isMobile ? 'w-full max-w-[100%]' : 'flex-1 min-w-0 max-w-none'}`}
                    data-aos="flip-left"
                    data-aos-delay={200 * index}
                    data-aos-duration="700"
                  >
                  <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full relative">
                    {/* User info header */}
                    <div className="flex items-start gap-3 sm:gap-4 m
                    b-4 sm:mb-6 h-16 ">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#DB4063] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className={`font-['Poppins',Helvetica] font-semibold text-gray-900 text-sm sm:text-base ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}>
                          {testimonial.name}
                        </div>
                        <div className={`font-['Poppins',Helvetica] font-normal text-gray-500 text-xs sm:text-sm leading-relaxed mt-1 ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}>
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial content */}
                    <div className="flex-1">
                      <p className={`font-['Poppins',Helvetica] font-normal text-gray-700 group-hover:text-[#4B5563] group-active:text-black transition-colors duration-300 text-xs sm:text-sm leading-[160%] tracking-[0%] ${currentLanguage === 'ar' ? 'font-alexandria text-right' : ''}`}>
                        {testimonial.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
              </div>

              {/* Navigation buttons - positioned at bottom center */}
              <div 
                className="flex items-center justify-center gap-4 mt-8"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="600"
              >
                <Button
                  onClick={prevSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg hidden lg:flex items-center justify-center">
                  <ArrowLeftIcon className={`w-5 h-5 lg:w-6 lg:h-6 text-white ${currentLanguage === 'ar' ? '-scale-x-100' : ''}`} />
                </Button>

                <Button
                  onClick={nextSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg hidden lg:flex items-center justify-center">
                  <ArrowRightIcon className={`w-5 h-5 lg:w-6 lg:h-6 text-white ${currentLanguage === 'ar' ? '-scale-x-100' : ''}`} />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots indicator and mobile navigation */}
          <div 
            className="flex flex-col items-center gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="600"
          >
            {/* Dots indicator */}
            <div className={`flex justify-center gap-2`}>
              {Array.from({ length: isMobile ? 2 : 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(isMobile ? index * 3 : index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    (isMobile ? index === Math.floor(currentSlide / 3) : index === currentSlide) ? "bg-[#4C31AF]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Mobile navigation arrows */}
            <div className={`flex items-center gap-3 lg:hidden`}>
              <Button
                onClick={prevSlide}
                className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                <ArrowLeftIcon className={`w-5 h-5 text-white ${currentLanguage === 'ar' ? '-scale-x-100' : ''}`} />
              </Button>

              <Button
                onClick={nextSlide}
                className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                <ArrowRightIcon className={`w-5 h-5 text-white ${currentLanguage === 'ar' ? '-scale-x-100' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
