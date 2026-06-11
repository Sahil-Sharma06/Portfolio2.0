"use client";

import Navbar from "./navbar";
import About from "./aboutme";
import Skills from "./services";
import Projects from "./projects";
import Achievements from "./hackathons";
import Contact from "./contact";

const socials = [
  { label: "GitHub",   href: "https://github.com/Sahil-Sharma06/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sahil-sharma-a735b4247/" },
  { label: "Twitter",  href: "https://x.com/Sharmaa_ji06" },
  { label: "Medium",   href: "https://medium.com/@thisisssharma" },
  { label: "LeetCode", href: "https://leetcode.com/u/SSharma06/" },
];

const footerWords = [
  { text: "Let's",    dim: false },
  { text: "make",     dim: false },
  { text: "some",     dim: true  },
  { text: "thing.",   dim: false },
];

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* ── HERO ── */}
        <section
          id="hero"
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-14 max-w-[1020px] mx-auto py-20 max-sm:px-5 max-sm:py-12"
        >
          {/* Tag */}
          <p className="flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase text-accent mb-8 opacity-0 animate-up-1">
            <span className="block w-7 h-px bg-accent" />
            Based in Bokaro, India
          </p>

          {/* Title */}
          <h1 className="font-syne text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-none tracking-[-0.03em] text-fg opacity-0 animate-up-2">
            Building things
          </h1>
          <p className="font-syne text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-none tracking-[-0.03em] text-muted mb-10 opacity-0 animate-up-3">
            for the web —
          </p>

          {/* Animated role */}
          <div className="inline-block mb-10 opacity-0 animate-up-4">
            <span className="relative font-syne text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-none tracking-[-0.03em] text-accent inline-block">
              Full Stack.
              <span className="absolute left-0 -bottom-1.5 h-0.5 w-0 bg-accent animate-drawline" />
            </span>
          </div>

          {/* Description */}
          <p className="text-[15px] text-muted max-w-[420px] leading-[1.75] opacity-0 animate-up-5">
            I&apos;m Sahil. I design and build digital products end to end — from a
            clean UI to a solid backend, and everything in between.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 mt-12 opacity-0 animate-up-6">
            <a
              href="#projects"
              data-hover="Work"
              className="inline-block font-inter text-[12px] font-medium tracking-[0.06em] uppercase px-7 py-3 rounded-[1px] bg-accent text-bg transition-all duration-200 hover:bg-[#D4C5AB] hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="https://drive.google.com/file/d/1Somr4xt8ouUNknjAmgHrVIdu6FfaCsAn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-hover="Resume"
              className="inline-block font-inter text-[12px] font-medium tracking-[0.06em] uppercase px-7 py-3 rounded-[1px] border border-border text-muted bg-transparent transition-all duration-200 hover:border-muted hover:text-fg hover:-translate-y-0.5"
            >
              Resume ↗
            </a>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border px-14 pt-16 pb-12 overflow-hidden max-sm:px-5 max-sm:pt-10 max-sm:pb-8">
        {/* Big animated words */}
        <div
          className="flex items-baseline justify-center gap-3 mb-12 cursor-default flex-wrap"
          aria-label="Let's make something"
        >
          {footerWords.map((w) => (
            <span
              key={w.text}
              className={`font-syne font-bold leading-none tracking-[-0.03em] text-[clamp(2.8rem,7vw,6rem)] inline-block transition-[color,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 ${
                w.dim
                  ? "text-muted hover:text-[#8A8880]"
                  : "text-fg hover:text-accent"
              }`}
            >
              {w.text}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center border-t border-border pt-6 text-[11px] text-muted tracking-[0.04em] max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <span>© 2026 Sahil Sharma</span>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover={s.label}
                className="text-muted no-underline text-[11px] tracking-[0.06em] uppercase transition-colors duration-200 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
