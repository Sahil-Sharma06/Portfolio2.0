"use client";

import React, { useState } from "react";
import { useReveal } from "./useReveal";

const socials = [
  { label: "GitHub",   href: "https://github.com/Sahil-Sharma06/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sahil-sharma-a735b4247/" },
  { label: "Twitter",  href: "https://x.com/Sharmaa_ji06" },
  { label: "Medium",   href: "https://medium.com/@thisisssharma" },
  { label: "LeetCode", href: "https://leetcode.com/u/SSharma06/" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const left = useReveal();
  const right = useReveal();

  const handleCopy = () => {
    navigator.clipboard.writeText("thisisssharma@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
        {/* Section label */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-muted mb-16">
          <span>Contact</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex justify-between items-end gap-12 flex-wrap max-sm:flex-col max-sm:items-start">
          {/* Left */}
          <div
            ref={left.ref as React.Ref<HTMLDivElement>}
            className={`transition-all duration-700 ${
              left.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="font-syne font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,5vw,3.5rem)] text-fg mb-6">
              Got a project?
              <br />
              Let&apos;s <span className="text-accent">talk.</span>
            </h2>
            <p className="text-[14px] text-muted max-w-[340px] leading-relaxed">
              I&apos;m open to freelance work, collaborations, and interesting
              problems. Don&apos;t hesitate to reach out.
            </p>
          </div>

          {/* Right */}
          <div
            ref={right.ref as React.Ref<HTMLDivElement>}
            className={`flex flex-col items-end gap-5 max-sm:items-start transition-all duration-700 delay-150 ${
              right.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Email */}
            <button
              onClick={handleCopy}
              data-hover="Copy"
              className="font-syne text-[1rem] text-fg border-b border-muted pb-0.5 transition-colors duration-200 hover:text-accent hover:border-accent bg-transparent cursor-pointer"
              title="Click to copy"
            >
              thisisssharma@gmail.com
            </button>

            {/* Copy toast */}
            {copied && (
              <span className="text-[11px] text-accent tracking-wide">
                Copied to clipboard ✓
              </span>
            )}

            {/* Socials */}
            <div className="flex gap-6 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover={s.label}
                  className="text-[11px] tracking-[0.08em] uppercase text-muted no-underline transition-colors duration-200 hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
