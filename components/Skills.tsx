import React from "react";
// Remove Image import
// import Image from "next/image";
import SliderImport from "react-slick";
const Slider = SliderImport as any;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Remove image imports
// import htmlImg from "../public/assets/html.png";
// import cssImg from "../public/assets/css.png";
// import javascriptImg from "../public/assets/javascript.png";
// import railsImg from "../public/assets/rails.png";
// import reactImg from "../public/assets/react.png";
// import redux from "../public/assets/redux.png";
// import rubyImg from "../public/assets/ruby.png";
// import tailwindcss from "../public/assets/tailwind.png";

// Define skills data array (only names needed now)
const skillsData = [
  { name: "RUBY ON RAILS" },
  { name: "REACT" },
  { name: "REDUX" },
  { name: "TAILWINDCSS" },
  { name: "RUBY" },
  { name: "JAVASCRIPT" },
  { name: "CSS" },
  { name: "HTML" },
];

// Define background and text color pairs for skills
const skillColors = [
  "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
  "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
  "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
  "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
];

const Skills: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default: Show 4 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Changed speed slightly
    pauseOnHover: true, // Pause autoplay on hover
    arrows: false, // Hide default arrows, dots are enough
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        }
      }
    ]
  };

  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-16 md:py-24"> {/* Added padding top/bottom */}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4"> {/* Added horizontal padding */}
        <p className="text-xl tracking-widest uppercase text-[#1e1a95] dark:text-blue-400">
          Skills
        </p>
        <h2 className="py-4 dark:text-gray-200">What I Can Do</h2>
        <div className="mt-8"> {/* Added margin top */}
          <Slider {...settings}>
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="p-4"> {/* Added padding around each slide item */}
                {/* Apply dynamic background/text colors and remove shadow */}
                <div className={`p-6 rounded-xl hover:scale-105 ease-in duration-300 border ${skillColors[index % skillColors.length]} h-32 flex flex-col justify-center items-center`}> {/* Adjusted height and added flex centering */}
                    <div className="flex flex-col items-center justify-center">
                      {/* Make text larger and bolder */}
                      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Skills;