import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="min-h-screen pt-22"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <div className="flex justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap mb-20">
        <div className="min-h-auto flex flex-col   p-6 gap-8 md:gap-15 md:w-[60%] xl:pt-20 md:pt-0 ">
          <h1 className="font-raleway font-semibold  text-4xl sm:text-5xl md:text-6xl lg:text-[85.5px] text-textblue w-full text-center md:text-left">
            <span className="text-textblue block mt-3 md:mt-5 lg:mt-8">
              Turnout
              <span className="text-textorange   mt-3 md:mt-5 lg:mt-8 my-6 sm:my-8 md:my-10">
                {" "}
                &{" "}
              </span>
              <span className="whitespace-nowrap text-textblue text-nowrap mt-3 md:mt-5 lg:mt-8">
                Track
              </span>
            </span>
            <span className="text-textblue mt-3 md:mt-5 lg:mt-8 block">
              Device
              <span className="text-textorange mt-3 md:mt-5 lg:mt-8 ">
                {" "}
                Systems
              </span>
            </span>
          </h1>

          <p className="text-sm text-center xl:text-left  md:text-base text-gray-700 md:w-[40rem] mb-4 md:mb-12 leading-loose">
            We are one of India's leading Turnout manufacturers, specializing in
            high-quality turnouts, rail expansion joints, and glued insulated
            joints. With more than 15 years of experience and cutting-edge
            production facilities in West Bengal. We guarantee that our railway
            infrastructure systems are of the greatest quality and most
            reliable, thanks to modern materials and cutting-edge technologies.
          </p>
        </div>
        <div className="">
          <Image
            className="mt-2 lg:mt-45"
            src="/business/turnout.svg"
            alt="Modern train"
            height={833}
            width={454}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
