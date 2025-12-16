import React from "react";
import Image from "next/image";

interface TextEntry {
  text1: string;
  text2: string;
  text3?: string;
}

export interface CardProps {
  text: TextEntry;
  description: string;
}
const cardData: CardProps[] = [
  {
    text:{
        text1: "750000",
        text2: "MT + Steel Structures",
        text3:"Fabricated & Erected"
      },
    description:
      "Fabricated and constructed nearly 750,000 metric tons of steel structures, demonstrating capability and dedication to quality.",
  },
  {
    text:{
      text1:"80m",
      text2:"Erection Above the",
      text3:"Ground Level"
    },
    description:"Excelled in erecting structures up to 80 meters above ground level and managing complicated and difficult tasks with precision."
  },{
    text:{
      text1:"60+",
      text2:"Major Bridges Building",
    },
    description:"We have completed the building of more than 60 significant bridges, demonstrating our extensive expertise and engineering brilliance."
  }
];
const CardComponent = ({ data }: { data: CardProps }) => {
  return (
    <div className="border bg-white hover:bg-[var(--bgcolour)] hover:border-none border-[var(--textorange)] shadow-lg hover:shadow-[0_0_10px_rgba(28,65,153,0.4)] transition-shadow duration-300 min-h-70 p-2 md:p-8 xl:-mt-6 rounded-lg ">
      <div className="w-full flex justify-center items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex justify-center items-center">
          <Image
            src="/business/bridges-3.svg"
            alt="Bridge Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex text-center flex-col text-textblue tracking-[2%] font-raleway text-lg">
        <div>
          <span className="text-textorange font-bold">{data.text.text1}</span>{" "}
          {data.text.text2}
        </div>
        <div> {data.text?.text3}</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-75 font-montserrat text-textblue font-normal text-base text-justify">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
