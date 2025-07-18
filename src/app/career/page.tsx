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
      <h1 className="font-raleway font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textblue">
        <span className="whitespace-nowrap">Interested in</span>
        <br />
        <span className="text-textorange my-6 sm:my-8 md:my-10 flex flex-wrap justify-center md:justify-start gap-2">
          Joining <span className="text-textblue">our</span>
        </span>
        <span className="text-textblue flex flex-wrap justify-center md:justify-start gap-2">
          Dynamic <span className="text-textorange">Team</span>?
        </span>
      </h1>

      <div className="flex flex-col mt-10 sm:mt-16 md:mt-20 gap-5">
        <span className="text-textblue font-monte font-medium text-lg sm:text-xl md:text-2xl">
          Looking for growth opportunities?
        </span>
        <span className="text-textblue font-monte font-medium text-lg sm:text-xl md:text-2xl flex flex-wrap justify-center md:justify-start gap-2">
          Drop us your <span className="text-textorange">CV</span> at
          <span className="text-textorange">careers@anjalielastomer.in</span>
        </span>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
      <span className="text-textblue font-monte font-medium text-base sm:text-lg text-center md:text-left max-w-2xl">
        Join our team of innovators creating cutting-edge rail-road solutions for the future of Logistics & Transportation Industry; thereby leveraging its full potential.
      </span>
      <Image
        src="/career.svg"
        alt="Career Opportunities"
        width={500}
        height={500}
        className="w-full max-w-[500px] h-auto"
      />
    </div>
  </div>
</div>

        {/* Section 2 */}
        <div className="w-full min-h-fit flex flex-col items-center bg-[#FFF5EF] gap-10 py-16 px-4 sm:px-6 lg:px-8">
  <span className="text-textblue font-bold text-3xl md:text-4xl font-raleway text-center">
    Why Join <span className="text-textorange">Our Company</span>?
  </span>

  <span className="text-textblue font-monte font-medium text-sm sm:text-base md:text-lg mt-3 max-w-4xl text-center">
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
        />
        <span className="text-textblue font-bold text-lg">
          {card.title.split(" ")[0]}{" "}
          <span className="text-textorange">{card.highlight}</span>
        </span>
        <span className="text-textblue font-monte font-medium text-sm mt-2">
          {card.description}
        </span>
      </div>
    ))}
  </div>
</div>

        {/* Section 3 */}
        <div className="w-full min-h-fit flex flex-col-reverse md:flex-row justify-center pt-20 gap-10 md:px-0 px-7">
            <div className="flex flex-col items-center gap-10">
               
                
                <Image src="/career/75azadi.svg" alt="Career Opportunities" width={286} height={163} className="mb-5"/>
                <Image src="/career/manwoman.svg" alt="Career Opportunities" width={500} height={867} className="-mb-2"/>
            </div>
             {/* Submission Form */}
                <div className="w-full h-fit max-w-md mb-10 rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] bg-white ">
                  <div className="w-full flex items-center justify-center font-raleway font-medium text-2xl shadow-xl py-5 ">
                    <span className="text-textorange  text-lg mr-2">Join Our</span>
                    <span className="text-textorange  text-lg mr-2">Team Of</span>
                    <span className="text-textblue  text-xl">350+</span>
                    <span className="text-textorange  text-lg ml-2">Members</span>
                  </div>
                  <form className="flex flex-col gap-10 p-7">
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Name*</label>
                      <input
                        type="text"
                        placeholder=""
                        required
                        className="w-full bg-white hover:bg-[#FFF5EF] border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange hover:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Contact No.*</label>
                      <input
                        type="text"
                        placeholder=""
                        required
                        className="w-full bg-white hover:bg-[#FFF5EF] border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange hover:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Email Address*</label>
                      <input
                        type="email"
                        placeholder=""
                        required
                        className="w-full bg-white hover:bg-[#FFF5EF] border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange hover:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Position Applying For</label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full bg-white hover:bg-[#FFF5EF] border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange hover:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">
                        Upload your CV (in PDF)*
                      </label>
                      <div className="w-full h-20 border border-[#E6E6E6] rounded-xl bg-white hover:bg-[#FFF5EF] text-white hover:text-[#FB7602] flex flex-col items-center justify-center text-center cursor-pointer relative hover:border-textorange">
  <input
    type="file"
    accept="application/pdf"
    required
    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer bg-white hover:bg-[#FFF5EF]"
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
                      className="w-full border border-textorange text-[#FB7602] hover:text-white py-2 rounded-full bg-white hover:bg-[#FB7602]  transition mt-2 text-base"
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