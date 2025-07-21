'use client';

import Image from "next/image";
import React, { useState } from "react";

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section className="relative w-full flex flex-col  md:flex-row font-raleway font-bold md:min-h-screen md:overflow-x-hidden pl-0 md:pl-10 items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(ellipse 100px 80px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0) 100%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",
          maskImage: `radial-gradient(ellipse 100px 80px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0) 100%)`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
          filter: "blur(6px)",
        }}
      >
        <Image
          src="/hero-map.png"
          alt="Bg map"
          fill
          className="object-cover"
        />
      </div>

      {/* Hero TextContent */}
      <div className="max-w-[50%] mx-auto -translate-x-[50%]">
        <div className="w-full h-full flex flex-col items-center justify-end p-4 pt-20 md:pt-0 z-10">
          <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-[91px] font-extrabold text-textblue w-full text-center md:text-left">
            <span className="whitespace-nowrap text-nowrap">
              Engineered <span className="text-textorange">for</span>
            </span>
            <br />
            <span className="text-textorange block my-6 sm:my-8 md:my-10">
              the Future of
            </span>
            <span className="text-textorange block">
              Rail-
              <span className="text-textblue">Roads</span>
            </span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row items-center w-full gap-4 md:gap-6">
            <button className="w-[200px] h-[50px] lg:w-[333px] lg:h-[78px] flex items-center justify-center bg-textorange text-white rounded-2xl text-lg lg:text-[32px] font-normal transition-all whitespace-nowrap  hover:font-medium">
              Explore Products
            </button>
            <button className="w-[200px] h-[50px] lg:w-[333px] lg:h-[78px] flex items-center justify-center group border border-[var(--textorange)] hover:border-2 text-textblue transition-colors rounded-2xl text-lg lg:text-[32px] font-normal gap-2 hover:font-medium">
              <span className="text-textblue">Learn</span>
              <span className="text-textorange"> more</span>
              <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
              <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
            </button>
          </div>
        </div>
      </div>
      {/* Hero ImageContent */}
      <div className="absolute bottom-0 left-[50%] w-full flex justify-start overflow-hidden z-10">
        <Image
          src="/train.png"
          alt="Modern train"
          className="w-full object-cover object-bottom"
          width={1200}
          height={700}
          priority
        />
      </div>

    </section>
  );
};

export default Hero;
