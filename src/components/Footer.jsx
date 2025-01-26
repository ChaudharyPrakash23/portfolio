import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-cyan-800 text-white py-4 mx-1 rounded-md mb-1">
      <div className="flex justify-center space-x-10">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={30}
            className="hover:text-blue-600 transition-all"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="hover:text-pink-600 transition-all"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="hover:text-blue-700 transition-all"
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="hover:text-gray-600 transition-all" />
        </a>
      </div>
      <div>
      <span className="text-sm md:text-lg flex justify-center my-4">
          &copy; {currentYear} Prakash Chaudhary. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
