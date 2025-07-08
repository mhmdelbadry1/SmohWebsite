import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import PinImage from "../../imgs/Pin.png";
import { useInView } from "react-intersection-observer";
import frame1 from "../../imgs/Group 7.png";
import frame2 from "../../imgs/Group 8.png";

export const TestimonialsSection = () => {
  const serviceItems = [
    { number: "01", title: "Logo and Visual Identity Design" },
    { number: "02", title: "Advertising Post Design" },
    { number: "03", title: "Print Material Design" },
    { number: "04", title: "Arabic Calligraphy Creation" },
    { number: "05", title: "Content and Social Media Account Management" },
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
        delay: i * 0.15,
        duration: 0.6,
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
    <section ref={sectionRef} className="container flex flex-col items-center gap-10 py-16 sm:py-20 relative w-full bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate={headerControls}
        variants={fadeUp}
        custom={0}
        className="flex items-center w-full flex-col gap-6 relative"
      >
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-black text-4xl md:text-5xl lg:text-[56px]">
          What Do We Offer You?
          <div className="relative w-[400px] h-3">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="12"
              viewBox="0 0 400 12"
              fill="none"
              style={{ transform: "translate(250px, 0)" }}
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
          className="w-full opacity-75 [font-family:'Poppins',Helvetica] text-lg md:text-xl text-center font-normal text-black"
        >
          Whatever service you need, we promise professionalism and innovation.
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
            <motion.div key={i} custom={i + 2} variants={fadeUp} className="w-full">
              <Card className="w-full border border-solid rounded-2xl overflow-hidden">
                <CardContent className="flex items-center p-6 w-full">
                  <div className="inline-flex items-center gap-4 w-full">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-purple text-2xl">
                      {item.number}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                      {item.title}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="hidden lg:block absolute w-[178px] h-[534px] top-[184px] left-[179px] rotate-90 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
        </motion.div>

        {/* Right section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto"
          initial="hidden"
          animate={svgCardControls}
        >
          {/* Frames Image Card */}
          <motion.div
            className="w-full lg:w-[375px] flex-shrink-0 rounded-3xl overflow-hidden bg-white"
            custom={7}
            variants={fadeUp}
          >
            <CardContent className="p-0">
              <motion.div
                className="relative w-full aspect-square max-w-[367px] mx-auto p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                {/* Background/Main frame */}
                <div className="relative w-full h-full">
                  <motion.img
                    src={frame1}
                    alt="Frame 1"
                    className="absolute bottom-[-50%] left-[-10%] w-[210px] h-[250px] object-contain"
                    variants={frame1Animation}
                    initial="hidden"
                    animate={svgCardControls}
                  />
                  
                  {/* Overlapping second frame */}
                  <motion.img 
                    src={frame2} 
                    alt="Frame 2"
                    className="absolute top-[15%] right-[-12%] w-[260px] h-[320px] object-contain z-10"
                    variants={frame2Animation}
                    initial="hidden"
                    animate={svgCardControls}
                  />
                </div>
              </motion.div>
            </CardContent>
          </motion.div>

          {/* Text Cards */}
          <motion.div className="flex flex-col gap-6 w-full lg:w-auto" animate={textCardsControls}>
            <motion.div variants={fadeUp} custom={8}>
              <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-purple rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                  <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-base">
                    Have you ever wondered how creativity turns into impact?
                  </p>
                  <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-sm">
                    At Sumou, we don't just design — we bring ideas to life.
                    Discover our journey in crafting visual magic.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} custom={9}>
              <Card className="flex flex-col w-full lg:w-[250px] p-8 bg-red rounded-[32px]">
                <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                  <p className="[font-family:'Alexandria',Helvetica] font-normal text-white text-lg">
                    Looking for design experts who can turn your vision into reality?
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="w-[115px] [font-family:'Alexandria',Helvetica] font-semibold text-white text-xl">
                      Talk to our specialists.
                    </p>
                    <motion.div
                      className="flex w-[50px] h-[50px] items-center justify-center p-2 bg-[#f8d9e0] rounded-[40px] overflow-hidden cursor-pointer hover:bg-[#f0c9d0] transition-colors duration-300"
                      initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: inView ? 1 : 0, 
                        rotate: inView ? 360 : 0, 
                        scale: inView ? 1 : 0.8 
                      }}
                      transition={{
                        rotate: { 
                          duration: 0.8, 
                          ease: "easeInOut",
                          delay: inView ? 1.2 : 0
                        },
                        opacity: { 
                          duration: 0.3, 
                          delay: inView ? 1.2 : 0 
                        },
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.6,
                          delay: inView ? 1.2 : 0
                        },
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pin Image */}
      <motion.img
        initial="hidden"
        animate={pinControls}
        variants={pinAnimation}
        className="absolute w-20 h-20 top-[30px] left-[170px]"
        alt="Decorative element"
        src={PinImage}
      />
    </section>
  );
};