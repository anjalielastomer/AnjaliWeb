"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const AboutSec1 = () => {
  return (
    <div className="relative">
      {/* Sec1 */}
      <div className="flex flex-col justify-center md:flex-row bg-white min-h-screen pt-20 relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h1 className="text-4xl sm:text-7xl font-bold text-[#152f5d] leading-relaxed gap-10 mb-8">
            Unified in <br />
            <span className="mt-4 text-orange-500">Shaping</span> <br />
            Railway&apos;s <span className="mt-4 text-orange-500">Future</span>
          </h1>

          <div className="md:mt-16 flex flex-col md:flex-row gap-12 mb-12">
            <StatItem
              number={175}
              unit="KMS TRACKS"
              description="Our Projects include critical rail link connectivity projects and several metro projects. For linking mobility with daily lives."
            />
            <StatItem
              number={60}
              unit="BRIDGES"
              description="Our Projects brought forward mobility and connectivity connecting lands surfaces, hilly terrains, water bodies and cities."
            />
          </div>

          {/* 75 logo positioned to extend beyond section boundary */}
          <div className="mt-auto -mb-16 flex justify-center relative z-50">
            <Image
              src="/aboutus/75azadi.png"
              alt="Azadi Ka Amrit Mahotsav logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-fit p-4 flex flex-col justify-center relative">
          <div className="max-w-lg mx-auto pt-8 lg:pt-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-2xl md:text-4xl font-raleway">
              <h2 className="text-[#152f5d] font-bold">About</h2>
              <span className="text-orange-500 font-bold">Us</span>
            </div>

            <p className="text-gray-700 text-lg leading-loose my-10 lg:my-20">
              Over the previous 15 years, Anjali Elastomers, which was founded in 2009, has developed from a maker of rail components to a top supplier of entire railway infrastructure.
            </p>

            <div className="mt-auto -mb-32 relative z-40">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
                <img
                  src="/aboutus/aboutimg2.png"
                  alt="Modern orange commuter train"
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sec2 */}
      <div className="bg-[#FFF8F2] min-h-screen px-6 sm:px-12 lg:px-24 font-sans text-[#1A202C] flex flex-col justify-end py-20 relative z-5 -mt-32">
        <div className="pt-40">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-1/2 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
              <Image
                src="/aboutus/aboutimg1.png"
                alt="Modern train in plant"
                width={554}
                height={574}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Text and Stats Section */}
            <div className="flex flex-col justify-center space-y-12 lg:w-1/2 py-16">
              {/* Company Description */}
              <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                <p>
                  Our company has four manufacturing plants where it produces a variety of railroad track products. Our plants are found in the eastern portion of India, near Kolkata and Howrah.
                </p>
                <p>
                  Furthermore, the company has a pan-India presence as a result of a number of infrastructure projects that have been completed or are now underway across India.
                </p>
                <p>
                  We provide turnkey bridge projects that include both superstructure and substructure work. We are one of the largest railway businesses, having built over 60 important bridges and more than 175 kilometres of metro and mainline track.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col max-w-2xl ml-auto sm:flex-row items-center justify-between pt-8 space-y-8 sm:space-y-0 sm:space-x-8 text-[#595959]">
            <StatItem
              number={15}
              unit="YEARS OF EXPERIENCE"
              description="Our extensive history in manufacturing world-class items fosters security and safety as the first priority towards our GMP."
            />
            <StatItem
              number={4}
              unit="MANUFACTURING PLANTS"
              description="We operate across 4 plants in the India. Providing us the brand-width to accommodate bespoke and turn-key solutions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSec1;

function StatItem({
  number,
  unit,
  description,
}: {
  number: string | number;
  unit: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);
  const animatedNumber = useCountUp(Number(number), isVisible, 2000);

  return (
    <div className="flex gap-8 items-start py-4" ref={ref}>
      <div className="text-orange-500 font-bold text-5xl w-24 break-words text-center">
        <div className="flex items-baseline justify-center gap-2">
          {animatedNumber}
          <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink" />
        </div>
        <div className="uppercase text-sm font-semibold text-right text-gray-700 mt-2 mb-2 break-words">
          {unit}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 pl-6 flex-1">
        <p className="text-base text-gray-700 text-justify leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// 👇 Custom Hook for count-up animation
function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * target));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);

    return () => cancelAnimationFrame(step as any);
  }, [target, duration, start]);

  return count;
}

// 👇 Hook to detect when element is visible on screen
function useOnScreen(ref: React.RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
