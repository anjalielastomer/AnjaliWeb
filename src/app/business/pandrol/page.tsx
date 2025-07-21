"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

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

  return (
    <div
      className="pt-16 md:pt-22 max-w-[1440px] mx-auto"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Header Section */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between mx-auto max-w-[90%] xl:max-w-[90%] mb-16 md:mb-20">
        <div className="flex flex-col p-4 md:p-6 gap-6 md:gap-8 xl:gap-15 xl:w-[60%] xl:pt-20">
          <h1 className="font-raleway font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.5px] text-textblue w-full text-center xl:text-left leading-tight">
            <span className="block">{content.title.main}</span>
            <span className="text-textorange block mt-2 md:mt-3 lg:mt-5">
              {content.title.orange}{" "}
              <span className="text-textblue">{content.title.blue}</span>
            </span>
            <span className="text-textblue block mt-2 md:mt-3 lg:mt-5">
              {content.title.track}{" "}
              <span className="text-textorange">
                {content.title.trackOrange}
              </span>
            </span>
          </h1>

          <p className="text-sm md:text-base text-[#193055] text-center xl:text-left max-w-full xl:max-w-[40rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte px-2 md:px-0">
            {content.paragraph}
          </p>
        </div>

        <div className="flex justify-center xl:justify-end mb-6 xl:mb-0">
          <Image
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[454px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
            src={content.images.train1}
            alt="Modern train"
            height={833}
            width={454}
            priority
          />
        </div>
      </div>

      {/* Offerings Section */}
      <div className="bg-[#fff5ef] h-auto">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between mx-auto max-w-[90%] xl:max-w-[80%] flex-wrap mt-0 xl:mt-[-168px] pb-16 md:pb-20">
          <div className="flex justify-center xl:justify-start mb-8 xl:mb-0">
            <Image
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[496px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              src={content.images.train2}
              alt="Modern train"
              height={647}
              width={496}
              priority
            />
          </div>

          <div className="flex flex-col justify-center px-4 md:px-6 xl:px-10 mt-0 xl:mt-16 lg:mt-24">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#193055] mb-6 md:mb-8 font-monte text-center xl:text-left leading-relaxed">
              We are offering{" "}
              <span className="text-textorange font-bold">
                Fastening System
              </span>{" "}
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
      </div>

      {/* Video Section */}
      <VideoSection bgColor="bg-white" />
    </div>
  );
};

export default Page;
