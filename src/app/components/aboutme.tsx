"use client";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 text-white md:flex-row bg-gradient-to-b from-black to-gray-900">
      {/* Grid Overlay Background */}
      <div className="grid-overlay"></div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 max-w-5xl px-4 sm:px-8 md:px-10 lg:pr-20 md:mb-0 md:mr-10">
        <div className="relative mb-6 text-center md:text-left">
          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            About Me
          </h2>
        </div>
        <p className="mt-4 text-base leading-relaxed text-center text-gray-300 md:text-left sm:text-lg lg:text-xl">
          I’m Sahil Sharma, a passionate and proactive developer with a
          foundation in Computer Science and Engineering at SRM University,
          Andhra Pradesh. My journey in tech has been marked by my commitment
          to building impactful applications, ranging from interactive web
          projects to advanced machine learning models.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-center text-gray-400 md:text-left sm:text-base lg:text-lg">
          During my time with NextTech Lab, I honed my skills in front-end
          development, crafting seamless user experiences and dynamic
          data-driven functionalities using React and JavaScript. My project
          portfolio reflects my versatility and depth, featuring works like
          NyxAPI, a mock API platform, and Adhikar, an AI-powered categorization
          tool for legal data. With a diverse skill set spanning languages,
          frameworks, and tools, I bring creativity and technical precision to
          every project.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-center text-gray-400 md:text-left sm:text-base lg:text-lg">
          Notable achievements include a second-place finish at HackSRM 4.0 and
          a core role with the Google Developers Group on campus, which reflect
          my dedication and drive to excel in the tech field. Whether it&apos;s
          creating productive Chrome extensions or implementing secure backend
          architectures, I am continually seeking ways to expand my expertise
          and make a difference in the world of technology.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative z-10 flex justify-center flex-1 mt-10 md:mt-0">
        <div className="overflow-hidden rounded-full shadow-lg w-64 h-64 sm:w-72 sm:h-72 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
          <Image
            src="/MyImage.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
