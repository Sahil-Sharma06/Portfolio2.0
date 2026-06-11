"use client";

import React from "react";
import { useReveal } from "./useReveal";

const skillGroups = [
  {
    cat: "Languages",
    pills: ["JavaScript", "TypeScript", "Python", "Java", "C / C++"],
  },
  {
    cat: "Frameworks",
    pills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind"],
  },
  {
    cat: "Tools & DB",
    pills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Git", "Figma", "Postman"],
  },
];

function SkillRow({ cat, pills, delay }: { cat: string; pills: string[]; delay: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-[100px_1fr] gap-8 items-center max-sm:grid-cols-1 max-sm:gap-3 transition-all duration-700 ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <span className="text-[11px] text-muted tracking-[0.08em] uppercase">{cat}</span>
      <div className="flex flex-wrap gap-2.5">
        {pills.map((pill) => (
          <span
            key={pill}
            className="text-[12px] px-3.5 py-1.5 border border-border rounded-[1px] text-muted tracking-[0.02em] transition-colors duration-200 cursor-default hover:text-accent hover:border-accent"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
        {/* Section label */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-muted mb-16">
          <span>Skills</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col gap-10">
          {skillGroups.map((group, i) => (
            <SkillRow
              key={group.cat}
              cat={group.cat}
              pills={group.pills}
              delay={i === 0 ? "delay-0" : i === 1 ? "delay-150" : "delay-300"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
