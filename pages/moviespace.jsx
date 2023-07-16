import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import moviespaceImg from "../public/assets/projects/moviespace2.png";

function moviespace() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={moviespaceImg}
          alt="moviesspace image"
        />
        <div className=" text-white z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Moviespace App</h2>
          <h3>JavaScript / CSS / HTML</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h3>Overview</h3>
          <p>
            This JavaScript capstone project is about building a web application
            based on an external API. We selected an API that provides data
            about a topic that we liked and then built the web app around it. The
            web app has 2 user interfaces.{" "}
          </p>
          <a href="https://natig25.github.io/MovieSpace/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/Mutalenic/JS-capstone" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> TVMAZE API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> Webpack
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> HTML
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default moviespace;
