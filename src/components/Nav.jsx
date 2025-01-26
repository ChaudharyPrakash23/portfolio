import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-200 pl-2 pr-6 rounded-md pb-1 mx-1 mt-1">
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-9 text-white font-serif text-lg">
          <Link to="/" className="hover:text-gray-400 hover:font-semibold text-blue-950">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 hover:font-semibold text-blue-950">
            About
          </Link>
          <Link to="/skills" className="hover:text-gray-400 hover:font-semibold text-blue-950">
            Skills
          </Link>
          <Link to="/project" className="hover:text-gray-400 hover:font-semibold text-blue-950">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-400 hover:font-semibold text-blue-950">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block opacity-100 h-auto" : "hidden opacity-0 max-h-0"
        } md:hidden bg-gray-700 mt-2 mb-8 ml-4 p-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center justify-center`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block py-2 text-white hover:bg-gray-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="block py-2 text-white hover:bg-gray-600"
        >
          About
        </Link>
        <Link
          to="/skills"
          onClick={() => setIsOpen(false)}
          className="block py-2 text-white hover:bg-gray-600"
        >
          Skills
        </Link>
        <Link
          to="/project"
          onClick={() => setIsOpen(false)}
          className="block py-2 text-white hover:bg-gray-600"
        >
          Project
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block py-2 text-white hover:bg-gray-600"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
