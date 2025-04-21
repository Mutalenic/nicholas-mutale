import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import airqualityImg from "../public/assets/projects/airquality.png";
import { NextPage } from "next";
import { motion } from "framer-motion";

const AirQuality: NextPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black/80 to-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={airqualityImg}
          alt="Air Quality Application Screenshot"
          priority
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white z-10 p-4 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h1 className="py-2 text-4xl md:text-5xl font-bold">Air Quality Monitor</h1>
          <h3 className="text-xl md:text-2xl text-gray-200">React JS / Redux / REST API Integration</h3>
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
            <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
            <p className="text-lg tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold">Project Showcase</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Overview</h2>
          <div className="dark:text-gray-300 space-y-4 text-lg">
            <p>
              The Air Quality Monitor application provides real-time tracking of air pollution metrics across different countries worldwide. Users can interact with a global map interface to select regions and view detailed air quality data with visual representations.
            </p>
            <p>
              The application fetches current air quality metrics and displays data about various pollutants, including:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Particulate matter (PM2.5 and PM10)</li>
              <li>Nitrogen dioxide (NO2)</li>
              <li>Sulfur dioxide (SO2)</li>
              <li>Carbon monoxide (CO)</li>
              <li>Ozone (O3)</li>
            </ul>
            <p>
              Built using React and Redux for state management, this application demonstrates efficient API integration and data visualization techniques.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://deploy-preview-2--stately-kashata-1db13f.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.button>
            </a>
            <a href="https://github.com/Mutalenic/air-quality-data" target="_blank" rel="noopener noreferrer">
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
                <h4 className="font-bold text-lg mb-2 dark:text-gray-200">Interactive Map Interface</h4>
                <p className="dark:text-gray-300">Select countries via an interactive map to view their air quality metrics.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg mb-2 dark:text-gray-200">Real-time Data Updates</h4>
                <p className="dark:text-gray-300">Automatically refreshes air quality metrics to ensure data accuracy.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg mb-2 dark:text-gray-200">Pollution Trend Analysis</h4>
                <p className="dark:text-gray-300">Visualize pollution levels over time with interactive charts and graphs.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg mb-2 dark:text-gray-200">Search Functionality</h4>
                <p className="dark:text-gray-300">Quickly find specific regions or cities through the integrated search feature.</p>
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
                  <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-center pb-2 px-2 text-blue-600 dark:text-blue-400">Tech Stack</h3>
                  <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">React.js</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Redux</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">CSS</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">REST API</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Restcountries API</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-blue-500 dark:text-blue-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Openweathermap API</span>
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
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium cursor-pointer mt-8"
          >
            <FaArrowLeft />
            <p>Back to Projects</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default AirQuality;