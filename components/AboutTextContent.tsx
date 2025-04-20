import React from 'react';

const AboutTextContent: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hello, I'm Nicholas</h3>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
        I'm a passionate Full Stack Developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications with clean, maintainable code.
      </p>

      {/* Enhanced text container */}
      <div className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-700 dark:to-gray-700/80 rounded-lg p-6 mb-6 border border-gray-100 dark:border-gray-600/50">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed break-words">
          My technical proficiency spans across <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript, JavaScript, React, NextJS, Redux, Node.js, Ruby on Rails</span>, and SQL/NoSQL databases. I'm committed to crafting seamless user experiences through responsive design and efficient front-end to back-end integration.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
        With a strong foundation in software development principles and agile methodologies, I leverage TypeScript's type safety and NextJS's server-side rendering capabilities to build performant, SEO-friendly applications that meet modern web standards.
      </p>

      {/* Modern Tag Cloud */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Key Technologies:</h4>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">TypeScript</span>
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">NextJS</span>
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">React</span>
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Redux</span>
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">JavaScript</span>
          <span className="px-4 py-2 text-sm bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-all duration-300">Ruby on Rails</span>
          {/* Add more tags as needed */}
        </div>
      </div>
    </>
  );
};

export default AboutTextContent;