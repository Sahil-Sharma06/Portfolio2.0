"use client";

import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import About from "./aboutme";
import Services from "./services";
import Projects from "./projects";
import Hackathons from "./hackathons";
import Contact from "./contact";

export default function HeroSection() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen pt-[106px] flex items-center justify-center bg-transparent font-poppins"
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay"></div>

        {/* Main Content - Flex Container */}
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-10 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              {/* Main Title */}
              <h1 className="text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Hey I&apos;m Sahil Sharma
                <br />
                Full Stack Developer
              </h1>

              {/* Subtitle Text */}
              <p className="max-w-2xl mx-auto text-lg text-gray-300 font-open-sans sm:text-xl md:text-2xl lg:text-2xl lg:mx-0">
                Building seamless digital experiences from front to back, one
                stack at a time.
              </p>
            </div>

            {/* Right Side - Circular Hero Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
                <Image
                  src="/HERO.png"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                  width={450}
                  height={450}
                  priority
                />
              </div>
            </div>
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

      {/* Hackathons Section */}
      <section id="hackathons">
        <Hackathons />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
