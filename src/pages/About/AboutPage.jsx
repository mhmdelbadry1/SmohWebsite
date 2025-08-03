import React from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import AboutUsImg from "../../screens/Homepage/imgs/AboutUs.png";

export const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const workProcessSteps = [
    {
      number: t('about.page.howWeWork.steps.research.number'),
      title: t('about.page.howWeWork.steps.research.title'),
      description: t('about.page.howWeWork.steps.research.description'),
    },
    {
      number: t('about.page.howWeWork.steps.planning.number'),
      title: t('about.page.howWeWork.steps.planning.title'),
      description: t('about.page.howWeWork.steps.planning.description'),
    },
    {
      number: t('about.page.howWeWork.steps.design.number'),
      title: t('about.page.howWeWork.steps.design.title'),
      description: t('about.page.howWeWork.steps.design.description'),
    },
    {
      number: t('about.page.howWeWork.steps.evaluation.number'),
      title: t('about.page.howWeWork.steps.evaluation.title'),
      description: t('about.page.howWeWork.steps.evaluation.description'),
    },
  ];

  return (
    <main className="bg-white w-full">
      <div className="mx-auto ">
        <div className="flex flex-col w-full">
          {/* Review List Section */}
          <section className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-[100px] py-10 sm:py-14 w-full bg-white">
            <header className="flex flex-col items-center gap-3 sm:gap-4 w-full">
              <h1 className={`font-['Poppins',Helvetica] font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] tracking-[0] leading-tight sm:leading-normal text-center ${currentLanguage === 'ar' ? 'font-["Alexandria"]' : ''}`}>
                {t('about.title')}
              </h1>
              <p dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`opacity-75 font-['Poppins',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed font-normal text-black tracking-[0] max-w-2xl ${currentLanguage === 'ar' ? 'font-["Alexandria"]' : ''}`}>
                {t('about.subtitle')}
              </p>
            </header>

            <Card className="w-full max-w-4xl border border-solid shadow-sm">
              <CardContent className="flex flex-col items-center gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
                <img
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-cover"
                  alt="Sumou Arabic Calligraphy"
                  src={AboutUsImg}
                />

                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`w-full font-['Poppins',Helvetica] font-semibold text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] tracking-[0] leading-relaxed ${currentLanguage === 'ar' ? 'font-["Alexandria"] text-right' : 'text-center sm:text-left'}`}>
                  <p>{t('about.page.welcomeTitle')}</p>
                  <br />
                  <p className="leading-relaxed whitespace-pre-line">
                    {t('about.page.launchpadText')}
                  </p>
                </div>

                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`w-full font-['Poppins',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] tracking-[0] leading-relaxed ${currentLanguage === 'ar' ? 'font-["Alexandria"] text-right' : 'text-center sm:text-left'}`}>
                  <span className="font-normal text-[#1f1f1f]">
                    {t('about.page.companyDescription.part1')}{" "}
                  </span>
                  <span className="font-medium">{t('about.page.companyDescription.visualIdentity')}</span>
                  <span className="font-normal text-[#1f1f1f]">{t('about.page.companyDescription.part2')} </span>
                  <span className="font-medium">{t('about.page.companyDescription.contentCreation')}</span>
                  <span className="font-normal text-[#1f1f1f]">{t('about.page.companyDescription.part3')} </span>
                  <span className="font-medium">
                    {t('about.page.companyDescription.creativeConsulting')}
                  </span>
                  <span className="font-normal text-[#1f1f1f]"> {t('about.page.companyDescription.part4')} </span>
                  <span className="font-medium">{t('about.page.companyDescription.emergingBrands')}</span>
                  <span className="font-normal text-[#1f1f1f]">
                    {t('about.page.companyDescription.part5')}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[802px] h-8 sm:h-10 md:h-12 lg:h-14 mx-auto"
              >

                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 802 56" fill="none" className="w-full h-full">
