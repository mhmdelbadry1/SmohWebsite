import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import highlight from "../../imgs/Sketch-annotation-element-stroke-abstract-highlight-bling-line-1.png";
import bezierDesign from "../../imgs/bezier-design.png";
import facebookIcon from "../../imgs/facebook-svgrepo-com 1.png";
import Star from "../../imgs/Subtract.png"
import Idea from "../../imgs/idea.png"
import BrushCircle from "../../imgs/2.png";
import BrushLine from "../../imgs/3.png";
import Brush from "../../imgs/brush.png";



export const HeroBannerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imagePosition, setImagePosition] = useState("static");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100 && currentScroll < 600) {
        setImagePosition("slide");
      } else if (currentScroll <= 200) {
        setImagePosition("static");
      } else if (currentScroll >= 600) {
        setImagePosition("stop");
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getImageStyle = () => {
    switch (imagePosition) {
      case "slide":
        return {
          transform: "translateX(-110%) translateY(-40%) rotate(10deg)",
          transition: "transform 0.2 ease-in-out",
        };
      case "stop":
        return {

          transform: "translateX(-110%) translateY(-40%) rotate(10deg)",
          transition: "transform 0.2 ease-in-out",   
        };
      default:
        return {
          transform: "translateX(-35%) translateY(-70%) rotate(-20deg)",
          transition: "transform 0.5s ease-in-out",
        };
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start bg-white overflow-hidden ">

      <div className="absolute top-0 hidden lg:block left-0 h-[100vh] w-auto max-w-[450px] pointer-events-none z-10 transition-all duration-1000">
        <svg
          className="w-auto h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M41.8543 12.6331C69.7591 4.63314 99.5686 0.333138 128.045 8.23314C149.378 14.1331 169.759 26.6331 182.14 46.2331C192.616 62.7331 196.997 83.0331 194.14 102.633C190.902 125.433 178.616 144.233 163.569 160.433C131.378 195.033 89.2829 216.833 55.2829 249.233C19.2829 283.533 -9.57428 337.233 6.6162 389.433C21.0924 436.133 66.9019 462.633 105.283 484.833C137.473 503.333 170.521 520.733 201.092 542.233C229.569 562.333 260.235 588.633 269.283 625.133C280.426 670.533 250.616 713.433 216.521 737.833C173.283 768.733 119.569 783.433 68.0448 788.133C41.4733 790.533 14.6162 790.733 -11.9552 789.033C-38.7171 787.333 -65.2886 785.133 -91.7647 780.133C-104.146 777.733 -116.431 774.933 -128.717 771.933C-135.289 770.333 -138.05 781.133 -131.479 782.533C-104.812 788.033 -77.86 792.933 -51.0028 797.233C-23.9552 801.533 3.09239 803.933 30.521 804.033C85.0924 804.233 140.426 793.833 190.14 769.533C234.331 747.933 276.997 710.933 283.569 657.033C288.521 617.033 266.711 582.533 239.283 557.133C210.521 530.333 176.235 511.133 142.616 492.033C124.616 481.833 106.426 471.633 88.8067 460.733C68.7114 448.333 48.9019 434.333 33.8543 415.433C17.3781 394.733 10.9972 368.533 15.3781 342.033C19.8543 315.033 33.1876 291.033 50.8067 271.133C82.9972 234.733 126.521 212.633 161.378 179.533C178.235 163.533 193.569 144.433 200.997 121.533C207.378 101.733 207.283 79.9331 199.759 60.5331C192.045 40.6331 177.664 24.4331 159.854 14.1331C136.235 0.633138 108.045 -2.06686 81.7591 1.33314C68.0448 3.13314 54.6162 6.63314 41.5686 11.4331C40.7115 11.6331 41.0924 12.9331 41.8543 12.6331Z"
            fill="#4C31AF"
            stroke="#4C31AF"
            strokeWidth="2"
            strokeDasharray="3000"
            strokeDashoffset="3000"
            className="animate-draw-path"
          />
        </svg>

         <img
          src={bezierDesign}
          alt="Bezier Design"
          className="absolute top-[620px] left-[23%] w-[140px] z-10 animate-icon-entrance-bezier"
        />


        <div className = "absolute top-[8%] left-[18%] w-[90px] h-[90px] animate-icon-entrance">
          <img
          src ={Star}
          alt='Star Icon'
          className="w-full h-full object-contain animate-float-continuous animate-glow-white"
          />
           </div>
        
        <div className="absolute top-[38%] left-[30%] w-[85px] h-[85px] animate-icon-entrance-delayed">
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            className="w-full h-full object-contain animate-float-smooth animate-glow-facebook"
          />
        </div>

      </div>
      <div className="absolute top-[15%] hidden lg:block right-[-5%] h-full w-auto max-w-[450px] pointer-events-none z-0">
        <svg
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M36.2596 370.679C24.9263 381.979 16.0691 394.979 9.68818 409.979C3.30722 424.879 -1.2642 440.179 1.11675 456.579C5.87865 489.579 36.5453 509.979 67.212 507.079C99.1168 503.979 125.879 481.379 144.355 455.179C161.688 430.579 171.879 400.379 172.641 369.779C173.593 335.779 161.784 305.179 143.593 277.579C133.879 262.779 122.831 248.779 114.164 233.279C106.545 219.679 101.117 204.779 98.1644 189.179C92.5453 158.779 97.6883 126.679 111.688 99.5794C125.593 72.6794 147.593 51.2794 172.831 36.2794C220.641 7.77937 283.403 1.07937 331.783 31.7794C337.974 35.6794 343.784 39.9794 349.307 44.8794C354.641 49.6794 362.545 41.5794 357.117 36.6794C314.545 -2.52062 253.783 -8.42063 201.403 10.0794C147.403 29.1794 99.6882 73.9794 87.7834 134.279C81.8787 164.279 85.2121 195.379 96.9264 223.379C110.355 255.479 135.784 280.079 150.26 311.679C176.069 367.979 157.022 436.379 112.355 475.479C88.3549 496.479 50.6406 507.179 24.3549 484.179C11.593 473.079 6.6406 456.679 6.6406 439.579C6.73584 422.379 13.593 406.379 21.7835 391.779C25.974 384.379 31.1168 377.579 36.6406 371.179C36.9263 370.779 36.5453 370.379 36.2596 370.679Z"
            fill="#4C31AF"
            stroke="#4C31AF"
            strokeWidth="2"
            strokeDasharray="2500"
            strokeDashoffset="2500"
            className="animate-draw-path-delayed"
          />
        </svg>
      </div>

      <div className="absolute top-[10%] sm:top-[10%] right-[25%] md:right-[10%] sm:right-[15%] w-[35px] sm:w-[50px] h-[35px] sm:h-[50px] animate-bounce animate-icon-entrance-right">
        <div className="w-full h-full bg-gradient-to-br from-red-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21C12 21 3 14 3 8.5C3 6.5 4.5 5 6.5 5C8.5 5 10.5 6.5 12 9C13.5 6.5 15.5 5 17.5 5C19.5 5 21 6.5 21 8.5C21 14 12 21 12 21Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div
        className={`relative flex flex-col items-center justify-center gap-3 sm:gap-5 md:gap-8 max-w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] xl:max-w-6xl mx-auto px-2 sm:px-6 py-4 sm:py-8 md:py-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        <div className="flex flex-col items-center mb-2 sm:mb-5 md:mb-6 mt-10 sm:mt-16 relative w-full">
          
          <div className= "absolute w-auto h-auto top-[-35%] right-[85%] animate-icon-entrance-idea">
          <img
          src = {Idea}
          alt="Idea"
          className="animate-float-idea "
          />



          </div>

      
          <img
            src={highlight}
            alt="Highlight"
            className="absolute opacity-[80%] top-[-40px] sm:top-[-80px] right-[-10px] w-[60px] sm:w-[120px] h-auto z-10 animate-glow-white"
          />
          <h1 className="max-w-full font-['Poppins'] font-bold text-[22px] sm:text-[38px] md:text-[54px] lg:text-[70px] text-[#1F1F1F] text-center leading-[120%] sm:leading-[130%] md:leading-[140%] tracking-[0] animate-fade-in">
            We shape your identity
            <br />
            With a vision that
            <br />
            speaks{" "}
            <span className="relative inline-block">
              creatively!
              <span className="absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-1/2 w-[180%] md:w-[250%] h-[120%] md:h-[150%] pointer-events-none z-[-1]">
                <svg
                  viewBox="0 0 2500 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M1149 946c-2-2-38-6-80-10-183-14-414-66-639-143-323-110-423-200-422-383 0-63 5-89 24-126 51-102 201-191 413-234 9-24 431-46 265-21-8 6-30 11-49 11-19 0-33 13-29 5 169-67 389 8 391-1 60 14-16 30-34-6 1 29-74-5-82-15 22 10 232 2 308 11 19 2 100 11 180 19 134 14 200 19 370 32 36 2 94 6 130 9 36 3 101 7 145 11 44 3 123 9 175 14 52 5 101 10 108 10 6 0 12 6 12 14 0 16-26 21-160 31-65 5-214-1-450-20-102-9-442-41-520-50-19-2-125-10-236-16-185-12-369-5-459 15-95 21-124 30-192 57-149 59-226 117-262 199-25 56-21 94 16 161 45 84 131 138 328 208 66 23 131 46 145 51 76 27 260 69 370 85 25 4 56 8 70 10 92 14 314 26 475 26 160 1 428-13 492-25 10-2 47-7 83-11 36-4 121-18 190-31 68-14 138-27 155-30 52-9 198-45 243-60 174-58 314-190 316-299 2-80-62-118-262-154-263-49-255-46-250-95 3-30 4-31 54-29 55 2 323 64 380 88 93 39 121 82 122 188 1 68-3 91-24 134-44 91-175 193-304 237-149 32-459 104-610 121-30 3-71 8-90 10-79 11-366 11-342 6-66 1-123-1-125-3z"
                    stroke="#DB4063"
                    fill="#DB4063"
                    strokeWidth="4 md:strokeWidth-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: "scaleY(-1)",
                      transformOrigin: "center",
                      filter: "drop-shadow(0px 3px 6px rgba(233, 30, 99, 0.4))",
                    }}
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,5000;2500,2500;5000,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-2500;-5000"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </span>
            </span>
          </h1>

          
        </div>
      </div>

      <p className="max-w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[950px] opacity-75 font-['Poppins'] text-[13px] xs:text-[15px] sm:text-[18px] md:text-[20px] text-center leading-[140%] sm:leading-[150%] md:leading-[160%] relative font-normal text-[#1F1F1F] tracking-[0] animate-fade-in-delay px-2">
        Welcome to Sumou!
        <br />
        The starting point for your brand toward excellence and professionalism.
        <br />
        We're here to give your idea an identity and turn your vision into a
        stunning visual reality that truly represents you — a memorable
        identity.
      </p>
     <div className=" absolute top-[69%] fade-in left-[70%] w-[100px] h-[100px] animate-fade-in">

                    <img src={BrushCircle} alt="Brush" className="absolute top-[-10px] left-[-10px] " />
                    <img src={Brush} alt="Brush" />
                    <img src={BrushLine} alt="Brush" className="absolute top-[70px] w-[102px] h-[80px]"/>

                  </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float-continuous {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(2deg);
          }
          50% {
            transform: translateY(-12px) rotate(0deg);
          }
          75% {
            transform: translateY(-6px) rotate(-2deg);
          }
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) translateX(2px) rotate(3deg);
          }
          50% {
            transform: translateY(-4px) translateX(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) translateX(-2px) rotate(-3deg);
          }
        }

        @keyframes float-idea {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-10px) rotate(1deg) scale(1.02);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg) scale(0.98);
          }
        }

        .animate-float-continuous {
          animation: float-continuous 3s ease-in-out infinite;
        }

        .animate-float-smooth {
          animation: float-smooth 2s ease-in-out infinite;
        }

        .animate-float-idea {
          animation: float-idea 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes glow-white {
          0%, 100% {
            filter: drop-shadow(0 0 4px rgba(77, 54, 54, 0.4))
                    drop-shadow(0 0 8px rgba(200, 200, 255, 0.3))
                    drop-shadow(0 0 12px rgba(180, 180, 255, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))
                    drop-shadow(0 0 16px rgba(200, 200, 255, 0.5))
                    drop-shadow(0 0 24px rgba(180, 180, 255, 0.3));
          }
        }

        .animate-glow-white {
          animation: glow-white 2.5s ease-in-out infinite;
        }

        @keyframes draw-path {
          0% {
            stroke-dashoffset: 3000;
            fill-opacity: 0;
          }
          70% {
            stroke-dashoffset: 0;
            fill-opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
        }

        @keyframes draw-path-delayed {
          0% {
            stroke-dashoffset: 2500;
            fill-opacity: 0;
          }
          70% {
            stroke-dashoffset: 0;
            fill-opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
        }

        .animate-draw-path {
          animation: draw-path 4s ease-in-out forwards;
        }

        .animate-draw-path-delayed {
          animation: draw-path-delayed 4s ease-in-out  forwards;
        }

        /* Icon entrance animations */
        @keyframes icon-entrance {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(-90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes icon-entrance-from-left {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.3) rotate(-90deg);
          }
          70% {
            opacity: 0.8;
            transform: translateX(10px) scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        @keyframes icon-entrance-from-right {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.3) rotate(90deg);
          }
          70% {
            opacity: 0.8;
            transform: translateX(-10px) scale(1.1) rotate(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        @keyframes icon-entrance-bounce {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
          }
          50% {
            opacity: 0.8;
            transform: translateY(10px) scale(1.2);
          }
          70% {
            opacity: 0.9;
            transform: translateY(-5px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes icon-entrance-spin {
          0% {
            opacity: 0;
            transform: scale(0) rotate(720deg);
          }
          60% {
            opacity: 0.8;
            transform: scale(1.1) rotate(-20deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-icon-entrance {
          animation: icon-entrance 1.5s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-icon-entrance-delayed {
          animation: icon-entrance-from-left 1.8s ease-out 1.2s forwards;
          opacity: 0;
        }

        .animate-icon-entrance-right {
          animation: icon-entrance-from-right 1.6s ease-out 2s forwards;
          opacity: 0;
        }

        .animate-icon-entrance-idea {
          animation: icon-entrance-spin 2s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-icon-entrance-bezier {
          animation: icon-entrance-bounce 1.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-icon-entrance-highlight {
          animation: icon-entrance 1.5s ease-out 1.5s forwards;
          opacity: 0;
        }

        @media (max-width: 640px) {
          .animate-float, .animate-pulse, .animate-bounce {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBannerSection;
