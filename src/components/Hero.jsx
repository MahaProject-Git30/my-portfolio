import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-20 min-h-[90vh] bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-yellow-400">
              Mahalakshmi
            </span>{" "}
            👋
          </h1>

          <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold leading-tight">
            MERN Full Stack Developer
          </h4>

          {/* Sub Text */}
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Frontend & MERN Stack Developer passionate about
            building responsive, modern, and user-friendly
            web applications using React.js, Node.js,
            Express.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Hire Me */}
            <a
              href="#contact"
              className="bg-[#F59E0B] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#d97706] hover:scale-105 transition duration-300 text-center shadow-lg"
            >
              Hire Me
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black hover:scale-105 transition duration-300 text-center"
            >
              View Projects
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/18FIHVxjPOuvjh2OY9iu3RAL0hJszoWNG/view?usp=drive_link"
              download
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition duration-300 text-center font-semibold"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl justify-center md:justify-start">

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Image */}
            <img
              src="/images/profile.jpg"
              alt="Mahalakshmi"
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;