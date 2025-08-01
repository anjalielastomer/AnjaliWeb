"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import { Variants, motion } from "framer-motion";

const Page = () => {
  const [content] = useState({
    title: {
      main: "Pandrol",
      orange: "Fastenings",
      blue: "&",
      track: "Track",
      trackOrange: "Solutions",
    },
    paragraph: `We have launched an exclusive joint venture with Pandrol Limited,
    the world's leader in high-speed elastic rail fastening and noise
    vibration solutions. This company manufactures Pandrol Fasteners in
    India. We are committed to providing our customers with high-quality
    solutions, which includes introducing one of Pandrol's most
    innovative elastic fastening systems to the Indian market. We are
    dedicated to providing excellence to our consumers.`,
    offeringsTitle: `We are offering Fastening System solutions for:`,
    offerings: [
      "Heavy Haul Fastening Systems",
      "High Speed Rail Fastening Systems",
      "Metro Rail Fastening Systems",
      "LRT Fastening System",
      "Mainline Ballasted Track Fastening Systems",
      "Noise & Vibration Solution",
    ],
    images: {
      train1: "/business/train.svg",
      train2: "/business/train2.svg",
    },
  });

  // Common viewport settings for re-animation on each scroll
  const viewportSettings = { once: false, amount: 0.3 };

  const slideInFromLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const slideInFromRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // New variant for a fade-in-up effect
  const fadeInUp: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="pt-16 md:pt-22 overflow-hidden"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-between mb-16 md:mb-20 lg:px-12">
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={slideInFromLeft} className="flex flex-col py-4 pr-4 md:pr-6 md:py-6 gap-6 md:gap-8 xl:gap-15 xl:w-[60%] xl:pt-20">
          <h1 className="font-raleway font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.5px] text-textblue w-full text-center xl:text-left leading-tight">
            <span className="block">{content.title.main}</span>
            <span className="text-textorange block mt-2 md:mt-3 lg:mt-5">
              {content.title.orange}{" "}
              <span className="text-textblue">{content.title.blue}</span>
            </span>
            <span className="text-textblue block mt-2 md:mt-3 lg:mt-5">
              {content.title.track}{" "}
              <span className="text-textorange">{content.title.trackOrange}</span>
            </span>
          </h1>
          <p className="text-sm md:text-base text-[#193055] text-center xl:text-justify max-w-full xl:max-w-[40rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte px-2 md:px-0">
            {content.paragraph}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings} // Applied viewport settings
          variants={slideInFromRight}
          className="flex justify-center xl:justify-end mb-6 xl:mb-0"
        >
          <Image
            className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[454px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
            src={content.images.train1}
            alt="Modern train"
            height={833}
            width={454}
            priority
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Offerings Section */}
      <div className="bg-[#fff5ef] h-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-between flex-wrap mt-0 xl:mt-[-168px] pb-16 md:pb-20 lg:px-12">
          {/* UPDATED: Replaced data-aos with framer-motion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideInFromLeft}
            className="flex justify-center xl:justify-start mb-8 xl:mb-0"
          >
            <Image
              className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[496px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              src={content.images.train2}
              alt="Modern train"
              height={647}
              width={496}
              loading="lazy"
            />
          </motion.div>
          
          <div data-aos="zoom-in-up" className="flex flex-col justify-center pl-4 md:pl-6 xl:pl-10 mt-0 xl:mt-16 lg:mt-24">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#193055] mb-6 md:mb-8 font-monte text-center xl:text-left leading-relaxed">
              We are offering{" "}
              <span className="text-textorange font-bold">Fastening System</span>{" "}
              solutions <br className="hidden md:block" /> for:
            </h1>
            <div className="space-y-2 md:space-y-4 text-textblue text-sm sm:text-base md:text-lg xl:text-base font-medium font-monte text-center xl:text-left">
              {content.offerings.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-textblue text-lg">{item}</span>
                </div>
              ))}
            </div>
         
        </div>
      </div>

      {/* Video Section */}
      {/* ADDED: framer-motion wrapper for the video section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <VideoSection bgColor="bg-white" />
      </motion.div>
    </div>
    </div>
  );
};

export default Page;