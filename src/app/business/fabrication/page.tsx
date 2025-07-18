import React from 'react';
import Image from 'next/image';
import VideoSection from '@/components/VideoSection';

const Page = () => {
  return (
    <div
      className="min-h-screen pt-22"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Section 1: Hero */}
      <div className="flex bg-right-top justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap mb-20">
        <div className="min-h-auto flex flex-col p-6 gap-8 md:gap-15 md:w-[60%] xl:pt-20 md:pt-0">
          <h1 className="font-raleway font-semibold text-6xl sm:text-5xl md:text-6xl lg:text-[85.5px] text-textblue w-full text-center md:text-left">
            <span className="whitespace-nowrap text-nowrap mt-3 md:mt-5 lg:mt-8">
              <span className="text-textblue">Steel</span>
            </span>
            <span className="text-textorange block mt-3 md:mt-5 lg:mt-8">
              Fabrication
            </span>
            <span className="text-textblue mt-3 md:mt-5 lg:mt-8 block">
              Future
              <span className="text-textorange mt-3 md:mt-5 lg:mt-8">
                {" "}
                Tech
              </span>
            </span>
          </h1>

          <p className="text-sm text-center xl:text-left md:text-base text-[#193055] md:w-[40rem] mb-4 md:mb-12 leading-loose font-monte font-montserrat font-medium tracking-normal">
            We are India's foremost steel bridge fabricators, with cutting-edge facilities at our Howrah and Salap operations.  We have an annual capability to construct 50,000 tons of structural steel and can handle single parts up to 18 MT.  Our facilities extend over 20,000 square meters and have a total area of 89,000 square meters, complete with EOT cranes and modern machining machines.
          </p>
        </div>
        <div className="relative lg:w-128 lg:h-180 w-full h-120">
          <Image
            className="mt-2 lg:mt-45"
            src="/business/fabric-1.svg"
            alt="Railway bridge structure"
            fill={true}
            priority
          />
        </div>
      </div>

      {/* Section 2: Turnkey Projects */}
      <div className="bg-[#fff5ef] h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[93%] flex-wrap mt-0 md:mt-[-168px] pb-40 pt-40">
          <div className="lg:w-128 relative  lg:h-180 w-84 h-124 md:w-[496px] ml-0 md:ml-6">
            <Image
                className="w-full h-auto"
                src="/business/fabric-2.svg"
                alt="Train on a coastal bridge"
                fill={true}
                priority
            />
            </div>
          <div className="flex flex-col justify-center lg:px-4 md:px-10 mt-10 md:mt-16 lg:mt-24 ">
            <p className="text-lg  sm:text-xl lg:w-136 lg:h-60 md:text-2xl font-medium text-[#193055] font-monte text-center md:text-left leading-relaxed font-montserrat  tracking-normal">
              We provide complete client satisfaction through our in-house physical and chemical structural steel fabrication testing facilities, as well as a dedicated Quality Control team. Key testing capabilities include:
            </p>

            <ul  role='list' className="list-disc marker:text-textorange list-inside pl-2 pt-8 lg:p-0 space-y-2 text-sm sm:text-lg md:text-lg font-medium font-monte">
                <li>Ultrasonic Testing Machine</li>
                <li>Radiography Equipment</li>
                <li>Magnetic Particle Testing Machine</li>
                <li>RAM Testing Facility (1:4)</li>
                <li>Ultrasonic Surface Finish Tester</li>
                <li>Die-Penetrant Testing Facility</li>
                <li>Digital Hardness Tester</li>
                <li>Digital Height Gauge</li>
            </ul>

          </div>
        </div>
      </div>

      {/* Section 4: Resources Available */}
      <div className="bg-white h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap-reverse mt-0 pb-20">
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24">
            <h1 className="text-4xl sm:text-xl md:text-5xl font-bold text-[#193055] mb-4 font-monte text-center md:text-left leading-relaxed">
              <span className="text-textorange font-bold">Resources</span>{" "}
              Available
            </h1>
            <br />
            <br />
            <br />
            <ul className="list-disc list-inside space-y-2 text-textblue text-sm sm:text-xl md:text-xl font-medium font-monte">
                <li>Plate Bending Machine</li>
                <li>H/I Beam Straightening Line</li>
                <li>CNC Profile Cutting Machine</li>
                <li>CNC Drilling Machine</li>
                <li>Hydraulic Presses up-to 700 Ton Capacity</li>
                <li>Grit/Sand Blasting</li>
                <li>SAW Machine</li>
                <li>Spray Metalizing Facility</li>
                <li>Painting Booth/Covered Painting Area</li>
                <li>TIG, MIG, CO2 Welding Machines</li>
            </ul>
          </div>
          <div>
            <Image
              className="mt-2 w-full lg:mt-45"
              src="/business/fabric-3.svg"
              alt="Side view of railway bridge"
              width={554}
              height={721}
              priority
            />
          </div>
        </div>
      </div>

      {/* Section 5: Capabilities & Geography */}
      <div className="bg-[#fff5ef] py-16 md:py-24">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap gap-12">
          <div className=" relative flex items-center justify-center lg:w-496 lg:h-574  ">
            <Image
              className="rounded-lg shadow-md"
              src="/business/fabric-4.svg"
              alt="Train crossing a river on a bridge"
              fill={true}
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-6 md:w-[55%] w-full">
            <h2 className="text-xl md:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Certifications & <span className='text-textorange'>Quality</span>
            </h2>
            <p className="lg:w-146 w-full text-sm md:text-base text-[#193055] leading-loose font-monte">
              We are an RDSO-approved, ISO 9001 recognized company with strong quality systems integrated into our manufacturing processes. Our certifications include ISO 9001: 14001 and 45001. Both in-process and final inspections are performed by professional quality engineers who follow Total Quality Management concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Video */}
      <div className='bg-white'><VideoSection bgColor='bg-white' /></div>
    </div>
  );
};

export const CardComponent=({data}:{data:CardProps})=>{
  return(
    <div className='min-w-96 border bg-white border-[#FB7602] min-h-62 p-12 -mt-6 rounded-lg'>
      <div className="w-full flex justify-center items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex justify-center items-center">
          <Image src="/business/bridges-3.svg" alt="Bridge Icon" width={24} height={24} />
        </div>
      </div>
      <div className='flex text-center flex-col text-textblue tracking-[2%] font-raleway text-lg'>
        <div><span className='text-textorange font-bold'>{data.text.text1}</span> {data.text.text2}</div>
        <div> {data.text?.text3}</div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-75 text-center font-montserrat text-textblue font-normal text-base'>
          Fabricated and constructed nearly 750,000 metric tons of steel structures, demonstrating capability and dedication to quality.
        </div>
      </div>
    </div>
  )
}



interface TextEntry {
  text1: string
  text2: string
  text3?:string
}

interface CardProps {
  text: TextEntry,
  description: string
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
      text2:"Major Bridges",
    },
    description:"We have completed the building of more than 60 significant bridges, demonstrating our extensive expertise and engineering brilliance."
  }
];



export default Page;