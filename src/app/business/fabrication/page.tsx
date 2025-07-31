"use client";
import React from 'react';
import Image from 'next/image';
import VideoSection from '@/components/VideoSection';
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
      className="min-h-screen pt-22 overflow-hidden"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      {/* Section 1: Hero */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-20 py-8 lg:py-16">
        {/* Text Content */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl lg:max-w-4xl xl:-mt-30"
        >
          <motion.h1 variants={itemVariants} className="font-raleway font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85.5px] text-textblue leading-tight">
            <span className="text-textblue block">Steel</span>
            <span className="text-textorange block">
              Fabrication
              <div className="flex justify-around gap-4">
                <div className="text-textblue">Future</div>
                <div className="text-textorange">Tech</div>
              </div>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="px-3 md:px-0 text-sm md:text-lg text-[#193055] max-w-xl mt-6 lg:mt-8 leading-loose font-monte font-medium tracking-normal text-justify">
            We are India's foremost steel bridge fabricators, with cutting-edge facilities at our Howrah and Salap operations.  We have an annual capability to construct 50,000 tons of structural steel and can handle single parts up to 18 MT.  Our facilities extend over 20,000 square meters and have a total area of 89,000 square meters, complete with EOT cranes and modern machining machines.
          </motion.p>
        </motion.div>
        {/* Image Content */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className=" w-full max-w-sm lg:max-w-md xl:max-w-lg"
        >
          <div className="relative w-full mx-auto aspect-[3/4] md:aspect-[4/5] xl:mt-30 rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 max-w-[300px] md:max-w-full">
  <Image
    src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1753946692/iaubtdifzw9yivfnwqyz.jpg"
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
        <div className="max-w-[1440px] mx-auto flex lg:flex-row flex-col-reverse items-center justify-between gap-8 lg:gap-12 py-16 lg:py-20 xl:-mt-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto order-2 lg:order-1 xl:-mt-28"
          >
           <div className="relative w-[220px] h-[220px] md:w-[380px] md:h-[380px] lg:w-[496px] lg:h-[656px] rounded-lg overflow-hidden hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300 mx-auto">
  <Image
    className="w-full h-full object-cover z-10"
    src="/business/fabric-2.svg"
    alt="Train on a coastal bridge"
    fill
    loading="lazy"
  />
</div>

          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-10 order-1 lg:order-2 flex-1 xl:pl-40"
          >
            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-xl font-medium text-[#193055] mb-4 font-monte text-center md:text-justify leading-relaxed tracking-normal">
              We provide complete client satisfaction through our in-house physical and chemical structural steel fabrication testing facilities, as well as a dedicated Quality Control team. Key testing capabilities include:
            </motion.p>

            <motion.ul
              variants={itemVariants}
              role="list"
              className=" list-disc list-inside space-y-2 text-textblue text-base sm:text-lg md:text-lg font-medium font-monte"
            >
              <li>Ultrasonic Testing Machine</li>
              <li>Radiography Equipment</li>
              <li>Magnetic Particle Testing Machine</li>
              <li>RAM Testing Facility (1:4)</li>
              <li>Ultrasonic Surface Finish Tester</li>
              <li>Die-Penetrant Testing Facility</li>
              <li>Digital Hardness Tester</li>
              <li>Digital Height Gauge</li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Section 4: Resources Available */}
      <div className="max-w-[1440px] mx-auto bg-white h-auto">
        <div className="flex lg:flex-nowrap lg:justify-between justify-center xl:justify-between flex-wrap-reverse mt-0  md:mt-8 xl:mt-16 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-xl md:text-5xl font-bold text-[#193055] lg:mb-4 -mb-2 mt-4 lg:mt-0 font-monte text-center md:text-left leading-relaxed">
              <span className="text-textorange font-bold">Resources</span>{" "}
              Available
            </motion.h1>
            <br />
            <br />
            <br />
            <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2 text-textblue text-base sm:text-xl md:text-xl font-medium font-monte">
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
            </motion.ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              className="relative mt-8 w-full lg:mt-45 hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 z-10"
              src="/business/fabric-3.svg"
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
        <div className="max-w-[1440px] mx-auto flex lg:flex-nowrap justify-center xl:justify-between flex-wrap gap-12 p-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <Image
              className="rounded-lg shadow-md hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              src="/business/fabric-4.svg"
              alt="Train crossing a river on a bridge"
              width={496}
              height={574}
              loading='lazy'
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
              Certifications & <span className="text-textorange">Quality</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="list-disc list-inside [&>li]:marker:text-textorange space-y-2 text-textblue text-base sm:text-xl md:text-xl lg:text-lg  font-medium font-monte text-justify">
              We are an RDSO-approved, ISO 9001 recognized company with strong quality systems integrated into our manufacturing processes. Our certifications include ISO 9001: 14001 and 45001. Both in-process and final inspections are performed by professional quality engineers who follow Total Quality Management concepts.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Section 6: Video */}
      <div className='bg-white'><VideoSection bgColor='bg-white' /></div>
    </div>
  );
};

export default Page;
