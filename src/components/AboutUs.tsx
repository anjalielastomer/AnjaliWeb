import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 bg-white px-5 py-10 pt-20 font-raleway md:-mt-20 z-40 relative">
      <div className="w-full max-w-md flex flex-col h-full items-center">
        <div className="flex-1 rounded-xl overflow-hidden w-full hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
          <Image
            src="/aboutus/aboutimg1.png"
            alt="High-speed train"
            width={584}
            height={384}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 rounded-xl overflow-hidden mt-12 w-full hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
          <Image
            src="/aboutus/aboutimg2.png"
            alt="Metro in manufacturing"
            width={584}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full max-w-2xl flex flex-col h-full text-center md:text-left ">
        <h1 className="text-4xl font-bold text-textblue mb-2 flex gap-3 justify-center md:justify-start text-center md:text-left w-full">
  About <span className='text-textorange'>Us</span>
</h1>
        <span className="text-[28px] text-textblue font-medium mb-2 font-monte text-center md:text-left ">
          Unified in Shaping Railway&apos;s Future
        </span>

        <div className='flex flex-col md:flex-row w-full gap-7 mt-5 mb-10 font-monte'>
          <div className='w-full md:w-1/2 text-justify'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
              Our <span className='text-textorange'>Story</span>
            </h1>
            <p className='text-textblue text-sm font-medium mb-4'>
              Over the previous 15 years, Anjali Elastomers, which was founded in 2009, has developed from a maker of rail components to a top supplier of entire railway infrastructure.
            </p>
          </div>
          <div className='w-full md:w-1/2 text-justify'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
              Integrated  <span className='text-textorange'>Capabilities</span>
            </h1>
            <p className='text-textblue text-sm font-medium mb-4'>
              Bridge building, track construction, rail flash butt welding, rail turnout systems, and rail fastening systems are just a few of the railway sector disciplines in which we operate.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full gap-7 mt-10 mb-7 font-monte'>
          <div className='w-full md:w-1/2'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
              Manufacturing  <span className='text-textorange'>Excellence</span>
            </h1>
            <p className='text-textblue text-sm font-medium mb-4'>
              We manufacture a variety of railway track goods at our four cutting-edge production plants in Eastern India. Our plants incorporate state-of-art Technology to mobilise Good Manufacturing Practices.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
              Key Projects &  <span className='text-textorange'>Achievements</span>
            </h1>
            <p className='text-textblue text-sm font-medium mb-4'>
              The Jiribam-Imphal Rail Link, the Udhampur-Srinagar-Baramulla Rail Link, and the 4.5 km Rail Cum Road Steel Bridge across the River Ganga near Patna are some of our noteworthy projects that demonstrate our proficiency as the top railroad manufacturing and turnkey railway infrastructure organization.
            </p>
          </div>
        </div>
        <Link href={"/about-us"} className="group text-textblue transition-colors pr-7 py-3 text-[32px] font-normal flex items-center gap-2 font-raleway">
          <span className="text-textorange">Learn</span><span className="text-textblue"> more</span>
          <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden"/>
          <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block"/>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;