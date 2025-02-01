import React from 'react'
import {Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaDownload } from "react-icons/fa";
import { FiMonitor, FiCode, FiCloud, FiShoppingCart } from "react-icons/fi";

const Home = () => {
  return (
    <div>
           <div className="relative mx-1 my-1 rounded-md overflow-hidden">
              <div className="relative bg-white rounded-md">
                {/* Particles Effect */}
                <div className="relative rounded-md overflow-hidden">
                  <Particles
                    id="tsparticles"
                    init={async (main) => {
                      await loadFull(main);
                    }}
                    options={{
                      background: {
                        color: "transparent",
                      },
                      particles: {
                        number: {
                          value: 80,
                          density: {
                            enable: true,
                            value_area: 800,
                          },
                        },
                        color: {
                          value: "#C53030",
                        },
                        shape: {
                          type: "circle",
                        },
                        opacity: {
                          value: 2.2,
                          random: true,
                        },
                        size: {
                          value: 4,
                          random: true,
                        },
                        move: {
                          enable: true,
                          speed: 2,
                          direction: "none",
                          outModes: {
                            default: "out",
                          },
                        },
                      },
                      interactivity: {
                        events: {
                          onHover: {
                            enable: true,
                            mode: "repulse",
                          },
                          onClick: {
                            enable: true,
                            mode: "push",
                          },
                        },
                      },
                      detectRetina: true,
                    }}
                    className="absolute inset-0 z-0"
                  />
                </div>

                {/* Content of home */}
                <div className="relative z-10 py-3">
                  <h1 className="text-lg xs:text-base sm:text-xl md:text-4xl lg:text-5xl">
                    <div className="flex justify-center mb-2 md:mb-3 lg:mb-4 text-[blue]">
                      Hi<span className="wave">👋</span>,
                    </div>
                    <div className="text-[green] flex justify-center my-2">
                      Welcome To My Website!
                    </div>
                  </h1>

                  <h1 className="my-2 text-3xl md:text-4xl lg:text-6xl font-bold font-sans">
                    <div className="font-bold text-[blue] flex justify-center space-x-1 md:space-x-4 font-serif">
                      <p>
                        I am
                        <span className="text-[#ee2626] font-serif">
                          {" "}
                          Prakash Chaudhary
                        </span>
                      </p>
                    </div>

                    <div className="text-[blue] flex justify-center font-serif">
                      and I am a
                    </div>
                    <div className="flex justify-center font-serif">
                      <ReactTyped
                        strings={[
                          "Certified IT Engineer.",
                          "MERN Stack Developer.",
                        ]}
                        typingSpeed={140}
                        backSpeed={70}
                        loop
                        style={{ color: "#ef4444" }}
                      />
                    </div>
                  </h1>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="my-6"
                  >
                    <div className="flex justify-center space-x-4 my-4">
                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      >
                        <Link
                          to="/about"
                          className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all flex items-center space-x-2"
                        >
                          <FaUser />
                          <span>About Me</span>
                        </Link>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      >
                        <Link
                          to="/contact"
                          className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all flex items-center space-x-2"
                        >
                          <FaPhone />
                          <span>Contact Me</span>
                        </Link>
                      </motion.div>
                    </div>

                    <div className="flex justify-center">
                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      >
                        <button className="bg-purple-400 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-all flex items-center space-x-2">
                          <FaDownload />
                          <span>Download CV</span>
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/*  What I do? Section............................................................ */}

              <div className="bg-white mt-1 rounded-lg p-4 shadow-md">
                <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 italic">
                  <p className="my-4">What I Do?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2">
                  {/* Web Design */}
                  <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                    <FiMonitor className="h-12 w-12 text-blue-700" />
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">
                      Web Design
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Crafting visually appealing and user-friendly website
                      designs that enhance user experience and engagement.
                    </p>
                  </div>

                  {/* Web Development */}
                  <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                    <FiCode className="h-12 w-12 text-blue-700" />
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">
                      Web Development
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Building robust, scalable, and responsive web applications
                      using modern technologies and frameworks.
                    </p>
                  </div>

                  {/* Deployment */}
                  <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                    <FiCloud className="h-12 w-12 text-blue-700" />
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">
                      Deployment
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Ensuring smooth deployment of web applications to cloud.
                    </p>
                  </div>

                  {/* E-commerce Website Development */}
                  <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                    <FiShoppingCart className="h-12 w-12 text-blue-700" />
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">
                      E-commerce Development
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Developing feature-rich e-commerce platforms with secure
                      payment integration and seamless user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Home
