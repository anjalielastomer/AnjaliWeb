import Image from 'next/image';
import Link from 'next/link';

const Production4 = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: "url('/aboutus/trackbg.png')" }}
      aria-label="Railway infrastructure company motto and mission"
    >
      {/* Wrapper for both cards */}
      <div className="flex flex-col md:block justify-center items-center h-full gap-6 px-4 sm:px-8">
        {/* Left Box - Manufacturing Practices */}
        <div className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
        md:absolute md:top-[10%] md:left-[10%]">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white text-center">
            Our <span className="text-orange-500 transition-colors duration-300 group-hover:text-black">Motto</span>
          </h2>
          <p className="text-slate-800 text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            To be a premier railway infrastructure provider, offering sustainable and creative solutions to all stakeholders.
          </p>
        </div>
    
        {/* Right Box - Quality Assurance */}
        <div className="group flex flex-col gap-6 md:gap-8 max-w-lg bg-white/20 backdrop-blur-md rounded-xl px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 shadow-lg transition duration-300 hover:bg-[#FB7602] hover:shadow-2xl
        md:absolute md:bottom-[10%] md:right-[10%] mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white text-center">
            Our <span className="text-orange-500 transition-colors duration-300 group-hover:text-black">Mission</span>
          </h2>
          <p className="text-slate-800 text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-white text-center">
            Customer satisfaction by timely delivery and effective planning.<br/>Reliable solutions based on quality and safety in all aspects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Production4;
