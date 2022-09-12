import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgClose, CgMenu, CgMail, CgTwitter } from "react-icons/cg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../public/assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const navShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", navShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      id="navbar"
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between item-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={ Logo }
            alt="Logo"
            width="125"
            height="50"
          />
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text- uppercase hover:border-b">about</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text- uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/#work">
              <li className="ml-10 text- uppercase hover:border-b">project</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text- uppercase hover:border-b">contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <CgMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#C8651B]/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#fff0df]"
              : "fixed left-[-100%] top-0 p-10 ease-in duration"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src={ Logo }
                alt="logo"
                width="75"
                height="40"
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
            >
              <CgClose />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4">
                  about
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4">
                  skills
                </li>
              </Link>
              <Link href="/#work">
                <li onClick={() => setNav(false)} className="py-4">
                  project
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4">
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase trackin-widest text-[#1e1a95]">
                LET&#39;S CONNECT
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80% ]">
                <a href="https://www.linkedin.com/in/nicomutale/">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/mutalenic">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <a href="maito:nicomutale@gmail.com">
                    <CgMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <a href="https://twitter.com/nicomutale">
                    <CgTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
