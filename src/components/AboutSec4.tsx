"use client";
import Image from 'next/image';
import Link from 'next/link';
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
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};


export default function AboutSec4() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start mx-auto px-6 py-12 bg-[#FFF4E6] relative justify-center overflow-hidden text-textblue font-monte">
      <div className='max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between'>
        {/* Left side image */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-fit flex justify-center md:justify-start mb-6 sm:mb-8 md:mb-0"
        >
          <div className="w-[350px] h-[350px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
            <Image
              src="/aboutus/tunnel.png"
              alt="Rail infrastructure tunnel showing railway track and illuminated walls"
              width={500}
              height={500}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Right side content */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:pl-16 text-gray-900 lg:pt-0 pt-10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-raleway sm:text-4xl font-semibold mb-10 text-textblue">
            Elevated{' '}
            <span className="text-textorange">
              Technology
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6 sm:max-w-full max-w-xl text-justify">
            Our company, a pioneer in rail infrastructure, specializes in innovative Turnkey bridge solutions. We develop ballastless tracks using cutting-edge innovation to provide improved stability, fewer maintenance, and an extended total track lifespan.
          {/* </motion.p> */}

          {/* <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6 max-w-xl"> */}
            The development of ballastless track systems has found widespread use in India's rail infrastructure, ushering in a new era of efficiency and durability.
          {/* </motion.p> */}

          {/* <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-8 max-w-xl"> */}
            Our competence in ballastless track construction continues to set new benchmarks and contribute to the evolution of rail systems. As India modernizes its railroads, the use of ballastless track technology demonstrates the country's dedication to innovative solutions, creating a resilient and sustainable transportation network.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href={"/article"} className="group text-textblue transition-colors pr-7 py-3 text-3xl font-light flex items-center gap-2 font-raleway">
              <span>
                <span className="text-[#FB7602] group-hover:text-[#193055] transition-all duration-300">Learn</span>
                <span className="text-[#193055] group-hover:text-[#FB7602] transition-all duration-300"> more</span>
              </span>
              <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
              <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
