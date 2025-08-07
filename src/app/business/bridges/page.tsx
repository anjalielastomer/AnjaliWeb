"use client";
import React from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import CardComponent from "@/components/CardComponent";
import { motion, Variants } from "framer-motion"; // --- Import motion

const Page = () => {
  // --- Animation Variants and Settings ---
  const viewportSettings = { once: false, amount: 0.2 };

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
      className="w-full relative min-h-screen pt-22 overflow-hidden"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Section 1: Hero */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:w-[100%] gap-8 lg:gap-12 mb-20 py-8 lg:py-16  lg:px-12">
        {/* Text Content --- Motion Wrapper Added */}
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl lg:max-w-4xl xl:-mt-30"
        >
          <h1 className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85.5px] text-textblue leading-tight">
            <span className="text-textblue block">Bridges</span>
            <span className="text-textorange block">
              Shaping
              <div className="flex justify-around gap-4">
                <div className="text-textblue">Railway's</div>
                <div className="text-textorange">Future</div>
              </div>
            </span>
          </h1>
          <p className="text-sm p-4 md:text-base text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-monte font-medium tracking-normal text-justify">
            We are one of the leading Indian Railway contractors for building
            superstructures. We undertake complex projects that require
            high-level construction and engineering skills. Our expertise and
            innovative methods have been honed over many years of experience in
            this sector, and we are proud to be playing an important role in
            shaping the future of railway infrastructure.
          </p>
        </motion.div>

        {/* Image Content --- Motion Wrapper Added */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="w-full max-w-sm lg:max-w-md xl:max-w-lg p-2"
        >
          <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] xl:mt-30 rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
            <Image
              src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1753945601/rfzj9gzhzcbpx7ljjitl.jpg"
              alt="Railway bridge structure"
              fill={true}
              className="object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 2: Turnkey Projects */}
      <div className="w-full z-4 bg-[#fff5ef] h-auto">
        <div className=" max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-16 lg:py-20 xl:-mt-40 lg:px-12">
          {/* --- Motion Wrapper Added --- */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1 xl:-mt-28 xl:ml-20"
          >
            <div className="relative w-92 h-92 md:w-150 md:h-150 lg:w-124 lg:h-164 rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
              <Image
                className="relative z-10 w-full object-cover"
                src="/business/bridge-2.svg"
                alt="Train on a coastal bridge"
                fill={true}
                loading="lazy"
              />
            </div>
          </motion.div>
          {/* --- Motion Wrapper Added --- */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className=" max-w-sm lg:max-w-md xl:max-w-lg flex flex-col justify-center order-1 lg:order-2 flex-1"
          >
            <h1 className="text-lg sm:text-xl md:text-4xl font-medium text-[#193055] mb-4 font-montserrat text-center md:text-left leading-relaxed tracking-normal">
              We are experts in providing{" "}
              <div className="flex gap-2 lg:block">
                <span className="text-textorange font-bold">
                  Turn key Bridge <br />
                </span>
                <span>projects:</span>
              </div>
            </h1>
            <ul
              role="list"
              className=" list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-lg font-medium font-montserrat"
            >
              <li>Concrete Bridges</li>
              <li>Steel Bridges</li>
              <li>Composite Bridges</li>
              <li>Rail Cum Road Bridges</li>
              <li>Viaduct</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Icon Stats --- Motion Wrapper Added */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className=" max-w-[1440px] z- bg-white mx-auto flex flex-col xl:flex-row justify-center items-center lg:justify-around lg:mt-0 mt-8 gap-16 md:gap-4 lg:gap-16 px-10 lg:px-12"
      >
        {cardData.map((data, idx) => (
          <CardComponent key={idx} data={data} />
        ))}
      </motion.div>

      {/* Section 4: Resources Available */}
      <div className="max-w-[1440px] mx-auto bg-white h-auto">
        <div className="flex lg:flex-nowrap lg:justify-between justify-center mx-auto max-w-[1440px] flex-wrap-reverse mt-0 md:mt-8 xl:mt-16 pb-20  lg:px-12">
          {/* --- Motion Wrapper Added --- */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24"
          >
            <h1 className="text-4xl sm:text-xl md:text-5xl font-bold text-[#193055] lg:mb-4 -mb-2 mt-4 lg:mt-0 font-monte text-center md:text-left leading-relaxed">
              <span className="text-textorange font-bold">Resources</span>{" "}
              Available
            </h1>
            <br />
            <br />
            <br />
            <ul className="list-disc list-inside space-y-2 text-textblue text-base sm:text-xl md:text-xl font-medium font-monte">
              <li>Cantelever Erection Crawler Cranes</li>
              <li>Mobile Heavy Lift Cranes up to 130 Tons</li>
              <li>Transit Mixer</li>
              <li>CNC Profile Cutting & Drilling Machine</li>
              <li>
                SAW, TIG, MIG, CO<sub>2</sub> Welding Machines
              </li>
              <li>Backhoe Loader</li>
              <li>Electro-slag Welding Machine</li>
              <li>Batching Plants</li>
              <li>Pick and Carry Crane</li>
              <li>Spray Metalizing and Shot blasting Facility</li>
              <li>Painting Booth/Covered Painting Area</li>
            </ul>
          </motion.div>
          {/* --- Motion Wrapper Added --- */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Image
              className="relative mt-8 w-full lg:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 z-10 p-2"
              src="/business/bridge-4.svg"
              alt="Side view of railway bridge"
              width={554}
              height={721}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Section 5: Capabilities & Geography */}
      <div className="bg-[#fff5ef] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto flex lg:flex-row flex-col items-center justify-between lg:px-12">
          <div className="max-w-[1440px] mx-auto flex lg:flex-nowrap justify-center xl:justify-between flex-wrap gap-12 lg:px-12">
            {/* --- Motion Wrapper Added --- */}
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <Image
                className="rounded-lg shadow-md hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300 z-1 px-5 lg:px-0"
                src="/business/bridge-5.svg"
                alt="Train crossing a river on a bridge"
                width={496}
                height={574}
                loading="lazy"
              />
            </motion.div>
          </div>
          {/* --- Motion Wrapper Added --- */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className=" flex flex-col justify-center px-4 md:px-6 md:w-[85%] lg:w-[60%] md:text-center xl:pl-42 lg:text-left lg:p-4"
          >
            <h2 className="text-4xl md:text-7xl lg:text-3xl xl:text-5xl font-bold text-[#193055] mb-6 font-raleway text-center lg:text-left pt-5 lg:pt-0">
              Capabilities & <span className="text-textorange">Geography</span>
            </h2>
            <p className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg font-medium font-monte text-justify">
              Our bridges span the length and width of India, strengthening
              connections and facilitating the flow of life throughout the
              country. We have successfully constructed bridges in tough
              mountain terrains and over running rivers, such as the Rishikesh
              Bridge. This demonstrates our capacity to handle demanding
              situations.
              <br />
              <br />
              We, as one of the most advanced steel bridge building companies,
              have the potential to fabricate and erect 50,000 tons of
              structural steel per year at our cutting-edge fabrication
              facilities located in West Bengal. These bridge building
              facilities, which occupy more than 20,000 square meters and have a
              total area of 89,000 square meters, are outfitted with EOT cranes
              and advanced machinery. We perform full-scale design,
              control/trial assemblies, and testing on various structures and
              components in-house. Its shot-blasting facilities ensure that
              produced components have a flawless surface and are
              anti-corrosive.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 6: Video --- Motion Wrapper Added */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="bg-white"
      >
        <VideoSection bgColor="bg-white" />
      </motion.div>
    </div>
  );
};

interface TextEntry {
  text1: string;
  text2: string;
  text3?: string;
}

interface CardProps {
  text: TextEntry;
  description: string;
}

const cardData: CardProps[] = [
  {
    text: {
      text1: "750000",
      text2: "MT + Steel Structures",
      text3: "Fabricated & Erected",
    },
    description:
      "Fabricated and constructed nearly 750,000 metric tons of steel structures, demonstrating capability and dedication to quality.",
  },
  {
    text: {
      text1: "80m",
      text2: "Erection Above the",
      text3: "Ground Level",
    },
    description:
      "Excelled in erecting structures up to 80 meters above ground level and managing complicated and difficult tasks with precision.",
  },
  {
    text: {
      text1: "60+",
      text2: "Major Bridges",
      text3: "",
    },
    description:
      "We have completed the building of more than 60 significant bridges, demonstrating our extensive expertise and engineering brilliance.",
  },
];

export default Page;