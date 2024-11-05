"use client";

import React from 'react';

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-10 text-white md:flex-row bg-gradient-to-b from-black to-gray-900">
      {/* Grid Overlay Background */}
      <div className="grid-overlay"></div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 max-w-5xl px-10 mb-10 md:mb-0 md:mr-10 md:pr-10 lg:pr-20">
        <div className="relative mb-4 text-center md:text-left">
          <h2 className="mb-4 text-5xl font-bold leading-tight">
            About Me
          </h2>
          {/* "Hey" banner */}
          {/* <span className="absolute px-3 py-1 text-lg font-bold text-black transform bg-white -top-8 left-4 rotate-12">
            Hey
          </span> */}
        </div>
        <p className="mt-4 text-xl leading-relaxed text-center md:text-left">
          I’m Sahil Sharma, a passionate and proactive developer with a foundation in Computer Science and Engineering at SRM University, Andhra Pradesh. My journey in tech has been marked by my commitment to building impactful applications, ranging from interactive web projects to advanced machine learning models.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-center md:text-left">
          During my time with NextTech Lab, I honed my skills in front-end development, crafting seamless user experiences and dynamic data-driven functionalities using React and JavaScript. My project portfolio reflects my versatility and depth, featuring works like NyxAPI, a mock API platform, and Adhikar, an AI-powered categorization tool for legal data. With a diverse skill set spanning languages, frameworks, and tools, I bring creativity and technical precision to every project.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-center md:text-left">
          Notable achievements include a second-place finish at HackSRM 4.0 and a core role with the Google Developers Group on campus, which reflect my dedication and drive to excel in the tech field. Whether it's creating productive Chrome extensions or implementing secure backend architectures, I am continually seeking ways to expand my expertise and make a difference in the world of technology.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="relative z-10 flex justify-center flex-1 mt-10 md:mt-0">
        <div className="rounded-full overflow-hidden w-80 h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] shadow-lg">
          <img 
            src="/MyImage.jpg" // Ensure this image exists in the `public` folder
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Vertical decorative lines */}
        <div className="absolute top-0 right-0 flex flex-col justify-center w-10 h-full space-y-2">
          <span className="w-full h-1 bg-gray-700"></span>
          <span className="w-full h-1 bg-gray-700"></span>
          <span className="w-full h-1 bg-gray-700"></span>
          <span className="w-full h-1 bg-gray-700"></span>
        </div>
      </div>
    </section>
  );
}
