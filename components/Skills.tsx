import React, { useState, useEffect, useRef } from "react";
import SliderImport from "react-slick";
const Slider = SliderImport as any;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGem, FaCode } from "react-icons/fa";
import { SiRubyonrails, SiRedux, SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

// Expanded skills data with icons and additional information
const skillsData = [
  { 
    name: "React", 
    icon: <FaReact size={40} />, 
    experience: "3+ years",
    color: "bg-[#61DAFB]",
    textColor: "text-[#61DAFB]",
    category: "frontend",
    description: "Building interactive UIs with component-based architecture"
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs size={38} />, 
    experience: "2+ years",
    color: "bg-black",
    textColor: "text-black dark:text-white",
    category: "frontend",
    description: "Server-side rendering and static site generation"
  },
  { 
    name: "Redux", 
    icon: <SiRedux size={38} />, 
    experience: "3+ years",
    color: "bg-[#764ABC]",
    textColor: "text-[#764ABC]",
    category: "frontend",
    description: "State management for complex applications"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript size={38} />, 
    experience: "2+ years",
    color: "bg-[#3178C6]",
    textColor: "text-[#3178C6]",
    category: "language",
    description: "Static typing for JavaScript to improve code quality"
  },
  { 
    name: "JavaScript", 
    icon: <FaJs size={38} />, 
    experience: "4+ years",
    color: "bg-[#F7DF1E]",
    textColor: "text-[#F7DF1E]",
    category: "language",
    description: "Dynamic language for web development"
  },
  { 
    name: "Ruby", 
    icon: <FaGem size={38} />, 
    experience: "3+ years",
    color: "bg-[#CC342D]",
    textColor: "text-[#CC342D]",
    category: "language",
    description: "Object-oriented programming for backend development"
  },
  { 
    name: "Ruby on Rails", 
    icon: <SiRubyonrails size={38} />, 
    experience: "3+ years",
    color: "bg-[#CC0000]",
    textColor: "text-[#CC0000]",
    category: "backend",
    description: "Full-stack web application framework"
  },
  { 
    name: "PostgreSQL", 
    icon: <SiPostgresql size={38} />, 
    experience: "3+ years",
    color: "bg-[#336791]",
    textColor: "text-[#336791]",
    category: "backend",
    description: "Relational database management system"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss size={38} />, 
    experience: "2+ years",
    color: "bg-[#38B2AC]",
    textColor: "text-[#38B2AC]",
    category: "frontend",
    description: "Utility-first CSS framework for rapid UI development"
  },
  { 
    name: "HTML5", 
    icon: <FaHtml5 size={38} />, 
    experience: "4+ years",
    color: "bg-[#E34F26]",
    textColor: "text-[#E34F26]",
    category: "frontend",
    description: "Markup language for structuring web content"
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt size={38} />, 
    experience: "4+ years",
    color: "bg-[#1572B6]",
    textColor: "text-[#1572B6]",
    category: "frontend",
    description: "Styling language for designing web pages"
  },
];

// Categories
const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "language", label: "Languages" },
];

const SkillCard = ({ skill }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group h-full">
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
        <div className={`w-32 h-32 ${skill.color} rounded-full -top-12 -right-12 absolute blur-xl`}></div>
        <div className={`w-24 h-24 ${skill.color} rounded-full -bottom-8 -left-8 absolute blur-lg`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent"></div>
        <div className={`absolute w-full h-16 -bottom-8 left-0 transform rotate-6 scale-125 ${skill.color} opacity-10`}></div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center p-4 text-center relative z-10">
        <div className={`p-3 rounded-full ${skill.color} bg-opacity-15 dark:bg-opacity-30 mb-3 backdrop-blur-sm ring-1 ring-gray-100 dark:ring-gray-700 shadow-md group-hover:shadow-lg transition-all duration-300`}>
          {/* Updated to ensure visibility in both light and dark modes */}
          <div className="text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(skill.icon, { size: 30 })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-1 text-gray-800 dark:text-gray-200">{skill.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{skill.experience}</p>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = skillsRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  // Responsive slides based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Multi-item carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    className: "skills-carousel",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div 
      id="skills" 
      className="w-full py-16 bg-gray-50 dark:bg-gray-900"
      ref={skillsRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title section */}
        <div className={`text-center mb-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            SKILLS & TECHNOLOGIES
          </p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">My Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center mb-8 gap-3 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Carousel - Multiple Skills Per Slide */}
        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="skills-carousel-container">
            <Slider {...settings}>
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="px-2">
                  <SkillCard skill={skill} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        
        {/* Tech Stats */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">11+</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Technologies</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">∞</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Passion for Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;