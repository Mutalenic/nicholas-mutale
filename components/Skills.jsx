import React from "react";
import Image from "next/image";
import htmlImg from "../public/assets/html.png";
import cssImg from "../public/assets/css.png";
import javascriptImg from "../public/assets/javascript.png";
import railsImg from "../public/assets/rails.png";
import reactImg from "../public/assets/react.png";
import redux from "../public/assets/redux.png";
import rubyImg from "../public/assets/ruby.png";
import tailwindcss from "../public/assets/tailwind.png";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#1e1a95]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={htmlImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={cssImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={javascriptImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={reactImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={rubyImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={railsImg}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY ON RAILS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={redux} width="64px" height="64px" alt="html icon" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REDUX</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwindcss}
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWINDCSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
