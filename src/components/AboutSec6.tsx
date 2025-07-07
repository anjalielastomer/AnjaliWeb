import Image from "next/image";
import Link from "next/link";

export default function AboutSec6() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat px-6 md:px-16 lg:px-24 text-center"
      style={{ backgroundImage: "url('/aboutus/trackbg.png')" }}
      aria-label="Railway infrastructure company motto and mission"
    >
      {/* Motto - Top Left */}
      <div className="absolute top-10 left-6 md:top-16 md:left-16 max-w-md bg-white bg-opacity-20 backdrop-blur-md rounded-xl px-6 py-14 shadow-lg ">
        <h2 className="text-2xl font-semibold mb-3 text-slate-900">
          Our <span className="text-orange-500">Motto</span>
        </h2>
        <p className="text-slate-800 text-base md:text-lg leading-relaxed">
          To be a premier railway infrastructure provider,<br />
          offering sustainable and creative solutions to all stakeholders.
        </p>
      </div>

      {/* Mission - Bottom Right */}
      <div className="absolute bottom-10 right-6 md:bottom-16 md:right-16 max-w-md bg-white bg-opacity-20 backdrop-blur-md rounded-xl px-6 py-14 shadow-lg ">
        <h2 className="text-2xl font-semibold mb-3 text-slate-900">
          Our <span className="text-orange-500">Mission</span>
        </h2>
        <p className="text-slate-800 text-base md:text-lg leading-relaxed">
          Customer satisfaction by timely delivery and effective planning.<br />
          Reliable solutions based on quality and safety in all aspects.
        </p>
      </div>
    </section>
  );
}
