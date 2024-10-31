"use client"; // Add this line at the very top

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 shadow-md flex justify-between items-center px-10 py-4 z-50 mt-6">
      <h1 className="text-white text-2xl font-bold">Sahil Sharma</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 text-gray-300 text-lg font-medium border  py-2 rounded-lg w-[805px] items-center justify-center bg-[#61616124]
]">
        <Link href="#about" className="hover:text-white transition-colors">About Me</Link>
        <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      {/* Get In Touch Button */}
      <Link href="#contact">
        <button className="ml-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors hidden md:block">
          Get In Touch
        </button>
      </Link>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="#about" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="#experience" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="#contact">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200" onClick={() => setIsOpen(false)}>
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
