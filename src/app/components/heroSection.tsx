"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import About from "./aboutme";
import Services from "./services";
import Projects from "./projects"; // Import the Projects component
import Contact from "./contact";
export default function HeroSection() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[974px] pt-[106px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Main Title */}
          <h1 className="text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Hey I&apos;m Sahil Sharma
            <br />
            Full Stack Developer
          </h1>

          {/* Subtitle Text */}
          <div className="flex justify-center mt-6">
            <p className="max-w-xl text-lg text-center text-gray-300 md:text-xl lg:text-2xl">
              Building seamless digital experiences from front to back, one stack at a time.
            </p>
          </div>

          {/* Decorative Graphic */}
          <div className="mt-10 w-full max-w-5xl h-72 md:h-96 lg:h-[450px] bg-contain bg-no-repeat">
            <Image
              src="/heroImage.png"
              alt="Decorative Graphic"
              className="object-cover w-full h-full"
              width={800}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
        <Projects />

        <Contact/>
    </div>
  );
}
