"use client";
import Image from 'next/image';
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
              staggerChildren: 0.2, // Stagger animation of children
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


const Production2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 font-monte overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="md:flex-1 max-w-xl"
      >
        <motion.h2 variants={itemVariants} className="text-[#152f5d] font-semibold text-2xl sm:text-3xl lg:text-[36px] font-raleway">
          Pandrol <span className="text-[var(--textorange)]">Fastening</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-[20px] text-textblue mt-4">
          Precision Engineering for <span className="text-[var(--textorange)]">Permanent</span> Way Solutions
        </motion.p>

        <motion.p variants={itemVariants} className="text-textblue text-base sm:text-lg leading-loose mt-6">
          Our advanced facility specializes in the manufacturing of rail fastening systems compatible with Pandrol-type technologies, ensuring high clamping force, electrical insulation, and long-term track stability. Designed for mainline, metro, and industrial rail applications, our systems integrate seamlessly with concrete and wooden sleepers, providing high fatigue resistance and minimal maintenance over life cycles.
        </motion.p>
        <motion.p variants={itemVariants} className="text-textblue text-base sm:text-lg leading-loose mt-6">
          We ensure every fastening component is made with precision metallurgy and tight tolerances — for consistent performance on every kilometer of track.
        </motion.p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={popUp}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-fit flex justify-center md:justify-start mb-6 sm:mb-8 md:mb-0"
      >
        <div className="w-[350px] h-[350px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[550px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
          <Image
            src="/aboutus/production-facilities/production3.jpg"
            alt="Rail infrastructure tunnel showing railway track and illuminated walls"
            width={500}
            height={500}
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Production2;
