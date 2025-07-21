"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

const Page = () => {
  const [content] = useState({
    title: {
      main: "Railway",
      orange: "Fastenings",
      blue: "&",
      system: "Sleeper",
      systemOrange: "Systems",
    },
    topParagraph: `We are a market leader in railway track fasteners, track fittings,
      and fastenings, with over 15 years of experience. Our unique Zero
      Restraint Fastening System (ZRF) for steel bridge sleepers has been
      employed on major projects such as the Chenab Bridge and Bogibeel
      Bridge. We also provide high tensile bolts and nuts, rail screw
      spikes, ZRF for bridges, elastic rail clips, and rail pads. Our
      engineering experience enables the rapid and efficient creation of
      new and customized solutions.`,
    steelSleeperParagraph: `We manufacture steel track sleepers for a variety of purposes,
      including regular tracks, turnouts, and bridges. Ideal for railway
      lines over bridges when a durable ballast bed isn't possible, Our
      steel rail sleepers, comprised of steel channels or H-beams, are
      tough and frequently galvanized for life. H-beam track sleepers
      are built to withstand dynamic train loads and have canted bearing
      plates with elastic fastening mechanisms. Steel channel track
      sleepers made of welded sections can accept both running and guard
      rails, and rubber pads are used to mitigate shocks and vibrations.
      Our steel track sleepers are lightweight and cost-effective,
      providing a modern option for rail networks with medium to heavy
      axle weights.`,
    innovationTitle: "Innovations in Rail Fastening solutions",
    innovationParagraph1: `We've been a prominent participant in railway track fasteners for
      15 years, constantly pushing the boundaries of innovation. We are
      also a market leader in bridge fastening systems in India. Our
      innovative Zero Restraint Fastening System (ZRF) for steel bridge
      sleepers overcomes the constraints of conventional techniques.
      This ingenious solution has been employed in noteworthy projects
      such as the Chenab Bridge, the world's tallest rail bridge, and
      the Bogibeel Bridge in Northeast India.`,
    innovationItems: [
      "High Tensile Bolts & Nuts",
      "Rail Screw Spikes",
      "Zero Restraint Fastening System for Bridges",
      "Elastic Rail Clips",
      "Rail Pads",
    ],
    innovationParagraph2: `With a focus on quality and innovation, we are a trusted name in
      railway track fasteners, track fittings, and fastenings.`,
    images: {
      tunnel: "/business/tunnel.svg",
      track: "/business/track.svg",
      railfastening: "/business/railfastening.svg",
    },
  });

  return (
    <div
      className="min-h-screen pt-16 md:pt-22 max-w-[1440px] mx-auto"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between mx-auto max-w-[90%] mb-16 md:mb-20">
        <div className="flex flex-col p-4 md:p-6 gap-6 md:gap-8 xl:gap-15 xl:w-[60%] xl:pt-20">
          <h1 className="font-raleway font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.5px] text-textblue w-full text-center xl:text-left leading-tight">
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
          </h1>
          <p className="text-sm md:text-base text-[#193055] text-center xl:text-left max-w-full xl:max-w-[40rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte px-2 md:px-0">
            {content.topParagraph}
          </p>
        </div>
        <div className="flex justify-center xl:justify-end mb-6 xl:mb-0">
          <Image
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[454px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
            src={content.images.tunnel}
            alt="Modern train"
            height={833}
            width={454}
            priority
            loading="eager"
          />
        </div>
      </div>

     
      <div className="bg-[#fff5ef] h-auto">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between mx-auto max-w-[90%] xl:max-w-[80%] mt-0 xl:mt-[-168px] pb-16 md:pb-20">
          <div className="flex justify-center xl:justify-start mb-8 xl:mb-0">
            <Image
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[496px] h-auto xl:mt-45 hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              src={content.images.track}
              alt="Track system"
              height={641}
              width={496}
              priority
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-6 xl:px-10 mt-0 xl:mt-16 lg:mt-24">
            <p className="text-sm md:text-base text-[#193055] text-center xl:text-left max-w-full xl:max-w-[30rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte">
              {content.steelSleeperParagraph}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-auto w-[90%] gap-6 lg:gap-10 mt-8 md:mt-10 mb-16 md:mb-20">
        <div className="flex-1 lg:max-w-[60%]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[500] text-[#193055] mb-4 md:mb-6 font-monte text-center lg:text-left leading-relaxed">
            {content.innovationTitle.split("Rail Fastening")[0]}
            <span className="text-textorange">
              Rail Fastening
            </span>{" "}
            {content.innovationTitle.split("Rail Fastening")[1]}
          </h1>

          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-base text-[#193055] text-center lg:text-left max-w-full lg:max-w-[30rem] mb-4 md:mb-7 leading-relaxed md:leading-loose font-monte font-[500]">
              {content.innovationParagraph1}
            </p>

            <div className="space-y-3 md:space-y-4 mb-4 md:mb-7 w-full max-w-[90%] lg:max-w-none mx-auto py-3">
              {content.innovationItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-textblue text-base md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#193055] text-center lg:text-left max-w-full lg:max-w-[30rem] mb-4 md:mb-12 leading-relaxed md:leading-loose font-monte">
              {content.innovationParagraph2}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start lg:max-w-[40%]">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 p-4 mb-6 md:mb-11 w-full">
            <button className="w-full sm:w-auto px-4 md:px-6 py-2 rounded-[16px] font-medium transition-colors bg-textorange text-white">
              Fastenings
            </button>
            <button className="w-full sm:w-auto bg-white border border-textorange text-textorange hover:bg-orange-50 px-4 md:px-6 py-2 rounded-[16px] font-medium transition-colors">
              Steel Sleepers
            </button>
          </div>

          <div className="w-full flex justify-center">
            <Image
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[554px] h-auto hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
              src={content.images.railfastening}
              width={554}
              height={721}
              alt="Rail fastening system"
              priority
              loading="lazy"
            />
          </div>
        </div>
      </div>

     
      <VideoSection bgColor="bg-bgcolour" />
    </div>
  );
};

export default Page;
