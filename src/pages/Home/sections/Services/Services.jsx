import React from "react";
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { LazyImage } from "../../../../components/ui/LazyImage";
const PinImage = "/images/icons/pin.png";
import { useInView } from "react-intersection-observer";
const frame1 = "/images/decorations/group-7.png";
const frame2 = "/images/decorations/group-8.png";
import { useNavigate } from 'react-router-dom';

// Custom styles for 1024px to 1200px media query
const customStyles = `
  <style>
    @media (min-width: 1024px) and (max-width: 1200px) {
      .custom-pin-position {
        left: 100px !important;
        top: 10px !important;
      }
      .custom-underline-position {
        left: 15% !important;
      }
    }
  </style>
`;

const AnimatedArrowButton = ({ isArabic, large }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    let active = true;
    async function animateLoop() {
      while (active && hovered) {
        // 1. Rotate 360deg, scale up
        await controls.start({ rotate: 360, scale: 1.15, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } });
        // 2. Move slightly past (x: isArabic ? -8 : 8)
        await controls.start({ rotate: 360, scale: 1.1, x: isArabic ? -8 : 8, transition: { duration: 0.15 } });
        // 3. Shake (x: isArabic ? -14 : 14)
        await controls.start({ rotate: 360, scale: 1.1, x: isArabic ? -14 : 14, transition: { duration: 0.08 } });
        await controls.start({ rotate: 360, scale: 1.1, x: isArabic ? -8 : 8, transition: { duration: 0.08 } });
        // 4. Return to original (x: 0, rotate: 0, scale: 1)
        await controls.start({ rotate: 0, scale: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } });
        // Wait 2s before next loop
        await new Promise(res => setTimeout(res, 2000));
      }
    }
    if (hovered) {
      animateLoop();
    } else {
      controls.start({ rotate: 0, scale: 1, x: 0 });
    }
    return () => { active = false; };
    // eslint-disable-next-line
  }, [hovered, isArabic]);

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.div
      className={`flex ${large ? 'w-[60px] h-[60px]' : 'w-[50px] h-[50px]'} items-center justify-center p-2 bg-[#f8d9e0] rounded-[40px] overflow-hidden cursor-pointer hover:bg-[#f0c9d0] transition-colors duration-300`}
      animate={controls}
      initial={{ rotate: 0, scale: 1, x: 0 }}
      whileTap={{ scale: 0.92 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={isArabic ? 'انتقل إلى صفحة تواصل معنا' : 'Go to Contact page'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        style={isArabic ? { transform: 'scaleX(-1)' } : {}}
      >
        <path
          d="M16.4248 8.17513L16.4248 1.57547M16.4248 1.57547L9.82517 1.57547M16.4248 1.57547L1.57559 16.4247"
          stroke="#DB4063"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export const Services = () => {
  const { t, i18n } = useTranslation();
  // Always use the resolved language for layout/conditionals
  const lang = i18n.resolvedLanguage || i18n.language;
  console.log("Current language:", lang);
  const serviceItems = [
    { number: "01", title: t('services.logoDesign') },
    { number: "02", title: t('services.advertisingDesign') },
    { number: "03", title: t('services.printMaterial') },
    { number: "04", title: t('services.calligraphy') },
    { number: "05", title: t('services.socialMedia') },
  ];

  // Animation controls
  const headerControls = useAnimation();
  const lineControls = useAnimation();
  const pinControls = useAnimation();
  const servicesControls = useAnimation();
  const svgCardControls = useAnimation();
  const textCardsControls = useAnimation();
  const arrowControls = useAnimation();

  // Intersection Observer hooks
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
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
        duration: 1.5,
        ease: "easeInOut",
      },
    },
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

  const frame1Animation = {
    hidden: { opacity: 0, x: -100, rotate: -15, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const frame2Animation = {
    hidden: { opacity: 0, x: 100, rotate: 15, scale: 1.2 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  // Trigger animations when section is in view
  React.useEffect(() => {
    if (inView) {
      headerControls.start("visible");
      lineControls.start("visible");
      pinControls.start("visible");
      servicesControls.start("visible");
      svgCardControls.start("visible");
      textCardsControls.start("visible");
      arrowControls.start("visible");
    } else {
      headerControls.start("hidden");
      lineControls.start("hidden");
      pinControls.start("hidden");
      servicesControls.start("hidden");
      svgCardControls.start("hidden");
      textCardsControls.start("hidden");
      arrowControls.start("hidden");
    }
  }, [inView, headerControls, lineControls, pinControls, servicesControls, svgCardControls, textCardsControls, arrowControls]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: customStyles }} />
      <section ref={sectionRef} className="container flex flex-col items-center gap-10 py-16 sm:py-20 relative w-full bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate={headerControls}
        variants={fadeUp}
        custom={0}
        className="flex items-center w-full flex-col gap-6 relative"
      >
        <div className="relative w-full z-[10] [font-family:'Poppins',Helvetica] font-semibold text-center text-black text-[28px] md:text-5xl lg:text-[56px]">
          {t('services.title')}
          <div className={`absolute ${lang==='ar' ? 'w-[800px] h-[22px] left-[68%]' : 'w-[400px] h-4 left-[60%]'}  -translate-x-1/2 hidden lg:block  z-[-1]`} style={{top: '100%'}}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width={lang === 'ar' ? "800" : "400"}
              height={lang === 'ar' ? "22" : "12"}
              viewBox="0 0 400 12"
              fill="none"
              style={{ display: 'block', margin: '0 auto' }}
              initial="hidden"
              animate={lineControls}
            >
              <defs>
                <mask id={lang === 'ar' ? 'revealMaskAr' : 'revealMask'}>
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
                d={lang === 'ar'
                  ? "M178 8C148 8 118 8.1 88 8.3C73 8.4 58 8.7 43 8.7C36 8.7 29 8.7 22 9C18.5 9.1 15 9.3 11.5 9.5C7 9.7 4 9.5 0 9.3C-1 9.2 -2 7.1 1 6.3C4 5.5 6 4.8 11.5 4.4C15 4.1 18.5 4 22 3.9C29 3.7 36 3.8 43 3.9C58 4.1 73 4.4 88 4.7C118 5.3 148 6.1 178 7C180 7 180.1 8 178 8Z"
                  : "M397.275 9.41159C331.2 9.41159 265.125 9.5099 198.815 9.80479C166.48 9.90308 134.145 10.2963 101.81 10.2963C86.1116 10.2963 70.1786 10.2963 54.4798 10.7877C46.9819 10.9843 39.7183 11.3775 32.4547 11.7707C23.3166 12.2621 16.9902 11.8689 7.85214 11.4758C0.119904 11.1809 -3.16046 7.15086 3.86884 5.28328C10.6638 3.41571 15.1157 1.843 23.3166 1.25324C30.8145 0.663484 38.3124 0.466897 46.0446 0.27031C61.7434 -0.122864 77.6765 -0.0245764 93.3753 0.172011C127.116 0.565184 160.622 1.35153 194.363 2.13788C262.079 3.61228 329.794 5.28328 397.275 7.15085C400.79 7.15085 401.024 9.41159 397.275 9.41159Z"}
                fill="#DB4063"
                stroke="#DB4063"
                strokeWidth="2"
                strokeLinecap="round"
                mask={`url(#${lang === 'ar' ? 'revealMaskAr' : 'revealMask'})`}
              />
            </motion.svg>
          </div>
        </div>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="w-full opacity-75 [font-family:'Poppins',Helvetica] text-lg md:text-xl text-center font-normal text-black"
        >
          {t('services.subtitle')}
        </motion.p>
      </motion.div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-14 relative w-full">
        {/* Left side cards */}
        <motion.div
          className="flex flex-col items-start gap-6 relative flex-1 w-full"
          initial="hidden"  
          animate={servicesControls}
        >
          {serviceItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              className="w-full"
              initial="hidden"
              animate={servicesControls}
            >
              <Card className={`w-full border border-solid rounded-2xl overflow-hidden ${i === serviceItems.length - 1 ? 'hover:shadow-sm hover:scale-100' : ''}`}>
                <CardContent className="flex items-center p-6 w-full">
                  <div className={`inline-flex items-center gap-4 w-full ${
                    i === serviceItems.length - 1 
                      ? 'bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]' 
                      : ''
                  }`}>
                    <span className={`[font-family:'Poppins',Helvetica] font-semibold text-purple text-2xl ${
                      i === serviceItems.length - 1 ? 'opacity-40' : ''
                    }`}>
                      {item.number}
                    </span>
                    <span className={`[font-family:'Poppins',Helvetica] font-normal text-black text-xl ${
                      i === serviceItems.length - 1 ? 'opacity-40' : ''
                    }`}>
                      {item.title}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="hidden lg:block absolute w-[178px] h-[575px] top-[320px] left-[179px] rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
        </motion.div>

        {/* Right section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto"
          initial="hidden"
          animate={svgCardControls}
        >
          {/* Purple Text Card - First on mobile */}
          <motion.div className="block lg:hidden w-full h-full;" animate={textCardsControls}>
            <motion.div variants={fadeUp} custom={8}>
              <Card className="flex flex-col w-full p-8 bg-purple rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                  {lang === 'ar' ? (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base">
هل تساءلت يومًا كيف يتحول الإبداع إلى تأثير؟                      </p>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm">
                      في سمو، لا نصمم فحسب — نحن نُحيي الأفكار.
اكتشف رحلتنا في صناعة السحر البصري
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base">
                        Have you ever wondered how creativity turns into impact?
                      </p>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm">
                        At Sumou, we don't just design — we bring ideas to life.
                        Discover our journey in crafting visual magic.
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Frames Image Card - Second on mobile */}
          <motion.div
            className="w-full lg:w-[375px] flex-shrink-0 rounded-3xl overflow-hidden bg-white"
            custom={7}
          >
            <CardContent className="p-0">
              <motion.div
                className="relative w-full aspect-square max-w-none mx-auto p-4 sm:p-6 md:p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                {/* Background/Main frame */}
                <div className="relative w-full h-full">
                  <motion.div
                    variants={frame1Animation}
                    initial="hidden"
                    animate={svgCardControls}
                    className="absolute bottom-[-3%]  left-[0%] sm:left-[0%]  w-[50vw] sm:w-[37vw] h-auto md:w-[38vw] lg:bottom-[-60%] lg:left-[-10%] lg:w-[210px]"
                  >
                    <LazyImage
                      src={frame1}
                      alt="Frame 1"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  {/* Overlapping second frame */}
                  <motion.div
                    variants={frame2Animation}
                    initial="hidden"
                    animate={svgCardControls}
                    className="absolute top-[-2%] sm:top-[-5%] right-[-3%] sm:right-[-5%] w-[60vw] h-auto  sm:w-[54vw] md:w-[45vw] lg:right-[-10%] lg:top-[35%] lg:w-[260px] z-10"
                  >
                    <LazyImage
                      src={frame2} 
                      alt="Frame 2"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </motion.div>

          {/* Red Text Card - Third on mobile */}
          <motion.div className="block lg:hidden w-full" animate={textCardsControls}>
            <motion.div variants={fadeUp} custom={9}>
              <Card className="flex flex-col w-full p-8 bg-red rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                  {lang === 'ar' ? (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg">
                        هل تبحث عن خبراء تصميم يحولون رؤيتك إلى واقع؟
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl">
                          تحدث مع أخصائيينا.
                        </p>
                        <AnimatedArrowButton isArabic={true} />
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg">
                        Looking for design experts who can turn your vision into reality?
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl">
                          Talk to our specialists.
                        </p>
                        <AnimatedArrowButton isArabic={false} />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Desktop Text Cards - Hidden on mobile */}
          <motion.div className="hidden lg:flex flex-col gap-6 w-full lg:w-auto " animate={textCardsControls}>
            <motion.div variants={fadeUp} custom={8}>
              <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-purple rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-[200px] gap-4">
                  {lang === 'ar' ? (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base">
هل تساءلت يومًا كيف يتحول الإبداع إلى تأثير؟                      </p>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm">
    في سمو، لا نصمم فحسب — نحن نُحيي الأفكار.
اكتشف رحلتنا في صناعة السحر البصري
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base">
                        Have you ever wondered how creativity turns into impact?
                      </p>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm">
                        At Sumou, we don't just design — we bring ideas to life.
                        Discover our journey in crafting visual magic.
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} custom={9}>
              <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-red rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-[200px] gap-4">
                  {lang === 'ar' ? (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg">
                        هل تبحث عن خبراء تصميم يحولون رؤيتك إلى واقع؟
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl">
                          تحدث مع أخصائيينا.
                        </p>
                        <AnimatedArrowButton isArabic={true} large />
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg">
                        Looking for design experts who can turn your vision into reality?
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl">
                          Talk to our specialists.
                        </p>
                        <AnimatedArrowButton isArabic={false} large />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pin Image */}
      {lang === 'ar' ? (
        <motion.div
          initial="hidden"
          animate={pinControls}
          variants={pinAnimation}
          className="absolute w-20 h-20 top-0 lg:left-[340px] md:left-[260px] hidden lg:block"
        >
          <LazyImage
            alt="Decorative element"
            src={PinImage}
            className="w-full h-full"
          />
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate={pinControls}
          variants={pinAnimation}
          className="absolute w-20 h-20 top-[30px] left-[170px] custom-pin-position hidden lg:block"
        >
          <LazyImage
            alt="Decorative element"
            src={PinImage}
            className="w-full h-full"
          />
        </motion.div>
      )}
    </section>
    </>
  );
};