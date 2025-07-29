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
      className="relative min-h-[500px] md:min-h-[1000px] max-h-screen bg-cover bg-center bg-no-repeat text-center font-monte overflow-hidden"
      style={{ backgroundImage: "url('/aboutus/trackbg.png')" }}
      aria-label="Railway infrastructure company motto and mission"
    >
      {/* Wrapper for both cards */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:block justify-center items-center h-full gap-6 px-4 sm:px-8">
        {/* Left Box - Manufacturing Practices */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: false, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }} // Optimization for smooth animation
            className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
            md:absolute md:top-[10%] md:left-[10%] xl:left-[20%]"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Our <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Motto</span>
          </h2>
          <p className="text-[var(--textblue)] text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            To be a premier railway infrastructure provider, offering sustainable and creative solutions to all stakeholders.
          </p>
        </motion.div>
    
        {/* Right Box - Quality Assurance */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: false, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }} // Optimization for smooth animation
            className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
            md:absolute md:bottom-[10%] md:right-[10%] mt-6 md:mt-0 xl:right-[20%]"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Our <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Mission</span>
          </h2>
          <p className="text-[var(--textblue)] text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            Customer satisfaction by timely delivery and effective planning.<br/>Reliable solutions based on quality and safety in all aspects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Production4;
