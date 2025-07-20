import Image from 'next/image';
import Link from 'next/link';

export default function AboutSec4() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start mx-auto px-6 py-12 bg-[#FFF4E6] relative justify-center overflow-hidden text-textblue font-monte">
      {/* Left side image */}
      <div className="w-full md:w-fit flex justify-center md:justify-start mb-6 sm:mb-8 md:mb-0">
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
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 md:pl-16 text-gray-900">
        <h2 className="text-3xl font-raleway sm:text-4xl font-semibold mb-10 text-textblue">
          Elevated{' '}
          <span className="text-textorange">
            Technology
          </span>
        </h2>

        <p className="text-lg leading-relaxed mb-6 max-w-xl">
          Our company, a pioneer in rail infrastructure, specializes in innovative Turnkey bridge solutions. We develop ballastless tracks using cutting-edge innovation to provide improved stability, fewer maintenance, and an extended total track lifespan.
        </p>

        <p className="text-lg leading-relaxed mb-6 max-w-xl">
          The development of ballastless track systems has found widespread use in India's rail infrastructure, ushering in a new era of efficiency and durability.
        </p>

        <p className="text-lg leading-relaxed mb-8 max-w-xl">
          Our competence in ballastless track construction continues to set new benchmarks and contribute to the evolution of rail systems. As India modernizes its railroads, the use of ballastless track technology demonstrates the country's dedication to innovative solutions, creating a resilient and sustainable transportation network.
        </p>

        <Link href={"#"} className="group text-textblue transition-colors pr-7 py-3 text-3xl font-light flex items-center gap-2 font-raleway">
          <span>
            <span className="text-[#FB7602] group-hover:text-[#193055] group-hover:font-medium transition-all duration-300">Learn</span>
            <span className="text-[#193055] group-hover:text-[#FB7602] group-hover:font-medium transition-all duration-300"> more</span>
          </span>
          <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
          <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
        </Link>
      </div>

      {/* Decorative Pattern Overlay */}
      {/* <svg
        className="hidden md:block absolute top-0 right-0 mt-12 mr-12 w-48 h-48 text-orange-100"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path d="M10 10l80 80M90 10L10 90" strokeDasharray="5 10" />
      </svg> */}
    </section>
  );
}

