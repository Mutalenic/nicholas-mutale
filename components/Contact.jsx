import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgChevronDoubleUp, CgMail, CgTwitter } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import getintouch from "../public/assets/getintouch.jpg"

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#0f07fb]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ getintouch }
                  alt="get in touch"
                  width="430%"
                  height="300%"
                />
              </div>
              <div>
                <h2 className="py-2">Nicholas Mutale</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&#39;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#1e1a95]">Connect With Me</p>
              </div>
              <div className="flex items-center justify-between gap-5max-w-[330px] m-auto py-4 ">
                <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="https://www.linkedin.com/in/nicomutale/"  target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="https://github.com/mutalenic"  target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="mailto:nicomutale@gmail.com"  target="_blank" rel="noopener noreferrer">
                    <CgMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://twitter.com/nicomutale"  target="_blank" rel="noopener noreferrer"><CgTwitter /></a>                
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4 ">
              <form
                method="POST"
                action="https://getform.io/f/d7e77dee-2a60-4670-8add-ed3aed88a13f"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-[#1e1a95] mt-4 shadow-lg shadow-blue-400 bg-blue-200 hover:bg-blue-300 hover:scale-90 ease-in duration-300">
  Send Message
</button>


              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <CgChevronDoubleUp className="text-[#0f07fb]" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
