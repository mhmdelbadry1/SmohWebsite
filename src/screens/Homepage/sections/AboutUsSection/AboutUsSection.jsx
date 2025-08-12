import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
const AboutUsImage = "/AboutUs.png";

export const AboutUsSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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

  const fullText = t("about.description");
  const currentLanguage = i18n.language;

  // Define highlighted words for each language
  const highlightedWords = {
    en: {
      1: { start: 34, end: 87 }, // "visual identity design, advertising content creation"
      2: { start: 92, end: 111 }, // "creative consultancy"
    },
    ar: {
      1: { start: 20, end: 57 },
      2: { start: 57, end: 96 },
    },
  };

  // Function to get highlighted segments based on current language
  const getHighlightedSegments = (text) => {
    if (!text) return [];

    const highlights = highlightedWords[currentLanguage] || highlightedWords.en;

    const segments = [];
    let lastIndex = 0;

    // Sort highlights by start position to ensure proper order
    const sortedHighlights = Object.values(highlights).sort(
      (a, b) => a.start - b.start
    );

    sortedHighlights.forEach((highlight) => {
      // Add text before highlight (if any)
      if (highlight.start > lastIndex && lastIndex < text.length) {
        const beforeText = text.slice(
          lastIndex,
          Math.min(highlight.start, text.length)
        );
        if (beforeText) {
          segments.push({
            text: beforeText,
            isHighlighted: false,
          });
        }
      }

      // Add highlighted text (if current text length covers this highlight)
      if (text.length > highlight.start) {
        const highlightEnd = Math.min(highlight.end, text.length);
        const highlightText = text.slice(highlight.start, highlightEnd);
        if (highlightText) {
          segments.push({
            text: highlightText,
            isHighlighted: true,
          });
        }
        lastIndex = highlightEnd;
      }
    });

    // Add remaining text after all highlights
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      if (remainingText) {
        segments.push({
          text: remainingText,
          isHighlighted: false,
        });
      }
    }

    return segments;
  };

  // Typing effect with language change detection
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

  // Reset typing when language changes
  useEffect(() => {
    setTypedText("");
    setCurrentIndex(0);
  }, [currentLanguage, fullText]);

  // Reset typing when component mounts or text changes
  useEffect(() => {
    if (inView) {
      setTypedText("");
      setCurrentIndex(0);
    }
  }, [fullText]);

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
        staggerChildren: 0.3,
      },
    },
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
        delay: 0.4,
      },
    },
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
        delay: 0.5,
      },
    },
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
        delay: 1.2 + i * 0.2,
      },
    }),
  };

  // Navigation handlers
  const handleServicesClick = () => {
    navigate("/services");
  };

  const handleContactClick = () => {
    navigate("/contact");
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
            visible: { opacity: 1, y: 0 },
          }}
        >
          {t("about.title")}
        </motion.h2>
        <motion.p
          className="opacity-75 font-['Poppins',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl text-center font-normal text-black px-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {t("about.subtitle")}
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
                className="w-full max-w-[240px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] h-auto object-contain"
                alt="Sumou logo"
                src={AboutUsImage}
              />
            </motion.div>

            <motion.div
              className={`font-['Poppins',Helvetica] font-normal text-black text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[35px] text-left w-full px-2 sm:px-4 ${
                currentLanguage === "ar"
                  ? "text-right dir-rtl"
                  : "text-left dir-ltr"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.8 }}
            >
              {getHighlightedSegments(typedText).map((segment, index) => (
                <span
                  key={index}
                  className={
                    segment.isHighlighted
                      ? "font-bold text-purple text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[35px] hover:scale-105 transition-transform duration-300"
                      : "font-light"
                  }
                >
                  {segment.text}
                </span>
              ))}
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
                <Button
                  className="bg-purple text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-['Alexandria',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.18px] leading-6 hover:bg-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  onClick={handleServicesClick}
                >
                  {t("about.ourServices")}
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
                  onClick={handleContactClick}
                >
                  {t("about.contactUs")}
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};
