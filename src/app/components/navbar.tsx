"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about",        label: "About" },
  { href: "#experience",   label: "Experience" },
  { href: "#skills",       label: "Skills" },
  { href: "#projects",     label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 py-5 transition-colors duration-300 border-b border-border ${
        scrolled ? "bg-bg/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        data-hover=""
        className="font-syne font-semibold text-sm tracking-wide text-fg no-underline"
      >
        Sahil Sharma
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              data-hover=""
              className="relative text-[11px] font-normal tracking-[0.08em] uppercase text-muted no-underline transition-colors duration-200 hover:text-fg group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-fg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-border md:hidden">
          <div className="flex flex-col items-center gap-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-[0.08em] uppercase text-muted hover:text-fg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1jZ9IhjtHXltbVzc5v13Rr8cl7uu_k2E7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.06em] uppercase px-5 py-2 border border-border text-muted rounded-[1px] hover:border-muted hover:text-fg"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
