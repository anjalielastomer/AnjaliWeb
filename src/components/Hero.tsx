'use client';

import Image from "next/image";
import Link from "next/link";
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
    <section className="relative w-full flex flex-col  md:flex-row font-raleway font-bold xl:min-h-screen overflow-x-hidden pl-0 md:py-40 md:pl-10 items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 ease-out"
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
      <div className="md:max-w-[50%] mx-auto md:-translate-x-[64%] lg:-translate-x-[50%]">
        <div className="w-full h-full flex flex-col items-center justify-end p-4 pt-20 md:pt-0 z-10">
          <div className="max-w-none 2xl:max-w-[1600px] mx-auto w-full px-4 md:px-10 lg:px-0">
            <h1 className="font-raleway text-4xl md:text-[50px] lg:text-[70px] xl:text-[80px] 3xl:text-[91px] font-extrabold text-textblue w-full text-center md:text-left ">
              <span className="whitespace-nowrap text-nowrap">
                Engineered <span className="text-textorange">for</span>
              </span>
              <br />
              <span className="text-textorange block my-6 sm:my-8 md:my-5 md:text-nowrap">
                the Future of
              </span>
              <span className="text-textorange block md:text-nowrap">
                Rail-
                <span className="text-textblue">Roads</span>
              </span>
            </h1>
            <div className="mt-10 pt-5 flex flex-col md:flex-row items-center w-full gap-4 md:gap-6">
              <Link
                href="/products"
                className="min-w-[180px] h-[45px] xl:min-w-[280px] lg:min-w-[250px] lg:h-[65px] 
                   flex items-center justify-center bg-textorange text-white 
                   rounded-2xl text-base hover:text-[18px] lg:text-[28px] lg:hover:text-[30px] font-normal 
                   whitespace-nowrap font-raleway 
                   hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-all duration-300">
                Explore Products  
              </Link>
              <Link
                href="/projects"
                className="min-w-[180px] h-[45px] xl:min-w-[280px] lg:min-w-[250px] lg:h-[65px] 
                   flex items-center justify-center group 
                   border border-[var(--textorange)] hover:border-2 
                   text-textblue transition-colors rounded-2xl 
                   text-base lg:text-[28px] font-normal gap-2 hover:font-medium">
                <span className="text-[var(--textorange)] group-hover:text-[var(--textblue)] transition-colors duration-300">
                  Learn
                </span>
                <span className="text-[var(--textblue)] group-hover:text-[var(--textorange)] transition-colors duration-300">
                  more
                </span>
                <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
                <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero ImageContent */}
      <div className="md:absolute bottom-0  left-[50%] w-full flex justify-start overflow-hidden  z-10">
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