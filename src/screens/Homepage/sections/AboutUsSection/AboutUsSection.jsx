import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import AboutUsImage from "../../imgs/AboutUs.png"

export const AboutUsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Animation controls
  const headerControls = useAnimation();
  const cardControls = useAnimation();
  const imageControls = useAnimation();
  const buttonsControls = useAnimation();

  // Intersection Observer hook
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const fullText = "Sumou is a company specialized in visual identity design, advertising content creation, and creative consulting for entrepreneurs and emerging brands. Our goal is to empower brands to stand out in the market through creative solutions built on strategic vision and refined taste.";

  // Typing effect
  useEffect(() => {
    if (inView && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 5); // Speed of typing
      return () => clearTimeout(timer);
    } else if (!inView) {
      // Reset when out of view
      setTypedText("");
      setCurrentIndex(0);
    }
  }, [inView, currentIndex, fullText]);

  // Trigger animations when section is in view
  useEffect(() => {
    if (inView) {
      headerControls.start("visible");
      cardControls.start("visible");
      imageControls.start("visible");
      buttonsControls.start("visible");
    } else {
      headerControls.start("hidden");
      cardControls.start("hidden");
      imageControls.start("hidden");
      buttonsControls.start("hidden");
    }
  }, [inView, headerControls, cardControls, imageControls, buttonsControls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.2 + i * 0.2
      }
    })
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-white px-2 sm:px-4 md:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header 
        className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl mx-auto"
        variants={headerVariants}
        initial="hidden"
        animate={headerControls}
      >
        <motion.h2 
          className="font-['Poppins',Helvetica] font-semibold text-black text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-center"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="opacity-75 font-['Poppins',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl text-center font-normal text-black px-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Get to know Sumou up close.
        </motion.p>
      </motion.header>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={cardControls}
      >
        <Card
          className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] h-[200px] min-h-[325px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] border border-solid p-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-[16px] opacity-100 mx-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            <motion.div
              className={`transition-transform duration-500 w-full flex justify-center ${
                isHovered ? "scale-105" : "scale-100"
              }`}
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
            >
              <img
                className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-contain"
                alt="Sumou logo"
                src={AboutUsImage}
              />
            </motion.div>

            <motion.div 
              className="font-['Poppins',Helvetica] font-normal text-black text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[35px] text-left w-full px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="font-light">
                {typedText.slice(0, 34)}
              </span>
              {typedText.length > 34 && (
                <span className="font-bold text-purple text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[35px] hover:scale-105 transition-transform duration-300">
                  {typedText.slice(34, 87)}
                </span>
              )}
              {typedText.length > 87 && (
                <span className="font-light">
                  {typedText.slice(87, 92)}
                </span>
              )}
              {typedText.length > 92 && (
                <span className="font-bold text-purple text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[35px] hover:scale-105 inline-block transition-transform duration-300">
                  {typedText.slice(92, 111)}
                </span>
              )}
              {typedText.length > 111 && (
                <span className="font-light">
                  {typedText.slice(111)}
                </span>
              )}
              {currentIndex < fullText.length && inView && (
                <motion.span
                  className="inline-block w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-purple ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>

            <motion.div 
              className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full flex-wrap"
              variants={buttonVariants}
              initial="hidden"
              animate={buttonsControls}
            >
              <motion.div
                variants={buttonVariants}
                custom={0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex-shrink-0"
              >
                <Button className="bg-purple text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-['Alexandria',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.18px] leading-6 hover:bg-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Our Services
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                custom={1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex-shrink-0"
              >
                <Button
                  variant="outline"
                  className="bg-white border-[#4c31af] text-purple px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-['Alexandria',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.18px] leading-6 hover:bg-purple hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};
