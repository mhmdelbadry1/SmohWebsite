import React from "react";
import { useTranslation } from 'react-i18next';
import { Projects } from "../Home/sections/Projects/Projects.jsx";

export const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  // Handle portfolio download
  const handleDownloadPortfolio = () => {
    const pdfUrl = '/documents/portfolio.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = currentLanguage === 'ar' ? 'بورتفوليو-سمو.pdf' : 'Sumou-Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Projects isProjectsPage={true} />
      
      {/* Ready to Work Section */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-br md:px-24 from-white to-purple/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className={`w-full flex-1 text-center ${currentLanguage === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
              <div className="relative inline-block">
                <h2 className={`font-['Poppins',Helvetica] font-semibold text-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}>
                  {currentLanguage === 'ar' ? 'هل أنت ' : 'Are you '}
                  <span className="relative inline-block z-10">
                    {currentLanguage === 'ar' ? 'جاهز للعمل' : 'ready to work'}
                    {/* Red Circle SVG */}
                    <svg 
                      className="absolute -top-2 -left-0 z-[-1] w-full h-full pointer-events-none" 
                      style={{ transform: currentLanguage === 'ar' ? 'scale(1.5)' : 'scale(1.8)' }}
                      width="329" 
                      height="123" 
                      viewBox="0 0 329 123" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M255.806 103.74C230.998 99.9382 205.927 103.075 181.119 105.356C156.575 107.637 132.084 111.439 107.54 113.15C83.9986 114.766 60.0353 114.766 37.0748 104.596C27.9962 100.604 -5.67921 85.1105 8.14986 57.356C12.478 48.7065 19.0231 43.8589 24.9875 40.152C30.952 36.4451 37.0748 33.8787 43.1976 31.3124C53.1207 27.1302 62.9911 22.853 73.0198 19.9064C85.0015 16.3896 97.0887 13.8232 109.229 12.1124C157.05 5.26879 205.663 8.12027 253.22 19.2411C262.879 21.5223 272.591 23.7084 282.198 26.845C291.224 29.7916 300.408 33.5936 308.642 41.1975C312.495 44.7144 316.137 49.0867 319.251 54.5045C322.471 60.1124 325.585 70.3778 320.676 76.0807C316.084 81.4035 310.014 83.1144 304.736 84.6352C298.983 86.156 293.229 87.2015 287.476 88.5322C281.512 89.8629 275.547 91.1936 269.583 92.2392C265.571 92.9996 265.413 104.31 269.583 103.74C282.198 102.029 294.76 98.0372 307.217 94.3303C316.454 91.5738 331.497 85.2055 328.646 62.5837C326.535 45.855 315.767 35.3045 307.745 29.1262C298.719 22.2827 289.112 18.7658 279.453 16.1044C230.365 2.70244 180.96 -2.81043 131.345 1.37175C106.484 3.46284 81.6762 8.31037 57.2906 17.3401C49.3732 20.2866 41.403 23.6133 33.5383 27.1302C26.4127 30.3619 19.2342 34.1639 12.742 40.3421C7.25256 45.5698 1.55202 53.554 0.285239 65.15C-1.40381 80.453 4.66621 91.7639 11.6863 98.4174C21.1344 107.352 32.0604 112.295 42.4586 115.907C54.4931 120.089 66.7387 122.18 79.037 122.75C105.164 124.081 131.239 119.804 157.261 116.857C183.441 113.815 209.674 112.2 235.907 109.728C242.611 109.063 249.261 108.303 255.912 107.257C257.073 107.067 257.073 103.93 255.806 103.74Z" fill="#DB4063"/>
                    </svg>
                  </span>
                  {currentLanguage === 'ar' ? ' معنا؟' : ' with us?'}
                </h2>
              </div>
              
              <p className={`opacity-75 font-['Poppins',Helvetica] text-base sm:text-lg md:text-xl font-normal text-black mt-6 ${currentLanguage === 'ar' ? 'font-alexandria' : ''}`}>
                {currentLanguage === 'ar' ? 
                  'استعرض نماذج من مشاريعنا وحلولنا المبتكرة، وحمّل ملف الأعمال الآن.' :
                  'Explore examples of our projects and innovative solutions, and download our portfolio now.'
                }
              </p>
            </div>
            
            {/* Button */}
            <div className="flex-shrink-0">
              <button 
                onClick={handleDownloadPortfolio}
                className={`inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#4C31AF] rounded-lg hover:bg-[#3d2689] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${currentLanguage === 'ar' ? 'font-alexandria' : 'font-[\'Poppins\',Helvetica]'}`}
              >
                <span className="font-normal text-white text-lg leading-6 whitespace-nowrap">
                  {currentLanguage === 'ar' ? 'تحميل البورتفوليو' : 'Download Portfolio'}
                </span>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
