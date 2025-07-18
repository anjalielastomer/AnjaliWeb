import React from 'react';
import Image from 'next/image';
import VideoSection from '@/components/VideoSection';
import { CardComponent } from '../bridges/page';

const Page = () => {
  return (
    <div
      className="min-h-screen pt-22"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Section 1: Hero - Improved Flex Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-[90%] gap-8 lg:gap-12 mb-20 py-8 lg:py-16">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl">
          <h1 className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85.5px] text-textblue leading-tight">
            <span className="text-textblue block">
              Track
            </span>
            <span className="text-textorange block">
              Working
              <span className="text-textblue">
                {" "}Future <span className='text-textorange'>System</span>
              </span>
            </span>
          </h1>

          <p className="text-sm md:text-base text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-montserrat font-medium tracking-normal">
            We are one of the leading Indian Railway contractors for building
            superstructures. We undertake complex projects that require
            high-level construction and engineering skills. Our expertise and
            innovative methods have been honed over many years of experience
            in this sector, and we are proud to be playing an important role
            in shaping the future of railway infrastructure.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="relative w-full aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="/business/track-1.svg"
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
        <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-[93%] gap-8 lg:gap-12 py-16 lg:py-20">
          {/* Image Content */}
          <div className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1">
            <div className="relative w-92 h-92 md:w-150 md:h-150 lg:w-124 lg:h-164">
              <Image
                className="w-full"
                src="/business/track-2.svg"
                alt="Train on a coastal bridge"
                fill={true}
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center px-4 md:px-10 order-1 lg:order-2 flex-1">
            <h1 className="text-lg sm:text-xl md:text-4xl font-medium text-[#193055] mb-4 font-montserrat text-center md:text-left leading-relaxed tracking-normal">
              We specialize in executing {" "} <span className='text-textorange'>Comprehension</span>
              <br />
              <span className='text-textorange'>Track Construction</span> capabilities:
            </h1>

            <ul className="list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-lg font-medium font-montserrat">
              <li>Ballasted and Ballastless track construction</li>
              <li>Track renewals and Gauge conversion</li>
              <li>Composite Bridges</li>
              <li>Railway depots, sidings, and yards</li>
              <li>Metro rail and light rail projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Icon Stats */}
      <div className='min-w-full md:w-fit flex md:flex-row lg:flex lg:flex-row justify-center items-center lg:justify-around flex-col lg:mt-0  mt-8 gap-16 md:gap-4 lg:gap-16'>
        {cardData.map((data, idx) => (
          <CardComponent key={idx} data={data} />
        ))}
      </div>


      {/* Section 4: Resources Available */}
      <div className="bg-white h-auto">
        <div className="flex lg:w-[90%] lg:flex-nowrap lg:justify-between xl:ml-34 justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap-reverse mt-0  md:mt-8 pb-20">
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24">
            <h1 className="text-4xl sm:text-xl md:text-5xl font-bold text-[#193055] lg:mb-4 -mb-2 mt-4 lg:mt-0 font-monte text-center md:text-left leading-relaxed">
              <span className="text-textorange font-bold">Resources</span>{" "}
              Available
            </h1>
            <br />
            <br />
            <br />
            <ul className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl font-medium font-monte">
                <li>Mobile Flash Butt Welding Machine</li>
                <li>Boom Placer Concrete Pump</li>
                <li>Booted Block Machine</li>
                <li>Track Master</li>
                <li>Concrete Mixer</li>
                <li>Batching Plant</li>
            </ul>
          </div>
          <div>
            <Image
              className="mt-2 w-full lg:mt-45"
              src="/business/track-3.svg"
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
              src="/business/track-4.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
            />
          </div>
          <div className="flex flex-col  justify-center px-4 md:px-6 md:w-[85%] lg:w-[60%] md:text-center xl:pl-42 lg:text-left lg:p-4">
            <h2 className="text-4xl md:text-7xl lg:text-xl xl:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Track-Work & <span className='text-textorange'>Systems</span>
            </h2>
            <p className="lg:w-100 xl:w-120 text-sm md:text-base lg:text-sm xl:text-lg text-[#193055] leading-loose font-monte">
                Our ability to manage large-scale, complicated projects across multiple geographic locations displays our dedication to quality and ability to deliver on difficult tasks.
                <br /><br />
                In addition, we execute mobile flash butt welding with four equipment capable of executing 30,000 welds each year. We want to make considerable contributions to railway station upgrading projects under the Indian Railway’s Amrit Bharat initiative, with a focus on putting Ballast-less track in platforms.
            </p>
            <br /><br />
            <ul className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg  font-medium font-monte">
            <li>Pandrol Booted Block System From Spain</li>
            <li>Pandrol Fastening System for Metro Railway</li>
          </ul>
          </div>
        </div>
      </div>

      {/* Section 6: Video */}
      <div className='bg-white'><VideoSection bgColor='bg-white' /></div>
    </div>
  );
};





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
        text1: "250",
        text2: "+ KM Track constructed"
      },
    description:
      "Effectively completed more than 250 kilometers of railway rails, exhibiting vast experience and capability.",
  },
  {
    text:{
      text1:"Ballastless",
      text2:"Mainline sector"
    },
    description:"Recognized as the broadest ballastless track building company in India's mainline railway industry."
  }
];



export default Page;