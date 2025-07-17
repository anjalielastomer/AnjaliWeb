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
      {/* Section 1: Hero */}
      <div className="flex bg-right-top justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap mb-20">
        <div className="min-h-auto flex flex-col p-6 gap-8 md:gap-15 md:w-[60%] xl:pt-20 md:pt-0">
          <h1 className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[85.5px] text-textblue w-full text-center md:text-left">
            <span className="text-textblue block mt-3 md:mt-5 lg:mt-8">
              Track
            </span>
            <span className="text-textorange mt-3 md:mt-5 lg:mt-8 block">
              Working
              <span className="text-textblue mt-3 md:mt-5 lg:mt-8">
                {" "}
                Future <span className='text-textorange'>System</span>
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
            src="/business/track-1.svg"
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
          <div className='w-124 h-164 ml-26 -mt-4'>
            <Image
              className=" w-full "
              src="/business/track-2.svg"
              alt="Train on a coastal bridge"
              width={496}
              height={641}
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24 ">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#193055] mb-4 font-monte text-center md:text-left leading-relaxed font-montserrat  tracking-normal">
              We specialize in executing {" "} <span className='text-textorange'>Comprehension</span>
              <br />
              <span className='text-textorange'>Track Construction</span> capabilities:
            </h1>

            <ul className="list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-base font-medium font-monte">
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
      <div className='min-w-full  flex justify-around gap-16'>
        {cardData.map((data, idx) => (
          <CardComponent key={idx} data={data} />
        ))}
      </div>

      {/* Section 4: Resources Available */}
      <div className="bg-white h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap-reverse mt-0 pb-20">
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24">
            <h1 className="text-lg sm:text-xl md:text-5xl font-bold text-[#193055] mb-4 font-monte text-center md:text-left leading-relaxed">
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
        <div className="flex justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap gap-12">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-lg shadow-md"
              src="/business/track-4.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-6 md:w-[55%]">
            <h2 className="text-xl md:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Track-Work & <span className='text-textorange'>Systems</span>
            </h2>
            <p className="w-146 text-sm md:text-base text-[#193055] leading-loose font-monte">
                Our ability to manage large-scale, complicated projects across multiple geographic locations displays our dedication to quality and ability to deliver on difficult tasks.
                <br /><br />
                In addition, we execute mobile flash butt welding with four equipment capable of executing 30,000 welds each year. We want to make considerable contributions to railway station upgrading projects under the Indian Railway’s Amrit Bharat initiative, with a focus on putting Ballast-less track in platforms.
            </p>
            <br /><br />
            <ul className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl font-medium font-monte">
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