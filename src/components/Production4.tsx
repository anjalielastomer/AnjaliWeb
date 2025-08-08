"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Animation Variants
const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const slideInFromRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

const Production4 = () => {
  return (
    <section
      className="relative py-3 md:py-0 min-h-[700px] md:min-h-[1000px] max-h-[1440px] bg-cover bg-center bg-no-repeat text-center overflow-hidden"
      style={{ backgroundImage: "url('/aboutus/production-facilities/production4-bg.jpg')" }}
      aria-label="Railway infrastructure company motto and mission"
    >
      {/* Wrapper for both cards */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:block justify-center items-center h-full gap-6 px-8">
        {/* Left Box - Manufacturing Practices */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: false, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }} // Optimization for smooth animation
            className="group flex flex-col gap-3 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-4 py-4 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
            md:absolute md:top-[10%] md:left-[10%] xl:left-[20%]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Manufacturing <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Practices</span>
          </h2>
          <p className="text-textblue text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            Our Manufacturing practice involves standardized procedures and quality controls to ensure consistent and efficient production of goods.
          </p>
        </motion.div>

        {/* Right Box - Quality Assurance */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: false, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }} // Optimization for smooth animation
            className="group flex flex-col gap-3 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-4 py-4 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
            md:absolute md:bottom-[10%] md:right-[10%] mt-6 md:mt-0 xl:right-[20%]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Quality <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Assurance</span>
          </h2>
          <p className="text-textblue text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            We emphasize safety, precision, and compliance with industry regulations to maintain product integrity and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Production4;
