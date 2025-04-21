import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRocket, FaUsers, FaDatabase, FaUserAstronaut } from "react-icons/fa";
import spacetravellerImg from "../public/assets/projects/SpaceTravellerHub.png";
import { NextPage } from "next";
import { motion } from "framer-motion";

const SpaceTraveller: NextPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black/80 to-indigo-900/30 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={spacetravellerImg}
          alt="SpaceTraveler&apos;s Hub Application Screenshot"
          priority
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white z-10 p-4 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h1 className="py-2 text-4xl md:text-5xl font-bold">Space Traveler&apos;s Hub</h1>
          <h3 className="text-xl md:text-2xl text-gray-200">React / Redux / SpaceX API</h3>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 pt-8">
        {/* Project Details */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-10 bg-indigo-600 rounded-full"></div>
            <p className="text-lg tracking-widest uppercase text-indigo-600 dark:text-indigo-400 font-semibold">Project Showcase</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Overview</h2>
          <div className="dark:text-gray-300 space-y-4 text-lg">
            <p>
              Space Traveler&apos;s Hub is a sophisticated web application built for a company that provides commercial and scientific space travel services. The application leverages real-time data from the SpaceX API to deliver an immersive experience for users planning their space adventures.
            </p>
            <p>
              With Space Traveler&apos;s Hub, users can:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Browse available rockets and missions with detailed specifications</li>
              <li>Reserve rockets for future launches</li>
              <li>Join selected space missions</li>
              <li>View their personal profile with booked rockets and joined missions</li>
              <li>Cancel reservations or leave missions as needed</li>
            </ul>
            <p>
              Developed with React and Redux, this application demonstrates advanced state management techniques and efficient API integration for a seamless user experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://6262b54ee8f3d52d5200c258--tiny-bavarois-1b6015.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.button>
            </a>
            <a href="https://github.com/Mutalenic/space_travelers_hub" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaGithub /> View Code
              </motion.button>
            </a>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaRocket className="text-indigo-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Rocket Booking</h4>
                </div>
                <p className="dark:text-gray-300">Reserve SpaceX rockets with real-time availability and detailed specifications.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaUsers className="text-indigo-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Mission Participation</h4>
                </div>
                <p className="dark:text-gray-300">Join ongoing space missions with detailed descriptions and participation requirements.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaUserAstronaut className="text-indigo-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Personal Profile</h4>
                </div>
                <p className="dark:text-gray-300">Track your space journey with a personalized dashboard of reserved rockets and joined missions.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaDatabase className="text-indigo-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Real-time Data</h4>
                </div>
                <p className="dark:text-gray-300">Access the latest SpaceX information through API integration for accurate and up-to-date content.</p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">Technical Implementation</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="dark:text-gray-300 mb-4">
                The Space Traveler&apos;s Hub application demonstrates several advanced front-end development practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
                <li>Centralized state management with Redux for consistent data flow</li>
                <li>Asynchronous API calls using Redux Thunk middleware</li>
                <li>Component-based architecture with React functional components</li>
                <li>Responsive design principles for optimal viewing on all devices</li>
                <li>Custom styling with CSS for an engaging user interface</li>
                <li>Efficient application of React hooks for state and lifecycle management</li>
              </ul>
            </div>
          </div>

          {/* User Journey */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">User Journey</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <p className="text-lg font-medium dark:text-gray-200">Browse available rockets and space missions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <p className="text-lg font-medium dark:text-gray-200">Reserve rockets by clicking the reservation button</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <p className="text-lg font-medium dark:text-gray-200">Join missions that align with your interests</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <p className="text-lg font-medium dark:text-gray-200">View all your activities in your personal profile</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                <p className="text-lg font-medium dark:text-gray-200">Manage your reservations and mission participations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-4 md:col-span-1"
        >
          <div className="sticky top-20">
            <div className="shadow-xl shadow-gray-200 dark:shadow-gray-800/40 rounded-xl p-6 bg-white dark:bg-gray-800">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-center pb-2 px-2 text-indigo-600 dark:text-indigo-400">Tech Stack</h3>
                  <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">React.js</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Redux</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Redux Thunk</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">SpaceX API</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">CSS3</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Netlify</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-indigo-500 dark:text-indigo-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Jest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Back Button */}
        <Link href="/#work">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium cursor-pointer mt-8"
          >
            <FaArrowLeft />
            <p>Back to Projects</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default SpaceTraveller;