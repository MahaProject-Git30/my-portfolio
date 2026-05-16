import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const projects = [

    // PROJECT 1
    {
      title: "Online Vehicle Rental System",
      desc:
        "A complete MERN stack vehicle rental platform with user authentication, vehicle booking, admin dashboard, payment flow, and responsive UI design.",

      tech:
        "React JS, Node.js, Express.js, MongoDB, Tailwind CSS",

      live: "https://onlinevehical.netlify.app",

      frontend:
        "https://github.com/MahaProject-Git30/vehicle-rental-client",

      backend:
        "https://github.com/MahaProject-Git30/vehicle-rental-server",

      image: "/images/online.png",
    },

    // PROJECT 2
    {
      title: "Smart Expense Tracker",

      desc:
        "MERN stack expense tracker application to manage income and expenses with charts, transaction history, authentication, and dashboard analytics.",

      tech:
        "React JS, Javascript, Tailwind CSS",

      live: "https://smartexpensetrac.netlify.app",

      frontend:
        "https://github.com/maharichu30/smart-expense-tracker",


      image: "/images/smartexpense.png",
    },

    // PROJECT 3
    {
      title: "Invoice Builder",

      desc:
        "A full-stack invoice builder application with responsive design, user authentication, and dynamic invoice generation.",

      tech:
        "React JS, Javascript, Tailwind CSS",

      live: "https://invoiceformb.netlify.app",

      frontend:
        "https://github.com/maharichu30/invoice",


      image: "/images/invoices.png",
    },

  ];

  // PAGINATION
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 3;

  // NEXT
  const nextSlide = () => {
    if (currentIndex + cardsPerPage < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // PREVIOUS
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are some complete MERN stack projects showcasing
            frontend development, backend APIs, authentication,
            database management, and responsive UI design.
          </p>

        </div>

        {/* ARROWS */}
        <div className="flex justify-end gap-4 mt-10 mb-8">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((project, index) => (

              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-gray-200 leading-relaxed text-sm">
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="mt-5">

                    <h4 className="font-semibold text-yellow-300 mb-2">
                      Tech Stack:
                    </h4>

                    <p className="text-sm text-gray-100 leading-relaxed">
                      {project.tech}
                    </p>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3 mt-6">

                    {/* LIVE */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F59E0B] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#d97706] hover:scale-105 transition duration-300 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    {/* FRONTEND */}
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
                    >
                      <FaGithub />
                      Frontend
                    </a>

                    {/* BACKEND */}
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center gap-2"
                    >
                      <FaGithub />
                      Backend
                    </a>

                  </div>

                </div>

              </div>

            ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;