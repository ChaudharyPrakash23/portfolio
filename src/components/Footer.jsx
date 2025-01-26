import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-cyan-800 text-white py-4 mx-1 rounded-md mb-1">
      <div className="flex justify-center space-x-10">
        <a
          href="https://www.facebook.com/profile.php?id=100011266808860"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={30}
            className="hover:text-blue-600 transition-all"
          />
        </a>
        <a
          href="https://www.instagram.com/prakash_chaudhary023/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="hover:text-pink-600 transition-all"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/prakash-chaudhary-24ab2527a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="hover:text-blue-700 transition-all"
          />
        </a>
        <a
          href="https://github.com/ChaudharyPrakash23"
          target="_blank"
          rel="noopener noreferrer"
        >
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
