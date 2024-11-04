"use client";

import React from 'react';

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-10 text-white md:flex-row bg-gradient-to-b from-black to-gray-900">
      {/* Grid Overlay Background */}
      <div className="grid-overlay"></div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 md:mr-10">
        <div className="relative mb-4">
          <span className="absolute px-3 py-1 text-lg font-bold text-black transform bg-white -top-10 left-2 rotate-12">
            Hey
          </span>
          <h2 className="text-5xl font-bold leading-tight">
            Welcome to my <br /> Creative Portfolio
          </h2>
        </div>
        <p className="max-w-lg mt-4 text-lg leading-relaxed">
          I am passionate about creating visually stunning and functional solutions that communicate effectively.
          I enjoy bringing ideas to life and creating experiences that engage users while solving their problems.
        </p>
        <p className="max-w-lg mt-4 text-lg leading-relaxed">
          My work is driven by a desire to make the digital world more accessible and enjoyable for everyone.
          Let's connect and collaborate to create something amazing!
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="relative z-10 flex justify-center flex-1 mt-10 md:mt-0">
        <div className="rounded-full overflow-hidden w-80 h-80 md:w-[400px] md:h-[400px] shadow-lg">
          <img 
            src="/path/to/dummy-image.jpg" // Replace with the path to a dummy image
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
