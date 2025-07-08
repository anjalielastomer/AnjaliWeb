
import Image from 'next/image';
import React, { useEffect } from 'react';

const Production1 = () => {

    return (
        <div className="relative">
            {/* Sec1 */}
            <div className="flex flex-col justify-center md:flex-row bg-white min-h-screen pt-20 relative z-10">
                {/* Left Side */}
                <div className="w-full md:w-1/2 p-4 flex flex-col">
                    <h1 className="text-7xl font-bold text-[#152f5d] leading-relaxed gap-10 mb-8">
                        State-of-Art<br />
                        <span className="mt-4 text-orange-500">Production</span> <br />
                        Facilities
                    </h1>

                    <div className="mt-16 flex flex-col md:flex-row gap-12 mb-12">
                        <StatItem
                            number="175"
                            unit="KMS TRACKS"
                            description="Our Projects include critical rail link connectivity projects and several metro projects. For linking mobility with daily lives."

                        />
                        <StatItem
                            number="60"
                            unit="BRIDGES"
                            description="Our Projects brought forward mobility and connectivity connecting lands surfaces, hilly terrains, water bodies and cities."
                        />
                    </div>
                </div>

                <div className="w-fit p-4  flex flex-col justify-center relative">
                    <div className="max-w-lg mx-auto">
                        <div className="flex items-center justify-start gap-2 mb-6">
                            <h2 className="text-[#152f5d] font-semibold text-[36px]">Steel</h2>
                            <span className="text-orange-500 font-semibold text-[36px]">Fabrication</span>
                        </div>

                        <p className='text-[20px] font-[500]'>Precision Steel Fabrication, <span className='text-orange-500'>Engineered</span> for Elastomer Excellence</p>

                        <p className="text-gray-700 text-lg leading-loose my-20">
                            At the heart of every high-performance elastomer product lies a backbone of precision-engineered steel. Our in-house steel fabrication facility ensures strength, consistency, and quality you can rely on — every time.
                        </p>

                        <div className="mt-auto -mb-32 relative z-40">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="/aboutus/production-facilities/production1.jpg"
                                    alt="Modern orange commuter train inside a spacious maintenance facility with advanced equipment and industrial lighting"
                                    className="object-cover w-full h-[400px] lg:h-[500px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sec2 - Higher z-index and negative margin to overlap Sec1 */}
            <div className="bg-[#FFF8F2] min-h-screen px-6 sm:px-12 lg:px-24 font-sans text-[#1A202C] flex flex-col justify-end py-20 relative z-5 -mt-32">
                <div className="pt-40 flex flex-col gap-5">
                    <h2 className='text-[36px] font-[700] font-raleway'>Turnout and <span className='text-orange-500'>Track Devices</span></h2>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                        {/* Image Section */}
                        <div className="flex-shrink-0 w-full lg:w-1/2 rounded-lg overflow-hidden  bg-white">
                            <Image
                                src="/aboutus/production-facilities/production2.jpg"
                                alt="Modern train inside a large industrial train manufacturing plant with equipment and machinery"
                                width={554}
                                height={574}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>

                        {/* Text and Stats Section */}
                        <div className="flex flex-col justify-center space-y-12 lg:w-1/2  py-16 ">
                            {/* Company Description */}
                            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                                <p>
                                    Our company has four manufacturing plants where it produces a variety of railroad
                                    track products. Our plants are found in the eastern portion of India, near Kolkata and
                                    Howrah.
                                </p>
                                <p>
                                    Furthermore, the company has a pan-India presence as a result of a number of
                                    infrastructure projects that have been completed or are now underway across India.
                                </p>
                                <p>
                                    We provide turnkey bridge projects that include both superstructure and substructure
                                    work. We are one of the largest railway businesses, having built over 60 important
                                    bridges and more than 175 kilometres of metro and mainline track.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* Stats Section */}
                    <div className="flex flex-col max-w-2xl ml-auto sm:flex-row items-center justify-between border-t border-dashed border-[#E4C3A3] pt-8 space-y-8 sm:space-y-0 sm:space-x-8 text-[#595959]">
                        <StatItem
                            number="15"
                            unit="YEARS OF EXPERIENCE"
                            description="Our extensive history in manufacturing world-class items fosters security and safety as the first priority towards our GMP."
                        />
                        <StatItem
                            number="4"
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
    number: string | number;
    unit: string;
    description: string;
}) {
    return (
        <div className="flex gap-8 items-start py-4">
            <div className="text-orange-500 font-bold text-5xl w-24 break-words text-center">
                <div className="flex items-center justify-center gap-2">
                    {number}
                    <Image
                        src='/arrow.svg'
                        alt='arrow'
                        width={27}
                        height={27}
                        className="animate-flicker"
                    />
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


