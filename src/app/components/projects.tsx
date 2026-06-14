"use client";

import React from "react";
import { useReveal } from "./useReveal";

const projects = [
  {
    idx: "— 1",
    name: "Snipster",
    oneliner: "Snipster is a developer productivity platform that helps engineers save, organize, and instantly retrieve reusable code snippets.",
    tech: ["Next.js", "MongoDB", "Auth.js", "Tailwind"],
    href: "https://snipster-silk.vercel.app/",
    building: false,
  },
  {
    idx: "— 2",
    name: "Scouter",
    oneliner: "Scouter is a multi-agent job intelligence platform that turns a job URL into a structured JD summary, company research brief, fit score, and outreach email.",
    tech: ["Node.js", "TypeScript", "CLI"],
    href: "https://github.com/Sahil-Sharma06/Scouter",
    building: true,
  },
  {
    idx: "— 3",
    name: "NyxAPI",
    oneliner: "Mock API platform that simulates RESTful endpoints so frontend devs can build without waiting on the backend.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    href: "https://github.com/Sahil-Sharma06/NyxAPI",
    building: false,
  },
];

const moreProjects = [
  "RojPagar", "Talk Trail", "Adhikar", "DISS-TRACT", "QliQ", "and more —",
];

function BuildingTag() {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border rounded-[1px] border-[#3a3830] text-accent whitespace-nowrap"
      style={{ background: "rgba(200,184,154,0.06)" }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-accent"
        style={{ animation: "pulse-dot 1.8s ease-in-out infinite" }}
      />
      Building
    </span>
  );
}

function ProjectItem({ project }: { project: typeof projects[number] }) {
  const { ref, visible } = useReveal();
  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover="View"
      className={`group relative grid grid-cols-[52px_1fr_auto] gap-8 items-start py-8 border-b border-border no-underline text-inherit transition-[opacity,transform,padding-left] duration-500 hover:pl-4 max-sm:grid-cols-[36px_1fr_24px] max-sm:gap-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <span className="text-[11px] text-muted font-syne pt-1">{project.idx}</span>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1.5">
          <h3 className="font-syne font-semibold text-[1.3rem] text-fg transition-colors duration-200 group-hover:text-accent leading-none">
            {project.name}
          </h3>
          {project.building && <BuildingTag />}
        </div>

        <p className="text-[12.5px] text-muted leading-[1.65] mb-3 max-w-[500px] transition-colors duration-300 group-hover:text-[#8A8780]">
          {project.oneliner}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 border border-border rounded-[1px] text-muted tracking-[0.03em] transition-[color,border-color] duration-200 group-hover:text-accent group-hover:border-[#3a3830]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="text-lg text-muted pt-1 transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}

function MoreProjects() {
  const { ref, visible } = useReveal();
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
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <div
        className="overflow-hidden flex-1 max-w-[520px]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div className="flex gap-10 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span key={i} className="font-syne text-[12px] text-muted tracking-[0.1em] uppercase flex-shrink-0">
              <span className="text-accent mr-2">·</span>
              {name}
            </span>
          ))}
        </div>
      </div>

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
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.7); }
        }
      `}</style>

      <section id="projects" className="border-t border-border">
        <div className="px-14 py-28 max-w-[1020px] mx-auto max-sm:px-5 max-sm:py-16">
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
    </>
  );
}
