import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri";

interface DescriptionProps {
  description: string;
  demoLink: string;
  codeLink: string;
  react?: string;
  javascript?: string;
  tvmazeApi?: string;
  spaceApi?: string;
  Webpack?: string;
  css?: string;
  ruby?: string;
  rails?: string;
  postgres?: string;
  redux?: string;
  Tailwindcss?: string;
  restcountriesApi?: string;
  openweatherApi?: string;
}

const Description: React.FC<DescriptionProps> = ({
  description, 
  demoLink, 
  codeLink, 
  react, 
  javascript, 
  tvmazeApi, 
  spaceApi, 
  Webpack, 
  css, 
  ruby, 
  rails, 
  postgres, 
  redux, 
  Tailwindcss, 
  restcountriesApi,
  openweatherApi 
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <div className="flex-wrap">
        <div className="col-span-4">
          <h3 className="text-xl tracking-widest uppercase text-[#1e1a95] dark:text-blue-400">Project</h3>
          <h3 className="dark:text-gray-200">Overview</h3>
          <p className="dark:text-gray-300">
            {description}
          </p>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-lg hover:scale-105 transition-transform duration-300">Demo</button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-lg hover:scale-105 transition-transform duration-300">Code</button>
          </a>
        </div>
        <div className="col-span- md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 mt-4 bg-white dark:bg-gray-800">
          <div className="p-2">
            <p className="font-bold pb-2 text-[#1e1a95] dark:text-blue-400">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" />{react} {ruby} {javascript}
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> {redux} {rails} {tvmazeApi}
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> {openweatherApi} {postgres} {css}
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="p-1 text-[#5651e5] dark:text-blue-400" /> {restcountriesApi} {Tailwindcss} {Webpack} {spaceApi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description