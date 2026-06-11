"use client";

import React from "react";
import { useReveal } from "./useReveal";

const projects = [
  {
    idx: "— 1",
    name: "Snipster",
    desc: "A full-stack code snippet manager and sharing platform. Save, organise, and share reusable snippets — built with Next.js 16.",
    href: "https://snipster-silk.vercel.app/",
    badge: null,
  },
  {
    idx: "— 2",
    name: "Scouter",
    desc: "A developer reconnaissance tool for scanning and surfacing project insights — fast, lightweight, and built for the terminal.",
    href: "https://github.com/Sahil-Sharma06/Scouter",
    badge: "Building",
  },
  {
    idx: "— 3",
    name: "NyxAPI",
    desc: "A mock API platform that lets frontend devs simulate RESTful endpoints without waiting on the backend.",
    href: "https://github.com/Sahil-Sharma06/NyxAPI",
    badge: null,
  },
];

const moreProjects = [
  "RojPagar", "Talk Trail", "Adhikar", "DISS-TRACT", "QliQ", "and more —",
];

function ProjectItem({ project }: { project: typeof projects[number] }) {
  const { ref, visible } = useReveal();
  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover="View"
      className={`group relative grid grid-cols-[52px_1fr_auto] gap-8 items-center py-8 border-b border-border no-underline text-inherit transition-[opacity,transform,padding-left] duration-500 hover:pl-4 max-sm:grid-cols-[36px_1fr_24px] max-sm:gap-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Accent bar on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <span className="text-[11px] text-muted font-syne self-start pt-1">
        {project.idx}
      </span>

      <div>
        <div className="flex items-center gap-3 mb-1.5">
          <h3 className="font-syne font-semibold text-[1.3rem] text-fg transition-colors duration-200 group-hover:text-accent">
            {project.name}
          </h3>
          {project.badge && (
            <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border rounded-[1px] text-[#8CA8C5] border-[#1e2d3a] leading-none">
              {project.badge}
            </span>
          )}
        </div>
        <p className="text-[13px] text-muted leading-[1.65] max-w-[500px]">
          {project.desc}
        </p>
      </div>

      <span className="text-lg text-muted self-center transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}

function MoreProjects() {
  const { ref, visible } = useReveal();
  // Duplicate for seamless loop
  const items = [...moreProjects, ...moreProjects];

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href="https://github.com/Sahil-Sharma06?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      data-hover="GitHub"
      className={`group relative flex items-center justify-between border-b border-border py-8 no-underline text-inherit overflow-hidden transition-[opacity,transform,padding-left] duration-500 hover:pl-4 max-sm:flex-wrap max-sm:gap-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      {/* Scrolling marquee */}
      <div
        className="overflow-hidden flex-1 max-w-[520px]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div className="flex gap-10 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={i}
              className="font-syne text-[12px] text-muted tracking-[0.1em] uppercase flex-shrink-0"
            >
              <span className="text-accent mr-2">·</span>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Right CTA */}
      <div className="flex items-center gap-6 flex-shrink-0 ml-6">
        <span className="font-syne text-[1rem] font-semibold text-fg transition-colors duration-200 group-hover:text-accent">
          All repositories
        </span>
        <span className="text-lg text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
        {/* Section label */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-muted mb-16">
          <span>Work</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col">
          {projects.map((p) => (
            <ProjectItem key={p.name} project={p} />
          ))}
          <MoreProjects />
        </div>
      </div>
    </section>
  );
}
