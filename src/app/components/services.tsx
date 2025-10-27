"use client";

import React from "react";
import {
  RiNextjsFill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJquery,
  SiGraphql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Services() {
  const skillsRow1 = [
    "Java",
    "C/C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Sass",
    "jQuery",
    "Git",
    "REST APIs",
    "GraphQL",
  ];
  const skillsRow2 = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Bootstrap",
    "FastAPI",
  ];
  const skillsRow3 = [
    "Git",
    "Figma",
    "Firebase",
    "Postman",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
  ];

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "Java":
        return <FaJava className="w-8 h-8 text-red-600" />;
      case "C/C++":
        return <SiCplusplus className="w-8 h-8 text-blue-500" />;
      case "Python":
        return <FaPython className="w-8 h-8 text-blue-400" />;
      case "JavaScript":
        return <IoLogoJavascript className="w-8 h-8 text-yellow-500" />;
      case "TypeScript":
        return <SiTypescript className="w-8 h-8 text-blue-600" />;
      case "HTML":
        return <SiHtml5 className="w-8 h-8 text-orange-600" />;
      case "CSS":
        return <SiCss3 className="w-8 h-8 text-blue-500" />;
      case "Sass":
        return <SiSass className="w-8 h-8 text-pink-500" />;
      case "jQuery":
        return <SiJquery className="w-8 h-8 text-blue-400" />;
      case "Git":
        return <FaGitAlt className="w-8 h-8 text-orange-600" />;
      case "REST APIs":
        return <FaDatabase className="w-8 h-8 text-teal-500" />;
      case "GraphQL":
        return <SiGraphql className="w-8 h-8 text-pink-500" />;
      case "React":
        return <RiReactjsFill className="w-8 h-8 text-blue-400" />;
      case "Next.js":
        return <RiNextjsFill className="w-8 h-8 text-black" />;
      case "Node.js":
        return <FaNodeJs className="w-8 h-8 text-green-600" />;
      case "Express":
        return <SiExpress className="w-8 h-8 text-gray-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="w-8 h-8 text-blue-400" />;
      case "Bootstrap":
        return <SiBootstrap className="w-8 h-8 text-purple-600" />;
      case "FastAPI":
        return <SiFastapi className="w-8 h-8 text-green-500" />;
      case "Figma":
        return <FaFigma className="w-8 h-8 text-pink-500" />;
      case "Firebase":
        return <SiFirebase className="w-8 h-8 text-yellow-500" />;
      case "Postman":
        return <SiPostman className="w-8 h-8 text-orange-500" />;
      case "MySQL":
        return <SiMysql className="w-8 h-8 text-blue-600" />;
      case "MongoDB":
        return <SiMongodb className="w-8 h-8 text-green-500" />;
      case "PostgreSQL":
        return <SiPostgresql className="w-8 h-8 text-blue-500" />;
      default:
        return <RiNextjsFill className="w-8 h-8 text-gray-500" />;
    }
  };

  return (
    <section className="relative min-h-screen p-10 text-white bg-black/50 font-poppins">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="mb-10 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-purple-500">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          {/* Service Card - Web Development */}
          <div className="p-6 transition transform border border-purple-600 rounded-lg bg-gradient-to-br from-gray-800 to-purple-900 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="text-2xl text-purple-400">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <p className="mt-4 text-gray-300 font-open-sans">
              Specializing in creating dynamic, responsive, and user-friendly
              web applications using React, Node.js, and JavaScript. Focus on
              seamless user experiences with robust backend functionality.
            </p>
          </div>

          {/* Service Card - API Development & Integration */}
          <div className="p-6 transition transform border border-purple-600 rounded-lg bg-gradient-to-br from-gray-800 to-purple-900 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="text-2xl text-purple-400">
                <i className="fas fa-palette"></i>
              </div>
              <h3 className="text-xl font-semibold">API Development</h3>
            </div>
            <p className="mt-4 text-gray-300 font-open-sans">
              Skilled in API development using FastAPI and Node.js, creating
              robust, scalable RESTful APIs that facilitate seamless
              communication across systems.
            </p>
          </div>

          {/* Service Card - Database Management */}
          <div className="p-6 transition transform border border-purple-600 rounded-lg bg-gradient-to-br from-gray-800 to-purple-900 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="text-2xl text-purple-400">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="text-xl font-semibold">Database Management</h3>
            </div>
            <p className="mt-4 text-gray-300 font-open-sans">
              Experienced with MySQL, MongoDB, and PostgreSQL for building and
              managing scalable, secure data storage solutions to support your
              application needs.
            </p>
          </div>
        </div>

        {/* Skills Marquee Section */}
        <div className="mt-16 space-y-8 overflow-hidden">
          {[skillsRow1, skillsRow2, skillsRow3].map((skills, rowIndex) => (
            <div
              key={rowIndex}
              className="flex space-x-8 animate-marquee font-open-sans"
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 space-x-3 bg-gray-800 rounded-lg min-w-[150px]"
                >
                  {getSkillIcon(skill)}
                  <p className="text-sm font-semibold text-purple-400">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
