"use client";

import React from "react";
import { FaTrophy, FaCalendar } from "react-icons/fa";

const hackathons = [
  {
    year: "2025",
    title: "EthGlobal NewDelhi",
    position: "Winner",
    description: "Project: Bringing Simplicity to Crypto Investing Through AI-Powered Clusters",
  },
  {
    year: "2024",
    title: "Unfold 2024",
    position: "Participant",
    description: "Project: QliQ uses NFT metadata for targeted Web3 ads, balancing privacy and revenue.",
  },
  {
    year: "2023",
    title: "Appwrite Hackathon",
    position: "Finalist",
    description: "Project: NyxAPI is a mock API platform that speeds frontend dev by simulating APIs.",
  },
  {
    year: "2022",
    title: "HackSRM 4.0",
    position: "Runner Up",
    description: "Project: DISS-TRACT is a browser extension that blocks distracting sites to help you focus.",
  },
];

export default function Hackathons() {
  return (
    <section className="relative min-h-screen px-6 py-12 text-white bg-black/50 font-poppins">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Title Section */}
      <div className="relative z-10 mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-wide text-purple-500 md:text-5xl lg:text-6xl drop-shadow-lg">
          Triumphs
        </h2>
        <p className="mt-4 text-lg text-gray-300 font-open-sans md:text-xl">
          My timeline of innovation, collaboration, and competitive coding experiences.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 left-8 md:left-1/2 md:transform md:-translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="pb-8 space-y-16">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className={`relative flex items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 transform -translate-x-1/2 bg-purple-500 border-4 border-gray-900 rounded-full shadow-lg left-8 md:left-1/2 shadow-purple-500/50"></div>

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="p-6 transition-all duration-300 border border-gray-700 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:border-purple-500 hover:shadow-purple-500/30 hover:scale-[1.02]">
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-semibold text-purple-300 bg-purple-900 bg-opacity-40 rounded-full border border-purple-500 shadow-sm">
                    <FaCalendar size={14} className="mr-2" />
                    <span>{hackathon.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold leading-tight text-white md:text-2xl font-poppins">
                    {hackathon.title}
                  </h3>

                  {/* Position Badge */}
                  <div className="inline-flex items-center px-3 py-1 mb-4 space-x-2 bg-yellow-900 bg-opacity-20 border border-yellow-500 rounded-full">
                    <FaTrophy className="text-yellow-400" size={14} />
                    <span className="text-base font-medium text-yellow-400 font-open-sans">
                      {hackathon.position}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-300 font-open-sans">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
