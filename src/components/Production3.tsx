import Image from 'next/image';
import Link from 'next/link';

const Production3 = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 lg:py-20 bg-[#FFF4E6] relative justify-center overflow-hidden font-monte">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left side image */}
                <div className="w-full md:w-fit flex justify-center md:justify-start mb-6 sm:mb-8 md:mb-0">
                    <div className="w-[350px] h-[350px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
                        <Image
                            src="/aboutus/production-facilities/production4.jpg"
                            alt="Rail infrastructure tunnel showing railway track and illuminated walls"
                            width={500}
                            height={500}
                            className="object-cover object-center w-full h-full"
                            priority
                        />
                    </div>
                </div>

                {/* Right side content */}
                <div className="w-full md:w-1/2 md:pl-10 lg:pl-16 text-textblue flex flex-col gap-6 sm:gap-8">
                    <h2 className="text-[#152f5d] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-raleway">
                        Rail Fastening and Sleeper <span className="text-textorange">Manufacturing</span>
                    </h2>

                    <p className="text-base sm:text-lg lg:text-[20px] text-gray-700">
                        Where Strength Meets Precision in <span className='text-textorange'>Rail</span> Infrastructure
                    </p>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-2xl">
                            Our fully integrated manufacturing facility produces high-performance rail fastening systems and concrete sleepers, forming the structural core of reliable permanent way solutions. Designed for heavy-axle loads, high-speed trains, and complex operating environments, our products meet Indian and international railway standards.
                        </p>

                        <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-2xl">
                            From raw material to finished assembly, we combine advanced engineering, automated production lines, and strict quality control — ensuring every sleeper and fastening component exceeds expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Production3;
