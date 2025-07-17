"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Production1 = () => {
    return (
        <div className="relative font-monte">
            {/* Sec1 */}
            <div className="flex flex-col justify-center lg:flex-row bg-white min-h-screen pt-20 relative z-10">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 p-4 px-6 sm:px-8 lg:px-2 flex flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#152f5d] leading-relaxed gap-10 mb-8">
                        State-of-Art<br />
                        <span className="mt-4 text-orange-500">Production</span> <br />
                        Facilities
                    </h1>

                    <div className="mt-8 lg:mt-16 flex flex-col gap-8 lg:gap-12 mb-12">
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
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
                    </div>
                </div>

                <div className="w-full lg:w-fit p-4 px-6 sm:px-8 lg:px-12 flex flex-col justify-center relative">
                    <div className="max-w-lg mx-auto lg:mx-0">
                        <div className="flex items-center justify-start gap-2 mb-6 font-raleway">
                            <h2 className="text-[#152f5d] font-semibold md:font-bold text-2xl sm:text-3xl lg:text-[36px]">Steel</h2>
                            <span className="text-orange-500 font-semibold md:font-bold text-2xl sm:text-3xl lg:text-[36px]">Fabrication</span>
                        </div>

                        <p className='text-base sm:text-lg lg:text-[20px] font-[500] font-monte md:mt-10'>Precision Steel Fabrication, <span className='text-orange-500'>Engineered</span> for Elastomer Excellence</p>

                        <p className="text-gray-700 text-base sm:text-lg leading-loose my-8 lg:my-20">
                            At the heart of every high-performance elastomer product lies a backbone of precision-engineered steel. Our in-house steel fabrication facility ensures strength, consistency, and quality you can rely on — every time.
                        </p>

                        <div className="mt-auto relative z-40 lg:-mb-32">
                            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-shadow duration-300">
                                <img
                                    src="/aboutus/production-facilities/production1.jpg"
                                    alt="Modern orange commuter train inside a spacious maintenance facility with advanced equipment and industrial lighting"
                                    className="object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sec2 */}
            <div className="bg-[#FFF8F2] min-h-screen px-6 sm:px-12 lg:px-24 font-monte text-[#1A202C] flex flex-col justify-end py-20 relative z-5 lg:-mt-32">
                <div className="lg:pt-40 flex flex-col gap-5">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h2 className="text-[#152f5d] font-semibold text-2xl sm:text-3xl lg:text-[36px] max-w-[1440px] mx-auto font-raleway">
                            Turnout and <span className="text-orange-500 font-semibold">Track Devices</span>
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Left Image Section */}
                        <div className="flex-shrink-0 w-full lg:w-1/2">
                            <div className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300">
                                <Image
                                    src="/aboutus/production-facilities/production2.jpg"
                                    alt="Railway tracks extending into the distance with green vegetation on both sides"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[300px] lg:h-[400px]"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Text Section */}
                        <div className="flex flex-col justify-start lg:w-1/2 space-y-8">
                            {/* Subtitle */}
                            <div>
                                <h3 className='text-base sm:text-lg lg:text-[20px] font-[600] text-[#152f5d] mb-6'>
                                    Engineering Mobility with <span className='text-orange-500'>Unmatched</span> Accuracy
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700">
                                <p className="text-justify">
                                    Our specialized facility for Turnout and Track Device manufacturing delivers high-performance railway components that meet global standards. Backed by advanced CNC machining, in-house forging, and precision welding capabilities, we design and manufacture turnout systems that ensure smooth switching, minimal wear, and long-term reliability in dynamic rail environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-col max-w-4xl ml-auto sm:flex-row items-center justify-between pt-8 space-y-8 sm:space-y-0 sm:space-x-8 text-[#595959]">
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
export default Production1;

function StatItem({
    number,
    unit,
    description,
}: {
    number: number;
    unit: string;
    description: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);
    const animatedNumber = useCountUp(number, isVisible, 2000);

    return (
        <div className="flex gap-4 sm:gap-8 items-start py-4" ref={ref}>
            <div className="text-orange-500 font-bold text-3xl sm:text-4xl lg:text-5xl w-20 sm:w-32  text-center">
                <div className="flex items-center justify-end gap-2">
                    {animatedNumber}
                    <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink" />
                </div>
                <div className="uppercase text-xs sm:text-sm font-semibold text-right text-gray-700 mt-2 mb-2">
                    {unit}
                </div>
            </div>
            <div className="border-l-2 border-gray-400 pl-4 sm:pl-6 flex-1">
                <p className="text-sm sm:text-base text-gray-700 text-justify leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

// Custom Hook for count-up animation
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

// Hook to detect when element is visible
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
