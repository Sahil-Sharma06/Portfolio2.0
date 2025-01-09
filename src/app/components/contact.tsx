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
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon

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
            <span>thisissharma@gmail.com</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-white border border-gray-500 rounded-lg">
            <FaMapMarkerAlt />
            <span>Bokaro Steel City, India</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative z-10 text-center">
        <h2 className="mb-8 text-4xl font-bold">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Sahil-Sharma06/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaGithub className="text-gray-800" />
            <span>GitHub</span>
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/Sharmaa_ji06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaTwitter className="text-black" />
            <span>Twitter</span>
          </a>
          {/* Medium */}
          <a
            href="https://medium.com/@thisisssharma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaMedium className="text-black" />
            <span>Medium</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sahil-sharma-a735b4247/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaLinkedin className="text-blue-700" />
            <span>LinkedIn</span>
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/SSharma06/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <SiLeetcode className="text-orange-500" />
            <span>LeetCode</span>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sharma_ji0612/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <FaInstagram className="text-purple-500" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
