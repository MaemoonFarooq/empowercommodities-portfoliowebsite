"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 backdrop-blur-sm bg-gray-900/95 transition-all duration-300 cursor-dark-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 relative">
          {/* Left side */}
          <div className="flex items-center space-x-4 lg:space-x-8 relative">
            {/* Hamburger button */}
            <button
              className="text-white hover:text-gray-300 transition-colors duration-200 hover:scale-110 transform md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile dropdown */}
            {isMenuOpen && (
              <div className="absolute top-14 left-0 bg-gray-800 shadow-lg rounded-lg w-40 py-2 md:hidden">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/products", label: "PRODUCTS" },
                  { href: "/careers", label: "CAREERS" },
                  { href: "/about-us", label: "ABOUT" },
                  { href: "/locations", label: "LOCATIONS" },
                  { href: "/why-us", label: "WHY US" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/products" className="nav-link">PRODUCTS</Link>
              <Link href="/careers" className="nav-link">CAREERS</Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <Link href="/" className="hover:scale-105 transition-transform duration-300">
              <Image
                src="/navbar-logo.png"
                alt="Empower Corporate Logo"
                width={180}
                height={180}
                priority
              />
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Desktop menu right */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/about-us" className="nav-link">ABOUT</Link>
              <Link href="/locations" className="nav-link">LOCATIONS</Link>
              <Link href="/why-us" className="nav-link">WHY US</Link>
            </div>
<Link
  href="https://www.aof.com.pk/login.php"
  passHref
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="sm"
    className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent transition-all duration-300 hover:scale-105 transform hover:shadow-lg text-xs lg:text-sm px-3 lg:px-4"
  >
    START TRADING
  </Button>
</Link>

          </div>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #d1d5db;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #facc15;
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  )
}
