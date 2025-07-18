"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "",
      subItems: [
        { label: "Profile", href: "/about-us" },
        { label: "Leadership", href: "/about-us/leadership" },
        { label: "Production Facilities", href: "/about-us/production-facilities" },
      ]
    },
    { label: "Products", href: "/products", },
    {
      label: "Business",
      href: "/business",
      subItems: [
        { label: "Pandrol", href: "/business/pandrol" },
        { label: "Railway", href: "/business/railway" },
        { label: "Turnout", href: "/business/turnout" },
        { label: "Bridge", href: "/business/bridges" },
        { label: "Track", href: "/business/track" },
      ]
    },
    {
      label: "Projects",
      href: "#",
      subItems: [
        { label: "Our Projects", href: "#" },
        { label: "Our Articles", href: "/article" },
      ]
    },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(scrollPosition > heroHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarStyle = () => {
    if (pathname !== "/") {
      return {
        backgroundColor: 'var(--bgwhite)',
        textColor: 'var(--textblue)',
        logoColor: 'var(--textblue)',
        accentColor: 'var(--textorange)'
      };
    }
    if (isScrolled) {
      return {
        backgroundColor: 'var(--bgwhite)',
        textColor: 'var(--textblue)',
        logoColor: 'var(--textblue)',
        accentColor: 'var(--textorange)'
      };
    }
    return {
      backgroundColor: 'var(--bgcolour)',
      textColor: 'var(--textcolour)',
      logoColor: 'var(--bgwhite)',
      accentColor: 'var(--textorange)'
    };
  };

  const styles = getNavbarStyle();

  const getTextColor = () => {
    if (styles.textColor === 'var(--textblue)') return 'text-[color:var(--textblue)]';
    if (styles.textColor === 'var(--bgwhite)') return 'text-[color:var(--bgwhite)]';
    if (styles.textColor === 'var(--textorange)') return 'text-[color:var(--textorange)]';
    if (styles.textColor === 'var(--textcolour)') return 'text-[color:var(--textcolour)]';
    return 'text-[color:var(--textcolour)]';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className="w-full font-raleway transition-all duration-300 fixed top-0 left-0 z-50"
      style={{
        backgroundColor: styles.backgroundColor,
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="max-w-none 2xl:max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          {/* Logo */}
          <div
            className={`text-xl md:text-2xl font-bold font-raleway cursor-pointer ${getTextColor()}`}
          >
            Anjali <span className="text-[color:var(--textorange)]">Elastomer</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 lg:space-x-12 text-xl lg:text-2xl font-normal relative">
            {navItems.map(({ label, href, subItems }) => (
              <li
                key={label}
                className={`relative text-base lg:text-lg font-normal ${subItems ? 'group' : ''}`}
              >
                <Link
                  href={href}
                  className={`relative font-normal ${getTextColor()} hover:text-textblue transition-colors duration-200
          hover:font-bold hover:text-lg
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300`}
                >
                  {label}
                </Link>

                {subItems && (
                  <ul className="absolute left-0 mt-3 w-96 bg-white rounded-xl shadow-xl border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4 p-6">
                    {subItems.map(({ label: subLabel, href: subHref }) => (
                      <li
                        key={subLabel}
                        className="flex items-center gap-3 group/link"
                      >
                        {/* Custom bullet */}
                        <span className="w-2.5 h-2.5 border-2 border-[#FB7602] rounded-full flex-shrink-0"></span>

                        {/* Link */}
                        <Link
                          href={subHref}
                          className="text-[#152f5d] text-[15px] font-medium group-hover/link:text-textblue hover:[text-shadow:0_0_0.5px_#152f5d] hover:underline hover:decoration-[1px] hover:underline-offset-4 transition-colors duration-300"
                        >
                          {subLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: isScrolled ? 'var(--textblue)' : 'var(--textcolour)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: isScrolled ? 'var(--textblue)' : 'var(--textcolour)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: isScrolled ? 'var(--textblue)' : 'var(--textcolour)' }}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden backdrop-blur-lg ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{
            backgroundColor: styles.backgroundColor,
            backdropFilter: 'blur(12px) saturate(120%)',
            WebkitBackdropFilter: 'blur(12px) saturate(120%)',
            border: 'none',
            zIndex: 60
          }}
        >
          <ul className="py-4 px-4 space-y-4">
            {navItems.map(({ label, href, subItems }) => (
              <li key={label} className="relative">
                {subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(label)}
                      className={`w-full text-left py-2 px-4 text-lg font-light flex justify-between items-center transition-colors duration-200 ${getTextColor()} hover:text-[color:var(--textorange)]`}
                    >
                      {label}
                      <span>{openDropdown === label ? '▲' : '▼'}</span>
                    </button>
                    {openDropdown === label && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {subItems.map(({ label: subLabel, href: subHref }) => (
                          <li key={subLabel}>
                            <Link
                              href={subHref}
                              className="block py-2 px-4 text-base font-light text-[color:var(--textcolour)] rounded hover:bg-[color:var(--bgcolour)]"
                              onClick={closeMenu}
                            >
                              {subLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={href}
                    className={`block py-2 px-4 text-lg font-light transition-colors duration-200 ${getTextColor()} hover:text-[color:var(--textorange)] hover:opacity-80 rounded hover:bg-[color:var(--bgcolour)] hover:bg-opacity-80`}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ backgroundColor: 'transparent' }}
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
