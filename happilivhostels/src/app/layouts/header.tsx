'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hostelMenuOpen, setHostelMenuOpen] = useState(false)

  const navClass =
    'font-poppins font-normal text-[15.87px] text-black hover:text-[#EE1C4C] transition'

  return (
    <header className="w-full bg-white border-b border-gray-200 font-poppins">
      <div className="mx-auto max-w-[1400px] px-24 min-[991px]:max-[1200px]:px-10 max-[991px]:px-6">

        <div className="flex lg:h-28 h-18 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={146}
              height={85}
              priority
              className="
    w-[110px]
    sm:w-[130px]
    md:w-[140px]
    lg:w-[146px]
    h-auto
  "
            />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[992px]:flex flex-1 justify-center items-center space-x-10 relative">
            <Link href="/" className={navClass}>Home</Link>
            <Link href="/about" className={navClass}>About Us</Link>

            {/* Hostels with Dropdown */}
            {/* Hostels with Dropdown */}
            <div className="relative group">
              <span className={`${navClass} cursor-pointer flex items-center`}>
                Hostels
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-[13px]" />
              </span>

              {/* Hover bridge */}
              <div className="absolute left-0 top-full pt-2 z-10">
                <div
                  className="flex flex-col bg-white border border-gray-200 shadow-md w-40 z-50 opacity-0
      invisible
      translate-y-2
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      rounded-lg
    "
                >
                  <Link href="/girls-room-tariff" className="px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                    Girls Hostel
                  </Link>
                  <Link href="/boys-room-tariff" className="px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                    Boys Hostel
                  </Link>

                </div>
              </div>

            </div>


            <Link href="/gallery" className={navClass}>Gallery</Link>
            <Link href="/blogs" className={navClass}>Blog</Link>
            <Link href="/contact" className={navClass}>Contact Us</Link>
          </nav>

          {/* Desktop Call Button */}
          <div className="hidden min-[992px]:flex shrink-0">
            <a
              href="tel:+916363098384"
              className="font-poppins inline-flex items-center justify-center gap-[6.5px] w-[139.1px] h-[40.95px] px-[6.5px] py-[6.5px] rounded-[39px] bg-[#EE1C4C] text-white text-[15.87px] font-normal hover:bg-[#d81945] transition"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="min-[992px]:hidden ml-auto text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none cursor-pointer">✕</span>
            ) : (
              <div className="flex flex-col space-y-1.5">
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 min-[992px]:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
    fixed top-0 left-0 h-full w-[260px] bg-white z-50
    border-r border-gray-200
    transform transition-transform duration-500 ease-in-out
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
    min-[992px]:hidden
  `}
      >
        <nav className="flex flex-col px-6 py-8 space-y-6">
          <Link href="/" className={navClass} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={navClass} onClick={() => setMenuOpen(false)}>About Us</Link>

          {/* Hostels with Mobile Submenu */}
          <div className="flex flex-col">
            <button
              className={`${navClass} flex justify-between items-center w-full`}
              onClick={() => setHostelMenuOpen(!hostelMenuOpen)}
            >
              Hostels
              <FontAwesomeIcon
                icon={hostelMenuOpen ? faAngleUp : faAngleDown}
              />
            </button>

            <div
              className={`
          transition-all duration-300 ease-out overflow-hidden
          ${hostelMenuOpen ? "max-h-40 mt-3" : "max-h-0"}
        `}
            >
              <div className="flex flex-col pl-4 space-y-3">
                <Link href="/girls-room-tariff" onClick={() => setMenuOpen(false)}>Girls Hostel</Link>
                <Link href="/boys-room-tariff" onClick={() => setMenuOpen(false)}>Boys Hostel</Link>
              </div>
            </div>
          </div>

          <Link href="/gallery" className={navClass} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/blogs" className={navClass} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className={navClass} onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>


    </header>
  )
}
