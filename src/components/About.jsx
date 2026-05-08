import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-2xl"></div>

            {/* Profile Image */}
            <img
              src="/images/about.png"
              alt="Mahalakshmi"
              className="relative w-[400px] md:w-[550px] rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition duration-500" />

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-1/2">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About Me
          </h2>

          {/* About Text */}
          <p className="text-lg leading-relaxed text-gray-200">
            Hello, I'm Mahalakshmi from Kovilpatti. I completed
            my B.Sc. Physics in 2017 and spent three years
            preparing for government competitive exams, which
            improved my patience, focus, and determination.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-200">
            Later, I worked in my family business and gained
            valuable real-life responsibilities and communication
            skills. In 2024, I started my journey in web
            development by completing a Frontend Development
            course in Madurai.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-200">
            I also completed a 3-month internship at Astro Web
            Solution, where I worked on real-time web projects
            using modern technologies. Recently, I completed a
            MERN Full Stack Development course at GUVI and built
            responsive full-stack web applications using React.js,
            Node.js, Express.js, and MongoDB.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400">
                2025
              </h3>
              <p className="text-gray-200 mt-1">
                MERN Stack Completed
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400">
                3+
              </h3>
              <p className="text-gray-200 mt-1">
                Real Projects Built
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;