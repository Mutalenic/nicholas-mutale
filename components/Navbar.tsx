import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgClose, CgMenu, CgMail, CgTwitter } from "react-icons/cg";
import { FaLinkedinIn, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import Logo from "../public/assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const navShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", navShadow);
    
    return () => {
      window.removeEventListener("scroll", navShadow);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <>
      {/* Floating Logo */}
      <div className="fixed top-4 left-4 z-[101]">
        <Link href="/">
          <div 
            className="relative bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center w-[60px] h-[60px]"
            style={{ backgroundColor: darkMode ? '#121212' : '#ffffff' }}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={46}
              height={46}
              className={`${darkMode ? "filter invert brightness-75" : ""} rounded-full`}
            />
          </div>
        </Link>
      </div>
      
      {/* Floating Navigation Links - Desktop */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-[101]">
        <Link href="/">
          <div className={`${shadow ? 'shadow-md' : ''} p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-800 hover:text-blue-600'}`}>
            <span className="font-medium px-3">Home</span>
          </div>
        </Link>
        <Link href="/#about">
          <div className={`${shadow ? 'shadow-md' : ''} p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-800 hover:text-blue-600'}`}>
            <span className="font-medium px-3">About</span>
          </div>
        </Link>
        <Link href="/#skills">
          <div className={`${shadow ? 'shadow-md' : ''} p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-800 hover:text-blue-600'}`}>
            <span className="font-medium px-3">Skills</span>
          </div>
        </Link>
        <Link href="/#work">
          <div className={`${shadow ? 'shadow-md' : ''} p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-800 hover:text-blue-600'}`}>
            <span className="font-medium px-3">Projects</span>
          </div>
        </Link>
        <Link href="/#contact">
          <div className={`${shadow ? 'shadow-md' : ''} p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-800 hover:text-blue-600'}`}>
            <span className="font-medium px-3">Contact</span>
          </div>
        </Link>
      </div>

      {/* Dark Mode Toggle - Always Visible */}
      <div 
        onClick={toggleDarkMode} 
        className="fixed top-4 right-4 z-[101] p-3 rounded-full cursor-pointer transition-colors duration-300 hover:scale-110 shadow-md"
        style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </div>
      
      {/* Mobile Menu Toggle */}
      <div 
        onClick={handleNav}
        className="md:hidden fixed bottom-4 right-4 z-[101] p-3 rounded-full cursor-pointer transition-colors duration-300 hover:scale-110 shadow-md"
        style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }}
      >
        <CgMenu className={darkMode ? "text-gray-200" : ""} size={20} />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 backdrop-blur-sm z-[102]"
            : ""
        }
      >
        <div
          style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#f3f4f6' : '#1f2937' }}
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 transition-all"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div className="flex w-full items-center justify-between mt-8">
            <div
              onClick={handleNav}
              style={{ backgroundColor: darkMode ? '#1e1e1e' : '#f1f5f9' }}
              className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 transition-transform duration-300 ml-auto"
            >
              <CgClose className={darkMode ? "text-gray-200" : ""} />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className={`py-4 transition-colors duration-300 ${darkMode ? 'text-gray-200 hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className={`py-4 transition-colors duration-300 ${darkMode ? 'text-gray-200 hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className={`py-4 transition-colors duration-300 ${darkMode ? 'text-gray-200 hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  Skills
                </li>
              </Link>
              <Link href="/#work">
                <li onClick={() => setNav(false)} className={`py-4 transition-colors duration-300 ${darkMode ? 'text-gray-200 hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className={`py-4 transition-colors duration-300 ${darkMode ? 'text-gray-200 hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <div className="flex items-center justify-between mb-6">
                <p className={`uppercase tracking-widest font-bold ${darkMode ? 'text-blue-400' : 'text-[#1e1a95]'}`}>
                  Theme
                </p>
                <div 
                  onClick={toggleDarkMode} 
                  className={`p-3 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ${darkMode ? 'bg-blue-600/30' : 'bg-gray-200'}`}
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-500" />
                  ) : (
                    <FaMoon className="text-gray-700" />
                  )}
                </div>
              </div>
              <p className={`uppercase tracking-widest font-bold ${darkMode ? 'text-blue-400' : 'text-[#1e1a95]'}`}>
                LET&#39;S CONNECT
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/nicomutale/" target="_blank" rel="noopener noreferrer">
                  <div style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }} className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 ease-in duration-300 ${darkMode ? 'text-blue-400' : ''}`}>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/mutalenic" target="_blank" rel="noopener noreferrer">
                  <div style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }} className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 ease-in duration-300 ${darkMode ? 'text-blue-400' : ''}`}>
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:nicomutale@gmail.com">
                  <div style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }} className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 ease-in duration-300 ${darkMode ? 'text-blue-400' : ''}`}>
                    <CgMail />
                  </div>
                </a>
                <a href="https://twitter.com/nicomutale" target="_blank" rel="noopener noreferrer">
                  <div style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }} className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 ease-in duration-300 ${darkMode ? 'text-blue-400' : ''}`}>
                    <CgTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
