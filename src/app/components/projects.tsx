"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NyxAPI",
    image: "/nyx.jpg",
    github: "https://github.com/Sahil-Sharma06/NyxAPI", // Updated GitHub link
    preview: "https://nyxapi.example.com", // Preview link remains unchanged
  },
  {
    title: "RojPagar",
    image: "/RP.jpg",
    github: "https://github.com/Sahil-Sharma06/RojPagar", // Updated GitHub link
    preview: "https://rp-management.example.com", // Preview link remains unchanged
  },
  {
    title: "Talk Trail",
    image: "/tt.jpg",
    github: "https://github.com/Sahil-Sharma06/Talk-Trail", // Updated GitHub link
    preview: "https://tt-scheduler.example.com", // Preview link remains unchanged
  },
  {
    title: "Adhikar",
    image: "/adhikar.jpg",
    github: "https://github.com/Sahil-Sharma06/Adhikar", // Updated GitHub link
    preview: "https://adhikar.example.com", // Preview link remains unchanged
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen p-10 text-white bg-gradient-to-t from-gray-900 to-black">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Title Section */}
      <div className="relative z-10 mb-16 text-center">
        <h2 className="text-5xl font-extrabold leading-tight tracking-wide text-purple-500 md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r drop-shadow-lg">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300 md:text-xl">
          A showcase of the innovative work I’ve done, blending creativity with functionality.
        </p>
      </div>

      {/* Project Grid with + Lines */}
      <div className="relative z-10 grid max-w-6xl grid-cols-2 grid-rows-2 mx-auto gap-x-20 gap-y-20">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-300 -translate-y-1/2"></div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[4px] bg-gray-300 -translate-x-1/2"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-[400px] h-[400px] mx-auto overflow-hidden border border-gray-700 rounded-lg shadow-lg group"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex space-x-4">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                  title="View GitHub"
                >
                  <FaGithub size={24} />
                </a>
                {/* Live Preview Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500"
                  title="Github"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
