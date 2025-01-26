import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import SkillsGraph from "../additional datas/SkillsGraph";

const Skills = () => {
  return (
    <div className="bg-white mt-1 rounded-lg p-4 shadow-md m-1">
      <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 italic">
        <p className="my-4">My Skills</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2">
        {/* React.js */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaReact className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">React.js</h3>
          <p className="text-gray-600 mt-2">
            Building dynamic and interactive web applications using React.js and
            component-based architecture.
          </p>
        </div>

        {/* Node.js */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaNodeJs className="h-12 w-12 text-green-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">Node.js</h3>
          <p className="text-gray-600 mt-2">
            Developing scalable and efficient backend solutions with Node.js and
            Express.
          </p>
        </div>

        {/* MongoDB */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaDatabase className="h-12 w-12 text-gray-700" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">MongoDB</h3>
          <p className="text-gray-600 mt-2">
            Managing data with NoSQL databases and creating robust database
            schemas for applications.
          </p>
        </div>

        {/* JavaScript */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaJsSquare className="h-12 w-12 text-yellow-500" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            JavaScript
          </h3>
          <p className="text-gray-600 mt-2">
            Writing clean and efficient JavaScript code to enhance web
            interactivity and performance.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <SiTailwindcss className="h-12 w-12 text-blue-400" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Tailwind CSS
          </h3>
          <p className="text-gray-600 mt-2">
            Crafting responsive and modern web designs with the power of
            utility-first Tailwind CSS.
          </p>
        </div>

        {/* Office Packages */}
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
          <FaMicrosoft className="h-12 w-12 text-red-600" />
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            Office Packages
          </h3>
          <p className="text-gray-600 mt-2">
            Proficient in Microsoft Office tools like Word, Excel, and
            PowerPoint for documentation and presentations.
          </p>
        </div>
      </div>
      <SkillsGraph/>
    </div>
  );
};

export default Skills;
