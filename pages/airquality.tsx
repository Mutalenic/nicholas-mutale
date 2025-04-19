import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import airqualityImg from "../public/assets/projects/airquality.png";
import { NextPage } from "next";

const AirQuality: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={airqualityImg}
          alt="airquality image"
        />
        <div className="text-white z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Air Quality</h2>
          <h3>React JS/ CSS/ Redux</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#1e1a95] dark:text-blue-400">Project</p>
          <h3 className="dark:text-gray-200">Overview</h3>
          <p className="dark:text-gray-300">
            This is an app for tracking air pollution in a country. In this web
            app you will be able to see the current air quality data is and
            also can track the data of air pollution based on the gas percentage of
            air
          </p>
          <a href="https://deploy-preview-2--stately-kashata-1db13f.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-lg hover:scale-105 transition-transform duration-300">Demo</button>
          </a>
          <a href="https://github.com/Mutalenic/air-quality-data" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-lg hover:scale-105 transition-transform duration-300">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#1e1a95] dark:text-blue-400">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> ReactJs
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> Redux
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> CSS
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> Restcountries API
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> Openweathermap API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className="underline cursor-pointer dark:text-gray-300">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default AirQuality;