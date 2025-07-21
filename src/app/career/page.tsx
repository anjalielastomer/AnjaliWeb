"use client"
import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Innovation",
    highlight: "Driven",
    description:
      "Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.",
    image: "/career/career1.png",
  },
  {
    title: "Career",
    highlight: "Growth",
    description:
      "Advance your career with comprehensive training programs, mentorship opportunities, and clear advancement paths.",
    image: "/career/career1.png",
  },
  {
    title: "Team",
    highlight: "Excellence",
    description:
      "Collaborate with industry experts and passionate professionals in a supportive, inclusive work environment.",
    image: "/career/career1.png",
  },
  {
    title: "Comprehensive",
    highlight: "Benefits",
    description:
      "Enjoy competitive salaries, health insurance, retirement plans, and performance bonuses.",
    image: "/career/career1.png",
  },
  {
    title: "Work-Life",
    highlight: "Balance",
    description:
      "Flexible schedules, remote work options, and generous PTO to maintain a healthy work-life balance.",
    image: "/career/career1.png",
  },
  {
    title: "Global",
    highlight: "Impact",
    description:
      "Contribute to projects that connect cities, countries, and continents, making a real difference in the world.",
    image: "/career/career1.png",
  },
];

const page = () => {
  return (
    <div className="w-full min-h-screen mt-24 font-monte">
        {/* Section 1*/}
      <div className="w-full min-h-fit flex justify-center py-10 px-4">
  <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full">
    {/* Left Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="font-raleway font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: 'var(--textblue)' }}>
        <span className="whitespace-nowrap">Interested in</span>
        <br />
        <span className="my-6 sm:my-8 md:my-10 flex flex-wrap justify-center md:justify-start gap-2" style={{ color: 'var(--textorange)' }}>
          Joining <span style={{ color: 'var(--textblue)' }}>our</span>
        </span>
        <span className="flex flex-wrap justify-center md:justify-start gap-2" style={{ color: 'var(--textblue)' }}>
          Dynamic <span style={{ color: 'var(--textorange)' }}>Team</span>?
        </span>
      </h1>

      <div className="flex flex-col mt-10 sm:mt-16 md:mt-20 gap-5">
        <span className="font-monte font-medium text-lg sm:text-xl md:text-2xl" style={{ color: 'var(--textblue)' }}>
          Looking for growth opportunities?
        </span>
        <span className="font-monte font-medium text-lg sm:text-xl md:text-2xl flex flex-wrap justify-center md:justify-start gap-2" style={{ color: 'var(--textblue)' }}>
          Drop us your <span style={{ color: 'var(--textorange)' }}>CV</span> at
          <span style={{ color: 'var(--textorange)' }}>careers@anjalielastomer.in</span>
        </span>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
      <span className="font-monte font-medium text-base sm:text-lg text-center md:text-left max-w-2xl" style={{ color: 'var(--textblue)' }}>
        Join our team of innovators creating cutting-edge rail-road solutions for the future of Logistics & Transportation Industry; thereby leveraging its full potential.
      </span>
      <Image
        src="/career.svg"
        alt="Career Opportunities"
        width={500}
        height={500}
        className="w-full max-w-[500px] h-auto rounded-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
        loading="eager"
      />
    </div>
  </div>
</div>

        {/* Section 2 */}
        <div className="w-full min-h-fit flex flex-col items-center gap-10 py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bgcolour)' }}>
  <span className="font-bold text-3xl md:text-4xl font-raleway text-center" style={{ color: 'var(--textblue)' }}>
    Why Join <span style={{ color: 'var(--textorange)' }}>Our Company</span>?
  </span>

  <span className="font-monte font-medium text-sm sm:text-base md:text-lg mt-3 max-w-4xl text-center" style={{ color: 'var(--textblue)' }}>
    We&apos;re not just building railway infrastructure — we&apos;re building careers, communities, and the future of Rail-Road transportation services and systems.
  </span>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7 mt-8 w-full max-w-6xl">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="w-full flex flex-col items-center text-center max-w-sm my-3 md:mx-7 mx-3"
      >
        <Image
          src={card.image}
          alt={card.title}
          width={80}
          height={80}
          className="mb-4"
          loading="lazy"
        />
        <span className="font-bold text-lg" style={{ color: 'var(--textblue)' }}>
          {card.title.split(" ")[0]}{" "}
          <span style={{ color: 'var(--textorange)' }}>{card.highlight}</span>
        </span>
        <span className="font-monte font-medium text-sm mt-2" style={{ color: 'var(--textblue)' }}>
          {card.description}
        </span>
      </div>
    ))}
  </div>
