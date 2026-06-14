"use client";

import React from "react";
import { useReveal } from "./useReveal";

const experiences = [
  {
    period: "Jan 2025 — Apr 2025",
    company: "BORD Labs",
    type: "Internship · Remote",
    role: "Full Stack Developer Intern",
    desc: "Developed and maintained full-stack features across the product — owning backend APIs, database design, and frontend integration. Worked in a fast-moving startup environment with a focus on shipping and iteration speed.",
  },
  {
    period: "2022 — Present",
    company: "Freelancer",
    type: "Independent · Remote",
    role: "Full Stack Developer",
    desc: "Designing and shipping web products for clients across various industries — handling everything from initial scoping and UI design to deployment. Building long-term client relationships through reliable, well-crafted work.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    company: "Edunet Foundation",
    type: "Internship · Remote",
    role: "Frontend Developer",
    desc: "Built and iterated on responsive UI components for educational platforms, focusing on accessibility and clean interaction patterns. Collaborated with a cross-functional team to deliver features on tight timelines.",
  },
  {
    period: "Apr 2024 — Jun 2024",
    company: "Buildspace",
    type: "N&W Member · Remote · Part-time",
    role: "Builder",
    desc: "Part of Buildspace's Nights & Weekends cohort — a programme for builders shipping real projects outside of work hours. Used the structured sprints to sharpen product thinking and move ideas from zero to live.",
  },
  {
    period: "Feb 2023 — Oct 2023",
    company: "Norman Lab (NextTech Lab)",
    type: "Associate · SRM University, AP",
    role: "Full Stack Developer",
    desc: "Worked as an associate at NextTech Lab, contributing to full-stack development across internal and client-facing projects. Deepened skills in React and JavaScript while building data-driven experiences with a focus on clean UI and robust backend integration.",
  },
];

function ExperienceRow({ item, index }: { item: typeof experiences[number]; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`group relative grid grid-cols-[200px_1fr] gap-12 items-start py-10 border-b border-border max-sm:grid-cols-1 max-sm:gap-3 transition-[opacity,transform,padding-left,background] duration-500 hover:pl-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent to-transparent scale-y-0 origin-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
      <span className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,184,154,0.03)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

      <div className="relative">
        <p className="mb-2 text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-300 group-hover:text-accent">
          {item.period}
        </p>
        <p className="mb-1 text-[1rem] font-syne font-semibold text-fg transition-[letter-spacing] duration-300 group-hover:tracking-[0.02em]">
          {item.company}
        </p>
        <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.04em] text-muted">
          <span className="inline-block h-1 w-1 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:scale-100" />
          {item.type}
        </p>
      </div>

      <div className="overflow-hidden">
        <p className="relative inline-block mb-3 font-syne text-[1rem] font-semibold text-accent">
          {item.role}
          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
        </p>
        <p className="max-w-[500px] text-[13px] leading-[1.75] text-muted transition-[color,transform] duration-300 group-hover:text-[#9A9690] group-hover:-translate-y-px">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-[1020px] px-14 py-28 max-sm:px-5 max-sm:py-16">
        <div className="mb-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.12em] text-muted">
          <span>Experience</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col">
          {experiences.map((item, index) => (
            <ExperienceRow key={`${item.company}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}