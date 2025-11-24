import React from "react";
import {
  FaMicrosoft,
  FaShoppingCart,
  FaLaptopCode,
  FaBook,
  FaServer,
} from "react-icons/fa"; 
import { WiDaySunny } from 'react-icons/wi';

const Projects = () => {
  return (
    <div className="bg-white mt-1 rounded-lg p-4 shadow-md m-1">
      <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 italic">
        <p className="my-4">My Projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 m-2">
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <WiDaySunny className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Weather App
          </h3>
          <p className="text-gray-600 mt-2">
            A React app that shows the weather of your current location in
            real-time.
          </p>
          <a
            href="https://myweatherapps1.netlify.app/"
            className="text-blue-500 mt-2"
          >
            View Project
          </a>
        </div>

        {/* Task Assignment System Using React */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaMicrosoft className="h-12 w-12 text-red-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Task Assignment System
          </h3>
          <p className="text-gray-600 mt-2">
            A task management system built with React for organizing tasks and
            assigning them to users.
          </p>
          <a href="#" className="text-blue-500 mt-2">
            View Project
          </a>
        </div>

        {/* Complete E-commerce Website */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaShoppingCart className="h-12 w-12 text-yellow-500" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Complete E-commerce Website
          </h3>
          <p className="text-gray-600 mt-2">
            A fully functional e-commerce website with payment gateway
            integration.
          </p>
          <a href="#" className="text-blue-500 mt-2">
            View Project
          </a>
        </div>

        {/* Portfolio Website */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaLaptopCode className="h-12 w-12 text-green-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Portfolio Website
          </h3>
          <p className="text-gray-600 mt-2">
            A personal portfolio website to showcase my skills, projects, and
            experience.
          </p>
          <a href="#" className="text-blue-500 mt-2">
            View Project
          </a>
        </div>

        {/* Blogging Platform */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaBook className="h-12 w-12 text-purple-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Blogging Platform
          </h3>
          <p className="text-gray-600 mt-2">
            A platform to write and manage blogs, with features for commenting
            and liking posts.
          </p>
          <a href="#" className="text-blue-500 mt-2">
            View Project
          </a>
        </div>

        {/* MERN Stack Task Management System */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaServer className="h-12 w-12 text-indigo-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            MERN Stack Task Management
          </h3>
          <p className="text-gray-600 mt-2">
            A full-stack task management system built with MongoDB, Express,
            React, and Node.js (MERN stack). Features include user
            authentication, task creation, assignment, deadlines, and status
            tracking.
          </p>
          <a href="#" className="text-blue-500 mt-2">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
