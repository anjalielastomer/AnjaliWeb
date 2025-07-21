import Image from 'next/image';
import Link from 'next/link';

const Production4 = () => {
  return (
    <section
      className="relative min-h-[700px] md:min-h-[1000px] max-h-[1440px] bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: "url('/aboutus/production-facilities/production4-bg.jpg')" }}
      aria-label="Railway infrastructure company motto and mission"
    >
      {/* Wrapper for both cards */}
      <div className="flex flex-col md:block justify-center items-center h-full gap-6 px-4 sm:px-8">
        {/* Left Box - Manufacturing Practices */}
        <div className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
        md:absolute md:top-[10%] md:left-[10%] xl:left-[20%]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Manufacturing <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Practices</span>
          </h2>
          <p className="text-textblue text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            Our Manufacturing practice involves standardized procedures and quality controls to ensure consistent and efficient production of goods.
          </p>
        </div>

        {/* Right Box - Quality Assurance */}
        <div className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
        md:absolute md:bottom-[10%] md:right-[10%] mt-6 md:mt-0 xl:right-[20%]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textblue)] transition-colors duration-300 group-hover:text-white text-center font-raleway">
            Quality <span className="text-[var(--textorange)] transition-colors duration-300 group-hover:text-[var(--textblue)]">Assurance</span>
          </h2>
          <p className="text-textblue text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            We emphasize safety, precision, and compliance with industry regulations to maintain product integrity and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Production4;
