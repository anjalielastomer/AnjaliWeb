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
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-[90%] lg:w-[100%] gap-8 lg:gap-12 mb-20 py-8 lg:py-16">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl lg:max-w-4xl xl:-mt-30">
          <h1 className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85.5px] text-textblue leading-tight">
            <span className="text-textblue block">Steel</span>
            <span className="text-textorange block">
              Fabrication
              <div className="flex justify-around gap-4">
                <div className="text-textblue">Future</div>
                <div className="text-textorange">Tech</div>
              </div>
            </span>
          </h1>

          <p className="text-sm md:text-base text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-montserrat font-medium tracking-normal">
            We are India's foremost steel bridge fabricators, with cutting-edge facilities at our Howrah and Salap operations.  We have an annual capability to construct 50,000 tons of structural steel and can handle single parts up to 18 MT.  Our facilities extend over 20,000 square meters and have a total area of 89,000 square meters, complete with EOT cranes and modern machining machines.
          </p>
        </div>
        {/* Image Content */}
        <div className=" w-full max-w-sm lg:max-w-md xl:max-w-lg">
                  <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] xl:mt-30">
                    <Image
                      src="/business/fabric-1.svg"
                      alt="Railway bridge structure"
                      fill={true}
                      className="object-contain"
                      priority
                    />
                  </div>
          </div>
      </div>

      {/* Section 2: Turnkey Projects */}
      <div className="bg-[#fff5ef] h-auto">
              <div className="flex flex-col lg:flex-row flex-col-reverse items-center justify-between mx-auto max-w-[93%] gap-8 lg:gap-12 py-16 lg:py-20 xl:-mt-40">
                <div className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1 xl:-mt-28 xl:ml-20">
                  <div className="relative w-92 h-92 md:w-150 md:h-150 lg:w-124 lg:h-164">
                    <Image
                      className="w-full"
                      src="/business/fabric-2.svg"
                      alt="Train on a coastal bridge"
                      fill={true}
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center px-4 md:px-10 order-1 lg:order-2 flex-1 xl:pl-40">
                  <p className="text-lg sm:text-xl md:text-xl font-medium text-[#193055] mb-4 font-montserrat text-center md:text-left leading-relaxed tracking-normal">
                    We provide complete client satisfaction through our in-house physical and chemical structural steel fabrication testing facilities, as well as a dedicated Quality Control team. Key testing capabilities include:
                  </p>
      
                  <ul
                    role="list"
                    className=" list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-lg font-medium font-montserrat"
                  >
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
              <li>Plate Bending Machine</li>
              <li>H/I Beam Straightening Line</li>
              <li>CNC Profile Cutting Machine</li>
              <li>CNC Drilling Machine</li>
              <li>Hydraulic Presses up-to 700 Ton Capacity</li>
              <li>Grit/Sand Blasting</li>
              <li>SAW Machine</li>
              <li>Spray Metalizing Facility</li>
              <li>Painting Booth/Covered Painting Area</li>
              <li>TIG, MIG, CO<sub>2</sub> Welding Machines</li>
            </ul>
          </div>
          <div>
            <Image
              className="mt-8 w-full lg:mt-45"
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
        <div className="flex lg:flex-nowrap justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap gap-12">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-lg shadow-md"
              src="/business/fabric-4.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
            />
          </div>
          <div className="flex flex-col  justify-center px-4 md:px-6 md:w-[85%] lg:w-[60%] md:text-center xl:pl-42 lg:text-left lg:p-4">
            <h2 className="text-4xl md:text-7xl lg:text-xl xl:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Certifications & <span className="text-textorange">Quality</span>
            </h2>
            <p className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg  font-medium font-monte">
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