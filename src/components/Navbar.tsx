import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "#" },
    { label: "Business", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Career", href: "#" },
    { label: "Contact Us", href: "#" },
  ]

  return (
    <nav className="flex justify-between items-center px-10 py-4 w-full mx-auto font-raleway">
      <div className="text-2xl font-bold text-textblue font-raleway">
        Anjali <span className="text-textorange">Elastomer</span>
      </div>
      <ul className="flex space-x-12 text-textblue text-2xl font-light">
        {navItems.map(({ label, href }) => (
          <li key={label} className="text-lg font-light">
            <Link href={href} className="hover:text-textorange transition-colors duration-200">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
