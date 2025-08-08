"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

// Animation Variants
const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
    visible: { transition: { staggerChildren: 0.3 } }
};


const Production1 = () => {
    return (
        <div className="relative font-monte overflow-hidden">
            {/* Sec1 */}
            <div className="flex flex-col justify-center lg:flex-row bg-white pt-20 relative z-10">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 p-4 px-6 sm:px-8 lg:px-2 flex flex-col text-center md:text-left">
                        {/* This heading is now static */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-textblue leading-relaxed gap-10 mb-8">
                            State-of-Art<br />
                            <span className="mt-4 text-textorange">Production</span> <br />
                            Facilities
                        </h1>

                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}
                            className="mt-8 lg:mt-16 flex flex-col gap-8 lg:gap-12 mb-12"
                        >
                            <div className="flex flex-col xl:flex-row gap-8 sm:gap-12">
                                <motion.div variants={slideInFromLeft}>
                                    <StatItem
                                        number={175}
                                        unit="KMS TRACKS"
                                        description="Our Projects include critical rail link connectivity projects and several metro projects. For linking mobility with daily lives."
                                    />
                                </motion.div>
                                <motion.div variants={slideInFromLeft}>
                                    <StatItem
                                        number={60}
                                        unit="BRIDGES"
                                        description="Our Projects brought forward mobility and connectivity connecting lands surfaces, hilly terrains, water bodies and cities."
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-fit p-4 px-6 sm:px-8 lg:px-12 flex flex-col justify-center relative">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}
                            className="max-w-lg mx-auto lg:mx-0"
                        >
                            <motion.div variants={slideInFromRight} className="flex items-center justify-center md:justify-start gap-2 mb-6 font-raleway">
                                <h2 className="text-textblue font-semibold md:font-bold text-2xl sm:text-3xl lg:text-[36px]">Steel</h2>
                                <span className="text-textorange font-semibold md:font-bold text-2xl sm:text-3xl lg:text-[36px]">Fabrication</span>
                            </motion.div>

                            <motion.p variants={slideInFromRight} className='text-base sm:text-lg lg:text-[20px] font-[500] font-monte md:mt-10 text-center md:text-left'>Precision Steel Fabrication, <span className='text-textorange'>Engineered</span> for Elastomer Excellence</motion.p>

                            <motion.p variants={slideInFromRight} className="text-textblue text-base sm:text-lg leading-loose my-8 lg:my-20 text-justify">
                                At the heart of every high-performance elastomer product lies a backbone of precision-engineered steel. Our in-house steel fabrication facility ensures strength, consistency, and quality you can rely on — every time.
                            </motion.p>

                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={popUp}
                                className="mt-auto relative z-40 lg:-mb-32"
                            >
                                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
                                    <img
                                        src="/aboutus/production-facilities/production1.jpg"
                                        alt="Modern orange commuter train inside a spacious maintenance facility with advanced equipment and industrial lighting"
                                        className="object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sec2 */}
            <div className="bg-[#FFF8F2] px-6 sm:px-12 lg:px-24 font-monte text-[#1A202C] flex flex-col justify-end py-20 relative z-5 lg:-mt-32">
                <div className="lg:pt-40 flex flex-col gap-5 max-w-[1440px] mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={slideInFromLeft}
                        className="mb-8"
                    >
                        <h2 className="text-textblue font-semibold text-2xl sm:text-3xl lg:text-[36px] max-w-[1440px] mx-auto font-raleway text-center md:text-left">
                            Turnout and <span className="text-textorange font-semibold">Track Devices</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Left Image Section */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} variants={popUp}
                            className="flex-shrink-0 w-full lg:w-1/2"
                        >
                            <div className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
                                <Image
                                    src="/aboutus/production-facilities/production2.jpg"
                                    alt="Railway tracks extending into the distance with green vegetation on both sides"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[300px] lg:h-[400px]"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Right Text Section */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}
                            className="flex flex-col justify-start lg:w-[500px] space-y-8 md:ml-14"
                        >
                            <motion.div variants={slideInFromRight}>
                                <h3 className='text-base sm:text-lg lg:text-[20px] font-medium text-textblue mb-6 text-center md:text-left'>
                                    Engineering Mobility with <span className='text-textorange'>Unmatched</span> Accuracy
                                </h3>
                            </motion.div>

                            <motion.div variants={slideInFromRight} className="space-y-4 text-base sm:text-lg leading-relaxed text-textblue">
                                <p className="text-justify">
                                    Our specialized facility for Turnout and Track Device manufacturing delivers high-performance railway components that meet global standards. Backed by advanced CNC machining, in-house forging, and precision welding capabilities, we design and manufacture turnout systems that ensure smooth switching, minimal wear, and long-term reliability in dynamic rail environments.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}
                        className="flex flex-col max-w-4xl ml-auto sm:flex-row items-center justify-between pt-8 space-y-8 sm:space-y-0 sm:space-x-8 text-[#595959]"
                    >
                        <motion.div variants={slideInFromLeft}>
                            <StatItem
                                number={15}
                                unit="YEARS OF EXPERIENCE"
                                description="Our extensive history in manufacturing world-class items fosters security and safety as the first priority towards our GMP."
                            />
                        </motion.div>
                        <motion.div variants={slideInFromLeft}>
                            <StatItem
                                number={4}
                                unit="MANUFACTURING PLANTS"
                                description="We operate across 4 plants in the India. Providing us the brand-width to accommodate bespoke and turn-key solutions."
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default Production1;

function StatItem({
  number,
  unit,
  description,
}: {
  number: number;
  unit: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);
  const animatedNumber = useCountUp(number, isVisible, 2000);

  return (
    <div className="flex gap-2 items-start" ref={ref}>
      <div className="text-textorange font-bold text-4xl w-36 break-words text-right">
        <div className="flex items-baseline-last justify-end gap-2">
          {animatedNumber}
          <Image
            src="/send.png"
            alt="send"
            width={25}
            height={4}
            className="animate-blink"
          />
        </div>
        <div className="uppercase text-sm font-semibold text-textblue mb-1">
          {unit}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 pl-4 flex-1">
        <p className="text-xs font-medium text-textblue text-justify leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}

// Custom Hook for count-up animation
function useCountUp(target: number, start: boolean, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            if(start) {
                setCount(Math.floor(percentage * target));
                if (progress < duration) {
                    animationFrameId = requestAnimationFrame(step);
                } else {
                    setCount(target);
                }
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [target, duration, start]);

    return count;
}

// Hook to detect when element is visible
function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { rootMargin }
        );
        if (element) observer.observe(element);
        return () => {
            if (element) observer.unobserve(element);
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}
