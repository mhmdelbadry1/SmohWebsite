import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const OfferingsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data with placeholder images
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=576&h=360&fit=crop",
      type: "desktop",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Design",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=190&h=361&fit=crop",
      type: "mobile",
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=576&h=360&fit=crop",
      type: "desktop",
    },
    {
      id: 4,
      title: "Social Media App",
      category: "UI/UX",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=190&h=361&fit=crop",
      type: "mobile",
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=190&h=361&fit=crop",
      type: "mobile",
    },
    {
      id: 6,
      title: "Corporate Dashboard",
      category: "Web App",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=576&h=360&fit=crop",
      type: "desktop",
    },
    {
      id: 7,
      title: "Fitness App",
      category: "Mobile Design",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=190&h=361&fit=crop",
      type: "mobile",
    },
    {
      id: 8,
      title: "Portfolio Website",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=576&h=360&fit=crop",
      type: "desktop",
    },
  ];

  const desktopProjects = projects.filter((p) => p.type === "desktop");
  const mobileProjects = projects.filter((p) => p.type === "mobile");

  return (
    <section className="container flex flex-col items-center gap-10 py-16 sm:py-20 overflow-hidden relative w-full bg-gradient-to-br from-white to-purple/5">
      <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-semibold text-black text-[56px] tracking-[0] leading-[normal] animate-fade-in">
          Our Projects
        </h2>

        <p className="self-stretch opacity-75 font-['Poppins',Helvetica] text-xl text-center leading-[normal] relative font-normal text-black tracking-[0]">
          Discover our most notable work that reflects our commitment to quality
          and innovation.
        </p>
      </div>

      <div className="inline-flex items-center gap-4 flex-[0_0_auto] ml-[-304.47px] mr-[-304.47px] flex-col relative">
        <div className="flex flex-col w-[1848.94px] items-center relative flex-[0_0_auto]">
          {/* First row of projects */}
          <div className="inline-flex items-center relative flex-[0_0_auto] gap-8">
            {/* Desktop project 1 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[616.31px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 1
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(1)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[576px] h-[360px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={desktopProjects[0]?.title}
                    src={desktopProjects[0]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">
                      {desktopProjects[0]?.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {desktopProjects[0]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile project 1 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[230.39px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 2
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(2)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[190.08px] h-[361.14px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={mobileProjects[0]?.title}
                    src={mobileProjects[0]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">
                      {mobileProjects[0]?.title}
                    </h3>
                    <p className="text-xs opacity-80">
                      {mobileProjects[0]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Desktop project 2 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[616.31px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 3
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(3)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[576px] h-[360px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={desktopProjects[1]?.title}
                    src={desktopProjects[1]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">
                      {desktopProjects[1]?.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {desktopProjects[1]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile project 2 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[230.39px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 4
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(4)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[190.08px] h-[361.14px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={mobileProjects[1]?.title}
                    src={mobileProjects[1]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">
                      {mobileProjects[1]?.title}
                    </h3>
                    <p className="text-xs opacity-80">
                      {mobileProjects[1]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Second row of projects */}
          <div className="inline-flex items-center relative flex-[0_0_auto] gap-8">
            {/* Mobile project 3 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[230.39px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 5
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(5)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[190.08px] h-[361.14px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={mobileProjects[2]?.title}
                    src={mobileProjects[2]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">
                      {mobileProjects[2]?.title}
                    </h3>
                    <p className="text-xs opacity-80">
                      {mobileProjects[2]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Desktop project 3 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[616.31px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 6
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(6)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[576px] h-[360px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={desktopProjects[2]?.title}
                    src={desktopProjects[2]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">
                      {desktopProjects[2]?.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {desktopProjects[2]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile project 4 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[230.39px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 7
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(7)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[190.08px] h-[361.14px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={mobileProjects[3]?.title}
                    src={mobileProjects[3]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">
                      {mobileProjects[3]?.title}
                    </h3>
                    <p className="text-xs opacity-80">
                      {mobileProjects[3]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Desktop project 4 */}
            <div className="p-5 inline-flex items-start relative flex-[0_0_auto]">
              <Card
                className={`inline-flex max-w-[616.31px] flex-[0_0_auto] bg-white rounded-2xl overflow-hidden shadow-lg items-start relative cursor-pointer transition-all duration-500 ${
                  hoveredProject === 8
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredProject(8)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-[576px] h-[360px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={desktopProjects[3]?.title}
                    src={desktopProjects[3]?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">
                      {desktopProjects[3]?.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {desktopProjects[3]?.category}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-purple rounded-lg hover:bg-purple/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <span className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-6 whitespace-nowrap">
            View More Projects
          </span>
        </Button>
      </div>

      {/* Floating decorative element */}
      <div className="absolute w-[100px] h-[100px] top-0 left-[853px] animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-r from-purple to-red rounded-full opacity-20" />
      </div>
    </section>
  );
};
