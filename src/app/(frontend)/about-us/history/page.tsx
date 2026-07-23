import Image from "next/image";
import Head from "next/head";
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <>
      <Head>
        <title className="font-raleway text-3xl">Coming Soon | Anjali Elastomer</title>
      </Head>
      <div className="bg-[var(--bgcolour)] min-h-screen flex flex-col justify-center items-center px-4 text-center font-sans relative overflow-hidden">


        {/* Rocket Animation */}
        <div className="w-[180px] h-[180px] animate-float mb-6">
          <Image
            src="/career/div (1).png"
            alt="Rocket"
            width={180}
            height={180}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-textblue mb-4">
          Coming <span className="text-textorange">Soon</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-xl font-monte">
          Get ready for something innovative. We're working hard to engineer the future of rail-roads!
        </p>

        {/* Buttons
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[var(--textorange)] text-white px-6 py-3 rounded-full transition">
            Explore Products
          </button>
          <button className="border border-orange-500 text-textorange hover:bg-orange-100 px-6 py-3 rounded-full transition">
            Learn More →
          </button>
        </div> */}

      </div>
    </>
  );
};

export default ComingSoon;
