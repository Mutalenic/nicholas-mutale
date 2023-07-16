import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import spacetravellerImg from "../public/assets/projects/SpaceTravellerHub.png";

function spacetraveller() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={spacetravellerImg}
          alt="SpaceTravellerHub image"
        />
        <div className=" text-white z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Spacetreveler&#39;s Hub</h2>
          <h3>ReactJs / Redux / CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h3>Overview</h3>
          <p>
            Real live data from the SpaceX API. A web application built with
            React and Redux for a company that provides commercial and
            scientific space travel services. The application allows users to
            book rockets and join selected space missions.
          </p>
          <a href="https://6262b54ee8f3d52d5200c258--tiny-bavarois-1b6015.netlify.app/"  target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/Mutalenic/space_travelers_hub"  target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> SPACEX API
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

export default spacetraveller;
