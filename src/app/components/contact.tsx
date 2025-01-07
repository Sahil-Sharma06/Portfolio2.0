"use client";

import React from "react";
import { FaInstagram, FaGithub, FaTwitter, FaMedium, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-10 text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Get in Touch Section */}
      <div className="relative z-10 mb-16 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">
          Get in <span className="text-purple-500">touch</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Email */}
          <div className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-white border border-gray-500 rounded-lg">
            <FaEnvelope />
            thisissharma@gmail.com
          </div>
          {/* Phone */}
         
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-white border border-gray-500 rounded-lg">
            <FaMapMarkerAlt />
            Bokaro Steel City, India
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative z-10 text-center">
        <h2 className="mb-8 text-4xl font-bold">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaInstagram className="text-purple-500" />
            Instagram
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaGithub className="text-gray-800" />
            GitHub
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaTwitter className="text-black" />
            Twitter
          </a>
          {/* Medium */}
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaMedium className="text-black" />
            Medium
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaLinkedin className="text-blue-700" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
