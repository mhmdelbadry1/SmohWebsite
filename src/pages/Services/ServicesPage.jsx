import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Lightbulb, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PinImage from "../../screens/Homepage/imgs/Pin.png";
import ShapeImage from "../../screens/Homepage/imgs/shape 1.png";

// Service cards data
const serviceCards = [
  {
    id: "01",
    title: "Logo & Visual Identity Design",
    description:
      "We create unique logos and visual identities that reflect your brand's essence and enhance its presence.",
  },
  {
    id: "02",
    title: "Advertising Post Design",
    description:
      "We design eye-catching posts and promotional visuals tailored for social media platforms.",
  },
  {
    id: "03",
    title: "Print Material Design",
    description:
      "We design professional print materials such as brochures, business cards, and packaging that align with your brand identity.",
  },
  {
    id: "04",
    title: "Arabic Calligraphy Creation",
    description:
      "We craft original Arabic calligraphy that blends tradition with modern aesthetics to give your brand a unique touch.",
  },
  {
    id: "05",
    title: "Content & Social Media Management",
    description:
      "We manage your content and social media accounts with strategic planning and creative execution to boost engagement and brand visibility.",
  },
  {
    id: "06",
    title: "User Interface (UI) Design",
    description:
      "We design intuitive and appealing user interfaces that enhance user experience across websites and mobile applications.",
  },
  {
    id: "07",
    title: "Brand Launch Consultation Sessions",
    description:
      "We offer expert consultations to guide you through launching a new brand, from strategy to execution.",
  },
  {
    id: "08",
    title: "Photography and Videography",
    description:
      "We provide professional photography and video production services that visually communicate your brand's message.",
  },
  {
    id: "09",
    title: "Motion Graphics Design",
    description:
      "We produce creative motion graphics videos used to promote or explain ideas and services in an engaging and dynamic way.",
  },
  {
    id: "10",
    title: "Interactive Content Creation (UCC)",
    description:
      "We create authentic user-generated content presented to maximize engagement with your target audience, using a natural and genuine style that builds customer trust in your product or service.",
  },
];

