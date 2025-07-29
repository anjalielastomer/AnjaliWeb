"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

type TabId = "turnout" | "rail" | "glued";

interface ContentData {
  [key: string]: {
    image: string;
    title: string;
    titleHighlights: string[];
    description: string;
    bullets: string[];
    additionalText: string;
  };
}

const contentData: ContentData = {
  turnout: {
    image: "/turnout1.jpg",
    title: "Premium Turnout Solutions for Modern Railways",
    titleHighlights: ["Solutions", "Railways"],
    description:
      "We are the leading turnout maker in India. With more than 15 years of experience, our firm provides turnout solutions for:",
    bullets: [
      "Heavy Haul Rail",
      "High Speed Rail",
      "Ballasted Track",
      "Ballastless Track",
    ],
    additionalText:
      "We are the market leader in delivering turnout solutions for railway tracks. Advanced materials and geometries, combined with cutting-edge production techniques, ensure the best quality and performance from turnouts. We ensure maximum availability at the lowest life cycle costs.",
  },
  rail: {
    image: "/turnout2.jpg",
    title: "Innovation in Railway Expansion Joints",
    titleHighlights: ["Railway", "Joints"],
    description:
      "Our Joint design is based on a well-established thick-web switch design that allows for reciprocal movement of both tongue rail and stock rail up to 100 mm at each end of the length.",
    bullets: [
      "Gapless & Boltless",
      "No Use of Brackets",
      "No Machining of Stock Rail",
      "Use of Thick web tongue - end forged Rail",
      "Use of Standard Fastenings",
      "Ease of installation",
      "Lower Noise and Maintenance",
      "Excellent design for Heavy Haul",
      "Low product life cycle cost",
    ],
    additionalText: "",
  },
  glued: {
    image: "/turnout3.jpg",
    title: "Streamlined Connections for Optimal Performance",
    titleHighlights: ["Connections", "Optimal"],
    description:
      "Our Glued insulated joints are made up of glass fiber cloth-insulated fish plates, a number of insulated high-tensile bolts, and insulating end posts. They can be assembled on-site or at work. The joints fulfill international standards for insulation resistance, draw load, deflection test, wet insulation test, and so on. Every fabricated or completed joint is verified for vertical and lateral alignment. Joints are tested for insulating resistance in dry conditions.",
    bullets: [
      "Reduced Wear in Wheel Overrunning area",
      "Reduced Maintenance costs",
      "Reduced Noise",
      "Greater Riding Comfort",
    ],
    additionalText: "",
  },
};

const tabs: { id: TabId; label: string }[] = [
  { id: "turnout", label: "Turnout Solutions" },
  { id: "rail", label: "Rail Expansion Joints" },
  { id: "glued", label: "Glued Insulated Joints" },
];

