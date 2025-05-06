"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from 'next/image';

const links = [
  { href: "/", label: "Home" },
  { href: "/achievements", label: "Achievements" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
          <Image 
        src="/images/munlogo.png" 
        alt="MUN Logo" 
        width={40}  // Adjust width and height according to your design
        height={40} 
        priority  // Ensures faster LCP
      />
            <span className="font-bold text-xl text-un-blue">Amrita Model United Nations Society</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-un-blue
                  ${pathname === link.href ? "text-un-blue" : "text-gray-600"}`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div layoutId="underline" className="absolute left-0 top-full h-0.5 w-full bg-un-blue" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${
                    pathname === link.href
                      ? "text-un-blue bg-blue-50"
                      : "text-gray-600 hover:text-un-blue hover:bg-blue-50"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

