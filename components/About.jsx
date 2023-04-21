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
            Hello there! My name is Nicholas Mutale, and I am passionate about creating web applications. From a young age, I have always been curious about how web apps work, and my curiosity led me to enroll in some MOOCs when they were introduced in 2008. These courses helped me increase my knowledge of software development, and I have been hooked ever since.
          </p>
          <p className="py-6">
            In 2022, I decided to take my skills to the next level and enrolled in Microverse, a remote software development program that emphasizes pair programming and project building. Over the course of 2000+ hours, I have gained a deep understanding of web development.
          </p>
          <p className="py-6">
            Among the technologies I have been working with recently are HTML, CSS, and JavaScript - the foundational languages of the web - as well as React and Redux, which allow for the creation of powerful, data-driven front-end applications. On the back end, I have also been working with Ruby and Ruby on Rails, which provide an elegant and efficient framework for building robust, scalable web applications.
          </p>
    <p className="py-6">I am always eager to take on new challenges and contribute to exciting projects. With my vast experience and expertise, I am confident in my ability to create high-quality web applications that are both functional and visually appealing.</p>
          <p className="py-8 pt-8 text-gray-600 underline cursor-pointer">
            <Link href="/#work">
    
    Checkout some of my latest projects</Link>
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
