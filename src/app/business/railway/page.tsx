import React from 'react'
import Image from 'next/image';
import VideoSection from '@/components/VideoSection';
const page = () => {
  return (
    <div
      className="min-h-screen pt-22"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <div className="flex justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap mb-20">
        <div className="min-h-auto flex flex-col   p-6 gap-8 md:gap-15 md:w-[60%] xl:pt-20 md:pt-0 ">
          <h1 className="font-raleway font-semibold  text-4xl sm:text-5xl md:text-6xl lg:text-[85.5px] text-textblue w-full text-center md:text-left">
            <span className="whitespace-nowrap text-nowrap mt-3 md:mt-5 lg:mt-8">
              Railway
            </span>
            <span className="text-textorange block mt-3 md:mt-5 lg:mt-8">
              Fastenings
              <span className="text-textblue mt-3 md:mt-5 lg:mt-8 my-6 sm:my-8 md:my-10">
                {" "}
                &
              </span>
            </span>
            <span className="text-textblue mt-3 md:mt-5 lg:mt-8 block">
              Sleeper
              <span className="text-textorange mt-3 md:mt-5 lg:mt-8 ">
                {" "}
                Systems
              </span>
            </span>
          </h1>

          <p className="text-sm text-center xl:text-left  md:text-base text-[#193055] md:w-[40rem] mb-4 md:mb-12 leading-loose font-monte">
            We are a market leader in railway track fasteners, track fittings,
            and fastenings, with over 15 years of experience. Our unique Zero
            Restraint Fastening System (ZRF) for steel bridge sleepers has been
            employed on major projects such as the Chenab Bridge and Bogibeel
            Bridge. We also provide high tensile bolts and nuts, rail screw
            spikes, ZRF for bridges, elastic rail clips, and rail pads. Our
            engineering experience enables the rapid and efficient creation of
            new and customized solutions.
          </p>
        </div>
        <div className="">
          <Image
            className="mt-2 lg:mt-45"
            src="/business/tunnel.svg"
            alt="Modern train"
            height={833}
            width={454}
            priority
          />
        </div>
      </div>

      <div className="bg-[#fff5ef] h-auto">
        <div className="flex justify-center xl:justify-between mx-auto max-w-[80%] flex-wrap  mt-0 md:mt-[-168px] pb-20">
          <div>
            <Image
              className="mt-2 w-full lg:mt-45"
              src="/business/track.svg"
              alt="Modern train"
              height={641}
              width={496}
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-4 md:px-10 mt-10 md:mt-16 lg:mt-24">
            <p className="text-sm text-center xl:text-left  md:text-base text-[#193055] md:w-[30rem] mb-4 md:mb-12 leading-loose font-monte">
              We manufacture steel track sleepers for a variety of purposes,
              including regular tracks, turnouts, and bridges. Ideal for railway
              lines over bridges when a durable ballast bed isn't possible, Our
              steel rail sleepers, comprised of steel channels or H-beams, are
              tough and frequently galvanized for life. H-beam track sleepers
              are built to withstand dynamic train loads and have canted bearing
              plates with elastic fastening mechanisms. Steel channel track
              sleepers made of welded sections can accept both running and guard
              rails, and rubber pads are used to mitigate shocks and vibrations.
              Our steel track sleepers are lightweight and cost-effective,
              providing a modern option for rail networks with medium to heavy
              axle weights.
            </p>
          </div>
        </div>
      </div>
      <VideoSection bgColor="bg-bgcolour" />
    </div>
  );
}

export default page
