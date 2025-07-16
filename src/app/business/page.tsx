import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    <div
      className="min-h-screen pt-22"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <div className="flex justify-center xl:justify-between mx-auto max-w-[90%] flex-wrap mb-20">
        <div className="min-h-auto flex flex-col   p-6 gap-15 md:w-[60%] xl:pt-20 md:pt-0 ">
          <h1 className="font-raleway font-semibold  text-4xl sm:text-5xl md:text-6xl lg:text-[85.5px] text-textblue w-full text-center md:text-left">
            <span className="whitespace-nowrap text-nowrap mt-3 md:mt-5 lg:mt-8">
              Pandrol
            </span>
            <span className="text-textorange block mt-3 md:mt-5 lg:mt-8">
              Fastenings
              <span className="text-textblue mt-3 md:mt-5 lg:mt-8 my-6 sm:my-8 md:my-10">
                {" "}
                &
              </span>
            </span>
            <span className="text-textblue mt-3 md:mt-5 lg:mt-8 block">
              Track
              <span className="text-textorange mt-3 md:mt-5 lg:mt-8 "> Solutions</span>
            </span>
          </h1>

          <p className="text-sm  md:text-base text-gray-700 md:w-[40rem] mb-12 leading-loose">
            We have launched an exclusive joint venture with Pandrol Limited,
            the world's leader in high-speed elastic rail fastening and noise
            vibration solutions. This company manufactures Pandrol Fasteners in
            India. We are committed to providing our customers with high-quality
            solutions, which includes introducing one of Pandrol's most
            innovative elastic fastening systems to the Indian market. We are
            dedicated to providing excellence to our consumers
          </p>
        </div>
        <div className=''>
          <Image
          className='mt-45'
            src="/business/train.svg"
            alt="Modern train"
            height={833}
            width={454}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default page
