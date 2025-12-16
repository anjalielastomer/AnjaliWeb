"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { motion, Variants } from "framer-motion";
import { useArticles } from "@/hooks/useArticles"; // Import the data-fetching hook
import { TransformedArticle } from "@/types/article"; // Import the article type

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
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const gridItemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// InsightCard component
const InsightCard: React.FC<InsightCardProps> = ({
  imgSrc,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-[0_0_50px_rgba(0,165,255,0.2)] hover:shadow-[0_0_50px_rgba(28,65,153,0.4)] transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-textorange font-semibold text-xl mb-2">{title}</h3>
        <p className="text-textblue flex-grow leading-relaxed line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4 text-textblue text-sm">
          <span>{date} &bull; {readTime}</span>
          <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink" />
        </div>
      </div>
    </div>
  );
};


const LatestInsights: React.FC = () => {
  const { data: articles, isLoading, isError } = useArticles();

  return (
    <section className="w-full bg-[var(--bgcolour)] font-monte">
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
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {isLoading && <p className="text-textblue text-center">Loading insights...</p>}
          {isError && <p className="text-red-500 text-center">Could not fetch insights.</p>}

          {articles?.slice(0, 3).map((article: TransformedArticle) => (
            <motion.div
              key={article.id}
              variants={gridItemVariants}
              className="w-full sm:w-96" // Full width on mobile, 384px on larger screens
            >
              <Link href={`/article/${article.id}`} className="block h-full">
                <InsightCard
                  imgSrc={article.image}
                  title={article.title}
                  description={article.short_description}
                  date={article.date}
                  readTime={article.time}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsights;