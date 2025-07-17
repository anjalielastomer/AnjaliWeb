import React from "react";
import Image from "next/image";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const page = () => {
    

    return (
        <div className="w-full min-h-screen mt-20">
            {/* Section 1 */}
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full flex flex-col ">
                <span className="flex justify-end text-textblue text-4xl font-raleway font-bold pr-10">
                    Contact <span className="text-textorange ml-2">Us</span>
                </span>
                <hr className="w-full border-t-2 border-[#E6E6E6] mt-2 mb-8" />
            </div>
            <div className="w-full flex gap-20 justify-center">
                {/* Card1 */}
                <div className="w-[384px] px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                        <Image src="/phone.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Phone</h2>
                    <p className="text-textblue text-base font-monte mb-1">+1 (555) 123-4567</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">Mon-Fri 8AM-6PM EST</span>
                </div>
                {/* Card2 */}
                <div className="w-[384px] px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                        <Image src="/email.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Email</h2>
                    <p className="text-textblue text-base font-monte mb-1">info@railtechmaterials.com</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">sales@railtechmaterials.com</span>
                </div>
                {/* Card3 */}
                <div className="w-[384px] px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                        <Image src="/map.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Location</h2>
                    <p className="text-textblue text-base font-monte mb-1">J8H5+MF, Bhatta Nagar, Liluah,</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">Howrah, Chakpara, West Bengal 711203</span>
                </div>
            </div>
        </div>
        {/* Section 2 */}
        <div className="w-full flex flex-col items-center bg-bgcolour py-20">
            <h2 className="text-textblue text-4xl font-raleway font-bold text-center mb-2">
                Send Us a <span className="text-textorange">Message</span>
            </h2>
            <p className="text-[#2D3A4A] text-base font-monte text-center mb-10 max-w-xl">
                Have a project in mind? Need technical specifications? Our team of railroad materials experts is ready to assist you.
            </p>
            <form className="bg-white rounded-xl shadow-md px-10 py-8 w-full max-w-2xl flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#222]">First Name *</label>
                        <input
                            type="text"
                            className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange"
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#222]">Last Name *</label>
                        <input
                            type="text"
                            className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange"
                            placeholder=""
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#222]">Email *</label>
                        <input
                            type="email"
                            className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange"
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#222]">Phone</label>
                        <input
                            type="text"
                            className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#222]">Company</label>
                    <input
                        type="text"
                        className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#222]">Project Type</label>
                    <select
                        className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange text-gray-500"
                        defaultValue=""
                    >
                        <option value="" disabled>Select Project Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#222]">Message *</label>
                    <textarea
                        className="border border-[#E6E6E6] rounded-md px-4 py-2 focus:outline-none focus:border-textorange min-h-[100px]"
                        placeholder="Tell us about your project requirements..."
                        required
                    />
                </div>
                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-textorange text-white font-semibold px-8 py-2 rounded-md shadow hover:bg-[#ff9000] transition"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="white"/>
                        </svg>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        {/* Section 3 */}
        <div className="w-full flex flex-col items-center py-20 pb-40 bg-white ">
      <h2 className="text-4xl font-raleway font-bold text-center text-textblue mb-2">
        Visit Our <span className="text-textorange">Manufacturing</span> Units
      </h2>
      <p className="text-[#2D3A4A] text-base font-monte text-center mb-10 max-w-xl">
        Our state-of-the-art manufacturing facility and headquarters
      </p>

      {/* <div className="w-full px-10 md:px-32">
        {isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div className="text-center text-gray-500">Loading map...</div>
        )}
      </div> */}
    </div>
        {/* Section 4 */}
        <div className="w-full flex flex-col items-center bg-bgcolour py-20">
           <span className="text-textblue font-bold text-4xl  font-raleway">Department <span className="text-textorange">Contacts</span></span>
           <span className="text-textblue font-monte font-medium text-lg mt-5 mb-10 max-w-4xl text-wrap text-center">Reach out to the right department for faster assistance</span>
            <div className="w-full flex gap-20 justify-center">
                {/* Card1 */}
                <div className="w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col items-start shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
                        <Image src="/phone.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Phone</h2>
                    <p className="text-textblue text-base font-monte mb-1">+1 (555) 123-4567</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">Mon-Fri 8AM-6PM EST</span>
                </div>
                {/* Card2 */}
                <div className="w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col items-start shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
                        <Image src="/email.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Email</h2>
                    <p className="text-textblue text-base font-monte mb-1">info@railtechmaterials.com</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">sales@railtechmaterials.com</span>
                </div>
                {/* Card3 */}
                <div className="w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col items-start shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
                        <Image src="/map.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Location</h2>
                    <p className="text-textblue text-base font-monte mb-1">J8H5+MF, Bhatta Nagar, Liluah,</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">Howrah, Chakpara, West Bengal 711203</span>
                </div>
                {/* Card4 */}
                <div className="w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col items-start shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
                        <Image src="/map.svg" alt="Phone" width={28} height={28} />
                    </div>
                    <h2 className="text-textblue text-lg font-raleway font-bold mb-1">Location</h2>
                    <p className="text-textblue text-base font-monte mb-1">J8H5+MF, Bhatta Nagar, Liluah,</p>
                    <span className="text-[#2D3A4A] text-xs font-monte opacity-80">Howrah, Chakpara, West Bengal 711203</span>
                </div>
            </div>
        </div>
    </div>
    );
}
export default page;