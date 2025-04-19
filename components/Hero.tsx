import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CgMail, CgTwitter } from "react-icons/cg";

const Hero: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            Hi, I&#39;m <span className="text-[#1e1a95] dark:text-blue-400">Nicholas</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-200">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 dark:text-gray-300 sm:max-w-[70%] m-auto">
            I love building both frontend and back-end websites and web apps
            that are user-friendly. Check out some of my work and let me build
            your next project.
          </p>
          <div className="py-3 text-gray-400 dark:text-gray-400">
            <p>Let&#39;s chat!</p>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-800 dark:text-white">
              <a href="https://www.linkedin.com/in/nicomutale/"  target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-800 dark:text-white">
              <a href="https://github.com/mutalenic" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-800 dark:text-white">
              <a href="mailto:nicomutale@gmail.com"  target="_blank" rel="noopener noreferrer">
                <CgMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-800 dark:text-white">
              <a href="https://twitter.com/nicomutale" target="_blank" rel="noopener noreferrer"><CgTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;