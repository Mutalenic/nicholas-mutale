import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgChevronDoubleUp, CgMail, CgTwitter } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import getintouch from "../public/assets/getintouch.jpg";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#0f07fb] dark:text-blue-400">
          Contact
        </p>
        <h2 className="py-4 dark:text-gray-200">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={getintouch}
                  alt="get in touch"
                  width={430}
                  height={300}
                />
              </div>
              <div>
                <h2 className="py-2 dark:text-gray-200">Nicholas Mutale</h2>
                <p className="dark:text-gray-300">Full Stack Developer</p>
                <p className="py-4 dark:text-gray-300">
                  I am available for freelance or full-time positions. Contact
                  me and let&#39;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#1e1a95] dark:text-blue-400">Connect With Me</p>
              </div>
              <div className="flex items-center justify-between gap-5 max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-700 dark:text-white">
                  <a href="https://www.linkedin.com/in/nicomutale/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-700 dark:text-white">
                  <a href="https://github.com/mutalenic" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-700 dark:text-white">
                  <a href="mailto:nicomutale@gmail.com" target="_blank" rel="noopener noreferrer">
                    <CgMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-700 dark:text-white">
                  <a href="https://twitter.com/nicomutale" target="_blank" rel="noopener noreferrer">
                    <CgTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl lg:p-4 bg-white dark:bg-gray-800">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/d7e77dee-2a60-4670-8add-ed3aed88a13f"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-300">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-300">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-300">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-300">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-[#1e1a95] dark:text-white mt-4 shadow-lg shadow-blue-400 dark:shadow-blue-700 bg-blue-200 dark:bg-blue-600 hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-[0.98] ease-in duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-blue-400 dark:shadow-blue-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white dark:bg-gray-800">
              <CgChevronDoubleUp className="text-[#0f07fb] dark:text-blue-400" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;