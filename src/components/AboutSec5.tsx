import Image from "next/image";
import Link from "next/link";

export default function AboutSec5() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left Text Content */}
      <div className="flex-1 max-w-xl font-raleway">
        <h2 className="text-4xl md:text-6xl font-bold text-textblue leading-tight md:mb-6 text-center md:text-left">
          Remarkable
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between md:mb-10">
          <h3 className="text-4xl md:text-6xl font-bold text-orange-600">Projects</h3>

          <Link href={"#"} className="group text-textblue transition-colors py-3 text-3xl font-light flex items-center gap-2 font-raleway">
            <span>
              <span className="text-[#FB7602] group-hover:text-[#193055] group-hover:font-medium transition-all duration-300">Explore</span>
              <span className="text-[#193055] group-hover:text-[#FB7602] group-hover:font-medium transition-all duration-300"> All</span>
            </span>
            <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
            <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
          </Link>
        </div>
        <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
          <p>
            The Chenab Rail Bridge, which spans the Chenab River at a
            spectacular elevation of 359 meters, is the world&apos;s tallest
            steel arch rail bridge, measuring <b>1315 meters</b> in length.
          </p>
          <p>
            This unusual arch bridge is an engineering wonder and a vital
            component of the USBRL Project in Jammu and Kashmir, embodying the
            drive of Atmanirbhar Bharat.
          </p>
          <p>
            We built and installed 2400 sets of H-Beam Sleepers with elastic
            fastening systems for the world&apos;s tallest steel arch rail
            bridge. Due to the intricate bridge construction, Anjali Elastomer
            developed and manufactured each sleeper with a unique shape to
            accommodate the track alignment.
          </p>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="md:flex-1 max-w-lg w-full rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
        <Image
          src="/aboutus/bridge.png"
          alt="View of Chenab Rail Bridge, a tall steel arch bridge spanning dramatic mist-covered mountains and valleys"
          width={520}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}

