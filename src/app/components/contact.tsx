"use client";

import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 text-white bg-gradient-to-b from-gray-900 to-black font-poppins">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Get in Touch Section */}
      <div className="relative z-10 mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Get in <span className="text-purple-500">Touch</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Email */}
          <div className="flex items-center gap-2 px-4 py-2 text-base font-medium text-white border border-gray-500 rounded-lg md:text-lg font-open-sans">
            <FaEnvelope />
            <span>thisissharma@gmail.com</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 text-base font-medium text-white border border-gray-500 rounded-lg md:text-lg font-open-sans">
            <FaMapMarkerAlt />
            <span>Bokaro Steel City, India</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative z-10 text-center">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Sahil-Sharma06/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaGithub className="text-gray-800" />
            <span>GitHub</span>
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/Sharmaa_ji06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaTwitter className="text-black" />
            <span>Twitter</span>
          </a>
          {/* Medium */}
          <a
            href="https://medium.com/@thisisssharma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaMedium className="text-black" />
            <span>Medium</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sahil-sharma-a735b4247/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaLinkedin className="text-blue-700" />
            <span>LinkedIn</span>
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/SSharma06/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <SiLeetcode className="text-orange-500" />
            <span>LeetCode</span>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sharma_ji0612/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaInstagram className="text-purple-500" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
