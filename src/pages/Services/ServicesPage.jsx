import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Service cards data
const serviceCards = [
  {
    id: "01",
    title: "Logo & Visual Identity Design",
    description: "We create unique logos and visual identities that reflect your brand's essence and enhance its presence.",
  },
  {
    id: "02",
    title: "Advertising Post Design",
    description: "We design eye-catching posts and promotional visuals tailored for social media platforms.",
  },
  {
    id: "03",
    title: "Print Material Design",
    description: "We design professional print materials such as brochures, business cards, and packaging that align with your brand identity.",
  },
  {
    id: "04",
    title: "Arabic Calligraphy Creation",
    description: "We craft original Arabic calligraphy that blends tradition with modern aesthetics to give your brand a unique touch.",
  },
  {
    id: "05",
    title: "Content & Social Media Management",
    description: "We manage your content and social media accounts with strategic planning and creative execution to boost engagement and brand visibility.",
  },
  {
    id: "06",
    title: "User Interface (UI) Design",
    description: "We design intuitive and appealing user interfaces that enhance user experience across websites and mobile applications.",
  },
  {
    id: "07",
    title: "Brand Launch Consultation Sessions",
    description: "We offer expert consultations to guide you through launching a new brand, from strategy to execution.",
  },
  {
    id: "08",
    title: "Photography and Videography",
    description: "We provide professional photography and video production services that visually communicate your brand's message.",
  },
  {
    id: "09",
    title: "Motion Graphics Design",
    description: "We produce creative motion graphics videos used to promote or explain ideas and services in an engaging and dynamic way.",
  },
  {
    id: "10",
    title: "Interactive Content Creation (UCC)",
    description: "We create authentic user-generated content to maximize engagement with your target audience, using a natural and genuine style that builds customer trust.",
  },
];

export const ServicesPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: -500,
      easing: 'ease-out-cubic'
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
        delay:  0.1,
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
    <div ref={sectionRef} className="bg-white w-full relative font-['Poppins']">
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
                  className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center leading-tight w-full mt-4"
                  variants={fadeUp}
                  custom={0}
                >
                  What Do{" "}
                  <span className="relative inline-block align-bottom">
                    <span className="inline-block z-10 relative bg-white pr-1 pl-1 sm:pr-2 sm:pl-2">
                      We Offer You?
                    </span>
                    <span className="absolute left-0 right-0 bottom-[-0.35em] flex justify-center z-0 pointer-events-none">
                      <motion.svg
                        viewBox="0 0 260 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[100%] h-2 sm:h-3 md:h-4"
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
                          d="M257.275 9.41159C214 9.41159 170.725 9.5099 127.815 9.80479C107.48 9.90308 87.145 10.2963 66.81 10.2963C56.1116 10.2963 45.1786 10.2963 34.4798 10.7877C29.9819 10.9843 25.7183 11.3775 21.4547 11.7707C15.3166 12.2621 11.9902 11.8689 5.85214 11.4758C0.119904 11.1809 -2.16046 7.15086 2.86884 5.28328C7.6638 3.41571 10.1157 1.843 15.3166 1.25324C20.8145 0.663484 26.3124 0.466897 31.0446 0.27031C41.7434 -0.122864 52.6765 -0.0245764 63.3753 0.172011C86.116 0.565184 108.622 1.35153 131.363 2.13788C177.079 3.61228 222.794 5.28328 257.275 7.15085C260.79 7.15085 261.024 9.41159 257.275 9.41159Z"
                          fill="#DB4063"
                          mask="url(#revealMask)"
                        />
                      </motion.svg>
                    </span>
                  </span>
                </motion.h1>
              </div>

              <motion.p 
                className="w-full opacity-75 font-['Poppins'] text-lg md:text-xl text-center font-normal text-black"
                variants={fadeUp}
                custom={1}
              >
                Whatever service you need, we promise professionalism and innovation.
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
                  <span className="text-white text-sm font-medium font-['Poppins']">
                    Have you ever wondered how
                  </span>
                  <h3 className="text-white text-lg font-semibold mt-1 font-['Poppins']">
                    creativity turns into impact?
                  </h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-['Poppins'] opacity-90">
                  At Sumou, we don't just design — we bring ideas to life. Discover our journey in
                  crafting visual magic!
                </p>
              </div>

              {/* Service Cards */}
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[280px] p-6 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={200 * (index )}
                  data-aos-duration="600"
                >
                  <div className="mb-4">
                    <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                      {service.id}
                    </span>
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[60px] flex items-start mb-4">
                      {service.title}
                    </h3>
                    <div className="flex-1 flex items-start">
                      <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden">
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
                  <h3 className="text-[18px] font-normal font-['Poppins'] leading-tight">
                    Looking for design experts who can turn your vision into reality?
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-semibold font-['Poppins']">
                    Talk to our specialists.
                  </span>
                  <div className="bg-white rounded-full p-4 hover:bg-gray-100 transition-all cursor-pointer">
                    <svg 
                      className="w-[24px] h-[24px] text-[#DB4063] rotate-[-45deg]" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path d="M2 12h18m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <span className="text-white text-sm font-medium font-['Poppins']">
                    Have you ever wondered how
                  </span>
                  <h3 className="text-white text-lg font-semibold mt-1 font-['Poppins']">
                    creativity turns into impact?
                  </h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-['Poppins'] opacity-90">
                  At Sumou, we don't just design — we bring ideas to life. Discover our journey in
                  crafting visual magic!
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
                              <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4">
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden">
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
                              <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4">
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden">
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
                              <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg leading-tight h-[50px] flex items-start mb-4">
                                {service.title}
                              </h3>
                              <div className="flex-1 flex items-start">
                                <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed overflow-hidden">
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
                  <h3 className="text-[16px] font-normal font-['Poppins'] leading-tight">
                    Looking for design experts who can turn your vision into reality?
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-[18px] font-semibold font-['Poppins']">
                    Talk to our specialists.
                  </span>
                  <div className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all cursor-pointer">
                    <svg 
                      className="w-[20px] h-[20px] text-[#DB4063] rotate-[-45deg]" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path d="M2 12h18m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
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
                  className="bg-[#4C31AF] text-white rounded-full p-3 hover:bg-[#3d2899] transition-all duration-200 disabled:opacity-50"
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
                  className="bg-[#4C31AF] text-white rounded-full p-3 hover:bg-[#3d2899] transition-all duration-200 disabled:opacity-50"
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
