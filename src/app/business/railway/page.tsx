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

      <div className="flex mx-auto w-[90%] gap-10 flex-wrap mt-10">
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl md:text-[32px] font-[500] text-[#193055] mb-4 font-monte text-center md:text-left leading-relaxed">
            Innovations in{" "}
            <span className="text-textorange font-bold">Rail Fastening</span>{" "}
            <br />
            solutions
          </h1>
          <div>
            <p className="text-sm text-center xl:text-left font-[500]  md:text-base text-[#193055] md:w-[30rem] mb-4 md:mb-7 leading-loose font-monte">
              We've been a prominent participant in railway track fasteners for
              15 years, constantly pushing the boundaries of innovation. We are
              also a market leader in bridge fastening systems in India. Our
              innovative Zero Restraint Fastening System (ZRF) for steel bridge
              sleepers overcomes the constraints of conventional techniques.
              This ingenious solution has been employed in noteworthy projects
              such as the Chenab Bridge, the world's tallest rail bridge, and
              the Bogibeel Bridge in Northeast India.
            </p>
            <div className="space-y-2 mb-4 md:mb-7 w-[80%] md:w-auto mx-auto py-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-textblue text-lg">
                  High Tensile Bolts & Nuts
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-textblue text-lg">Rail Screw Spikes</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-textblue text-lg">
                  Zero Restraint Fastening System for Bridges
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-textblue text-lg">
                  Elastic Rail Clips
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-textorange rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-textblue text-lg">Rail Pads</span>
              </div>

              
            </div>
            <p className="text-sm text-center xl:text-left  md:text-base text-[#193055] md:w-[30rem] mb-4 md:mb-12 leading-loose font-monte">
              With a focus on quality and innovation, we are a trusted name in
              railway track fasteners, track fittings, and fastenings.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center px-10 gap-4 p-4 mb-11">
            <button className="px-6 py-2 rounded-[16px] font-medium transition-colors bg-textorange text-white">
              Fastenings
            </button>

            <button className="bg-white border border-textorange text-textorange hover:bg-orange-50 px-6 py-2 rounded-[16px] font-medium transition-colors">
              Steel Sleepers
            </button>
          </div>
          <div>
            <Image
              src={"/business/railfastening.svg"}
              width={554}
              height={721}
              alt="Rail"
            />
          </div>
        </div>
      </div>

      <VideoSection bgColor="bg-bgcolour" />
    </div>
  );
}

export default page
