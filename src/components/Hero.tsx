'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

const Hero: React.FC = () => {
  // Use MotionValues to track mouse position without causing re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use a MotionValue for hover state to smoothly transition opacity
  const hoverOpacity = useMotionValue(0);

  // Transform mouse position into a CSS mask property for the spotlight effect
  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(ellipse 100px 80px at ${x}px ${y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0) 100%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    hoverOpacity.set(1);
  };

  const handleMouseLeave = () => {
    hoverOpacity.set(0);
  };

  // Animation variants for the text container to orchestrate children animations
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual text elements
  const textItemVariants: Variants = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };

  // Animation variant for the train image
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, delay: 0.5 }
    }
  };

  return (
    <motion.section
      className="relative w-full flex flex-col md:flex-row font-raleway font-bold xl:min-h-screen overflow-x-hidden pl-0 md:py-40 md:pl-10 items-center bg-[var(--bgcolour)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      // Animate when the component enters the viewport
      whileInView="visible"
      // Configure viewport settings: trigger animation every time it enters/leaves the viewport
      viewport={{ amount: 0.25 }}
    >
      {/* Background map with spotlight effect */}
      <motion.div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: hoverOpacity,
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          filter: "blur(6px)",
          transition: "opacity 0.5s ease-out", // Smooth opacity transition
        }}
      >
        <Image src="/hero-map.png" alt="Bg map" fill className="object-cover" />
      </motion.div>

      {/* Hero TextContent */}
      <motion.div
        className="md:max-w-[50%] mx-auto md:-translate-x-[64%] lg:-translate-x-[50%]"
        variants={textContainerVariants}
      >
        <div className="w-full h-full flex flex-col items-center justify-end p-4 pt-20 md:pt-0 z-10">
          <div className="max-w-none 2xl:max-w-[1600px] mx-auto w-full px-4 md:px-10 lg:px-0">
            <motion.h1
              variants={textItemVariants}
              className="font-raleway text-4xl md:text-[50px] lg:text-[70px] xl:text-[80px] 3xl:text-[91px] font-extrabold w-full text-center md:text-left -mt-0 xl:-mt-10   "
              style={{ color: 'var(--textblue)' }}
            >
              <span className="whitespace-nowrap text-nowrap">
                Engineered <span style={{ color: 'var(--anotherblue)' }}>for</span>
              </span>
              <br />
              <span className="block my-6 sm:my-8 md:my-10 md:text-nowrap" style={{ color: 'var(--anotherblue)' }}>
                the Future of
              </span>
              <span className="block md:text-nowrap" style={{ color: 'var(--anotherblue)' }}>
                Rail-
                <span style={{ color: 'var(--textblue)' }}>Roads</span>
              </span>
            </motion.h1>
            <motion.div
              variants={textItemVariants}
              className="mt-10 pt-5 flex flex-col md:flex-row items-center w-full gap-4 md:gap-6"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 50px rgba(28,65,153,0.4)",
                  y: -2
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl"
              >
                <Link
                  href="/products"
                  className="min-w-[180px] h-[45px] xl:min-w-[280px] lg:min-w-[250px] lg:h-[65px] 
                           flex items-center justify-center text-white 
                           rounded-2xl text-base lg:text-[28px] font-normal 
                           whitespace-wrap font-raleway"
                  style={{ backgroundColor: 'var(--anotherblue)' }}
                >
                  Explore Products
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <Link
                  href="/projects"
                  className="min-w-[180px] h-[45px] xl:min-w-[280px] lg:min-w-[250px] lg:h-[65px] 
                           flex items-center justify-center   
                           border hover:border-2 
                           transition-colors rounded-2xl 
                           text-base lg:text-[28px] font-normal gap-2"
                  style={{ borderColor: 'var(--textblue)', color: 'var(--textblue)' }}
                >
                  <span className="text-[var(--textblue)] group-hover:text-[var(--textorange)] transition-colors duration-300">
                    Learn
                  </span>
                  <span className="text-[var(--textorange)] group-hover:text-[var(--textblue)] transition-colors duration-300">
                    more
                  </span>
                  <Image
                    src="/A.png"
                    alt="arrow"
                    width={27}
                    height={27}
                    className="group-hover:hidden block w-4 h-4 lg:w-[27px] lg:h-[27px]"
                  />
                  <Image
                    src="/send.svg"
                    alt="send"
                    width={27}
                    height={27}
                    className="hidden group-hover:block w-4 h-4 lg:w-[27px] lg:h-[27px]"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hero ImageContent */}
      <motion.div
        className="md:absolute bottom-0 left-[50%] w-full flex justify-start overflow-hidden z-10"
        variants={imageVariants}
      >
        <Image
          src="/trainEl.png"
          alt="Modern train"
          className="w-full object-cover object-bottom"
          width={1200}
          height={700}
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
