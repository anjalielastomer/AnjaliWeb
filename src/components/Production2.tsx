import Image from 'next/image';

const Production2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Content */}
      <div className="md:flex-1 max-w-xl">
        <h2 className="text-[#152f5d] font-semibold text-2xl sm:text-3xl lg:text-[36px]">
          Pandrol <span className="text-orange-500">Fastening</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-[20px] text-gray-700 mt-4">
          Precision Engineering for <span className="text-orange-500">Permanent</span> Way Solutions
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-loose mt-6">
          Our advanced facility specializes in the manufacturing of rail fastening systems compatible with Pandrol-type technologies, ensuring high clamping force, electrical insulation, and long-term track stability. Designed for mainline, metro, and industrial rail applications, our systems integrate seamlessly with concrete and wooden sleepers, providing high fatigue resistance and minimal maintenance over life cycles.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-loose mt-6">
          We ensure every fastening component is made with precision metallurgy and tight tolerances — for consistent performance on every kilometer of track.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-fit flex justify-center md:justify-start mb-6 sm:mb-8 md:mb-0">
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
      </div>
    </section>
  );
};

export default Production2;