</div>

        {/* Section 3 */}
        <div className="w-full min-h-fit flex flex-col-reverse md:flex-row justify-center pt-20 gap-10 md:px-0 px-7">
            <div className="flex flex-col items-center gap-10">
               
                
                <Image src="/career/75azadi.svg" alt="Career Opportunities" width={286} height={163} className="mb-5" loading="lazy"/>
                <Image src="/career/manwoman.svg" alt="Career Opportunities" width={500} height={867} className="-mb-2" loading='lazy'/>
            </div>
             {/* Submission Form */}
                <div className="w-full h-fit max-w-md mb-10 rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]" style={{ backgroundColor: 'var(--bgwhite)' }}>
                  <div className="w-full flex items-center justify-center font-raleway font-medium text-2xl shadow-xl py-5 ">
                    <span className="text-lg mr-2" style={{ color: 'var(--textorange)' }}>Join Our</span>
                    <span className="text-lg mr-2" style={{ color: 'var(--textorange)' }}>Team Of</span>
                    <span className="text-xl" style={{ color: 'var(--textblue)' }}>350+</span>
                    <span className="text-lg ml-2" style={{ color: 'var(--textorange)' }}>Members</span>
                  </div>
                  <form className="flex flex-col gap-10 p-7">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--textcolour)' }}>Name*</label>
                      <input
                        type="text"
                        placeholder=""
                        required
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bgwhite)',
                          borderColor: '#E6E6E6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--textcolour)' }}>Contact No.*</label>
                      <input
                        type="text"
                        placeholder=""
                        required
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bgwhite)',
                          borderColor: '#E6E6E6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--textcolour)' }}>Email Address*</label>
                      <input
                        type="email"
                        placeholder=""
                        required
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bgwhite)',
                          borderColor: '#E6E6E6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--textcolour)' }}>Position Applying For</label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bgwhite)',
                          borderColor: '#E6E6E6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--textcolour)' }}>
                        Upload your CV (in PDF)*
                      </label>
                      <div 
                        className="w-full h-20 border border-[#E6E6E6] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer relative transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bgwhite)',
                          borderColor: '#E6E6E6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                          e.currentTarget.style.borderColor = 'var(--textorange)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                          e.currentTarget.style.borderColor = '#E6E6E6';
                        }}
                      >
                        <input
                          type="file"
                          accept="application/pdf"
                          required
                          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                        />
                        <svg className="mx-auto mb-1" width="24" height="24" fill="none" stroke="#D1D5DB" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 16V4M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="4" y="20" width="16" height="1" rx="0.5" fill="#D1D5DB"/>
                        </svg>
                        <span className="text-gray-400 text-xs">Drag your CV here</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full border py-2 rounded-full transition mt-2 text-base"
                      style={{ 
                        borderColor: 'var(--textorange)',
                        color: 'var(--textorange)',
                        backgroundColor: 'var(--bgwhite)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--textorange)';
                        e.currentTarget.style.color = 'var(--bgwhite)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bgwhite)';
                        e.currentTarget.style.color = 'var(--textorange)';
                      }}
                    >
                      Submit CV
                    </button>
                  </form>
                </div>
        </div>
    </div>
  );
}
export default page;