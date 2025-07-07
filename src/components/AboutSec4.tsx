import Image from 'next/image';
import Link from 'next/link';

export default function AboutSec4() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start mx-auto px-6 py-12 bg-[#FFF4E6] relative justify-center overflow-hidden">
      {/* Left side image */}
      <div className="w-fit flex justify-center md:justify-start mb-8 md:mb-0">
        <div className="w-[400px] h-[400px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/aboutus/tunnel.png"
            alt="Rail infrastructure tunnel showing railway track and illuminated walls"
            width={500}
            height={500}
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 md:pl-16 text-gray-900">
        <h2 className="text-3xl font-raleway sm:text-4xl font-semibold mb-20 text-textblue">
          Elevated{' '}
          <span className="text-orange-500">
            Technology
          </span>
        </h2>

        <p className="text-base leading-relaxed mb-6 max-w-xl">
          Our company, a pioneer in rail infrastructure, specializes in innovative Turnkey bridge solutions. We develop ballastless tracks using cutting-edge innovation to provide improved stability, fewer maintenance, and an extended total track lifespan.
        </p>

        <p className="text-base leading-relaxed mb-6 max-w-xl">
          The development of ballastless track systems has found widespread use in India's rail infrastructure, ushering in a new era of efficiency and durability.
        </p>

        <p className="text-base leading-relaxed mb-8 max-w-xl">
          Our competence in ballastless track construction continues to set new benchmarks and contribute to the evolution of rail systems. As India modernizes its railroads, the use of ballastless track technology demonstrates the country's dedication to innovative solutions, creating a resilient and sustainable transportation network.
        </p>

        <Link href={"#"} className="text-textblue transition-colors pr-7 py-3 text-3xl font-light flex items-center gap-2 font-raleway">
          <span className="text-textorange">Learn</span><span className="text-textblue"> more</span>
          <Image 
            src='/arrow.svg' 
            alt='arrow' 
            width={27} 
            height={27} 
            className="animate-flicker"
          />
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

