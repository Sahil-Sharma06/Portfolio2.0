"use client";

import React from "react";
import { useReveal } from "./useReveal";

const achievements = [
  {
    year: "2025",
    event: "EthGlobal New Delhi",
    project: "AI-powered clusters for crypto investing.",
    badge: "Winner",
    badgeClass: "text-accent border-accent",
  },
  {
    year: "2024",
    event: "Unfold 2024",
    project: "QliQ — NFT metadata for privacy-first Web3 ads.",
    badge: "Participant",
    badgeClass: "text-muted border-border",
  },
  {
    year: "2023",
    event: "Appwrite Hackathon",
    project: "NyxAPI — mock API platform for faster frontend dev.",
    badge: "Finalist",
    badgeClass: "text-muted border-border",
  },
  {
    year: "2022",
    event: "HackSRM 4.0",
    project: "DISS-TRACT — browser extension to kill distractions.",
    badge: "Runner Up",
    badgeClass: "text-[#8CA8C5] border-[#1e2d3a]",
  },
];

function AchievementRow({ a }: { a: typeof achievements[number] }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-[80px_1fr_120px] gap-10 items-center py-7 border-b border-border max-sm:grid-cols-[60px_1fr] max-sm:gap-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <span className="font-syne text-[12px] text-muted tracking-[0.04em]">
        {a.year}
      </span>
      <div>
        <p className="font-syne font-semibold text-[1rem] text-fg mb-1">
          {a.event}
        </p>
        <p className="text-[12px] text-muted">{a.project}</p>
      </div>
      <span
        className={`hidden sm:block justify-self-end text-[10px] tracking-[0.1em] uppercase px-3 py-1 border rounded-[1px] ${a.badgeClass}`}
      >
        {a.badge}
      </span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-border">
      <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
        {/* Section label */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-muted mb-16">
          <span>Achievements</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col">
          {achievements.map((a) => (
            <AchievementRow key={a.event} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
