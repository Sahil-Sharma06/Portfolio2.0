"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      className={`fixed top-0 left-0 z-50 w-full px-4 sm:px-6 md:px-10 py-4 md:py-6 shadow-md transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-90 border-gray-700"
          : "bg-transparent border-gray-500"
      } flex items-center justify-between font-poppins`}
    >
      {/* Logo */}
      <h1 className="text-lg font-bold text-white md:text-2xl whitespace-nowrap">
        Sahil Sharma
      </h1>

      {/* Desktop Links */}
      <div className="items-center hidden space-x-8 md:flex lg:space-x-12">
        <a
          href="#about"
          className="text-sm font-medium text-gray-300 lg:text-base hover:text-white font-open-sans"
        >
          About Me
        </a>
        <a
          href="#experience"
          className="text-sm font-medium text-gray-300 lg:text-base hover:text-white font-open-sans"
        >
          Services
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-gray-300 lg:text-base hover:text-white font-open-sans"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-300 lg:text-base hover:text-white font-open-sans"
        >
          Contacts
        </a>
      </div>

      {/* Get In Touch Button */}
      <div className="hidden md:block">
        <a
          href="https://drive.google.com/file/d/1jZ9IhjtHXltbVzc5v13Rr8cl7uu_k2E7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full sm:px-6 lg:text-base hover:bg-gray-200 font-open-sans">
            Resume
          </button>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
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
        <div className="absolute left-0 w-full py-4 bg-black border-t border-gray-700 top-16 bg-opacity-90 md:hidden font-open-sans">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#about"
              className="text-sm text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
            <a
              href="#experience"
              className="text-sm text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </a>
            <a
              href="https://drive.google.com/file/d/1jZ9IhjtHXltbVzc5v13Rr8cl7uu_k2E7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
