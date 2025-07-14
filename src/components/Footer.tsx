import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122957] text-gray-300 pt-8 pb-6 px-6">
      <div className="max-w-none 2xl:max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding and Description */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            Anjali <span className="text-[#EF6C00]">Elastomer</span>
          </h2>
          <p className="mb-4 max-w-xs leading-relaxed">
            Leading manufacturer of premium elastomeric materials for railway
            construction worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-[#EF6C00] transition-colors duration-200"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                role="img"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.7a53.79 53.79 0 01107.58 0c0 29.8-24.1 54.4-53.79 54.4zM447.9 448h-92.68V302.4c0-34.8-12.5-58.5-43.76-58.5-23.88 0-38.04 16-44.36 31.4-2.28 5.6-2.85 13.3-2.85 21.1V448h-92.7s1.25-271.1 0-299.1h92.7v42.4c12.3-19 34.3-46 83.3-46 60.8 0 106.5 39.6 106.5 124.7z" />
              </svg>
            </a>


            <a
              href="https://twitter.com/yourusername" // <-- change this to your real Twitter handle
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-[#1DA1F2] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.016-.63.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>


            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[#EF6C00] transition-colors duration-200"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                role="img"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V134.48c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.59 0 225.36 0c-73.22 0-121.13 44.38-121.13 124.72v70.62H22.89V288h81.34v224h100.2V288z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default">
            Products
          </h3>
          <ul className="space-y-2">
            <li>Rail Pads</li>
            <li>Fastening Systems</li>
            <li>Isolation Materials</li>
            <li>Custom Solutions</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default">
            Company
          </h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Projects</li>
            <li>Business</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16v16H4z" stroke="none"></path>
                <path d="M22 6L12 13 2 6" />
              </svg>
              <span>info@anjalielastomer.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Howrah, West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-6 max-w-7xl mx-auto" />

      <div className="max-w-none 2xl:max-w-[1600px] mx-auto text-center text-gray-400 text-sm ">
        © 2025 Anjali Elastomer Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

