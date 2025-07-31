"use client";
import React, { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import { motion, Variants, AnimatePresence } from "framer-motion"; // Import AnimatePresence

// Animation Variants
const popUp: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { scale: 0.9, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  // Add an exit variant to handle tab switching animations
  exit: {},
};

const itemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  // Add an explicit exit variant to control the out-animation
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("fastenings");

  const [content] = useState({
    title: {
      main: "Railway",
      orange: "Fastenings",
      blue: "&",
      system: "Sleeper",
      systemOrange: "Systems",
    },
    topParagraph: `We are a market leader in railway track fasteners, track fittings, and fastenings, with over 15 years of experience. Our unique Zero Restraint Fastening System (ZRF) for steel bridge sleepers has been employed on major projects such as the Chenab Bridge and Bogibeel Bridge. We also provide high tensile bolts and nuts, rail screw spikes, ZRF for bridges, elastic rail clips, and rail pads. Our engineering experience enables the rapid and efficient creation of new and customized solutions.`,
    steelSleeperParagraph: `We manufacture steel track sleepers for a variety of purposes, including regular tracks, turnouts, and bridges. Ideal for railway lines over bridges when a durable ballast bed isn't possible, Our steel rail sleepers, comprised of steel channels or H-beams, are tough and frequently galvanized for life. H-beam track sleepers are built to withstand dynamic train loads and have canted bearing plates with elastic fastening mechanisms. Steel channel track sleepers made of welded sections can accept both running and guard rails, and rubber pads are used to mitigate shocks and vibrations. Our steel track sleepers are lightweight and cost-effective, providing a modern option for rail networks with medium to heavy axle weights.`,

    fasteningsContent: {
      title: {
        pre: "Innovations in ",
        highlighted: "Rail Fastening",
        post: " solutions",
      },
      paragraph1: `We've been a prominent participant in railway track fasteners for 15 years, constantly pushing the boundaries of innovation. We are also a market leader in bridge fastening systems in India. Our innovative Zero Restraint Fastening System (ZRF) for steel bridge sleepers overcomes the constraints of conventional techniques. This ingenious solution has been employed in noteworthy projects such as the Chenab Bridge, the world's tallest rail bridge, and the Bogibeel Bridge in Northeast India.`,
      items: [
        "High Tensile Bolts & Nuts",
        "Rail Screw Spikes",
        "Zero Restraint Fastening System for Bridges",
        "Elastic Rail Clips",
        "Rail Pads",
      ],
      paragraph2: `With a focus on quality and innovation, we are a trusted name in railway track fasteners, track fittings, and fastenings.`,
    },

    sleepersContent: {
      title: {
        pre: "Strong ",
        highlighted: "Steel Sleepers",
        post: " for Track Applications",
      },
      paragraph1: `Steel sleepers are commonly utilized on railway tracks that cross bridges where a durable ballast bed cannot be produced. Steel sleepers for bridges are made from either steel channels or H-beam steel sections. To provide a long service life on bridges, sleepers are often galvanized or metallized. Steel sleepers across bridges are a far more durable and effective solution than wooden sleepers.`,
      items: [
        "Steel Sleepers for Standard Track",
        "Steel Sleepers for Turnouts",
        "Steel Sleepers for Bridges",
        "H-beam Steel Sleeper",
        "Steel Sleeper for Standard Track",
      ],
      paragraph2: ``,
    },

    images: {
      tunnel: "/business/tunnel.svg",
      track: "/business/track.svg",
      railfastening: "/business/railfastening.svg",
      steelsleeper: "/business/sleeper.svg",
    },
  });

  return (
    <div
      className="min-h-screen pt-16 md:pt-22 overflow-hidden"
      
    >
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-between mb-16 md:mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col p-4 md:p-6 gap-6 md:gap-8 xl:gap-15 xl:w-[60%] xl:pt-20"
        >
          <motion.h1 variants={itemVariants} className="font-raleway font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.5px] text-textblue w-full text-center xl:text-left leading-tight">
            <span className="block">{content.title.main}</span>
            <span className="text-textorange block mt-2 md:mt-3 lg:mt-5">
              {content.title.orange}
              <span className="text-textblue"> {content.title.blue}</span>
            </span>
            <span className="text-textblue block mt-2 md:mt-3 lg:mt-5">
              {content.title.system}
              <span className="text-textorange">
                {" "}
                {content.title.systemOrange}
              </span>
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm md:text-base text-[#193055] text-center xl:text-justify max-w-full xl:max-w-[40rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte px-2 md:px-0">
            {content.topParagraph}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={popUp}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center xl:justify-end mb-6 xl:mb-0"
        >
          <Image
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[454px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 z-10"
            src={content.images.tunnel}
            alt="Modern train"
            height={833}
            width={454}
            priority
            loading="eager"
          />
        </motion.div>
      </div>

      <div className="bg-[#fff5ef] h-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-between mt-0 xl:mt-[-168px] pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center xl:justify-start mb-8 xl:mb-0"
          >
            <Image
              className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[496px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              src={content.images.track}
              alt="Track system"
              height={641}
              width={496}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-6 xl:px-10 mt-0 xl:mt-16 lg:mt-24"
          >
            <p className="text-sm md:text-base text-[#193055] text-center xl:text-justify max-w-full xl:max-w-[30rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte">
              {content.steelSleeperParagraph}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row w-[90%] gap-6 lg:gap-10 mt-8 md:mt-10 mb-16 md:mb-20">
        {/* MODIFICATION START */}
        <div className="flex-1 lg:max-w-[60%]">
          <AnimatePresence mode="wait">
            {activeTab === "fastenings" ? (
              <motion.div
                key="fastenings"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.1 }}
              >
                <motion.h1 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[500] text-[#193055] mb-4 md:mb-6 font-monte text-center lg:text-left leading-relaxed">
                  {content.fasteningsContent.title.pre}
                  <span className="text-textorange">{content.fasteningsContent.title.highlighted}</span>
                  {content.fasteningsContent.title.post}
                </motion.h1>
                <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base text-[#193055] text-center lg:text-justify max-w-full lg:max-w-[30rem] mb-4 md:mb-7 leading-relaxed md:leading-loose font-monte font-[500]">{content.fasteningsContent.paragraph1}</p>
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-7 w-full max-w-[90%] lg:max-w-none mx-auto py-3">
                    {content.fasteningsContent.items.map((item, index) => (<div key={index} className="flex items-start gap-3"><div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0" /><span className="text-textblue text-base md:text-lg">{item}</span></div>))}
                  </div>
                  <p className="text-sm md:text-base text-[#193055] text-center lg:text-justify max-w-full lg:max-w-[30rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte">{content.fasteningsContent.paragraph2}</p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="sleepers"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.1 }}
              >
                <motion.h1 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[500] text-[#193055] mb-4 md:mb-6 font-monte text-center lg:text-left leading-relaxed">
                  {content.sleepersContent.title.pre}
                  <span className="text-textorange">{content.sleepersContent.title.highlighted}</span>
                  {content.sleepersContent.title.post}
                </motion.h1>
                <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base text-[#193055] text-center lg:text-left max-w-full lg:max-w-[30rem] mb-4 md:mb-7 leading-relaxed md:leading-loose font-monte font-[500]">{content.sleepersContent.paragraph1}</p>
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-7 w-full max-w-[90%] lg:max-w-none mx-auto py-3">
                    {content.sleepersContent.items.map((item, index) => (<div key={index} className="flex items-start gap-3"><div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0" /><span className="text-textblue text-base md:text-lg">{item}</span></div>))}
                  </div>
                  <p className="text-sm md:text-base text-[#193055] text-center lg:text-left max-w-full lg:max-w-[30rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte">{content.sleepersContent.paragraph2}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* MODIFICATION END */}

        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: false, amount: 0.2 }} className="flex flex-col items-center lg:items-start lg:max-w-[40%]">
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 p-4 mb-6 md:mb-11 w-full">
            <button onClick={() => setActiveTab("fastenings")} className={`w-full sm:w-auto px-4 md:px-6 py-2 rounded-[16px] font-medium transition-colors ${activeTab === 'fastenings' ? 'bg-textorange text-white' : 'bg-white border border-textorange text-textorange hover:bg-orange-50'}`}>Fastenings</button>
            <button onClick={() => setActiveTab("sleepers")} className={`w-full sm:w-auto px-4 md:px-6 py-2 rounded-[16px] font-medium transition-colors ${activeTab === 'sleepers' ? 'bg-textorange text-white' : 'bg-white border border-textorange text-textorange hover:bg-orange-50'}`}>Steel Sleepers</button>
          </motion.div>

          <div className="w-full flex justify-center">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={popUp}
              >
                <Image
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[554px] h-auto hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 relative z-10"
                  src={activeTab === 'fastenings' ? content.images.railfastening : content.images.steelsleeper}
                  width={554}
                  height={721}
                  alt={activeTab === 'fastenings' ? "Rail fastening system" : "Steel sleeper system"}
                  loading="lazy"
                />
              </motion.div>
          </div>
        </motion.div>
      </div>
      <VideoSection />
    </div>
  );
};

export default Page;