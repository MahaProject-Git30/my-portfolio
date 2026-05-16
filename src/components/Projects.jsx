import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Online Vehicle Rental System",
      desc: "Full stack vehicle rental application with booking, authentication, and responsive UI.",
      live: "https://onlinevehical.netlify.app",

      // FRONTEND SOURCE
      frontend:
        "https://github.com/MahaProject-Git30/vehicle-rental-client",

      // BACKEND SOURCE
      backend:
        "https://github.com/MahaProject-Git30/vehicle-rental-server",

      image: "/images/online.png",

      fullstack: true,
    },

    {
      title: "Invoice Builder",
      desc: "Invoice generator web application with modern responsive design.",
      live: "https://invoiceformb.netlify.app",

      frontend:
        "https://github.com/yourname/invoice-builder",

      image: "/images/invoices.png",

      fullstack: false,
    },

    {
      title: "Smart Expense Tracker",
      desc: "Expense tracking application with charts and income management.",
      live: "https://smartexpensetrac.netlify.app",

      frontend:
        "https://github.com/yourname/expense-tracker",

      image: "/images/smartexpense.png",

      fullstack: false,
    },

  ];

  // PAGINATION
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex + cardsPerPage < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

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

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            My Projects
          </h2>

          <p className="text-gray-200 mb-12">
            Here are some of the projects I have built
          </p>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-end gap-4 mb-8">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((project, index) => (

              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-200 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">

                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F59E0B] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#d97706] hover:scale-105 transition duration-300"
                    >
                      View Live
                    </a>

                    {/* Frontend Source */}
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
                    >
                      <FaGithub />
                      Frontend
                    </a>

                    {/* Backend Source ONLY for Full Stack */}
                    {project.fullstack && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center gap-2"
                      >
                        <FaGithub />
                        Backend
                      </a>
                    )}

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