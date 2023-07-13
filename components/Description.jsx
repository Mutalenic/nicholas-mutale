import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri";


function Description({description, demoLink, codeLink, react, javascript, tvmazeApi, spaceApi, Webpack, css, ruby, rails, postgres, redux, Tailwindcss, restcountriesApi,openweatherApi }){
    return(
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <div className="flex-wrap">
        <div className="col-span-4">
          <h3 className="text-xl tracking-widest uppercase text-[#1e1a95]">Project</h3>
          <h3>Overview</h3>
          <p>
            {description}
          </p>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-2 mt-4 mr-8">Code</button></a>
        </div>
        <div className="col-span- md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="font-bold pb-2 text-[#1e1a95]">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />{react} {ruby} {javascript}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> {redux} {rails} {tvmazeApi}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> {openweatherApi} {postgres}  {css}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" /> {restcountriesApi} {Tailwindcss} {Webpack} {spaceApi}
              </p>
            </div>
          </div>
        </div>
        </div>
</div>

    )
}

export default Description