const page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("turnout");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleTabChange = (newTab: TabId) => {
    if (newTab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const currentContent = contentData[activeTab];

  const renderTitle = (): React.ReactNode => {
    const words = currentContent.title.split(" ");
    return words.map((word, index) => {
      const isHighlighted = currentContent.titleHighlights.some((highlight) =>
        word.toLowerCase().includes(highlight.toLowerCase())
      );
      return (
        <span
          key={index}
          className={isHighlighted ? "text-textorange" : "text-textblue"}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <section className="font-monte text-textblue min-h-screen pt-22 overflow-hidden">
      
      <div
        className="pt-16 md:pt-20 xl:pt-22 max-w-[1440px] mx-auto"
        style={{ backgroundColor: "var(--bgwhite)" }}
      >
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between mx-auto max-w-[95%] mb-16 md:mb-20">
          
          <div data-aos="fade-right" className="flex flex-col p-4 md:p-6 gap-6 md:gap-8 xl:gap-15 xl:w-[55%] xl:pt-20 order-1">
            <h1 className="font-raleway font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[85.5px] text-textblue w-full text-center xl:text-left leading-tight">
              <span className="text-textblue block">
                Turnout
                <span className="text-textorange"> & </span>
                <span className="text-textblue">Track</span>
              </span>
              <span className="text-textblue mt-2 md:mt-3 lg:mt-5 block">
                Device
                <span className="text-textorange"> Systems</span>
              </span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-justify font-medium text-textblue w-full max-w-[33.5rem] mx-auto xl:mx-0 mb-4 md:mb-8 xl:mb-12 leading-relaxed md:leading-loose px-2 md:px-0">
              We are one of India's leading Turnout manufacturers, specializing
              in high-quality turnouts, rail expansion joints, and glued
              insulated joints. With more than 15 years of experience and
              cutting-edge production facilities in West Bengal. We guarantee
              that our railway infrastructure systems are of the greatest
              quality and most reliable, thanks to modern materials and
              cutting-edge technologies.
            </p>

           
            <div className="hidden xl:flex items-center justify-center">
              <div className="w-[388px] aspect-[4/3] flex flex-col justify-between items-center p-8 lg:p-10 border-2 border-[var(--textorange)] rounded-md bg-white hover:bg-[var(--bgcolour)] hover:border-[var(--bgcolour)] transition-colors duration-300">
                <Image
                  data-aos="zoom-in-up"
                  src="/rail-track.png"
                  alt="rail track logo"
                  height={50}
                  width={50}
                  className="rounded-full bg-textorange p-2"
                  loading='eager'
                />
                <h3 className="font-raleway font-semibold text-xl text-center">
                  <span className="text-textorange">Rail</span> Expansion Joints
                </h3>
                <p className="text-justify text-sm sm:text-base">
                  Providing sophisticated turnout solutions for heavy haul, high
                  speed, ballasted, and ballastless tracks.
                </p>
              </div>
            </div>
          </div>

         
          <div className="flex flex-col items-center xl:items-end order-2 xl:order-2">
         
            <div data-aos="zoom-in-up" className="xl:hidden flex items-center justify-center mb-6 md:mb-8 w-full">
              <div className="w-[85%] sm:w-[70%] md:w-[400px] aspect-[4/3] flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 border-2 border-[var(--textorange)] rounded-md bg-white">
                <Image
                  
                  src="/rail-track.png"
                  alt="rail track logo"
                  height={50}
                  width={50}
                  className="rounded-full bg-textorange p-2"
                  loading='lazy'
                />
                <h3 className="font-raleway font-semibold text-lg sm:text-xl text-center">
                  <span className="text-textorange">Rail</span> Expansion Joints
                </h3>
                <p className="text-justify text-sm sm:text-base">
                  Providing sophisticated turnout solutions for heavy haul, high
                  speed, ballasted, and ballastless tracks.
                </p>
              </div>
            </div>

          
            <div className="flex justify-center xl:justify-end w-full xl:w-auto xl:mt-52 rounded-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
              <Image
              data-aos="zoom-in-up"
                className="w-[85%] sm:w-[75%] md:w-[400px] lg:w-[500px] xl:w-[554px] h-auto object-cover"
                src="/business/turnout.svg"
                alt="Modern train"
                height={833}
                width={554}
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-bgcolour pt-20 md:pt-40 -mt-20 md:-mt-40">
        <div className="max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center mx-auto py-8 md:py-10 gap-8">
      
          <div className="flex justify-center w-full md:w-auto">
            <Image
              data-aos="zoom-in-right"
              src="/tracks.png"
              alt="rail tracks"
              height={651}
              width={496}
              className="w-[90%] sm:w-[80%] md:w-[400px] lg:w-[496px] h-auto object-contain hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              loading='lazy'
            />
          </div>

       
          <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-10 md:pt-20 lg:pt-40 w-full md:w-auto">
            <p data-aos="zoom-in-left" className="max-w-[556px] w-[90%] sm:w-[80%] mx-auto md:mx-0 text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed">
              Our sophisticated turnout manufacturing facilities in West Bengal
              are outfitted with advanced CNC Plano Milling machines (8-13
              meters) with five-axis controls from Siemens and Mitsubishi. As
              India's first private sector enterprise to install advanced thick
              web rail forging facilities, we can forge over 13,000 rails per
              year using induction heating and an automated die handling system.
            </p>

            
            <div className="flex items-center justify-center w-full">
              <div data-aos="zoom-in-up" className="w-[85%] sm:w-[70%] md:w-[350px] lg:w-[388px] aspect-[4/3] flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[var(--textorange)] rounded-md bg-white hover:bg-[var(--bgcolour)] hover:border-[var(--bgcolour)] hover:shadow-xs hover:shadow-gray-200 transition-colors duration-300">
                <Image
                  data-aos="zoom-in-up"
                  src="/cross-rail.png"
                  alt="rail track logo"
                  height={50}
                  width={50}
                  className="rounded-full bg-textorange p-2"
                  loading='lazy'
                />
                <h3 className="font-raleway font-semibold text-lg sm:text-xl text-center">
                  <span className="text-textorange">Turn-Out</span> Solutions
                </h3>
                <p className="text-justify text-sm sm:text-base">
                  Indian Railways has approved it for widespread use, as it
                  improves riding comfort and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
          <div className="space-y-6 order-2 lg:order-1">
            <h1 data-aos="fade-right" className="text-2xl md:text-3xl lg:text-4xl font-medium text-textblue pb-6 md:pb-10 text-center lg:text-left">
              Resources <span className="text-textorange">Available</span>
            </h1>

          
            <div data-aos="fade-right" className="space-y-3 md:space-y-4">
              {[
                "CNC Plano Milling Machine",
                "3000 T Hydraulic Forging Press",
                "Electro Slag Welding Machine",
                "Heavy Duty Planer Machine",
                "Induction Rail Hardening Machine",
                "2D hydraulic rail straightening machine",
              ].map((resource, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-textblue text-base md:text-lg">
                    {resource}
                  </span>
                </div>
              ))}
            </div>

            {/* Card */}
            <div className="flex items-center justify-center pt-6 md:pt-8">
              <div data-aos="zoom-in-up" className="w-[85%] sm:w-[70%] md:w-[350px] lg:w-[388px] aspect-[4/3] flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[var(--textorange)] rounded-md bg-white hover:bg-[var(--bgcolour)] hover:border-white transition-colors duration-300">
                <Image
                  data-aos="zoom-in-up"
                  src="/glued.png"
                  alt="rail track logo"
                  height={50}
                  width={50}
                  className="rounded-full bg-textorange p-2"
                  loading='lazy'
                />
                <h3 className="font-raleway font-semibold text-lg sm:text-xl text-center">
                  <span className="text-textorange">Glued</span> Insulated
                  Joints
                </h3>
                <p className="text-justify text-sm sm:text-base">
                  Providing improved insulation, lower maintenance costs, and
                  increased riding comfort for railway rails.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full">
              <div className="aspect-[554/721] w-full max-w-[400px] md:max-w-[500px] lg:max-w-[554px] mx-auto lg:mx-0">
                <img
                  data-aos="zoom-in-up"
                  src="/resources.png"
                  alt="Railway tunnel with tracks and industrial equipment"
                  className="w-full h-full object-cover rounded-lg hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full bg-bgcolour">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
         
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-colors text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-textorange text-white"
                    : "bg-white border border-textorange text-textorange hover:bg-orange-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full">
                <div className="aspect-[496/574] w-full max-w-[400px] md:max-w-[450px] lg:max-w-[496px] mx-auto lg:mx-0">
                  <img
                    data-aos="zoom-in-up"
                    src={currentContent.image}
                    alt={`${currentContent.title} - Railway infrastructure`}
                    className={`w-full h-full object-cover rounded-lg shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-opacity duration-300 ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (
                        target.nextSibling &&
                        target.nextSibling instanceof HTMLElement
                      ) {
                        (target.nextSibling as HTMLElement).style.display =
                          "flex";
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              data-aos="fade-right"
              className={`order-1 lg:order-2 space-y-4 md:space-y-6 transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-raleway text-center lg:text-left">
                {renderTitle()}
              </h1>

              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify">
                {currentContent.description}
              </p>

              {/* Solutions List */}
              <div className="space-y-3 md:space-y-4">
                {currentContent.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base lg:text-lg">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {currentContent.additionalText && (
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-6 text-justify">
                  {currentContent.additionalText}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <VideoSection />
    </section>
  );
};

export default page;
