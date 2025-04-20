import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/assets/Profile.jpg"

const About: React.FC = () => {
  return (
    <div id="about" className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-darkBg dark:to-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16"> {/* Slightly reduced bottom margin on smaller screens */}
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md shadow-md dark:shadow-blue-900/50 border border-blue-100 dark:border-blue-900/50">
            ABOUT ME
          </p>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2"></div> {/* Added margin top */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Image Column - Adjusted column span */}
          {/* Added hidden on mobile (default) and md:flex to show on medium+ screens */}
          <div className="hidden md:flex md:col-span-3 order-2 md:order-1 justify-center md:justify-start"> {/* Added flex centering */}
            <div className="relative mx-auto md:mx-0 w-fit"> {/* Added w-fit */}
              {/* Removed the absolute positioned decorative border div */}

              {/* Changed to rounded-full for circular image */}
              <div className="relative z-10 overflow-hidden rounded-full shadow-2xl dark:shadow-blue-900/20">
                <Image
                  // Added rounded-full class
                  className="hover:scale-105 transition-all duration-500 rounded-full"
                  src={profileImg}
                  // Adjusted width and height to be equal for a circle
                  width={300} // Kept width 300
                  height={300} // Changed height to 300
                  alt="Profile of Nicholas Mutale, Full Stack Developer"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Content Column - Adjusted column span and padding */}
          {/* Adjusted column span to take full width on mobile */}
          <div className="col-span-1 md:col-span-9 order-1 md:order-2 md:pr-20">
            {/* Added wrapper div for text content with shadow - Increased padding */}
            <div className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-lg dark:shadow-gray-700"> {/* Changed p-6 to p-8 */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hello, I&apos;m Nicholas</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications with clean, maintainable code.
              </p>

              {/* Enhanced text container - Removed outer shadow/border as it's now on the parent */}
              <div className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-700 dark:to-gray-700/80 rounded-lg p-6 mb-6 border border-gray-100 dark:border-gray-600/50">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed break-words">
                  My technical proficiency spans across <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript, JavaScript, React, NextJS, Redux, Node.js, Ruby on Rails</span>, and SQL/NoSQL databases. I&apos;m committed to crafting seamless user experiences through responsive design and efficient front-end to back-end integration.
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                With a strong foundation in software development principles and agile methodologies, I leverage TypeScript&apos;s type safety and NextJS&apos;s server-side rendering capabilities to build performant, SEO-friendly applications that meet modern web standards.
              </p>

              {/* Modern Tag Cloud */}
              <div className="mb-8">
                <p className="text-sm uppercase font-semibold mb-3 text-gray-500 dark:text-gray-400">My Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {/* Reordered skills */}
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">NextJS</span>
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">React</span>
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">TypeScript</span>
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Redux</span>
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">JavaScript</span>
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Ruby on Rails</span>
                  {/* Add Ruby */}
                  <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Ruby</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/#work" className="inline-block mt-4 px-8 py-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View my projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;