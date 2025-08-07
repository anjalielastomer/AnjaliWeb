"use client";
import React from 'react';
import Image from 'next/image';
import VideoSection from '@/components/VideoSection';
import  CardComponent  from '@/components/CardComponent';
import { motion, Variants } from 'framer-motion';

// Animation Variants
const popUp: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
const containerVariants: Variants = {
      hidden: {},
      visible: {
          transition: {
              staggerChildren: 0.2,
          }
      }
  };
  
const itemVariants: Variants = {
      hidden: { x: -50, opacity: 0 },
      visible: {
          x: 0,
          opacity: 1,
          transition: {
              duration: 0.5,
              ease: "easeOut"
          }
      }
  };


const Page = () => {
  return (
    <div
      className="min-h-screen pt-22 overflow-hidden" // Added overflow-hidden here
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Section 1: Hero - Improved Flex Layout */}
      <div className=" max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-20 py-8 lg:py-16 font-monte lg:px-12">

        {/* Text Content */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl"
        >
          <motion.h1 variants={itemVariants} className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85.5px] text-textblue leading-tight">
            <span className="text-textblue block">
              Track
            </span>
            <span className="text-textorange block">
              Working
              <span className="text-textblue">
                {" "}Future <span className='text-textorange'>System</span>
              </span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-lg p-4 text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-montserrat font-medium tracking-normal text-justify">
            The permanent route is the foundation of railway infrastructure, and we specialize in railway track construction for a variety of projects. We specialize in ballasted and ballastless track construction, track renewals, gauge conversion, railway depots, sidings and yards, metro rail, and light rail projects. As one of India's fastest-growing ballastless track construction companies, we are now working on over 100 kilometers of mainline ballastless track.
          </motion.p>
        </motion.div>

        {/* Image Content */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg"
        >
          <div className="relative w-[220px] aspect-[3/4] md:w-[300px] lg:w-full lg:aspect-[4/5] rounded-xl overflow-hidden hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 mx-auto">
  <Image
    src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1753946468/o9j95utpjuv1vvel8cev.png"
    alt="Railway bridge structure"
    fill
    className="object-cover"
    loading="eager"
  />
</div>

        </motion.div>
      </div>


      {/* Section 2: Turnkey Projects */}
      <div className="bg-[#fff5ef] h-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-16 lg:py-20  lg:px-12">
          {/* Image Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1"
          >
            <div className="relative w-92 h-92 md:w-150 md:h-150 lg:w-124 lg:h-164 hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
              <Image
                className="w-full"
                src="/business/track-2.svg"
                alt="Train on a coastal bridge"
                fill={true}
                loading='lazy'
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-10 order-1 lg:order-2 flex-1"
          >
            <motion.h1 variants={itemVariants} className="font-monte text-lg sm:text-xl md:text-4xl font-medium text-[#193055] mb-4 font-montserrat text-center md:text-left leading-relaxed tracking-normal">
              We specialize in executing {" "} <span className='text-textorange'>Comprehension</span>
              <br />
              <span className='text-textorange'>Track Construction</span> capabilities:
            </motion.h1>

            <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-xl font-medium font-monte">
              <li>Ballasted and Ballastless track construction</li>
              <li>Track renewals and Gauge conversion</li>
              <li>Composite Bridges</li>
              <li>Railway depots, sidings, and yards</li>
              <li>Metro rail and light rail projects</li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Icon Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className=' max-w-[1440px] mx-auto md:w-fit flex md:flex-row lg:flex lg:flex-row justify-center items-center lg:justify-around flex-col lg:mt-0  mt-8 gap-16 md:gap-4 lg:gap-16 lg:px-12'
      >
        {cardData.map((data, idx) => (
          <motion.div key={idx} variants={popUp}>
            <CardComponent data={data} />
          </motion.div>
        ))}
      </motion.div>


      {/* Section 4: Resources Available */}
      <div className="max-w-[1440px] mx-auto bg-white h-auto">
        <div className="flex lg:flex-nowrap lg:justify-between justify-center xl:justify-between mx-auto flex-wrap-reverse mt-0 p-2 md:mt-8 pb-20 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center px-4 mt-10 md:mt-16 lg:mt-24"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-xl md:text-5xl font-bold text-[#193055] lg:mb-4 -mb-2 mt-4 lg:mt-0 font-monte text-center md:text-left leading-relaxed">
              <span className="text-textorange font-bold">Resources</span>{" "}
              Available
            </motion.h1>
            <br />
            <br />
            <br />
            <motion.ul variants={itemVariants} className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl font-medium font-monte">
              <li>Mobile Flash Butt Welding Machine</li>
              <li>Boom Placer Concrete Pump</li>
              <li>Booted Block Machine</li>
              <li>Track Master</li>
              <li>Concrete Mixer</li>
              <li>Batching Plant</li>
            </motion.ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              className="relative mt-2 w-full lg:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 z-10"
              src="/business/track-3.svg"
              alt="Side view of railway bridge"
              width={554}
              height={721}
              loading='lazy'
            />
          </motion.div>
        </div>
      </div>

      {/* Section 5: Capabilities & Geography */}
      <div className="bg-[#fff5ef] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto flex lg:flex-nowrap justify-center xl:justify-between flex-wrap gap-12 p-2 lg:px-12">
          <motion.div
  initial="hidden"
  whileInView="visible"
  variants={popUp}
  viewport={{ once: false, amount: 0.3 }}
  className="flex items-center justify-center"
>
  <Image
    className="rounded-lg shadow-md hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300 w-[220px] md:w-[320px] lg:w-[496px] h-auto"
    src="/business/track-4.svg"
    alt="Train crossing a river on a bridge"
    width={496}
    height={574}
    loading="lazy"
  />
</motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col  justify-center px-4 md:px-6 md:w-[85%] lg:w-[60%] md:text-center xl:pl-42 lg:text-left lg:p-4"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl lg:text-xl xl:text-5xl font-bold text-[#193055] mb-6 font-raleway">
              Track-Work & <span className='text-textorange'>Systems</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="lg:w-100 xl:w-120 text-sm md:text-base lg:text-sm xl:text-lg text-[#193055] leading-loose font-monte text-justify">
              Our ability to manage large-scale, complicated projects across multiple geographic locations displays our dedication to quality and ability to deliver on difficult tasks.
              <br /><br />
              In addition, we execute mobile flash butt welding with four equipment capable of executing 30,000 welds each year. We want to make considerable contributions to railway station upgrading projects under the Indian Railway’s Amrit Bharat initiative, with a focus on putting Ballast-less track in platforms.
            </motion.p>
            <br /><br />
            <motion.ul variants={itemVariants} className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg  font-medium font-monte">
              <li>Pandrol Booted Block System From Spain</li>
              <li>Pandrol Fastening System for Metro Railway</li>
            </motion.ul>
          </motion.div>
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
  text3?: string
}

interface CardProps {
  text: TextEntry,
  description: string
}

const cardData: CardProps[] = [
  {
    text: {
      text1: "250",
      text2: "+ KM Track constructed"
    },
    description:
      "Effectively completed more than 250 kilometers of railway rails, exhibiting vast experience and capability.",
  },
  {
    text: {
      text1: "Ballastless",
      text2: "Mainline sector"
    },
    description: "Recognized as the broadest ballastless track building company in India's mainline railway industry."
  }
];

export default Page;
