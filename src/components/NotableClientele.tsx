"use client";
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const logos = [
  '/aboutus/logo1.png',
  '/aboutus/logo2.png',
  '/aboutus/logo3.png',
  '/aboutus/logo4.png',
  '/aboutus/logo5.png',
  '/aboutus/logo6.png',
  '/aboutus/logo7.png',
  '/aboutus/logo8.png',
  '/aboutus/logo9.png',
  '/aboutus/logo10.png',
  '/aboutus/logo11.png',
  '/aboutus/logo12.png',
  '/aboutus/logo13.png',
  '/aboutus/logo14.png',
  '/aboutus/logo1.png',
  '/aboutus/logo2.png',
  '/aboutus/logo3.png',
  '/aboutus/logo4.png',
  '/aboutus/logo5.png',
  '/aboutus/logo6.png',
  '/aboutus/logo7.png',
  '/aboutus/logo8.png',
  '/aboutus/logo9.png',
  '/aboutus/logo10.png',
  '/aboutus/logo11.png',
  '/aboutus/logo12.png',
  '/aboutus/logo13.png',
  '/aboutus/logo14.png',
];

// Animation Variant
const slideInFromTop: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

const NotableClientele: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center overflow-hidden font-monte">
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromTop}
            viewport={{ once: false, amount: 0.5 }}
        >
            <h2 className="text-3xl font-semibold text-textblue mb-6 font-raleway">
                Our Notable{' '}
                <span className="text-textorange">Clientele</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg  mb-10 leading-relaxed">
                Our clients in India include some of the country's most distinguished organisations. We are a significant exporter of track goods to Bangladesh and Sri Lanka Railways. Using high-quality materials, we offer professional and dependable services.
            </p>
        </motion.div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-slideX py-10">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-24 h-24 shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${idx + 1} of notable clientele`}
                width={96}
                height={96}
                className="object-contain hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotableClientele;
