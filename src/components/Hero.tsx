import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex font-raleway font-bold min-h-fit overflow-x-hidden mb-20 pl-5 pt-20">
      {/* Hero TextContent */}
      <div className="h-full flex flex-col justify-center p-4 w-[80%] ml-5 mt-20">
        <h1 className="font-raleway text-7xl text-textblue w-full">
          Engineered{" "}
          <span className="text-textorange">for</span>{" "}
          <br />
          <span className="text-7xl text-textorange block my-7">
            the Future of
          </span>{" "}
          <span className="text-7xl  text-textorange block">
            Rail-
            <span className="text-textblue">Roads</span>
          </span>
        </h1>

        <div className="mt-10 flex items-center space-x-6 w-full">
          <button className="bg-textorange text-white px-7 py-3 rounded-2xl text-lg font-light transition-colors">
            Explore Products
          </button>
          <button className="border border-orange-500 text-textblue transition-colors px-7 py-3 rounded-2xl text-lg font-semibold flex items-center gap-2">
            <span className="text-textblue">Learn</span><span className="text-textorange"> more</span>
            <Image src='/arrow.svg' alt='arrow' width={27} height={27}/>
          </button>
        </div>
      </div>
      {/* Hero ImageContent */}
      <div className="w-[80%] flex items-end justify-end">
        <Image
          src="/train.png"
          alt="Modern train"
          className="w-full h-[700px] object-contain"
          width={1800}
          height={700}
        />
      </div>
    </section>
  );
};

export default Hero;