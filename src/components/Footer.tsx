import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCategory } from "@/hooks/useCategory";
import { FaXTwitter } from "react-icons/fa6";
const Footer: React.FC = () => {
  const { categories } = useCategory();
  console.log(categories);

  return (
    // Base font-monte already implies default font family, text-gray-300 for color
    <footer className="bg-[#122957] text-gray-300 pt-8 pb-6 px-6 relative z-20 font-monte bottom-0">
      <div className=" max-w-7xl 2xl:max-w-[1600px] px-4 md:px-7 py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-32">
        {/* Branding and Description */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3 font-raleway">
            Anjali <span className="text-[#EF6C00]">Elastomer</span>
          </h2>
          {/* Default to text-base, then scale up using arbitrary breakpoint */}
          <p className="mb-4 max-w-xs leading-relaxed text-base [&_@media_screen_and_(min-width:1401px)]:text-lg">
            Leading manufacturer of premium elastomeric materials for railway
            construction worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/anjali-elastomer/about/?viewAsMember=true"
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
              href="https://x.com/anjalielastomer" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-[#EF6C00] transition-colors duration-200 pt-1"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61578696942118"
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
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default font-raleway">
            Products
          </h3>
          <ul className="space-y-2">
            {/* Handle loading or empty states */}
            {!categories || categories.length === 0 ? (
              <li>
                <span className="text-base text-gray-500">
                  Loading products...
                </span>
              </li>
            ) : (
              // Map over the categories to create a dynamic list
              categories.map((category) => (
                <li key={category.documentId}>
                  <Link
                    href={`/products`} // Assuming a dynamic route like /products/[id]
                    className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg"
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default font-raleway">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about-us"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/business/bridges"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg"
              >
                Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#EF6C00] underline mb-3 font-medium cursor-default font-raleway">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg">
              <Image src="/phone.svg" alt="Phone" width={20} height={20} />
              <span>+91 9681187076 / 9038156288</span>
            </li>
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg">
              <Image src="/email.svg" alt="Phone" width={20} height={20} />
              <span className="break-all">sales@anjalielastomer.com</span>
            </li>
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg">
              <Image src="/map.svg" alt="Phone" width={20} height={20} />
              <span>Howrah, West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-6 w-screen relative left-1/2 right-1/2 -translate-x-1/2" />

      <div className="max-w-none 2xl:max-w-[1600px] mx-auto text-center text-gray-400 text-sm ">
        Designed By <Link href={'https://www.linkedin.com/in/sayan-sarkarr-96ba64174/'} className="text-[var(--textorange)]">Sayan Sarkar</Link> <br className="md:hidden"/> <span className="hidden md:inline">|</span> © 2025 Anjali Elastomer Ltd. All rights reserved. <br className="md:hidden"/><span className="hidden md:inline">|</span> Developed By <Link href={'https://www.resourcio.in/'} className="text-[var(--textorange)]">Resourcio Pvt. Ltd.</Link>
      </div>
    </footer>
  );
};

export default Footer;