<g clipPath="url(#clip0_223_61)">
<path d="M158.235 31.1872L135.485 53.9259C134.554 54.8501 133.296 55.3687 131.984 55.3687C130.673 55.3687 129.414 54.8501 128.483 53.9259L109.764 35.2109C108.728 34.1828 107.328 33.606 105.869 33.606C104.409 33.606 103.009 34.1828 101.973 35.2109L83.2474 53.9259C82.3164 54.8501 81.0579 55.3687 79.7462 55.3687C78.4345 55.3687 77.1759 54.8501 76.245 53.9259L57.4912 35.1694C56.9835 34.6612 56.3805 34.2581 55.7169 33.983C55.0533 33.708 54.342 33.5664 53.6237 33.5664C52.9053 33.5664 52.194 33.708 51.5304 33.983C50.8668 34.2581 50.2639 34.6612 49.7561 35.1694L30.9955 53.9259C30.0657 54.8497 28.8083 55.3681 27.4977 55.3681C26.1872 55.3681 24.9298 54.8497 24 53.9259L4.8868 34.8237C4.64059 34.5645 4.36711 34.3327 4.07112 34.1323L1.67938 31.8025C1.14704 31.2714 0.724684 30.6404 0.436509 29.9458C0.148335 29.2512 0 28.5066 0 27.7546C0 27.0025 0.148335 26.2579 0.436509 25.5633C0.724684 24.8687 1.14704 24.2378 1.67938 23.7067L18.1036 7.23851L18.1589 7.29382L24 1.44493C24.928 0.517826 26.186 -0.00292969 27.4977 -0.00292969C28.8094 -0.00292969 30.0674 0.517826 30.9955 1.44493L49.7285 20.1738C50.7643 21.2018 52.1644 21.7787 53.6237 21.7787C55.0829 21.7787 56.4831 21.2018 57.5189 20.1738L76.245 1.44493C77.1751 0.519089 78.4339 -0.000677594 79.7462 -0.000677594C81.0584 -0.000677594 82.3173 0.519089 83.2474 1.44493L101.973 20.1738C103.009 21.2018 104.409 21.7787 105.869 21.7787C107.328 21.7787 108.728 21.2018 109.764 20.1738L128.49 1.44493C129.42 0.519089 130.679 -0.000677594 131.991 -0.000677594C133.303 -0.000677594 134.562 0.519089 135.492 1.44493L158.235 24.1975C159.154 25.1281 159.67 26.3838 159.67 27.6923C159.67 29.0009 159.154 30.2566 158.235 31.1872Z" fill="#DB4063"/>
<path d="M800.369 32.3072L778.311 54.3615C777.387 55.2873 776.167 55.8589 774.864 55.9765C773.561 56.094 772.259 55.7499 771.184 55.0045C770.916 54.8076 770.662 54.5928 770.424 54.3615L748.366 32.3072L748.283 32.2173C747.274 31.165 746.717 29.759 746.733 28.3011C746.748 26.8432 747.334 25.4494 748.366 24.4188L770.424 2.35756C770.657 2.12258 770.911 1.90966 771.184 1.72151C772.258 0.975153 773.56 0.629952 774.863 0.746211C776.165 0.86247 777.386 1.4328 778.311 2.35756L800.369 24.4188C801.414 25.465 802.002 26.8837 802.002 28.363C802.002 29.8422 801.414 31.2609 800.369 32.3072Z" fill="#DB4063"/>
<path d="M109.072 24.4049H742.026C740.995 25.4355 740.409 26.8293 740.393 28.2872C740.378 29.7452 740.934 31.1511 741.943 32.2034H109.072V24.4049Z" fill="#DB4063"/>
</g>
<defs>
<clipPath id="clip0_223_61">
<rect width="802" height="56" fill="white"/>
</clipPath>
</defs>
</svg>
           </div>
          </section>

          {/* Review Container Section */}
          <section className="flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-6 md:px-12 lg:px-[100px] py-10 sm:py-14 relative w-full bg-white overflow-hidden">
            {/* Background decorative elements - responsive and behind content */}
            {/* Left decorative SVG - bigger on mobile/tablet, positioned at top-left of cards */}
            <div className="absolute w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[285px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[780px] xl:h-[805px] left-[-52px] sm:left-[-20px] md:left-0 top-[120px] sm:top-[100px] md:top-[120px] lg:top-0 left-0 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 285 805" fill="none" className="w-full h-full">
                <path d="M41.8543 12.6331C69.7591 4.63314 99.5686 0.333138 128.045 8.23314C149.378 14.1331 169.759 26.6331 182.14 46.2331C192.616 62.7331 196.997 83.0331 194.14 102.633C190.902 125.433 178.616 144.233 163.569 160.433C131.378 195.033 89.2829 216.833 55.2829 249.233C19.2829 283.533 -9.57428 337.233 6.6162 389.433C21.0924 436.133 66.9019 462.633 105.283 484.833C137.473 503.333 170.521 520.733 201.092 542.233C229.569 562.333 260.235 588.633 269.283 625.133C280.426 670.533 250.616 713.433 216.521 737.833C173.283 768.733 119.569 783.433 68.0448 788.133C41.4733 790.533 14.6162 790.733 -11.9552 789.033C-38.7171 787.333 -65.2886 785.133 -91.7647 780.133C-104.146 777.733 -116.431 774.933 -128.717 771.933C-135.289 770.333 -138.05 781.133 -131.479 782.533C-104.812 788.033 -77.86 792.933 -51.0028 797.233C-23.9552 801.533 3.09239 803.933 30.521 804.033C85.0924 804.233 140.426 793.833 190.14 769.533C234.331 747.933 276.997 710.933 283.569 657.033C288.521 617.033 266.711 582.533 239.283 557.133C210.521 530.333 176.235 511.133 142.616 492.033C124.616 481.833 106.426 471.633 88.8067 460.733C68.7114 448.333 48.9019 434.333 33.8543 415.433C17.3781 394.733 10.9972 368.533 15.3781 342.033C19.8543 315.033 33.1876 291.033 50.8067 271.133C82.9972 234.733 126.521 212.633 161.378 179.533C178.235 163.533 193.569 144.433 200.997 121.533C207.378 101.733 207.283 79.9331 199.759 60.5331C192.045 40.6331 177.664 24.4331 159.854 14.1331C136.235 0.633138 108.045 -2.06686 81.7591 1.33314C68.0448 3.13314 54.6162 6.63314 41.5686 11.4331C40.7115 11.6331 41.0924 12.9331 41.8543 12.6331Z" fill="#4C31AF"/>
              </svg>
            </div>
            {/* Right decorative SVG - bigger on mobile/tablet, positioned at bottom-right of cards */}
            <div className="absolute w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] xl:w-[230px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] xl:h-[508px] bottom-[20px] sm:bottom-[30px] md:bottom-[40px] lg:top-[209px] right-0 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 230 508" fill="none" className="w-full h-full">
                <path d="M36.2596 370.679C24.9263 381.979 16.0691 394.979 9.68818 409.979C3.30722 424.879 -1.2642 440.179 1.11675 456.579C5.87865 489.579 36.5453 509.979 67.212 507.079C99.1168 503.979 125.879 481.379 144.355 455.179C161.688 430.579 171.879 400.379 172.641 369.779C173.593 335.779 161.784 305.179 143.593 277.579C133.879 262.779 122.831 248.779 114.164 233.279C106.545 219.679 101.117 204.779 98.1644 189.179C92.5453 158.779 97.6883 126.679 111.688 99.5794C125.593 72.6794 147.593 51.2794 172.831 36.2794C220.641 7.77937 283.403 1.07937 331.783 31.7794C337.974 35.6794 343.784 39.9794 349.307 44.8794C354.641 49.6794 362.545 41.5794 357.117 36.6794C314.545 -2.52062 253.783 -8.42063 201.403 10.0794C147.403 29.1794 99.6882 73.9794 87.7834 134.279C81.8787 164.279 85.2121 195.379 96.9264 223.379C110.355 255.479 135.784 280.079 150.26 311.679C176.069 367.979 157.022 436.379 112.355 475.479C88.3549 496.479 50.6406 507.179 24.3549 484.179C11.593 473.079 6.6406 456.679 6.6406 439.579C6.73584 422.379 13.593 406.379 21.7835 391.779C25.974 384.379 31.1168 377.579 36.6406 371.179C36.9263 370.779 36.5453 370.379 36.2596 370.679Z" fill="#4C31AF"/>
              </svg>
            </div>


            {/* Section header */}
            <header className="flex flex-col items-center gap-4 sm:gap-6 w-full">
              <div className="relative flex flex-col items-center">
                <h2 className={`font-['Alexandria',Helvetica] font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] tracking-[0] leading-tight sm:leading-normal text-center ${currentLanguage === 'ar' ? 'font-["Alexandria"]' : ''}`}>
                  {t('about.page.howWeWork.title')}
                </h2>
                
                {/* Red line positioned under the end of the heading text */}
                <div className={`${currentLanguage === 'ar' ? 'self-start ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12' : 'self-end mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12'} w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-2 sm:h-2.5 md:h-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 10" fill="none" className="w-full h-full">
                    <path d="M1.36228 7.84299C34.4 7.84299 67.4377 7.92492 100.593 8.17065C116.76 8.25257 132.927 8.58021 149.095 8.58021C156.944 8.58021 164.911 8.58021 172.76 8.98977C176.509 9.15359 180.141 9.48123 183.773 9.80888C188.342 10.2184 191.505 9.89077 196.074 9.56313C199.94 9.3174 201.58 5.95905 198.066 4.40273C194.668 2.84642 192.442 1.53584 188.342 1.04437C184.593 0.552903 180.844 0.389081 176.978 0.225258C169.128 -0.102387 161.162 -0.0204803 153.312 0.143342C136.442 0.470987 119.689 1.12628 102.819 1.78157C68.9607 3.01023 35.1029 4.40273 1.36228 5.95904C-0.395044 5.95904 -0.512199 7.84299 1.36228 7.84299Z" fill="#DB4063"/>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 mt-4 sm:mt-6 max-w-4xl">
                <p dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`relative self-stretch opacity-75 font-['Alexandria',Helvetica] font-normal text-[#1f1f1f] text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed px-2 sm:px-4 ${currentLanguage === 'ar' ? 'font-["Alexandria"]' : ''}`}>
                  {t('about.page.howWeWork.subtitle')}
                </p>
              </div>
            </header>

            {/* Work process cards */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl relative z-10">
              {/* First row of cards */}
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 md:gap-8 w-full">
                {workProcessSteps.slice(0, 2).map((step, index) => (
                  <Card
                    key={`step-${index}`}
                    className="w-full lg:flex-1 h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[250px] rounded-2xl sm:rounded-3xl border border-solid shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                  >
                    <CardContent dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 h-full ${currentLanguage === 'ar' ? 'items-end' : 'items-start'}`}>
                      <span className="font-['Alexandria',Helvetica] font-semibold text-red text-lg sm:text-xl md:text-2xl tracking-[0] leading-normal">
                        {step.number}
                      </span>
                      <h3 className={`self-stretch font-['Alexandria',Helvetica] font-semibold text-black text-base sm:text-lg md:text-xl tracking-[0] leading-normal ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                        {step.title}
                      </h3>
                      <p className={`self-stretch font-['Alexandria',Helvetica] font-light text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed flex-1 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second row of cards */}
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 md:gap-8 w-full">
                {workProcessSteps.slice(2, 4).map((step, index) => (
                  <Card
                    key={`step-${index + 2}`}
                    className="w-full lg:flex-1 h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[250px] rounded-2xl sm:rounded-3xl border border-solid shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                  >
                    <CardContent dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={`flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 h-full ${currentLanguage === 'ar' ? 'items-end' : 'items-start'}`}>
                      <span className="font-['Alexandria',Helvetica] font-semibold text-red text-lg sm:text-xl md:text-2xl tracking-[0] leading-normal">
                        {step.number}
                      </span>
                      <h3 className={`self-stretch font-['Alexandria',Helvetica] font-semibold text-black text-base sm:text-lg md:text-xl tracking-[0] leading-normal ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                        {step.title}
                      </h3>
                      <p className={`self-stretch font-['Alexandria',Helvetica] font-light text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed flex-1 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
