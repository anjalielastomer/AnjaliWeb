"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface InsightCardProps {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

// Animation Variants
const slideInFromTop: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Each card will animate 0.2s after the previous one
            delayChildren: 0.2, // A small delay before the first card starts
        }
    }
};

const gridItemVariants: Variants = {
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


const InsightCard: React.FC<InsightCardProps> = ({
  imgSrc,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-[0_0_50px_rgba(0,165,255,0.2)] hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48 sm:h-56 md:h-40 lg:h-56 xl:h-48">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-textorange font-semibold text-xl mb-2">{title}</h3>
        <p className="text-textblue flex-grow leading-relaxed">{description}</p>
        <p className="flex justify-between mt-4 text-textblue text-sm">
          {date} &bull; {readTime} read
          <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink" />
        </p>
      </div>
    </div>
  );
};

const LatestInsights: React.FC = () => {
  return (
    <section className="w-full bg-white font-monte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromTop}
            viewport={{ once: false, amount: 0.5 }}
            className="text-center"
        >
            <h1 className="text-3xl sm:text-4xl font-bold text-textblue mb-8 font-raleway">
                Latest <span className="text-textorange">Insights</span>
            </h1>
            <p className="mt-3 mx-auto text-sm sm:text-lg font-medium text-textblue font-monte">
                Stay updated with industry trends and innovations
            </p>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={gridContainerVariants}
            viewport={{ once: false, amount: 0.1 }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={gridItemVariants}>
            <InsightCard
              imgSrc="/latestInsight/img1.png"
              title="Future of Railway Materials"
              description="Exploring next-generation elastomeric solutions for sustainable transportation."
              date="Dec 15, 2023"
              readTime="5 min"
            />
          </motion.div>
          <motion.div variants={gridItemVariants}>
            <InsightCard
              imgSrc="/latestInsight/img2.png"
              title="High-Speed Rail Innovations"
              description="How advanced materials are enabling faster and safer rail travel."
              date="Dec 10, 2023"
              readTime="7 min"
            />
          </motion.div>
          <motion.div variants={gridItemVariants}>
            <InsightCard
              imgSrc="/latestInsight/img3.png"
              title="Sustainable Manufacturing"
              description="Our commitment to environmental responsibility in production processes."
              date="Dec 5, 2024"
              readTime="4 min"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsights;
