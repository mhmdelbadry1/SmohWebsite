import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { LazyImage } from "../../../../components/ui/LazyImage";
import { Button } from "../../../../components/ui/button";
const Rectangle = "/images/backgrounds/rectangle-1471.png";
const Background = "/images/backgrounds/shape-1.png";

import { Card, CardContent } from "../../../../components/ui/card";
import { pre } from "framer-motion/client";

export const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Testimonial data for mapping

  const testimonials = lang === 'ar'
    ? [
        {
          name: "نورة الكواري",
          company: "لمسات الواحة للعناية بالبشرة (الدوحة)",
          isRtl: true,
          content:
            "سمو ساعدوني في رسم خارطة طريق العلامة من أول استشارة، وكنت أشعر أني مع الفريق الصح. قدموا لي استراتيجية إطلاق كاملة وحملة افتتاحية رفعتني لمستوى المنافسة. الفريق متعاون وسريع الفهم.",
        },
        {
          name: "مريم المهيري",
          company: "ساحرات للعبايات (دبي)",
          isRtl: true,
          content:
            "كنت أبحث عن فريق يفهم ذوق السوق الإماراتي وفي نفس الوقت يمنحني هوية فريدة. سمو فاجأوني بفهمهم العميق للعلامات الفاخرة وتصاميمهم كانت عالمية. اشتغلت معهم على الهوية البصرية واستراتيجية الإنستغرام، وكانت النتيجة مرضية جدًا.",
        },
        {
          name: "عبدالله القحطاني",
          company: "مطابع رقمية - Q-Print",
          isRtl: true,
          content:
            "اشتغلت مع أكثر من وكالة قبل سمو، لكن هنا فعلاً تأكدت بالتعامل والصدق إنهم مميزون. بإطلاق البراند من الصفر وكل خطوة معهم كانت مدروسة.",
        },
      ]
    : [
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

  // Calculate how many cards to show per view
  const cardsPerView = isMobile ? 2 : 3;

  // Slide handlers with bounds
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxIndex = testimonials.length - cardsPerView;
      let next = prev + (isMobile ? 2 : 1);
      if (next > maxIndex) next = 0;
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxIndex = testimonials.length - cardsPerView;
      let next = prev - (isMobile ? 2 : 1);
      if (next < 0) next = maxIndex < 0 ? 0 : maxIndex;
      return next;
    });
  };

  return (
    <section className="relative w-full h-full bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements - always at bottom, full width */}
      <div className="absolute w-full h-[200px] sm:h-[300px] md:h-[386px] bottom-0 left-0 overflow-hidden opacity-75">
        <div className="relative w-full h-full">
          <img
            className="absolute w-full h-full object-cover"
            alt="Background"
            src={Background}
          />
          <img
            className="absolute w-full h-full object-cover"
            alt="Rectangle"
            src={Rectangle}
          />
        </div>
      </div>

      {/* Gradient overlay - responsive */}
      <div className="absolute w-[200px] sm:w-[300px] md:w-[390px] h-[800px] sm:h-[1200px] md:h-[1440px] top-[-150px] sm:top-[-250px] md:top-[-322px] left-[50%] sm:left-[400px] md:left-[525px] -translate-x-1/2 sm:translate-x-0 -rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <div className="relative">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[28px] sm:text-4xl md:text-5xl lg:text-6xl text-center px-4">
              {t('testimonials.title')}
            </h2>

            {/* Underline decoration - hidden on mobile */}
            <div className="absolute -bottom-4 z-[-1] left-[35%] transform -translate-x-1/2 w-64 hidden sm:block">
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

          <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-4xl leading-relaxed px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial cards container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation buttons - desktop positioned on screen */}
          <Button
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg hidden lg:flex items-center justify-center">
            <ArrowLeftIcon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full z-20 shadow-lg hidden lg:flex items-center justify-center">
            <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </Button>

          {/* Testimonial cards with smooth sliding or column view on mobile */}
          <div className="overflow-hidden px-4 lg:px-16 xl:px-20" style={{ width: '100%' }}>
            {isMobile ? (
              <div className="flex flex-col gap-4 transition-all duration-500 ease-in-out">
                {[0, 1].map((offset) => {
                  const idx = currentSlide + offset;
                  if (idx >= testimonials.length) return null;
                  const testimonial = testimonials[idx];
                  return (
                    <Card
                      key={idx}
                      className="bg-white rounded-[24px] shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      style={{ width: '100%', height: '190px', maxWidth: '100%' }}
                    >
                      <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col h-full justify-between relative overflow-hidden">
                        {/* User info header */}
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs sm:text-xs md:text-sm font-semibold text-gray-600">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-['Poppins',Helvetica] font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                              {testimonial.name}
                            </div>
                            <div className="font-['Poppins',Helvetica] font-normal text-gray-500 text-xs sm:text-xs md:text-sm leading-relaxed">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                        {/* Testimonial content */}
                        <div className="relative flex-1 overflow-hidden">
                          <p className="font-['Poppins',Helvetica] font-normal text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] leading-[140%] tracking-[0%]">
                            {testimonial.content}
                          </p>
                          {/* Blur effect overlay for overflow content */}
                          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div
                className="flex gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  width: `${(testimonials.length) * 33}%`,
                  transform: `translateX(-${(100 / cardsPerView) * currentSlide}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="flex-none bg-white rounded-[24px] shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    style={{
                      width: 'calc(33.333% - 12px)',
                      minWidth: 'calc(33.333% - 12px)',
                      maxWidth: '400px',
                      height: '250px',
                    }}
                  >
                    <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col h-full justify-between relative overflow-hidden">
                      {/* User info header */}
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs sm:text-xs md:text-sm font-semibold text-gray-600">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-['Poppins',Helvetica] font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                            {testimonial.name}
                          </div>
                          <div className="font-['Poppins',Helvetica] font-normal text-gray-500 text-xs sm:text-xs md:text-sm leading-relaxed">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      {/* Testimonial content */}
                      <div className="relative flex-1 overflow-hidden">
                        <p className="font-['Poppins',Helvetica] font-normal text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] leading-[140%] tracking-[0%]">
                          {testimonial.content}
                        </p>
                        {/* Blur effect overlay for overflow content */}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dots indicator and mobile navigation */}
        <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          {/* Dots indicator */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: testimonials.length - cardsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#4C31AF]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile navigation arrows */}
          <div className="flex items-center gap-3 lg:hidden">
            {lang === 'ar' ? (
              <>
                <Button
                  onClick={nextSlide}
                  className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Button>

                <Button
                  onClick={prevSlide}
                  className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                  <ArrowLeftIcon className="w-5 h-5 text-white" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={nextSlide}
                  className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                  <ArrowLeftIcon className="w-5 h-5 text-white" />
                </Button>

                <Button
                  onClick={prevSlide}
                  className="w-10 h-10 p-0 bg-[#4C31AF] hover:bg-[#3d2689] rounded-full shadow-lg flex items-center justify-center">
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
