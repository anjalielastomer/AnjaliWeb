"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "#" },
    { label: "Business", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Career", href: "#" },
    { label: "Contact Us", href: "#" },
  ]

  // Handle scroll to detect when user scrolls past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Assuming hero is ~80vh
      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine navbar style based on current page and scroll position
  const getNavbarStyle = () => {
    // If scrolled past hero section, always use white background
    if (isScrolled) {
      return {
        backgroundColor: 'var(--bgwhite)',
        accentColor: 'var(--textorange)'
      }
    }
    switch (pathname) {
      case '/':
        return {
          backgroundColor: 'var(--bgcolour)',
          textColor: 'var(--bg-white)',
          logoColor: 'var(--bg-white)',
          accentColor: 'var(--textorange)'
        }
      case '/about-us':
        return {
          backgroundColor: 'var(--bgwhite)',
          textColor: 'var(--text-blue)',
          logoColor: 'var(--text-blue)',
          accentColor: 'var(--textorange)'
        }
      default:
        return {
          backgroundColor: 'var(--bg-transparent)',
          textColor: 'var(--text-blue)',
          logoColor: 'var(--text-blue)',
          accentColor: 'var(--textorange)'
        }
    }
  }

  const styles = getNavbarStyle()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className="w-full font-raleway transition-all duration-300 fixed top-0 left-0 z-50"
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.textColor,
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {/* Container that maintains current styling up to 2xl, then constrains */}
      <div className="max-w-none 2xl:max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          {/* Logo */}
          <div
            className="text-xl md:text-2xl font-bold font-raleway"
            style={{ color: styles.logoColor }}
          >
            Anjali <span style={{ color: styles.accentColor }}>Elastomer</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 lg:space-x-12 text-xl lg:text-2xl font-light">
            {navItems.map(({ label, href }) => (
              <li key={label} className="text-base lg:text-lg font-light">
                <Link
                  href={href}
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: styles.textColor }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              style={{ backgroundColor: isScrolled ? '#152f5d' : 'black' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
              style={{ backgroundColor: isScrolled ? '#152f5d' : 'black' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              style={{ backgroundColor: isScrolled ? '#152f5d' : 'black' }}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden backdrop-blur-lg ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 
              (pathname === '/' ? 'rgba(255, 107, 53, 0.15)' : 'rgba(255, 255, 255, 0.9)'),
            backdropFilter: 'blur(12px) saturate(120%)',
            WebkitBackdropFilter: 'blur(12px) saturate(120%)',
            border: `1px solid ${isScrolled ? 'rgba(0, 0, 0, 0.1)' : 
              (pathname === '/' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)')}`,
            zIndex: 60
          }}
        >
          <ul className="py-4 px-4 space-y-4">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-2 px-4 text-lg font-light transition-colors duration-200 hover:opacity-80 rounded hover:bg-white hover:bg-opacity-20"
                  style={{ color: styles.textColor }}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMenu}
        />
      )}
    </nav>
  )
}

export default Navbar