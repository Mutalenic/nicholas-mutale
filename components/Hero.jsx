import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CgMail, CgTwitter } from "react-icons/cg";

function Hero() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#1e1a95]">Nicholas</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I love building both frontend and back-end websites and web apps
            that are user friendly.Checkout some of my work and let me build
            your next project.
          </p>
          <div className="py-3 text-gray-400">
            <p>Let&#39;s chat!</p>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/nicomutale/">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/mutalenic">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="mailto:nicomutale@gmail.com">
                <CgMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://twitter.com/nicomutale"><CgTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
