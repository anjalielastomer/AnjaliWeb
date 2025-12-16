"use client";
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Animation Variants
const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
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
}


const AboutSec3 = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between md:items-start gap-12 font-monte overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="md:flex-1 max-w-xl"
      >
        <motion.p variants={itemVariants} className="text-sm md:text-xl font-medium text-[#142859] mb-4">
          We have made significant contributions to several rail link projects of{' '}
          <span className="text-textorange font-semibold">National</span> &{' '}
          <span className="text-textorange font-semibold">International</span> importance
        </motion.p>

        <motion.p variants={itemVariants} className="text-sm md:text-base text-[#142859] mb-12 leading-relaxed text-justify">
          Our engagement in these crucial projects demonstrates our ability to deliver complex, large-scale
          solutions with the greatest quality and reliability, cementing our reputation as a trusted industry leader.
        </motion.p>

        {/* Grid of features */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
          <motion.div variants={itemVariants}>
            <InlineFeatureCard
              title="Genuine"
              highlight="Value"
              description="We provide genuine cost-to-cost pricing without compromising on quality."
              icon="/aboutus/price.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <InlineFeatureCard
              title="Expertise"
              highlight="Work-force"
              description="We have a professional and trained team of approximately 500 individuals."
              icon="/aboutus/workforce.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <InlineFeatureCard
              title="Calibered"
              highlight="Infrastructure"
              description="We have a robust, cutting-edge infrastructure with latest manufacturing technology."
              icon="/aboutus/infrastructure.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <InlineFeatureCard
              title="15+ Years of"
              highlight="Excellence"
              description="With over a decade and a half of producing world-class items for fostering the needs of Railways."
              icon="/aboutus/excellence.png"
            />
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Right Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={popUp}
        viewport={{ once: false, amount: 0.4 }}
        className="md:flex-1 max-w-lg w-full rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(28,65,153,0.4)] transition-shadow duration-300"
      >
        <Image
          src="/aboutus/aboutimg3.png"
          alt="Modern orange and black passenger train running on a railway track with green fields and clear sky in background"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl"
          priority
        />
      </motion.div>
    </section>
  );
};

export default AboutSec3;

interface InlineFeatureCardProps {
  title: string;
  highlight: string;
  description: string;
  icon: string;
}

function InlineFeatureCard({
  title,
  highlight,
  description,
  icon,
}: InlineFeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-lg font-semibold text-[#142859]">
          {title} <span className="text-textorange">{highlight}</span>
        </h3>
        <div className="bg-[#142859] p-2 rounded-full animate-bgIcon">
          <Image
            src={icon}
            alt={`${title} ${highlight} icon`}
            width={20}
            height={20}
            className="object-contain animate-iconColor"
          />
        </div>
      </div>
      <p className="text-sm text-[#142859] leading-relaxed mt-1.5">
        {description}
      </p>
    </div>
  );
}
