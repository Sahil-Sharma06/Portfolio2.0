"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NyxAPI",
    image: "/nyx.jpg",
    github: "https://github.com/Sahil-Sharma06/NyxAPI",
    preview: "https://nyxapi.example.com",
  },
  {
    title: "RojPagar",
    image: "/RP.jpg",
    github: "https://github.com/Sahil-Sharma06/RojPagar",
    preview: "https://rp-management.example.com",
  },
  {
    title: "Talk Trail",
    image: "/tt.jpg",
    github: "https://github.com/Sahil-Sharma06/Talk-Trail",
    preview: "https://tt-scheduler.example.com",
  },
  {
    title: "Adhikar",
    image: "/adhikar.jpg",
    github: "https://github.com/Sahil-Sharma06/Adhikar",
    preview: "https://adhikar.example.com",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-12 text-white bg-black/50 font-poppins">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Title Section */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-wide text-purple-500 md:text-5xl lg:text-6xl drop-shadow-lg">
          Creations
        </h2>
        <p className="mt-4 text-lg text-gray-300 font-open-sans md:text-xl">
          A showcase of the innovative work I&apos;ve done, blending creativity with functionality.
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-2">
        {/* Dynamic Horizontal Line */}
        <div className="absolute top-1/2 left-0 hidden w-full h-[4px] bg-gray-300 transform -translate-y-1/2 lg:block"></div>

        {/* Dynamic Vertical Line */}
        <div className="absolute left-1/2 top-0 hidden w-[4px] h-full bg-gray-300 transform -translate-x-1/2 lg:block"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full max-w-sm mx-auto overflow-hidden border border-gray-700 rounded-lg shadow-lg group sm:w-[350px] md:w-[400px] h-[350px]"
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
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
              <h3 className="text-lg font-semibold text-white sm:text-xl font-poppins">
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
                  className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 font-open-sans"
                  title="Live Preview"
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
