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
              <span className="text-textblue">Bridges</span>
            </span>
            <span className="text-textorange block mt-3 md:mt-5 lg:mt-8">
              Shaping
            </span>
            <span className="text-textblue mt-3 md:mt-5 lg:mt-8 block">
              Railway's
              <span className="text-textorange mt-3 md:mt-5 lg:mt-8">
                {" "}
                Future
              </span>
            </span>
          </h1>

          <p className="text-sm text-center xl:text-left md:text-base text-[#193055] md:w-[40rem] mb-4 md:mb-12 leading-loose font-monte font-montserrat font-medium text-[18px] tracking-normal">
            We are one of the leading Indian Railway contractors for building
            superstructures. We undertake complex projects that require
            high-level construction and engineering skills. Our expertise and
            innovative methods have been honed over many years of experience
            in this sector, and we are proud to be playing an important role
            in shaping the future of railway infrastructure.
          </p>
        </div>
        <div className="">
          <Image
            className="mt-2 lg:mt-45"
            src="/business/bridges-1.svg"
            alt="Railway bridge structure"
            width={554}
            height={833}
            priority
          />
        </div>
      </div>

      {/* Section 2: Turnkey Projects */}
      <div className="bg-[#fff5ef] h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[93%] flex-wrap mt-0 md:mt-[-168px] pb-20">
          <div className='relative lg:w-124 lg:h-164 w-92 h-92  lg:ml-26 lg:-mt-4'>
            <Image
              className=" w-full "
              src="/business/bridge-2.svg"
              alt="Train on a coastal bridge"
              fill={true}
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24 ">
            <h1 className="text-2xl sm:text-xl md:text-2xl font-medium text-[#193055] mb-4 font-monte text-center md:text-left leading-relaxed font-montserrat  tracking-normal">
              We are experts in providing{" "}
              <span className="text-textorange font-bold">
                Turn key Bridge <br /> 
              </span>
              projects:
            </h1>

            <ul  role='list' className=" lg:pt-0 lg:pl-0 pl-2 pt-8 list-disc marker:text-textorange list-inside space-y-2 text-base sm:text-lg md:text-base font-medium font-monte">
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
      <div className='min-w-full   lg:flex lg:flex-row flex-col justify-center gap-16'>
        {cardData.map((data, idx) => (
          <CardComponent key={idx} data={data} />
        ))}
      </div>

      {/* Section 4: Resources Available */}
      <div className="bg-white h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap-reverse mt-0 pb-20">
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
              <li>SAW, TIG, MIG, CO<sub>2</sub> Welding Machines</li>
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
              className="mt-2 w-full lg:mt-45"
              src="/business/bridge-4.svg"
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
          <div className="flex items-center justify-center">
            <Image
              className="rounded-lg shadow-md"
              src="/business/bridge-5.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-6 md:w-[55%]">
            <h2 className="text-4xl md:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Capabilities & <span className='text-textorange'>Geography</span>
            </h2>
            <p className="lg:w-146 text-sm md:text-base text-[#193055] leading-loose font-monte">
              Our bridges span the length and width of India, strengthening connections and facilitating the flow of life throughout the country. We have successfully constructed bridges in tough mountain terrains and over running rivers, such as the Rishikesh Bridge. This demonstrates our capacity to handle demanding situations.
              <br /><br />
              We, as one of the most advanced steel bridge building companies, have the potential to fabricate and erect 50,000 tons of structural steel per year at our cutting-edge fabrication facilities located in West Bengal. These bridge building facilities, which occupy more than 20,000 square meters and have a total area of 89,000 square meters, are outfitted with EOT cranes and advanced machinery. We perform full-scale design, control/trial assemblies, and testing on various structures and components in-house. Its shot-blasting facilities ensure that produced components have a flawless surface and are anti-corrosive.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Video */}
      <div className='bg-white'><VideoSection bgColor='bg-white' /></div>
    </div>
  );
};

export const CardComponent = ({ data }: { data: CardProps }) => {
  return (
    <div className='w-full max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md min-h-64 md:min-h-48 lg:min-h-56 border bg-white border-[#FB7602] p-6 md:p-8 lg:p-12 lg:-mt-6 mt-8 md:mt-0 rounded-lg flex flex-col'>
      <div className="w-full flex justify-center items-center mb-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex justify-center items-center">
          <Image src="/business/bridges-3.svg" alt="Bridge Icon" width={24} height={24} />
        </div>
      </div>
      
      <div className='flex text-center flex-col text-textblue tracking-[2%] font-raleway text-lg mb-4 flex-shrink-0'>
        <div>
          <span className='text-textorange font-bold'>{data.text.text1}</span> {data.text.text2}
        </div>
        <div>{data.text?.text3}</div>
      </div>
      
      <div className='flex justify-center items-center flex-1'>
        <div className='max-w-xs text-center font-montserrat text-textblue font-normal text-base'>
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