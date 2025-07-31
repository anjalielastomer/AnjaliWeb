"use client";
import Image from "next/image";
import { useState } from "react";


interface VideoSectionProps {
  bgColor?: string; // optional, defaults to white
}

const VideoSection: React.FC<VideoSectionProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section data-aos="zoom-in-up" className={`var(--bgcolour) py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-raleway text-center text-textblue">
        See Us in <span className="text-[var(--textorange)]">Action</span>
      </h2>
      <p className="mt-3 max-w-xl text-center text-textblue text-base sm:text-lg tracking-wide font-monte md:text-nowrap text-wrap">
        Discover how we're shaping the future of railway infrastructure
      </p>

      <div className="mt-10 relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {!isPlaying ? (
          <>
            <Image
              src="/videoimg.png"
              alt="Railway construction site showing multiple cranes and train engines during the day with clear blue sky"
              width={1280}
              height={720}
              className="w-full h-auto rounded-lg object-cover brightness-75"
              priority
            />
            <button
              aria-label="Play video"
              onClick={handlePlayClick}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--textorange)] hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400 rounded-full p-5 shadow-lg transition cursor-pointer"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </>
        ) : (
          <div className="relative pt-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/o04wlZ50O5c?si=CjbPgEE9f7ZaVICJ"
              title="Example Railway Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
