import Image from 'next/image';

const AboutSec1 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen  pt-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <h1 className="text-6xl font-bold text-[#152f5d] leading-relaxed gap-10">
          Unified in <br />
          <span className="mt-4 text-orange-500">Shaping</span> <br />
          Railway&apos;s <span className="mt-4 text-orange-500">Future</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row gap-8">
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

        <div className="mt-16 flex justify-center">
          <Image
            src="/aboutus/75azadi.png"
            alt="Azadi Ka Amrit Mahotsav logo featuring the Indian tricolor and stylized text"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-start gap-2 mb-6">
            <h2 className="text-[#152f5d] font-semibold text-xl">About</h2>
            <span className="text-orange-500 font-semibold text-xl">Us</span>
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-8">
            Over the previous 15 years, Anjali Elastomers, which was founded in 2009, has developed from a maker of rail components to a top supplier of entire railway infrastructure.
          </p>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/aboutus/aboutimg2.png"
              alt="Modern orange commuter train inside a spacious maintenance facility with advanced equipment and industrial lighting"
              className="object-cover w-full h-[500px]"
            />
          </div>
        </div>

        {/* Subtle diagonal line decoration on right side */}
        {/* <svg
        className="hidden md:block absolute top-20 right-8 h-48 w-48 stroke-orange-200 stroke-[1]"
        fill="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="0" y1="100" x2="100" y2="0" />
        <line x1="10" y1="100" x2="110" y2="0" />
        <line x1="20" y1="100" x2="120" y2="0" />
      </svg> */}
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


