"use client"
import Image from "next/image";
import { useState } from "react";

const tabs = [
  { id: "bridge", label: "Bridge Projects" },
  { id: "track", label: "Track Projects" },
  { id: "plants", label: "Plants" },
];

export default function IndiaBusinessSection() {
  const [activeTab, setActiveTab] = useState("bridge");

  return (
    <section className="w-full min-h-fit py-20 flex justify-center items-center bg-white">
      <div className="w-full max-w-7xl flex flex-col mx-auto">
      <nav className="flex gap-4 mb-12 px-5 md:px-0 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-1 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors duration-300
              ${activeTab === tab.id
                ? "bg-orange-500 text-white"
                : "border border-orange-500 text-orange-500 hover:bg-orange-50"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left - India Map */}
        <div className="flex-shrink-0 flex justify-center items-center">
  <div className="w-[320px] sm:w-[400px] lg:w-[480px]">
    <Image
      src={
        activeTab === "bridge"
          ? "/map1.svg"
          : activeTab === "track"
          ? "/map2.svg"
          : "/map3.svg"
      }
      alt="Map of India highlighting selected states with icons representing business locations"
      width={480}
      height={600}
      className="object-contain"
      priority
    />
  </div>
</div>

        {/* Right - Content */}
        <div className="flex flex-col px-5 md:px-0 justify-start flex-1">
          <h2 className="text-3xl font-semibold font-raleway text-textblue mb-3">
            <span>Busin</span>
            <span className="text-orange-500">ess</span>
          </h2>
          <h3 className="text-xl font-raleway text-textblue mb-6">
            Building Pan-India Presence
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-12">
            We here at Anjali Elastomers Ltd. believe in the power of innovation to change the way we interact, connect, and prosper.
            Since our beginnings, we have been at the vanguard of crafting the future of transportation infrastructure, motivated by a rent-free pursuit of excellence and a dedication to create value for all stakeholders.
          </p>

          {/* Stats Grid */}
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
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
            <StatItem
              number="15"
              unit="YEARS OF EXPERIENCE"
              description="Our extensive history in manufacturing world-class items fosters security and safety as the first priority towards our GMP."
            />
            <StatItem
              number="4"
              unit="MANUFACTURING PLANTS"
              description="We operate across 4 plants in the India. Providing us the brand-width to accommodate bespoke and turn-key solutions."
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

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
    <div className="flex gap-2 items-start">
      <div className="text-orange-500 font-bold text-4xl w-28 break-words  text-center">
        {number}
        <div className="uppercase text-xs font-semibold text-gray-700 mb-1 break-words ">
          {unit}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 pl-4 flex-1">
        <p className="text-sm text-gray-700 text-justify">{description}</p>
      </div>
    </div>
  );
}

