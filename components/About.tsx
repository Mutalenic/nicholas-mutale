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
                I&apos;m a backend-leaning full-stack engineer with a few years of production experience under my belt. Most of my work lives in Ruby on Rails — I&apos;ve led multi-version upgrades on live systems, designed and hardened APIs, managed deployment pipelines across multiple environments, and debugged the kind of production issues that don&apos;t show up in tutorials.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                Right now I&apos;m contracting on two live products: a public sector CMS serving government bodies across Europe, and Bluemify, a healthcare platform I helped build from the ground up as one of two backend engineers. It recently went live and is onboarding its first users.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                I also build my own things. Keelfine is a personal finance app I&apos;ve been working on, built with Rails and Tailwind CSS v4, aimed at everyday users in the Zambian market.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                I work remotely, async, and I take ownership of what I ship. If you have a hard Rails problem or a production system that needs serious attention, I&apos;d like to hear about it.
              </p>

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