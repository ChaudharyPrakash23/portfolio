import React from "react";
import profile from "../images/Profile.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="m-1 bg-white rounded-md p-5 flex flex-col md:flex-row relative py-5 ">
        {/* Image section */}
        <div className="relative flex justify-center items-center shrink-0 overflow-hidden w-72 sm:w-80 h-72 sm:h-80 mx-auto">
          <div className="relative w-full h-full">
            <img
              className="h-full w-full rounded-3xl shadow-lg border border-black"
              src={profile}
              alt="Profile"
            />

            {/* React Icon Animation */}
            <motion.div
              className="absolute top-8 left-8 text-blue-500 text-3xl sm:text-4xl md:text-5xl"
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaReact />
            </motion.div>

            {/* Express Icon Animation */}
            <motion.div
              className="absolute bottom-8 left-8 text-yellow-500 text-3xl sm:text-4xl md:text-5xl"
              animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <SiExpress />
            </motion.div>

            {/* MongoDB Icon Animation */}
            <motion.div
              className="absolute top-8 right-8 text-green-500 text-3xl sm:text-4xl md:text-5xl"
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <SiMongodb />
            </motion.div>

            {/* Node.js Icon Animation */}
            <motion.div
              className="absolute bottom-8 right-8 text-green-400 text-3xl sm:text-4xl md:text-5xl"
              animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaNodeJs />
            </motion.div>
          </div>
        </div>

        {/* about content ...............................*/}
        <div className="mt-4 md:mt-1 font-serif flex-1">
          <div
            className="flex-1 flex justify-center items-center md:items-start md:justify-center 
               text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 italic relative"
          >
            <span className="relative before:absolute before:inset-0 before:animate-pulse before:bg-green-800 before:w-full before:h-1 before:rounded-lg before:top-full">
              About Me
            </span>
          </div>
          <div className="text-white my-2 ml-0 md:mx-4 lg:ml-20  md:px-4 lg:px-5 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer">
            <motion.div
              className="text-white my-2 ml-0 md:mx-4 lg:ml-7 md:px-4 lg:px-5 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration:2 }}
            >
              <h2 className="text-sm sm:text-lg lg:text-lg">
                <p className="p-2 text-justify italic text-gray-500 hover:text-gray-950 transition-all duration-300 ease-in-out">
                  Hi, I'm{" "}
                  <span className="text-red-500"> Prakash Chaudhary </span>
                  <span className="text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out">
                    IT Engineer{" "}
                  </span>
                  specializing in full-stack web development with the{" "}
                  <span className="text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out">
                    MERN Stack.
                  </span>
                  My technical expertise includes developing scalable web
                  applications using{" "}
                  <span className="text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out">
                    React.js
                  </span>
                  , designing robust APIs with{" "}
                  <span className="text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out">
                    Node.js
                  </span>
                  , and styling with{" "}
                  <span className="text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out">
                    Tailwind CSS
                  </span>
                  .
                </p>

                <p className="p-2 font-semibold text-red-900 text-justify italic">
                  ➜ Let's build something amazing together, Feel free to connect
                  with me on LinkedIn!
                </p>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Qualification.................. */}
      <div className="bg-white rounded-md mx-1 mb-1 p-4">
        <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-800 font-serif italic md:mb-2">
          Qualification
        </div>
        <div className="flex justify-center mx-1">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg p-2 shadow-lg border border-gray-700">
            {/* Laptop screen */}
            <div className="bg-gray-100 rounded-t-lg p-3 flex flex-col items-center">
              <div className="w-full h-[40vh] lg:h-[40vh] bg-white rounded-md overflow-hidden shadow-inner p-4 text-left font-serif">
                <motion.p
                  className="text-xl md:text-2xl lg:text-2xl font-semibold my-2 pl-8 text-red-500 italic"
                  initial={{x:200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration:2 }}
                >
                  ➡ SEE from KMEBS
                </motion.p>
                <motion.p
                  className="text-lg md:text-2xl lg:text-2xl font-semibold my-2 pl-8 text-blue-500 italic"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration:3 }}
                >
                  ➡ +2 from ST. Thomas H.S
                </motion.p>
                <motion.p
                  className="text-lg md:text-2xl lg:text-2xl font-semibold my-2 pl-8 text-green-500 italic"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration:4 }}
                >
                  ➡ Diploma in Web Dev from Sipalaya IT Training Institute
                </motion.p>
                <motion.p
                  className="text-lg md:text-2xl lg:text-2xl font-semibold my-2 pl-8 text-red-500 italic"
                  initial={{ opacity: 0, x:200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration:5 }}
                >
                  ➡ BE.IT from NCIT
                </motion.p>
              </div>
              {/* Animation at bottom students */}
              <div className="mt-6 w-full flex justify-center space-x-4">
                <motion.div
                  className="w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                ></motion.div>
                <motion.div
                  className="w-8 h-8 bg-green-500 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="w-8 h-8 bg-red-500 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                ></motion.div>
                <motion.div
                  className="w-8 h-8 bg-yellow-500 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
                ></motion.div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-3 bg-gray-800 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
