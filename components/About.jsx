import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/assets/Profile.jpg"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About me
          </p>
          <p className="py-6">
            Hello!My name is Nicholas Mutale and I enjoy creating web applications.I
            have always been curious to know how web apps on the internet
            work and when MOOCs were introduced back in 2008, I was excited to
            increase my knowledge of software development and enrolled in a few
            courses.
          </p>
          <p className="py-6">
            Fast-forward 2022, I enrolled at Microverse, a remote software
            development program that uses pair programming and project building
            to teach development. I spent more than 2000+ hours learning web
            development.
          </p>
          <p className="py-6">
            These are some of the technologies I have been working with
            recently; HTML, CSS, JavaScript, React, Redux, Ruby, Ruby on rails
          </p>
          <p className="py-8 pt-8 text-gray-600 underline cursor-pointer">
            <Link href="/#work">Checkout some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={ profileImg }
            width="300"
            height="400"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
