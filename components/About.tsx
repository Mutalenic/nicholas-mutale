import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/assets/Profile.jpg"

const About: React.FC = () => {
  return (
    <div id="about" className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-darkBg dark:to-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
            ABOUT ME
          </p>
          <h2 className="text-4xl font-bold mb-4 dark:text-gray-200">Full Stack Developer</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 dark:border-blue-400 rounded-xl z-0"></div>
              
              <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl dark:shadow-blue-900/20">
                <Image
                  className="rounded-xl hover:scale-105 transition-all duration-500"
                  src={profileImg}
                  width={400}
                  height={500}
                  alt="Profile of Nicholas Mutale, Full Stack Developer"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:col-span-7 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hello, I'm Nicholas</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications with clean, maintainable code.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md dark:shadow-gray-900/30 mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My technical proficiency spans across <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript, JavaScript, React, NextJS, Redux, Node.js, Ruby on Rails</span>, and SQL/NoSQL databases. I'm committed to crafting seamless user experiences through responsive design and efficient front-end to back-end integration.
              </p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in software development principles and agile methodologies, I leverage TypeScript's type safety and NextJS's server-side rendering capabilities to build performant, SEO-friendly applications that meet modern web standards.
            </p>
            
            {/* Modern Tag Cloud */}
            <div className="mb-8">
              <p className="text-sm uppercase font-semibold mb-3 text-gray-500 dark:text-gray-400">My Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">TypeScript</span>
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">NextJS</span>
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">React</span>
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Redux</span>
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">JavaScript</span>
                <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Ruby on Rails</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link href="/#work" className="inline-block mt-4 px-8 py-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              View my projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;