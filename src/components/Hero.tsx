import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex font-raleway font-bold min-h-fit overflow-x-hidden mb-20 pl-10 items-center">
      {/* Hero TextContent */}
      <div className="h-full flex flex-col justify-center p-4 w-[60%] ">
        <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textblue w-full">
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

        <div className="mt-10 flex items-center space-x-6 w-full">
          <button className="bg-textorange text-white px-14 py-3 rounded-2xl text-lg font-light transition-colors whitespace-nowrap">
  Explore Products
</button>
          <button className="border border-orange-500 text-textblue transition-colors px-14 py-3 rounded-2xl text-lg font-light flex items-center gap-2">
            <span className="text-textblue">Learn</span><span className="text-textorange"> more</span>
            <Image src='/arrow.svg' alt='arrow' width={27} height={27}/>
          </button>
        </div>
      </div>
      {/* Hero ImageContent */}
       <div className="w-full h-[700px] flex items-start justify-start overflow-hidden">
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