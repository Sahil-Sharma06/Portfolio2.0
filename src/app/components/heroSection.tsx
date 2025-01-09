"use client";

import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import About from "./aboutme";
import Services from "./services";
import Projects from "./projects";
import Contact from "./contact";

export default function HeroSection() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen pt-[106px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black font-poppins"
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay"></div>

        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-6 lg:px-10">
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Hey I&apos;m Sahil Sharma
            <br />
            Full Stack Developer
          </h1>

          {/* Subtitle Text */}
          <div className="flex justify-center mt-6">
            <p className="max-w-lg text-base text-center text-gray-300 font-open-sans sm:text-lg md:text-xl lg:text-2xl">
              Building seamless digital experiences from front to back, one
              stack at a time.
            </p>
          </div>

          {/* Decorative Graphic */}
          <div className="mt-10 w-full max-w-xs h-56 sm:max-w-md sm:h-72 md:max-w-3xl md:h-96 lg:h-[450px]">
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
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="experience">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