export const ServicesPage = () => {
  // Animation controls
  const headerControls = useAnimation();
  const lineControls = useAnimation();
  const pinControls = useAnimation();
  
  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(serviceCards.length / cardsPerSlide);

  // Navigate carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current cards for mobile view
  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return serviceCards.slice(startIndex, startIndex + cardsPerSlide);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const maskReveal = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const pinAnimation = {
    hidden: { opacity: 0, y: -20, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        rotate: { duration: 0.4, repeat: 1, repeatType: "reverse" },
        y: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        },
      },
    },
  };

  // Start animations on component mount
  React.useEffect(() => {
    headerControls.start("visible");
    lineControls.start("visible");
    pinControls.start("visible");
  }, [headerControls, lineControls, pinControls]);

  return (
    <div className="bg-[#ffffff] w-full relative">
      {/* Background shape at top - positioned at start of cards */}
      <div className="absolute top-[200px] left-0 w-full h-[400px] overflow-hidden pointer-events-none z-0">
        <img 
          src={ShapeImage} 
          alt="Background shape top" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Background shape at bottom - positioned at end of cards */}
      <div className="absolute bottom-[100px] left-0 w-full h-[400px] overflow-hidden pointer-events-none z-0">
        <img 
          src={ShapeImage} 
          alt="Background shape bottom" 
          className="absolute bottom-0 left-0 w-full h-full object-cover  rotate-180"
        />
      </div>
      
      <div className="bg-transparent w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col w-full items-start relative">
          {/* Main Content - Services Section */}
          <section className="w-full px-4 md:px-8 lg:px-[100px] py-8 md:py-14">
            <motion.div
              initial="hidden"
              animate={headerControls}
              variants={fadeUp}
              custom={0}
              className="flex items-center w-full flex-col gap-6 relative mb-10"
            >
              <div className="relative w-full font-['Poppins'] font-semibold text-center text-black">
                <h1 className="relative text-center leading-tight mx-auto
                  text-[7vw] 
                  min-[480px]:text-[6vw] 
                  sm:text-[5vw] 
                  md:text-[4.5vw] 
                  lg:text-[4vw] 
                  xl:text-[3.5vw] 
                  2xl:text-[3vw]
                  max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                  What Do We Offer You?
                  
                  <motion.img
                    src={PinImage}
                    alt="Pin"
                    className="absolute z-10 block
                      top-[-1.4em] 
                      left-[-7%] 
                      transform 
                      translate-x-[-1.5em]
                      w-[1.3em] 
                      h-[1.3em]"
                    style={{
                      fontSize: 'inherit',
                    }}
                    variants={pinAnimation}
                    initial="hidden"
                    animate={pinControls}
                  />
                </h1>
                
                {/* Responsive Underline */}
                <div className="absolute hidden lg:block
                  top-[3.5em] 
                  left-1/2 
                  transform 
                  
                  -translate-x-[20em]
                  w-[21em] 
                  h-[1.8em]"
                  style={{ fontSize: 'inherit' }}>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 18"
                    fill="none"
                    className="w-full h-full"
                    initial="hidden"
                    animate={lineControls}
                  >
                    <defs>
                      <mask id="revealMask">
                        <motion.rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          fill="white"
                          variants={maskReveal}
                        />
                      </mask>
                    </defs>
                    <path
                      d="M397.275 9.41159C331.2 9.41159 265.125 9.5099 198.815 9.80479C166.48 9.90308 134.145 10.2963 101.81 10.2963C86.1116 10.2963 70.1786 10.2963 54.4798 10.7877C46.9819 10.9843 39.7183 11.3775 32.4547 11.7707C23.3166 12.2621 16.9902 11.8689 7.85214 11.4758C0.119904 11.1809 -3.16046 7.15086 3.86884 5.28328C10.6638 3.41571 15.1157 1.843 23.3166 1.25324C30.8145 0.663484 38.3124 0.466897 46.0446 0.27031C61.7434 -0.122864 77.6765 -0.0245764 93.3753 0.172011C127.116 0.565184 160.622 1.35153 194.363 2.13788C262.079 3.61228 329.794 5.28328 397.275 7.15085C400.79 7.15085 401.024 9.41159 397.275 9.41159Z"
                      fill="#DB4063"
                      stroke="#DB4063"
                      strokeWidth="2"
                      strokeLinecap="round"
                      mask="url(#revealMask)"
                    />
                  </motion.svg>
                </div>
              </div>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="w-full opacity-75 font-['Poppins'] text-lg md:text-xl text-center font-normal text-black"
              >
                Whatever service you need, we promise professionalism and innovation.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Featured Service Box */}
              <Card className="bg-[#4C31AF] text-white rounded-2xl shadow-lg h-[260px]">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <span className="text-white text-sm font-medium font-['Poppins']">Have you ever wondered how</span>
                    <h3 className="text-white text-lg font-semibold mt-1 font-['Poppins']">creativity turns into impact?</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed font-['Poppins'] opacity-90">
                    At Sumou, we don't just design — we bring ideas to life. 
                    Discover our journey in crafting visual magic!
                  </p>
                </CardContent>
              </Card>

              {serviceCards.slice(0, 2).map((service) => (
                <Card
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">{service.id}</span>
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg mb-6 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {serviceCards.slice(2, 5).map((service) => (
                <Card
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">{service.id}</span>
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg mb-6 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {serviceCards.slice(5, 8).map((service) => (
                <Card
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">{service.id}</span>
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg mb-6 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {serviceCards.slice(8, 10).map((service) => (
                <Card
                  key={service.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">{service.id}</span>
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg mb-6 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* CTA Card */}
              <Card className="bg-[#DB4063] text-white rounded-2xl shadow-lg relative h-[250px]">
                <CardContent className="p-8">
                  <div className="mb-[90px]">
                    <h3 className="text-[18px] font-normal  font-['Poppins'] leading-tight">
                      Looking for design experts who can turn your vision into reality?
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[20px] font-semibold font-['Poppins']">Talk to our specialists.</span>
                    <div className="bg-white rounded-full p-4 hover:bg-gray-100 transition-all cursor-pointer">
                      <ArrowRight className="w-[24px] h-[24px] text-[#DB4063] rotate-[-45deg]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden mb-16">
              {/* First Card - Creativity (Purple) */}
              <Card className="bg-[#4C31AF] text-white rounded-2xl shadow-lg relative h-[250px] mb-6">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <span className="text-white text-sm font-medium font-['Poppins']">Have you ever wondered how</span>
                    <h3 className="text-white text-lg font-semibold mt-1 font-['Poppins']">creativity turns into impact?</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed font-['Poppins'] opacity-90">
                    At Sumou, we don't just design — we bring ideas to life. 
                    Discover our journey in crafting visual magic!
                  </p>
                </CardContent>
              </Card>

              {/* Service Cards Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    animate={{ x: -currentSlide * 100 + "%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 gap-4">
                          {serviceCards
                            .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                            .map((service) => (
                              <Card
                                key={service.id}
                                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow rounded-2xl h-[250px]"
                              >
                                <CardContent className="p-6">
                                  <div className="mb-6">
                                    <span className="text-[#4C31AF] text-[24px] font-semibold font-['Poppins'] leading-none">
                                      {service.id}
                                    </span>
                                  </div>
                                  <div>
                                    <h3 className="font-['Poppins'] font-semibold text-gray-900 text-lg mb-4 leading-tight">
                                      {service.title}
                                    </h3>
                                    <p className="font-['Poppins'] font-normal text-gray-600 text-sm leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

              </div>

              {/* Second Card - CTA (Red) */}
              <Card className="bg-[#DB4063] text-white rounded-2xl shadow-lg relative h-[250px] mt-8">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-[16px] font-normal font-['Poppins'] leading-tight">
                      Looking for design experts who can turn your vision into reality?
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-[18px] font-semibold font-['Poppins']">Talk to our specialists.</span>
                    <div className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all cursor-pointer">
                      <ArrowRight className="w-[20px] h-[20px] text-[#DB4063] rotate-[-45deg]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-8">
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
                        index === currentSlide ? 'bg-[#4C31AF]' : 'bg-gray-300'
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
