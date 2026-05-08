import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "MySQL"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          My Skills
        </h2>

        <p className="text-gray-200 mb-12">
          Technologies I use to build modern web applications
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
          
          {skills.map((skill, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/20 border border-white/30 py-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;