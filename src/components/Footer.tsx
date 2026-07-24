import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCategory } from "@/hooks/useCategory";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const { categories } = useCategory();

  return (
    // Light background with dark text for better visibility
    <footer className="bg-[var(--bgcolour)] text-[var(--textblue)] pt-8 pb-6 px-6 relative z-20 font-monte bottom-0 border-t border-[var(--mediumblue)]/20">
      <div className="max-w-7xl 2xl:max-w-[1600px] px-4 md:px-7 py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-32">
        {/* Branding and Description */}
        <div>
          <h2 className="text-[var(--textblue)] text-xl font-semibold mb-3 font-raleway">
            Anjali <span className="text-[var(--textorange)]">Elastomer</span>
          </h2>
          {/* Default to text-base, then scale up using arbitrary breakpoint */}
          <p className="mb-4 max-w-xs leading-relaxed text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)]">
            Leading manufacturer of premium elastomeric materials for railway
            construction worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/anjali-elastomer/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--textblue)] hover:text-[var(--textorange)] transition-colors duration-200"
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
              className="text-[var(--textblue)] hover:text-[var(--textorange)] transition-colors duration-200 pt-1"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61578696942118"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[var(--textblue)] hover:text-[var(--textorange)] transition-colors duration-200"
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
          <h3 className="text-[var(--textblue)] font-semibold underline decoration-[var(--textorange)] underline-offset-4 mb-3 cursor-default font-raleway">
            Products
          </h3>
          <ul className="space-y-2">
            {/* Handle loading or empty states */}
            {!categories || categories.length === 0 ? (
              <li>
                <span className="text-base text-[var(--textgray)]">
                  Loading products...
                </span>
              </li>
            ) : (
              // Map over the categories to create a dynamic list
              categories.map((category) => (
                <li key={category.documentId}>
                  <Link
                    href={`/products`}
                    className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)] hover:text-[var(--textorange)] transition-colors"
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
          <h3 className="text-[var(--textblue)] font-semibold underline decoration-[var(--textorange)] underline-offset-4 mb-3 cursor-default font-raleway">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about-us"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)] hover:text-[var(--textorange)] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)] hover:text-[var(--textorange)] transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)] hover:text-[var(--textorange)] transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/business/bridges"
                className="text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)] hover:text-[var(--textorange)] transition-colors"
              >
                Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[var(--textblue)] font-semibold underline decoration-[var(--textorange)] underline-offset-4 mb-3 cursor-default font-raleway">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)]">
              <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--textblue)]">
                <path d="M5.15312 0.768722C4.9125 0.187472 4.27812 -0.121903 3.67188 0.0437222L0.921875 0.793722C0.378125 0.943722 0 1.43747 0 1.99997C0 9.73122 6.26875 16 14 16C14.5625 16 15.0563 15.6218 15.2063 15.0781L15.9563 12.3281C16.1219 11.7218 15.8125 11.0875 15.2312 10.8468L12.2312 9.59685C11.7219 9.38435 11.1313 9.53122 10.7844 9.95935L9.52188 11.5C7.32188 10.4593 5.54063 8.6781 4.5 6.4781L6.04063 5.21872C6.46875 4.86872 6.61562 4.28122 6.40312 3.77185L5.15312 0.771847V0.768722Z" />
              </svg>
              <span>+91 9681187076 / 9038156288</span>
            </li>
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)]">
              <svg fill="currentColor" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--textblue)]">
                <path d="M1.5 0C0.671875 0 0 0.671875 0 1.5C0 1.97187 0.221875 2.41562 0.6 2.7L7.4 7.8C7.75625 8.06563 8.24375 8.06563 8.6 7.8L15.4 2.7C15.7781 2.41562 16 1.97187 16 1.5C16 0.671875 15.3281 0 14.5 0H1.5ZM0 3.5V10C0 11.1031 0.896875 12 2 12H14C15.1031 12 16 11.1031 16 10V3.5L9.2 8.6C8.4875 9.13438 7.5125 9.13438 6.8 8.6L0 3.5Z" />
              </svg>
              <span className="break-all">sales@anjalielastomer.com</span>
            </li>
            <li className="flex items-center space-x-2 text-base [&_@media_screen_and_(min-width:1401px)]:text-lg text-[var(--textcolour)]">
              <svg fill="currentColor" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--textblue)]">
                <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" />
              </svg>
              <span>Howrah, West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[var(--mediumblue)]/30 my-6 w-screen relative left-1/2 right-1/2 -translate-x-1/2" />

      <div className="max-w-none 2xl:max-w-[1600px] mx-auto text-center text-[var(--textgray)] text-sm">
        Designed By <Link href={'https://www.linkedin.com/in/sayan-sarkarr-96ba64174/'} className="text-[var(--textorange)] hover:underline">Sayan Sarkarr</Link> <br className="md:hidden" /> <span className="hidden md:inline">|</span> © 2025 Anjali Elastomer Ltd. All rights reserved. <br className="md:hidden" /><span className="hidden md:inline">|</span> Developed By <Link href={'https://github.com/itz-snj'} className="text-[var(--textorange)] hover:underline">Itz-snj</Link>
      </div>
    </footer>
  );
};

export default Footer;
