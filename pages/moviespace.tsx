import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaVideo, FaHeart, FaComments, FaStar } from "react-icons/fa";
import moviespaceImg from "../public/assets/projects/moviespace2.png";
import { NextPage } from "next";
import { motion } from "framer-motion";

const MovieSpace: NextPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black/80 to-red-900/30 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={moviespaceImg}
          alt="MovieSpace Application Screenshot"
          priority
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white z-10 p-4 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h1 className="py-2 text-4xl md:text-5xl font-bold">MovieSpace App</h1>
          <h3 className="text-xl md:text-2xl text-gray-200">JavaScript / CSS / API Integration</h3>
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
            <div className="h-1 w-10 bg-red-600 rounded-full"></div>
            <p className="text-lg tracking-widest uppercase text-red-600 dark:text-red-400 font-semibold">Project Showcase</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Overview</h2>
          <div className="dark:text-gray-300 space-y-4 text-lg">
            <p>
              MovieSpace is an interactive web application built as a JavaScript capstone project that provides users with a comprehensive platform to explore and engage with TV shows. The application leverages the TVMAZE API to fetch and display detailed information about various shows.
            </p>
            <p>
              The application features two main user interfaces:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>A homepage displaying a curated list of TV shows with essential information</li>
              <li>A detailed view section allowing users to explore specific shows and interact through comments and likes</li>
            </ul>
            <p>
              This project demonstrates proficiency in JavaScript, API integration, and modern web development practices including module bundling with Webpack and async/await implementation for handling API calls.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://natig25.github.io/MovieSpace/" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.button>
            </a>
            <a href="https://github.com/Mutalenic/JS-capstone" target="_blank" rel="noopener noreferrer">
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
                  <FaVideo className="text-red-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Show Catalog</h4>
                </div>
                <p className="dark:text-gray-300">Browse through a comprehensive catalog of TV shows with dynamic filtering options.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeart className="text-red-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Like System</h4>
                </div>
                <p className="dark:text-gray-300">Express appreciation for your favorite shows with an intuitive like system that tracks engagement.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaComments className="text-red-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Comment Section</h4>
                </div>
                <p className="dark:text-gray-300">Engage with other users through a robust comment system for each TV show.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaStar className="text-red-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Detailed Information</h4>
                </div>
                <p className="dark:text-gray-300">Access comprehensive details about each show including ratings, genres, and episode information.</p>
              </div>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">Implementation Highlights</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="dark:text-gray-300 mb-4">
                The MovieSpace application was developed with a focus on performance and user experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
                <li>Implemented API integration with modern JavaScript async/await patterns</li>
                <li>Utilized Webpack for module bundling and optimized asset delivery</li>
                <li>Created a responsive design that works seamlessly on various devices</li>
                <li>Built custom interaction mechanisms for likes and comments</li>
                <li>Implemented client-side data caching to improve performance</li>
                <li>Followed ES6+ standards with proper modularization of code</li>
              </ul>
            </div>
          </div>

          {/* User Experience */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">User Experience</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                <div className="font-bold text-3xl text-red-500 mb-2">Fast</div>
                <p className="dark:text-gray-300">Optimized loading times with efficient API calls and caching</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                <div className="font-bold text-3xl text-red-500 mb-2">Intuitive</div>
                <p className="dark:text-gray-300">User-friendly interface with clear navigation and visual cues</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                <div className="font-bold text-3xl text-red-500 mb-2">Interactive</div>
                <p className="dark:text-gray-300">Engaging elements that encourage user participation</p>
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
                  <div className="h-1 w-8 bg-red-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-center pb-2 px-2 text-red-600 dark:text-red-400">Tech Stack</h3>
                  <div className="h-1 w-8 bg-red-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">JavaScript</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">HTML5</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">CSS3</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">TVMAZE API</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Webpack</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">ES6+</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-red-500 dark:text-red-400 mr-2" /> 
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
            className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium cursor-pointer mt-8"
          >
            <FaArrowLeft />
            <p>Back to Projects</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default MovieSpace;