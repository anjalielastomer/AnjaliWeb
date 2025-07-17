import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full min-h-screen mt-24">
        {/* Section 1*/}
      <div className="w-full  min-h-screen flex justify-center py-10">
        <div className=" flex gap-10">
        <div className="w-[50%] flex flex-col">
            <h1 className="font-raleway font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textblue w-full text-center md:text-left">
  <span className="whitespace-nowrap text-nowrap">
    Interested in   </span>
  <br />
  <span className="text-textorange my-6 sm:my-8 md:my-10 flex gap-5">
    Joining <span className="text-textblue block">our</span>
  </span>
  <span className="text-textblue flex gap-5">
    Dynamic
    <span className="text-textorange block">Team </span>
    ?
    
     
  </span>
</h1>
<div className="flex flex-col mt-20 gap-5">
    <span className="text-textblue font-monte font-medium text-2xl">Looking for growth opportunities?</span>
    <span className="text-textblue font-monte font-medium text-2xl flex gap-2">Drop us your <span className="text-textorange">CV</span> at <span className="text-textorange">careers@anjalielastomer.in</span> </span>
</div>
        </div>
        <div className="w-[50%] flex flex-col gap-5">
            <span className="text-textblue font-monte font-medium text-lg text-wrap max-w-2xl">Join our team of innovators creating cutting-edge rail-road solutions for the future of Logistics & Transportation Industry; thereby leveraging it’s full potential</span> 
            <Image src="/career.svg" alt="Career Opportunities" width={500} height={500} className="" />
        </div>
        </div>
      </div>
        {/* Section 2 */}
        <div className="w-full min-h-screen flex flex-col items-center bg-[#FFF5EF] gap-10 py-20">
            <span className="text-textblue font-bold text-4xl  font-raleway">Why Join <span className="text-textorange">Our Company</span>?</span>
           <span className="text-textblue font-monte font-medium text-lg mt-5 max-w-4xl text-wrap text-center">We&apos;re not just building railway infrastructure - we&apos;re building careers, communities, and the future of Rail-Road transportation services and systems.</span>
           <div className="grid grid-cols-3 gap-7 my-5">
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            {/*card */}
            <div className="w-full flex flex-col items-center text-center max-w-sm my-3">
            <Image src="/career/career1.png" alt="Career Growth" width={100} height={100} className="mb-3"/>
            <span className="text-textblue font-bold text-lg flex ">Innovation-<span className="text-textorange">Driven</span></span>
            <span className="text-textblue font-monte font-medium text-sm mt-2">Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.</span>
            </div>
            
            
           </div>
            </div>
        {/* Section 3 */}
        <div className="w-full min-h-screen flex justify-center pt-20 gap-10">
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
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Contact No.*</label>
                      <input
                        type="text"
                        placeholder=""
                        required
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Email Address*</label>
                      <input
                        type="email"
                        placeholder=""
                        required
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">Position Applying For</label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none focus:border-textorange text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222] mb-1">
                        Upload your CV (in PDF)*
                      </label>
                      <div className="w-full h-20 border border-[#E6E6E6] rounded-xl bg-[#FAFAFA] flex flex-col items-center justify-center text-center cursor-pointer relative">
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
                      className="w-full border border-textorange text-textorange  py-2 rounded-full bg-white hover:bg-textorange hover:text-white transition mt-2 text-base"
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