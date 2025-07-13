import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import projectImg1 from "../../imgs/project_1.png";
import projectImg2 from "../../imgs/project_2.png";
import projectImg3 from "../../imgs/project_3.png";
import projectImg4 from "../../imgs/project_4.png";
import projectImg5 from "../../imgs/project_5.png";
import projectImg6 from "../../imgs/project_6.png";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [columns, setColumns] = useState(3);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const updateColumns = () => {
      setColumns(window.innerWidth >= 1024 ? 3 : 2);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and trigger animations when section comes into view
            setVisibleCards(new Set());
            
            // Sequential animation with staggered delays
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  setVisibleCards(prev => new Set([...prev, index]));
                }, index * 150); // 150ms delay between each card
              }
            });
          } else {
            // Reset when section goes out of view
            setVisibleCards(new Set());
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    { id: 1, title: "E-commerce Platform", category: "Web Design", image: projectImg1 },
    { id: 2, title: "Mobile Banking App", category: "Mobile Design", image: projectImg2 },
    { id: 3, title: "Brand Identity", category: "Branding", image: projectImg3 },
    { id: 4, title: "Social Media App", category: "UI/UX", image: projectImg4 },
    { id: 5, title: "Restaurant Website", category: "Web Design", image: projectImg5 },
    { id: 6, title: "Corporate Dashboard", category: "Web App", image: projectImg6 },
  ];

  // Reorder projects for mobile: swap 3rd and 5th images
  const mobileProjects = [
    projects[0], // 1st stays
    projects[1], // 2nd stays
    projects[4], // 5th goes to 
    projects[3], // 4th stays
    projects[2], // 3rd goes to 
    projects[5], // 6th stays
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full flex flex-col  items-center gap-10 py-16 sm:py-20 overflow-hidden relative bg-gradient-to-br from-white to-purple/5"
    >
      <div className="flex flex-col items-center gap-4 relative w-full max-w-7xl mx-auto px-4">
        <h2 className="relative w-fit font-['Poppins',Helvetica] font-semibold text-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] animate-fade-in text-center">
          Our Projects
        </h2>
        <p className="opacity-75 font-['Poppins',Helvetica] text-base sm:text-lg md:text-xl text-center font-normal text-black max-w-4xl">
          Discover our most notable work that reflects our commitment to quality and innovation.
        </p>
      </div>

      <div className="w-full">
        <div
          className={`flex flex-wrap gap-y-8 ${
            columns === 3 ? "" : "px-4"
          }`}
          style={
            columns === 3
              ? {
                  width: "120vw", // overflow the page on both sides
                  marginLeft: "-10vw", // start outside left
                  marginRight: "0", // stretch to right edge
                }
              : {}
          }
        >
          {(columns === 3 ? projects : mobileProjects).map((project, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const isVisible = visibleCards.has(index);

            const isMobileCard =
              (col % 2 !== 0 ) ;

            const baseCardStyle = {
              borderRadius: "16px",
              padding: 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isVisible 
                ? (row % 2 ? `translateX(-40px) translateY(0) scale(1)` : `translateX(60px) translateY(0) scale(1)`)
                : (row % 2 ? `translateX(-40px) translateY(60px) scale(0.8)` : `translateX(60px) translateY(60px) scale(0.8)`),
              opacity: isVisible ? 1 : 0,
            };

            if (columns === 3) {
              return (
                <Card
                  key={project.id}
                  ref={el => cardsRef.current[index] = el}
                  className={`bg-white overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-out ${
                    hoveredProject === project.id
                      ? "scale-105 shadow-2xl"
                      : "hover:scale-102 hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    ...baseCardStyle,
                    aspectRatio:  "5/4",
                    width: isMobileCard ? "20%" : "35%",
                    marginLeft:"30px",
                    hight: "650px",
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                      alt={project.title}
                      src={project.image}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`} />
                  </div>
                </Card>
              );
            } else {
              const isMobileCard_ = (row % 2 === 0 && col === 1) || (row % 2 !== 0 && col !== 1);
              
              // Mobile animation styles
              const mobileBaseStyle = {
                borderRadius: "16px",
                padding: 0,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isVisible 
                  ? "translateY(0) scale(1)"
                  : "translateY(80px) scale(0.8)",
                opacity: isVisible ? 1 : 0,
              };
              
              return (
                <Card
                  key={project.id}
                  ref={el => cardsRef.current[index] = el}
                  className={`bg-white overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-out ${
                    hoveredProject === project.id
                      ? "scale-105 shadow-2xl"
                      : "hover:scale-102 hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    ...mobileBaseStyle,
                    aspectRatio:  "4/3",
                    width: isMobileCard_ ? "30%" : "65%",
                    hight: "360px",
                    marginLeft: col === 0 ? "0px" : "2%",
                    marginRight: col === 1 ? "0px" : "2%",
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                      alt={project.title}
                      src={project.image}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`} />
                  </div>
                </Card>
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button className="inline-flex items-center justify-center gap-2.5 px-8 py-2 bg-purple rounded-lg hover:bg-purple/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <span className="font-['Poppins',Helvetica] font-normal text-white text-lg leading-6 whitespace-nowrap">
            View More
          </span>
        </Button>
      </div>


    </section>
  );
};
