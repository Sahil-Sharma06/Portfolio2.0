"use client";

import React from "react";
import { useReveal } from "./useReveal";

function RevealDiv({
  children,
  className = "",
  delay = "delay-0",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
        {/* Section label */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-muted mb-16">
          <span>About</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-[220px_1fr] gap-24 items-start max-sm:grid-cols-1 max-sm:gap-10">
          {/* Sidebar */}
          <RevealDiv>
            <h2 className="font-syne font-semibold text-[1.4rem] leading-tight mb-1 text-fg">
              Sahil Sharma
            </h2>
            <p className="text-[12px] text-muted tracking-[0.04em] mb-6 leading-relaxed">
              CSE Student
              <br />
              SRM University, Andhra Pradesh
            </p>
            <div className="flex flex-col gap-2 text-[12px] text-muted">
              <span className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0114 0c0 3.5-3 7-7 11z"/>
                  <circle cx="12" cy="10" r="2"/>
                </svg>
                Bokaro, India
              </span>
              <span className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
                Google Developers Group
              </span>
            </div>
          </RevealDiv>

          {/* Body */}
          <RevealDiv delay="delay-150">
            <div className="text-[#A8A49C] text-[15px] leading-[1.85]">
              <p>
                I&apos;m a proactive developer with a foundation in Computer Science and
                a focus on building things that matter. My work spans{" "}
                <strong className="text-fg font-medium">interactive web applications</strong>{" "}
                and{" "}
                <strong className="text-fg font-medium">machine learning tools</strong>{" "}
                — I care about both the craft and the impact.
              </p>
              <p className="mt-5">
                At NextTech Lab I deepened my React and JavaScript skills, building
                data-driven experiences with care for detail. Projects like{" "}
                <strong className="text-fg font-medium">NyxAPI</strong> and{" "}
                <strong className="text-fg font-medium">Adhikar</strong> come from a
                real frustration with tools that are clunky or inaccessible.
              </p>
              <p className="mt-5">
                Outside the code editor, I&apos;ve competed at EthGlobal New Delhi
                (Winner), HackSRM 4.0 (Runner Up), and the Appwrite Hackathon
                (Finalist). I learn best under pressure.
              </p>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
