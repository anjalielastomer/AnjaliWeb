import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col  md:flex-row font-raleway font-bold md:min-h-fit md:overflow-x-hidden pl-0 md:pl-10 items-center">
      {/* Hero TextContent */}
      <div className="h-full flex flex-col items-center justify-center p-4 md:w-[60%] pt-20 md:pt-0">
        <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textblue w-full text-center md:text-left">
          <span className="whitespace-nowrap text-nowrap">
            Engineered <span className="text-textorange">for</span>
          </span>
          <br />
          <span className="text-textorange block my-6 sm:my-8 md:my-10">
            the Future of
          </span>
          <span className="text-textorange block">
            Rail-
            <span className="text-textblue">Roads</span>
          </span>
        </h1>
               <div className="mt-10 flex flex-col md:flex-row items-center w-full gap-4 md:gap-6">
          <button className="bg-textorange text-white px-14 py-3 rounded-2xl text-lg font-light transition-colors whitespace-nowrap  hover:font-normal">
            Explore Products
          </button>
          <button className="group border border-orange-500 text-textblue transition-colors px-14 py-3 rounded-2xl text-lg font-light flex items-center gap-2 hover:font-normal">
            <span className="text-textblue">Learn</span>
            <span className="text-textorange"> more</span>
            <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden"/>
            <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block"/>
          </button>
        </div>
      </div>
      {/* Hero ImageContent */}
      <div className="w-full h-[700px] flex items-start justify-start overflow-hidden -mt-36 md:mt-0 ">
        <Image
          src="/train.png"
          alt="Modern train"
          className="w-full h-full object-cover object-left"
          width={1200}
          height={700}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
