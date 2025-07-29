"use client"
import React from "react";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import Screen from "@/components/Screen";

const Page = () => {
  return (
    <div
      className="w-full relative min-h-screen pt-22 overflow-hidden"
      style={{ backgroundColor: "var(--bgwhite)"
       }}
      
    >
      <Screen className="ml-113 mt-96 -rotate-7" />
      {/* Section 1: Hero */}
      <div className=" max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:w-[100%] gap-8 lg:gap-12 mb-20 py-8 lg:py-16 ">
        {/* Text Content */}
        
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl lg:max-w-4xl xl:-mt-30">
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

          <p className="text-sm md:text-base text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-monte font-medium tracking-normal">
            We are one of the leading Indian Railway contractors for building
            superstructures. We undertake complex projects that require
            high-level construction and engineering skills. Our expertise and
            innovative methods have been honed over many years of experience in
            this sector, and we are proud to be playing an important role in
            shaping the future of railway infrastructure.
          </p>
        </div>
        {/* Image Content */}
        <div className=" w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] xl:mt-30 rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
            <Image
              src="/business/bridges-1.svg"
              alt="Railway bridge structure"
              fill={true}
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Turnkey Projects */}
      <div className="w-full z-4 bg-[#fff5ef] h-auto">
        <Screen className=""  />
        <div className=" max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-16 lg:py-20 xl:-mt-40">
          <div className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1 xl:-mt-28 xl:ml-20">
            <div className="relative w-92 h-92 md:w-150 md:h-150 lg:w-124 lg:h-164 rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
              <Image
                className="relative z-10 w-full object-cover"
                src="/business/bridge-2.svg"
                alt="Train on a coastal bridge"
                fill={true}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 md:px-10 order-1 lg:order-2 flex-1 xl:pl-40">
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
          </div>
        </div>
      </div>

      {/* Section 3: Icon Stats */}
      <div className=" max-w-[1440px] z- bg-white mx-auto flex md:flex-row lg:flex lg:flex-row justify-center items-center lg:justify-around flex-col lg:mt-0 mt-8 gap-16 md:gap-4 lg:gap-16 px-10">
        {cardData.map((data, idx) => (
          <CardComponent key={idx} data={data} />
        ))}
      </div>

      {/* Section 4: Resources Available */}
      <div className="max-w-[1440px] mx-auto bg-white h-auto">
        <Image className="absolute -ml-113 -mt-80 rotate-90" src="/named.svg" alt="" width={2000} height={1500} />
        <Image className="absolute ml-72 mt-80 rotate-90" src="/named.svg" alt="" width={2500} height={1500} />
        <div className="flex lg:w-[90%] lg:flex-nowrap lg:justify-between xl:ml-34 justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap-reverse mt-0  md:mt-8 xl:mt-16 pb-20">
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24">
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
          </div>
          <div>
            <Image
              className="relative mt-8 w-full lg:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 z-10"
              src="/business/bridge-4.svg"
              alt="Side view of railway bridge"
              width={554}
              height={721}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Section 5: Capabilities & Geography */}
      <div className="bg-[#fff5ef] py-16 md:py-24">
        
          <Image className="absolute ml-113 -mt-48 z-1 rotate-10" src="/named.svg" alt="" width={2000} height={1500} />
          <Image className="absolute -ml-113 mt-136 z-1 rotate-10" src="/named.svg" alt="" width={2000} height={1500} />
          <div className="flex items-center justify-center">
        <div className="max-w-[1440px] mx-auto flex lg:flex-nowrap justify-center xl:justify-between flex-wrap gap-12">
            <Image
              className="rounded-lg shadow-md hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300 z-1"
              src="/business/bridge-5.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col  justify-center px-4 md:px-6 md:w-[85%] lg:w-[60%] md:text-center xl:pl-42 lg:text-left lg:p-4">
            <h2 className="text-4xl md:text-7xl lg:text-xl xl:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Capabilities & <span className="text-textorange">Geography</span>
            </h2>
            <p className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg  font-medium font-monte">
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
          </div>
        </div>
      </div>

      {/* Section 6: Video */}
      <div className="bg-white">
        <VideoSection bgColor="bg-white" />
      </div>
    </div>
  );
};

export const CardComponent = ({ data }: { data: CardProps }) => {
  return (
    <div className="w-full z-15 max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md xl:min-h-md min-h-64 md:min-h-48 lg:min-h-56 border bg-white border-[#FB7602] p-6 md:p-8 lg:p-12 lg:-mt-6 mt-8 md:mt-0 rounded-lg flex flex-col hover:bg-[var(--bgcolour)] hover:shadow-md hover:shadow-[var(--bgcolour)] hover:border-0 transition-all duration-300">
      <div className="w-full flex justify-center items-center mb-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex justify-center items-center">
          <Image
            src="/business/bridges-3.svg"
            alt="Bridge Icon"
            width={24}
            height={24}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex text-center flex-col text-textblue tracking-[2%] font-raleway text-lg mb-4 flex-shrink-0">
        <div>
          <span className="text-textorange font-bold">{data.text.text1}</span>{" "}
          {data.text.text2}
        </div>
        <div>{data.text?.text3 ? data.text.text3 : <br />}</div>
      </div>

      <div className="flex justify-center items-center flex-1">
        <div className="max-w-xs text-center font-montserrat text-textblue font-normal text-base">
          Fabricated and constructed nearly 750,000 metric tons of steel
          structures, demonstrating capability and dedication to quality.
        </div>
      </div>
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
      text3:""
    },
    description:
      "We have completed the building of more than 60 significant bridges, demonstrating our extensive expertise and engineering brilliance.",
  },
];

export default Page;