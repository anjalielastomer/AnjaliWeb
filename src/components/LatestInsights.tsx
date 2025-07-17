import Image from "next/image";

interface InsightCardProps {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

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
        <h3 className="text-orange-500 font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow leading-relaxed">{description}</p>
        <p className="flex justify-between mt-4 text-gray-500 text-sm">
          {date} &bull; {readTime} read
          <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink" />
        </p>
      </div>
    </div>
  );
};

const LatestInsights: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-textblue mb-8 text-center font-raleway">
          Latest <span className="text-textorange">Insights</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-center text-sm sm:text-base text-slate-800 font-monte">
          Stay updated with industry trends and innovations
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <InsightCard
            imgSrc="/latestInsight/img1.png"
            title="Future of Railway Materials"
            description="Exploring next-generation elastomeric solutions for sustainable transportation."
            date="Dec 15, 2023"
            readTime="5 min"
          />
          <InsightCard
            imgSrc="/latestInsight/img2.png"
            title="High-Speed Rail Innovations"
            description="How advanced materials are enabling faster and safer rail travel."
            date="Dec 10, 2023"
            readTime="7 min"
          />
          <InsightCard
            imgSrc="/latestInsight/img3.png"
            title="Sustainable Manufacturing"
            description="Our commitment to environmental responsibility in production processes."
            date="Dec 5, 2024"
            readTime="4 min"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

