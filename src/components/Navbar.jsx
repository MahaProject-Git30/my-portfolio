import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#2e09d4] to-[#9333EA] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">Mahalakshmi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="#hero" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>   
            <a href="#skills" className="hover:text-yellow-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#4F46E5] to-[#9333EA] px-6 pb-4 transition-all duration-300">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
