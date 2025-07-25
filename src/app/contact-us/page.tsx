"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useContactMessage } from "@/hooks/useContact";
import { ContactMessage } from "@/types/contact";
import { toast } from "sonner";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  const [formData, setFormData] = useState<ContactMessage>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    company: "",
    project_type: "",
    message: "",
    locale: "en",
  });

  // Contact API hook
  const contactMutation = useContactMessage({
    onSuccess: (data) => {
      console.log("Message sent successfully:", data);
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        company: "",
        project_type: "",
        message: "",
        locale: "en",
      });
      toast("Message sent successfully!");
      
    },
    onError: (error) => {
      console.error("Error sending message:", error);
      toast("Failed to send message. Please try again.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate({ data: formData });
  };

  return (
    <div className="w-full min-h-screen mt-20">
      {/* Section 1 */}
      <div className="w-full flex flex-col items-center pb-20">
        <div className="w-full flex flex-col ">
          <span className="max-w-none 2xl:max-w-[1600px] flex justify-end text-textblue text-4xl font-raleway font-bold pr-10">
            Contact <span className="text-textorange ml-2">Us</span>
          </span>
          <hr className="w-full border-t-2 border-[#E5E7EB] mt-2 mb-8" />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-fit grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-20 ">
            {/* Card1 */}
            <div className="w-[172px] md:w-[384px] ml-2 md:ml-0 px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                <Image
                  src="/whitephone.svg"
                  alt="Phone"
                  width={28}
                  height={28}
                  loading="eager"
                />
              </div>
              <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
                Phone
              </h2>
              <p className="text-textblue text-[14px] font-monte mb-1">
                +1 (555) 123-4567
              </p>
              <span className="text-textblue text-xs font-monte opacity-80">
                Mon-Fri 8AM-6PM EST
              </span>
            </div>
            {/* Card2 */}
            <div className="w-[180px] md:w-[384px] px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                <Image
                  src="/whiteemail.svg"
                  alt="Phone"
                  width={28}
                  height={28}
                  loading="eager"
                />
              </div>
              <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
                Email
              </h2>
              <p className="text-textblue text-[12px] md:text-[14px] font-monte mb-1">
                info@railtechmaterials.com
              </p>
              <span className="text-textblue text-xs font-monte opacity-80">
                sales@railtechmaterials.com
              </span>
            </div>
            {/* Card3 */}
            <div className="w-[200px] md:w-[384px] mx-28 md:mx-0 px-5 py-8 bg-bgcolour rounded-xl flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-textorange flex items-center justify-center mb-4">
                <Image
                  src="/whitemap.svg"
                  alt="Phone"
                  width={28}
                  height={28}
                  loading="eager"
                />
              </div>
              <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
                Location
              </h2>
              <p className="text-textblue text-[14px] font-monte mb-1">
                J8H5+MF, Bhatta Nagar, Liluah,
              </p>
              <span className="text-textblue text-xs font-monte opacity-80">
                Howrah, Chakpara, West Bengal 711203
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Updated Form with API */}
      <div className="w-full flex flex-col items-center bg-bgcolour py-20">
        <h2 className="text-textblue text-4xl font-raleway font-bold text-center mb-2">
          Send Us a <span className="text-textorange">Message</span>
        </h2>
        <p className="text-textblue text-base font-monte text-center mb-10 max-w-xl">
          Have a project in mind? Need technical specifications? Our team of
          railroad materials experts is ready to assist you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="group bg-white rounded-xl shadow-lg hover:shadow-[0_0_10px_rgba(255,165,0,0.4)] transition-shadow duration-300 px-10 py-8 w-full max-w-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-textblue">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange group-hover:bg-[var(--bgcolour)]"
                placeholder=""
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-textblue">
                Last Name *
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange group-hover:bg-[var(--bgcolour)]"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-textblue">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange group-hover:bg-[var(--bgcolour)]"
                placeholder=""
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-textblue">
                Phone
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange group-hover:bg-[var(--bgcolour)]"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-textblue">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange group-hover:bg-[var(--bgcolour)]"
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-textblue">
              Project Type
            </label>
            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange text-gray-500 group-hover:bg-[var(--bgcolour)]"
            >
              <option value="">Select Project Type</option>
              <option value="metro">Metro Rail</option>
              <option value="highway">Highway/Bridge</option>
              <option value="railway">Railway</option>
              <option value="industrial">Industrial</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-textblue">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-[#E5E7EB] rounded-md px-4 py-2 focus:outline-none focus:border-textorange min-h-[100px] group-hover:bg-[var(--bgcolour)]"
              placeholder="Tell us about your project requirements..."
              required
            />
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              disabled={contactMutation.isPending}
              className="flex items-center gap-2 bg-textorange text-white font-semibold px-8 py-2 rounded-md shadow hover:bg-[#ff9000] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="white" />
              </svg>
              {contactMutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Section 3 */}
      <div className="w-full flex flex-col items-center py-20 pb-40 bg-white ">
        <h2 className="text-3xl md:text-4xl font-raleway font-bold text-center text-textblue mb-2">
          Visit Our <span className="text-textorange">Manufacturing</span> Units
        </h2>
        <p className="text-textblue text-sm sm:text-base font-monte text-center mb-10 max-w-xl">
          Our state-of-the-art manufacturing facility and headquarters
        </p>
        <div className="relative w-full md:w-[700px] lg:w-[1216px] h-[400px] md:h-[500px] lg:h-[428px] rounded-xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6594853157585!2d88.30868749999999!3d22.629187499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f883e98dd4d5e5%3A0xc2bf8ba87348e1a9!2sAnjali%20Elastomer!5e0!3m2!1sen!2sin!4v1752845667821!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full flex flex-col items-center bg-bgcolour py-20 px-4 sm:px-6">
        <span className="text-textblue font-bold text-3xl sm:text-4xl font-raleway text-center">
          Department <span className="text-textorange">Contacts</span>
        </span>
        <span className="text-textblue font-monte font-medium text-base sm:text-lg mt-5 mb-10 max-w-4xl text-center">
          Reach out to the right department for faster assistance
        </span>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-20">
          {/* Card 1 */}
          <div className="w-full sm:w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col md:flex-col items-center md:items-start text-center md:text-left shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
              <Image
                src="/contactus/hand.svg"
                alt="Phone"
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
            <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
              Sales
            </h2>
            <p className="text-textblue text-[14px] font-monte mb-1">
              Product inquiries and quotes
            </p>
            <span className="text-textblue text-xs font-monte font-medium">
              sales@railtechmaterials.com
            </span>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col md:flex-col items-center md:items-start text-center md:text-left shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
              <Image
                src="/contactus/headphone.svg"
                alt="Phone"
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
            <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
              Technical Support
            </h2>
            <p className="text-textblue text-[13px] font-monte mb-1">
              Product specifications and guidance
            </p>
            <span className="text-textblue text-xs font-monte font-medium">
              support@railtechmaterials.com
            </span>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col md:flex-col items-center md:items-start text-center md:text-left shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
              <Image
                src="/contactus/truck.svg"
                alt="Phone"
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
            <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
              Procurement
            </h2>
            <p className="text-textblue text-[14px] font-monte mb-1">
              Large orders and contracts
            </p>
            <span className="text-textblue text-xs font-monte font-medium">
              procurement@railtechmaterials.com
            </span>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[286px] px-5 py-8 bg-white rounded-xl flex flex-col md:flex-col items-center md:items-start text-center md:text-left shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-textorange flex items-center justify-center mb-4">
              <Image
                src="/contactus/quality.svg"
                alt="Phone"
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
            <h2 className="text-textblue text-lg font-raleway font-bold mb-1">
              Quality Assurance
            </h2>
            <p className="text-textblue text-[14px] font-monte mb-1">
              Certifications and compliance
            </p>
            <span className="text-textblue text-xs font-monte font-medium">
              quality@railtechmaterials.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
