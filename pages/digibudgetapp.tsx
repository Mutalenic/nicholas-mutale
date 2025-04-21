import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaMoneyBillWave, FaChartPie, FaUserShield, FaMobileAlt } from "react-icons/fa";
import digibudgetImg from "../public/assets/projects/DigiApp.png";
import { NextPage } from "next";
import { motion } from "framer-motion";

const DigiBudgetApp: NextPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black/80 to-purple-900/30 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={digibudgetImg}
          alt="DigiBudget App Screenshot"
          priority
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white z-10 p-4 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h1 className="py-2 text-4xl md:text-5xl font-bold">DigiBudget App</h1>
          <h3 className="text-xl md:text-2xl text-gray-200">Ruby on Rails / PostgreSQL / TailwindCSS</h3>
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
            <div className="h-1 w-10 bg-purple-600 rounded-full"></div>
            <p className="text-lg tracking-widest uppercase text-purple-600 dark:text-purple-400 font-semibold">Project Showcase</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Overview</h2>
          <div className="dark:text-gray-300 space-y-4 text-lg">
            <p>
              DigiBudget is a comprehensive mobile web application designed to help users manage their finances effectively. The application provides an intuitive interface for tracking expenses across different categories, allowing users to gain valuable insights into their spending habits.
            </p>
            <p>
              With DigiBudget, users can:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Create and categorize transactions</li>
              <li>View spending patterns by category</li>
              <li>Set budget limits and receive notifications</li>
              <li>Generate detailed financial reports</li>
              <li>Secure personal financial data</li>
            </ul>
            <p>
              Built with Ruby on Rails and PostgreSQL for robust data management, and styled with TailwindCSS for a responsive mobile-first experience, this application demonstrates full-stack development capabilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://joli-choucroute-65855.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.button>
            </a>
            <a href="https://github.com/Mutalenic/digi_budget" target="_blank" rel="noopener noreferrer">
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
                  <FaMoneyBillWave className="text-purple-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Expense Tracking</h4>
                </div>
                <p className="dark:text-gray-300">Easily record and categorize expenses with a user-friendly interface.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaChartPie className="text-purple-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Spending Analytics</h4>
                </div>
                <p className="dark:text-gray-300">Visualize spending patterns with intuitive charts and graphs.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaUserShield className="text-purple-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Secure Authentication</h4>
                </div>
                <p className="dark:text-gray-300">Protect financial data with robust user authentication and authorization.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <FaMobileAlt className="text-purple-500 text-xl" />
                  <h4 className="font-bold text-lg dark:text-gray-200">Mobile Responsive</h4>
                </div>
                <p className="dark:text-gray-300">Access your budget information on any device with a fully responsive design.</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">Development Process</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="dark:text-gray-300 mb-4">
                The DigiBudget application was developed following an agile methodology with a focus on test-driven development:
              </p>
              <ol className="list-decimal pl-6 space-y-2 dark:text-gray-300">
                <li>Requirement analysis and user story creation</li>
                <li>Database schema design with PostgreSQL</li>
                <li>Backend API development with Ruby on Rails</li>
                <li>Frontend interface implementation with TailwindCSS</li>
                <li>Comprehensive testing and quality assurance</li>
                <li>Deployment to Heroku with CI/CD pipeline</li>
              </ol>
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
                  <div className="h-1 w-8 bg-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-center pb-2 px-2 text-purple-600 dark:text-purple-400">Tech Stack</h3>
                  <div className="h-1 w-8 bg-purple-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Ruby</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Ruby on Rails</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">PostgreSQL</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">TailwindCSS</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Devise</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">RSpec</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex items-center">
                    <RiRadioButtonFill className="text-xl text-purple-500 dark:text-purple-400 mr-2" /> 
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Heroku</span>
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
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium cursor-pointer mt-8"
          >
            <FaArrowLeft />
            <p>Back to Projects</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default DigiBudgetApp;