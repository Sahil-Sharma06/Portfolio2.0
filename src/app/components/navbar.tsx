"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to handle scroll behavior
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-based navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-8 shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-gray-900 bg-opacity-90" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">Sahil Sharma</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 text-gray-300 text-lg font-medium border py-2 rounded-lg w-[805px] items-center justify-center bg-[#61616124]">
        <a
          href="#about"
          className="transition-colors hover:text-white"
        >
          About Me
        </a>
        <a
          href="#experience"
          className="transition-colors hover:text-white"
        >
          Services
        </a>
        <a
          href="#projects"
          className="transition-colors hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>

      {/* Get In Touch Button */}
      <a href="#contact">
        <button className="hidden px-6 py-2 ml-4 font-semibold text-black transition-colors bg-white rounded-full hover:bg-gray-200 md:block">
          Get In Touch
        </button>
      </a>

      {/* Mobile Menu Icon */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full py-4 space-y-4 bg-black top-16 bg-opacity-90 md:hidden">
          <a
            href="#about"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a href="#contact">
            <button
              className="px-6 py-2 font-semibold text-black bg-white rounded-full hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
