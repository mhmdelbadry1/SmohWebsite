import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LazyImage } from "../../../../components/ui/LazyImage";
const highlight = "/images/decorations/highlight.png";
const bezierDesign = "/images/decorations/bezier-design.png";
const facebookIcon = "/images/icons/facebook-alt.png";
const Star = "/images/decorations/star.png";
const Idea = "/images/decorations/idea.png";
// import BrushCircle from "../../imgs/2.png";
// import BrushLine from "../../imgs/3.png";
// import Brush from "../../imgs/brush.png";
const Snapchat = "/images/icons/snapchat.png";
const Heart = "/images/decorations/love-icon.png";
const Instagram = "/images/icons/instagram-alt.png";

export const HeroBanner = () => {
  const { t, i18n } = useTranslation();
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full  h-auto py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[650px] lg:w-[480px] max-w-[800px] hidden xl:block h-full pointer-events-none transition-all duration-1000">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 350 900"
          preserveAspectRatio="xMinYMin"
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
          {/* Left curve icons with sequential animations */}
          <g className="animate-icon-star">
            <image href={Star} x="15%" y="0" width="25%" height="25%" />
          </g>
          <g className="animate-icon-facebook">
            <image
              href={facebookIcon}
              x="25%"
              y="33%"
              width="25%"
              height="25%"
            />
          </g>
          <g className="animate-icon-bezier">
            <image
              href={bezierDesign}
              x="15%"
              y="60%"
              width="35%"
              height="35%"
            />
          </g>
        </svg>
      </div>

      <div className="absolute top-[0%] sm:top-[10%] md:top-[15%] lg:right-[-3%] w-[650px] lg:w-[480px] max-w-[800px] hidden xl:block h-full lg:max-h-[955px] xl:max-h-[1600px] 2xl:right-0 pointer-events-none transition-all duration-1000">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 300 900"
          preserveAspectRatio="xMaxYMin"
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
          {/* Right curve icons with different sequential animations */}
          <g className="animate-icon-snapchat">
            <image href={Snapchat} x="45%" y="10%" width="30%" height="30%" />
          </g>
          <g className="animate-icon-heart">
            <image href={Heart} x="0" y="-10%" width="30%" height="30%" />
          </g>
          <g className="animate-icon-instagram">
            <image href={Instagram} x="15%" y="35%" width="25%" height="25%" />
          </g>
        </svg>
      </div>

      <div
        className={`relative flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 mt-0 relative w-full">
          <div className="absolute w-auto h-auto left-[2%] md:left-[4%] lg:left-[6%] top-[-40px] sm:top-[-50px] md:top-[-60px] lg:top-[-70px] xl:top-[-90px] animate-icon-entrance-idea z-20">
            <LazyImage
              src={Idea}
              alt="Idea"
              className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px] xl:w-[130px] h-auto animate-float-idea"
            />
          </div>
          <div className="absolute opacity-[80%] top-[-30px] sm:top-[-40px] md:top-[-60px] lg:top-[-80px] h-auto w-[40px] sm:w-[70px] md:w-[90px] lg:w-[110px] right-[-5px] sm:right-[-10px] z-10 animate-glow-black">
            <LazyImage
              src={highlight}
              alt="Highlight"
              className="w-full h-auto"
            />
          </div>
          <h1 className="max-w-full font-['Poppins'] font-bold text-[20px] sm:text-[32px] md:text-[48px] lg:text-[60px] xl:text-[65px] text-[#1F1F1F] text-center leading-[120%] sm:leading-[125%] md:leading-[130%] lg:leading-[135%] tracking-[0] animate-fade-in">
            {t("hero.title")}{" "}
            <span
              className={
                i18n.language === "ar" ? "text-[#4C31AF]" : "text-[#1F1F1F]"
              }
            >
              {t("hero.titleHighlight")}
            </span>
            <br />
            {t("hero.subtitle")} <br />
            <span className="relative ">
              {t("hero.speaks")}
              {"  "}
            </span>
            <span className="relative inline-block">
              {t("hero.creatively")}
              <span
                className={`absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-1/2 pointer-events-none z-[-1] ${
                  i18n.language === "ar"
                    ? "w-[110%] sm:w-[120%] md:w-[350%] lg:w-[400%] h-[90%] sm:h-[100%] md:h-[100%]"
                    : "w-[140%] sm:w-[180%] md:w-[400%] lg:w-[480%] h-[170%] sm:h-[155%] md:h-[140%]"
                }`}
              >
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
                  ></path>
                </svg>
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] opacity-75 font-['Poppins'] text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-center leading-[140%] sm:leading-[145%] md:leading-[150%] lg:leading-[155%] font-normal text-[#1F1F1F] tracking-[0] animate-fade-in-delay px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
        <p className="mb-1 sm:mb-2">{t("hero.welcomeMessage")}</p>
        <p className="mb-1 sm:mb-2">{t("hero.startingPoint")}</p>
        <p>{t("hero.missionStatement")}</p>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-continuous { 0%, 100% { transform: translateY(0px) rotate(0deg); } 25% { transform: translateY(-6px) rotate(2deg); } 50% { transform: translateY(-12px) rotate(0deg); } 75% { transform: translateY(-6px) rotate(-2deg); } }
        @keyframes float-smooth { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 25% { transform: translateY(-8px) translateX(2px) rotate(3deg); } 50% { transform: translateY(-4px) translateX(0px) rotate(0deg); } 75% { transform: translateY(-8px) translateX(-2px) rotate(-3deg); } }
        @keyframes float-idea { 0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 33% { transform: translateY(-10px) rotate(1deg) scale(1.02); } 66% { transform: translateY(-5px) rotate(-1deg) scale(0.98); } }
        .animate-float-smooth { animation: float-smooth 2s ease-in-out infinite; }
        .animate-float-idea { animation: float-idea 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        @keyframes glow-black { 0%, 100% { filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 8px rgba(205, 205, 205, 0.4)) drop-shadow(0 0 12px rgba(159, 158, 158, 0.3)); } 50% { filter: drop-shadow(0 0 8px rgba(146, 145, 145, 0.8)) drop-shadow(0 0 16px rgba(135, 135, 135, 0.6)) drop-shadow(0 0 24px rgba(132, 132, 132, 0.4)); } }
        .animate-glow-black { animation: glow-black 2.5s ease-in-out infinite; }
        @keyframes draw-path { 0% { stroke-dashoffset: 3000; fill-opacity: 0; } 70% { stroke-dashoffset: 0; fill-opacity: 0; } 75% { stroke-dashoffset: 0; fill-opacity: 1; } 100% { stroke-dashoffset: 0; fill-opacity: 1; } }
        @keyframes draw-path-delayed { 0% { stroke-dashoffset: 2500; fill-opacity: 0; } 70% { stroke-dashoffset: 0; fill-opacity: 0; } 75% { stroke-dashoffset: 0; fill-opacity: 1; } 100% { stroke-dashoffset: 0; fill-opacity: 1; } }
        .animate-draw-path { animation: draw-path 4s ease-in-out forwards; }
        .animate-draw-path-delayed { animation: draw-path-delayed 4s ease-in-out forwards; }

        /* Smooth Sequential Icon Animations - Eye-friendly */
        @keyframes smoothFadeIn { 
          0% { opacity: 0; transform: scale(0.8) translateY(15px); } 
          100% { opacity: 1; transform: scale(1) translateY(0); } 
        }
        @keyframes gentleSlideUp { 
          0% { opacity: 0; transform: translateY(20px) scale(0.9); } 
          100% { opacity: 1; transform: translateY(0) scale(1); } 
        }
        @keyframes softScale { 
          0% { opacity: 0; transform: scale(0.7); } 
          100% { opacity: 1; transform: scale(1); } 
        }
        @keyframes delicateFloat { 
          0% { opacity: 0; transform: translateY(25px) scale(0.85); } 
          100% { opacity: 1; transform: translateY(0) scale(1); } 
        }
        @keyframes subtleGrow { 
          0% { opacity: 0; transform: scale(0.6); } 
          100% { opacity: 1; transform: scale(1); } 
        }
        @keyframes gentleRise { 
          0% { opacity: 0; transform: translateY(18px) scale(0.88); } 
          100% { opacity: 1; transform: translateY(0) scale(1); } 
        }

        /* Apply smooth animations with gentle timing */
        .animate-icon-star { 
          opacity: 0; 
          animation: smoothFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards; 
        }
        .animate-icon-facebook { 
          opacity: 0; 
          animation: gentleSlideUp 1.3s cubic-bezier(0.4, 0, 0.2, 1) 1.8s forwards; 
        }
        .animate-icon-bezier { 
          opacity: 0; 
          animation: softScale 1.4s cubic-bezier(0.4, 0, 0.2, 1) 2.1s forwards; 
        }

        .animate-icon-snapchat { 
          opacity: 0; 
          animation: delicateFloat 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.6s forwards; 
        }
        .animate-icon-heart { 
          opacity: 0; 
          animation: subtleGrow 1.3s cubic-bezier(0.4, 0, 0.2, 1) 1.9s forwards; 
        }
        .animate-icon-instagram { 
          opacity: 0; 
          animation: gentleRise 1.2s cubic-bezier(0.4, 0, 0.2, 1) 2.2s forwards; 
        }

        /* Subtle hover effects */
        .animate-icon-star:hover image { transform: scale(1.05); transition: transform 0.4s ease; }
        .animate-icon-facebook:hover image { transform: scale(1.03) translateY(-2px); transition: transform 0.4s ease; }
        .animate-icon-bezier:hover image { transform: scale(1.04); transition: transform 0.4s ease; }
        .animate-icon-snapchat:hover image { transform: scale(1.05) translateY(-3px); transition: transform 0.4s ease; }
        .animate-icon-heart:hover image { transform: scale(1.06); transition: transform 0.4s ease; }
        .animate-icon-instagram:hover image { transform: scale(1.04); transition: transform 0.4s ease; }
      `}</style>
    </section>
  );
};

export default HeroBanner;
