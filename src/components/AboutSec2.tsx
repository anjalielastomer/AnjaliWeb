import Image from 'next/image';

const AboutSec2 = () => {
  return (
    <div className="bg-[#FFF8F2] min-h-screen px-6 sm:px-12 lg:px-24 font-sans text-[#1A202C] flex flex-col justify-end py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 rounded-lg overflow-hidden  bg-white">
          <Image
            src="/aboutus/aboutimg1.png"
            alt="Modern train inside a large industrial train manufacturing plant with equipment and machinery"
            width={500}
            height={800}
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
  );
};

export default AboutSec2;






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
    <div className="flex gap-6 items-start">
      <div className="text-orange-500 font-bold text-4xl w-20 break-words  text-center">
        {number}
        <div className="uppercase text-xs font-semibold text-right text-gray-700 mb-1 break-words ">
          {unit}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 pl-4 flex-1">
        <p className="text-sm text-gray-700 text-justify">{description}</p>
      </div>
    </div>
  );
}


