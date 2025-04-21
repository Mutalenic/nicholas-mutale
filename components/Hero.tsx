import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import profileImg from "../public/assets/Profile.jpg";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="w-full min-h-screen text-center relative overflow-hidden pt-28 md:pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-[1240px] w-full mx-auto px-4 flex flex-col justify-center items-center pb-20">
        {/* Profile image for mobile */}
        <div className="relative mb-6 md:hidden mt-10">
          <Image
            src={profileImg}
            alt="Nicholas Mutale"
            width={130}
            height={130}
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
            <span>👋</span>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold py-4 text-gray-700 dark:text-gray-200">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Nicholas</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl py-2 text-gray-700 dark:text-gray-200 mb-2">
            A Full Stack Web Developer
          </h2>
          
          <p className="text-md md:text-lg py-4 text-gray-600 dark:text-gray-300 max-w-[700px] mx-auto mb-4">
            I create responsive web applications with modern technologies.
            My focus is building intuitive, user-friendly experiences with clean code.
          </p>
          
          <div className="py-3 text-gray-500 dark:text-gray-400 font-medium">
            <p>Let&apos;s connect!</p>
          </div>
          
          <div className="flex items-center justify-center space-x-5 py-4 z-10 relative">
            <a
              href="https://www.linkedin.com/in/nicomutale/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-5 cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#0072b1] group-hover:text-white text-gray-600 dark:text-gray-300">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            
            <a
              href="https://github.com/mutalenic"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub Profile"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-5 cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#333] group-hover:text-white text-gray-600 dark:text-gray-300">
                <FaGithub size={20} />
              </div>
            </a>
            
            <a
              href="mailto:nicomutale@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Email Contact"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-5 cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#DB4437] group-hover:text-white text-gray-600 dark:text-gray-300">
                <CgMail size={20} />
              </div>
            </a>
            
            <a
              href="https://x.com/mutalenic"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="X Profile"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-5 cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#000] group-hover:text-white text-gray-600 dark:text-gray-300">
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </div>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-16">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 font-bold"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - moved up to prevent covering social links */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-0">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;