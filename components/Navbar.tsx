import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "../public/assets/logo.png";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Track scroll position for navbar visibility
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 30) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    
    // Handle floating navbar visibility
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar only after scrolling down 100px 
        if (window.scrollY > 100) {
          if (window.scrollY > lastScrollY) {
            // Scrolling down - hide navbar
            setIsVisible(false);
          } else {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
        } else {
          // Always visible at the top
          setIsVisible(true);
        }
        
        setLastScrollY(window.scrollY);
      }
    };
    
    window.addEventListener("scroll", handleShadow);
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener("scroll", handleShadow);
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Floating Logo - Separate from Navbar */}
      <div className="fixed top-6 left-6 z-[101] transition-all duration-300">
        <Link href="/">
          <div className="flex items-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500 hover:border-blue-600 hover:scale-110 transition-all shadow-lg">
              <Image
                src={Logo}
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Main Navbar - Now separate from logo */}
      <div
        className={`fixed top-0 left-0 right-0 w-full h-20 z-[100] transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          shadow
            ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center w-full h-full px-6 md:px-10">
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              <li className="group">
                <Link href="/">
                  <span className="text-base font-medium relative overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/#about">
                  <span className="text-base font-medium relative overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/#skills">
                  <span className="text-base font-medium relative overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Skills
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/#work">
                  <span className="text-base font-medium relative overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/#contact">
                  <span className="text-base font-medium relative overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-6 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <div
              onClick={handleNav}
              className="md:hidden ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {nav ? <FiX size={25} /> : <FiMenu size={25} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-20 w-full h-screen bg-black/70 backdrop-blur-sm ease-in duration-300 z-50"
              : "hidden"
          }
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/">
              <span onClick={handleNav} className="text-2xl font-medium text-white hover:text-blue-400 transition-colors">
                Home
              </span>
            </Link>
            <Link href="/#about">
              <span onClick={handleNav} className="text-2xl font-medium text-white hover:text-blue-400 transition-colors">
                About
              </span>
            </Link>
            <Link href="/#skills">
              <span onClick={handleNav} className="text-2xl font-medium text-white hover:text-blue-400 transition-colors">
                Skills
              </span>
            </Link>
            <Link href="/#work">
              <span onClick={handleNav} className="text-2xl font-medium text-white hover:text-blue-400 transition-colors">
                Projects
              </span>
            </Link>
            <Link href="/#contact">
              <span onClick={handleNav} className="text-2xl font-medium text-white hover:text-blue-400 transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
