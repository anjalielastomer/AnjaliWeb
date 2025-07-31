"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cardData, CardData } from "@/types/career";
import type { FormData } from "@/types/career";
import { toast } from 'sonner'
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
const Page: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    data: {
      name: "",
      contact: "",
      email: "",
      position: "",
      resume: "",
    },
  });
  const [isInputHovered, setIsInputHovered] = useState(false);

  const handleInputChange = (
    field: keyof FormData["data"],
    value: string
  ): void => {
    setFormData((prev) => ({
      data: {
        ...prev.data,
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (selectedFile: File | null): void => {
    setFile(selectedFile);
    setFormData((prev) => ({
      data: {
        ...prev.data,
        resume: selectedFile?.name || "",
      },
    }));
  };

  // Mouse event handlers for input styling
  const handleMouseEnter = () => setIsInputHovered(true);
  const handleMouseLeave = () => setIsInputHovered(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "var(--textorange)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#E6E6E6";
  };

  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--textorange)";
    e.currentTarget.style.color = "var(--bgwhite)";
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--bgwhite)";
    e.currentTarget.style.color = "var(--textorange)";
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!file) {
      toast(
        <div className="flex flex-col items-center text-center">
          <AiOutlineCloseCircle size={80} className="text-[var(--textorange)] mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Nearly there!</h2>
          <p className="text-sm text-gray-600 mt-1">Please upload your resume!</p>
        </div>
      );
      return;
    }

    try {
      const fileFormData = new FormData();
      fileFormData.append("files", file);

      const uploadRes = await fetch(
        "https://lovable-gift-31985371d0.strapiapp.com/api/upload",
        {
          method: "POST",
          body: fileFormData,
        }
      );

      const uploadResult = await uploadRes.json();

      if (!uploadRes.ok || !uploadResult[0]?.id) {
        throw new Error("File upload failed");
      }

      const uploadedFileId = uploadResult[0].id;

      // 2. Submit the form data with uploaded file ID
      const requestBody = {
        data: {
          name: formData.data.name,
          contact: formData.data.contact,
          email: formData.data.email,
          position: formData.data.position,
          resume: uploadedFileId,
        },
      };

      const submitRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/career-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log(requestBody);

      if (!submitRes.ok) {
        const errorData = await submitRes.json();
        console.error("Form submission failed:", errorData);
        toast(
          <div className="flex flex-col items-center text-center">
            <AiOutlineCloseCircle size={80} className="text-[var(--textorange)] mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">Nearly there!</h2>
            <p className="text-sm text-gray-600 mt-1">Form submission failed. Please try again!</p>
          </div>
        );
        return;
      }

      toast(
        <div className="flex flex-col items-center text-center">
          <AiOutlineCheckCircle size={80} className="text-[var(--textorange)] mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
          <p className="text-sm text-gray-600 mt-1">CV submitted successfully!</p>
        </div>
      );;

      setFormData({
        data: {
          name: "",
          contact: "",
          email: "",
          position: "",
          resume: "",
        },
      });
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error);
      toast(
        <div className="flex flex-col items-center text-center">
          <AiOutlineCloseCircle size={80} className="text-[var(--textorange)] mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Sorry!</h2>
          <p className="text-sm text-gray-600 mt-1">An error occurred. Please try again later.!</p>
        </div>
      );
    }
  };
  const slideInFromLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const slideInFromRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full min-h-screen mt-24 font-monte">
      {/* Section 1*/}
      <div className="w-full min-h-fit flex justify-center py-10 px-4">
        <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInFromLeft} className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className="font-raleway font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "var(--textblue)" }}
            >
              <span className="whitespace-nowrap">Interested in</span>
              <br />
              <span
                className="my-6 sm:my-8 md:my-10 flex flex-wrap justify-center md:justify-start gap-2"
                style={{ color: "var(--textorange)" }}
              >
                Joining <span style={{ color: "var(--textblue)" }}>our</span>
              </span>
              <span
                className="flex flex-wrap justify-center md:justify-start gap-2"
                style={{ color: "var(--textblue)" }}
              >
                Dynamic <span style={{ color: "var(--textorange)" }}>Team</span>
                ?
              </span>
            </h1>

            <div className="flex flex-col mt-10 sm:mt-16 md:mt-20 gap-5">
              <span
                className="font-monte font-medium text-lg sm:text-xl md:text-2xl"
                style={{ color: "var(--textblue)" }}
              >
                Looking for growth opportunities?
              </span>
              <span
                className="font-monte font-medium text-lg sm:text-xl md:text-2xl flex flex-wrap justify-center md:justify-start gap-2"
                style={{ color: "var(--textblue)" }}
              >
                Drop us your{" "}
                <span style={{ color: "var(--textorange)" }}>CV</span> at
                <Link
                  href="mailto:careers@anjalielastomer.in"
                  style={{
                    color: "var(--textorange)",
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: "1.5px",
                  }}
                >
                  careers@anjalielastomer.in
                </Link>
              </span>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInFromRight}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5"
          >
            <span
              className="font-monte font-medium text-base sm:text-lg text-center md:text-justify max-w-lg mb-7"
              style={{ color: "var(--textblue)" }}
            >
              Join our team of innovators creating cutting-edge rail-road
              solutions for the future of Logistics & Transportation Industry;
              thereby leveraging its full potential.
            </span>
            <Image
              src="/career.svg"
              alt="Career Opportunities"
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto rounded-lg hover:shadow-[0_0_50px_rgba(0,165,255,0.2)] transition-shadow duration-300"
              loading="eager"
             
            />
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="w-full min-h-fit flex flex-col items-center gap-10 py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bgcolour)" }}
      >
        <span
          data-aos="fade-down-right"
          className="font-bold text-3xl md:text-4xl font-raleway text-center"
          style={{ color: "var(--textblue)" }}
        >
          Why Join{" "}
          <span style={{ color: "var(--textorange)" }}>Our Company</span>?
        </span>

        <span
          data-aos="fade-down-left"
          className="font-monte font-medium text-sm sm:text-base md:text-lg mt-3 max-w-4xl text-center"
          style={{ color: "var(--textblue)" }}
        >
          We&apos;re not just building railway infrastructure — we&apos;re
          building careers, communities, and the future of Rail-Road
          transportation services and systems.
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7 mt-8 w-full max-w-6xl">
          {cardData.map((card: CardData, index: number) => (
            <div
              data-aos="fade-left"
              key={index}
              className="w-full flex flex-col items-center text-center max-w-sm my-3 md:mx-7 mx-3"
            >
              <Image
                data-aos="fade-left"
                src={card.image}
                alt={card.title}
                width={80}
                height={80}
                className="mb-4"
                loading="lazy"
              />
              <span
                data-aos="fade-left"
                className="font-bold text-lg"
                style={{ color: "var(--textblue)" }}
              >
                {card.title.split(" ")[0]}{" "}
                <span style={{ color: "var(--textorange)" }}>
                  {card.highlight}
                </span>
              </span>
              <span
                className="font-monte font-medium text-sm mt-2"
                style={{ color: "var(--textblue)" }}
              >
                {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full min-h-fit flex flex-col-reverse md:flex-row justify-center pt-20 gap-10 md:px-0 px-7">
        <div className="flex flex-col items-center gap-10">
          <Image
            src="/career/75azadi.svg"
            alt="Career Opportunities"
            width={286}
            height={163}
            className="mb-5"
            loading="lazy"
          />
          <Image
            data-aos="fade-right"
            src="/career/manwoman.svg"
            alt="Career Opportunities"
            width={500}
            height={867}
            className="-mb-2"
            loading="lazy"
          />
        </div>

        {/* Submission Form */}
        <div
          className="w-full h-fit max-w-md mb-10 rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: "var(--bgwhite)" }}
        >
          <div className="w-full flex items-center justify-center font-raleway font-medium text-2xl shadow-xl py-5 ">
            <span
              className="text-lg mr-2"
              style={{ color: "var(--textorange)" }}
            >
              Join Our
            </span>
            <span
              className="text-lg mr-2"
              style={{ color: "var(--textorange)" }}
            >
              Team Of
            </span>
            <span className="text-xl" style={{ color: "var(--textblue)" }}>
              350+
            </span>
            <span
              className="text-lg ml-2"
              style={{ color: "var(--textorange)" }}
            >
              Members
            </span>
          </div>
          <form className="flex flex-col gap-10 p-7" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--textcolour)" }}
              >
                Name*
              </label>
              <input
                type="text"
                value={formData.data.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("name", e.target.value)
                }
                placeholder=""
                required
                className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                style={{
                  backgroundColor: isInputHovered ? "var(--bgcolour)" : "var(--bgwhite)",

                  borderColor: "#E6E6E6",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--textcolour)" }}
              >
                Contact No.*
              </label>
              <input
                type="text"
                value={formData.data.contact}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("contact", e.target.value)
                }
                placeholder=""
                required
                className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                style={{
                  backgroundColor: isInputHovered ? "var(--bgcolour)" : "var(--bgwhite)",

                  borderColor: "#E6E6E6",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--textcolour)" }}
              >
                Email Address*
              </label>
              <input
                type="email"
                value={formData.data.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("email", e.target.value)
                }
                placeholder=""
                required
                className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                style={{
                  backgroundColor: isInputHovered ? "var(--bgcolour)" : "var(--bgwhite)",

                  borderColor: "#E6E6E6",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--textcolour)" }}
              >
                Position Applying For
              </label>
              <input
                type="text"
                value={formData.data.position}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("position", e.target.value)
                }
                placeholder=""
                className="w-full border border-[#E6E6E6] rounded-full px-4 py-2 focus:outline-none text-sm transition-colors"
                style={{
                  backgroundColor: isInputHovered ? "var(--bgcolour)" : "var(--bgwhite)",

                  borderColor: "#E6E6E6",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--textcolour)" }}
              >
                Upload your CV (in PDF)*
              </label>
              <div
                className="w-full h-20 border border-[#E6E6E6] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer relative transition-colors"
                style={{
                  backgroundColor: "var(--bgwhite)",
                  borderColor: "#E6E6E6",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFileUpload(e.target.files?.[0] || null)
                  }
                  required
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                  style={{
                    backgroundColor: isInputHovered ? "var(--bgcolour)" : "var(--bgwhite)",

                    borderColor: "#E6E6E6",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <svg
                  className="mx-auto mb-1"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16V4M8 12l4 4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="4"
                    y="20"
                    width="16"
                    height="1"
                    rx="0.5"
                    fill="#D1D5DB"
                  />
                </svg>
                <span className="text-gray-400 text-xs">
                  {formData.data.resume
                    ? formData.data.resume
                    : "Drag your CV here"}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full border py-2 rounded-full transition mt-2 text-base"
              style={{
                borderColor: "var(--textorange)",
                color: "var(--textorange)",
                backgroundColor: "var(--bgwhite)",
              }}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              Submit CV
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
