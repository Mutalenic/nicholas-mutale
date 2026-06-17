import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGem, FaCode } from "react-icons/fa";
import {
  SiRubyonrails,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const skillsData = [
  {
    name: "Ruby on Rails",
    icon: <SiRubyonrails size={38} />,
    color: "bg-[#CC0000]",
    category: "backend",
  },
  {
    name: "Ruby",
    icon: <FaGem size={38} />,
    color: "bg-[#CC342D]",
    category: "language",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={38} />,
    color: "bg-[#336791]",
    category: "backend",
  },
  {
    name: "Redis",
    icon: <SiRedis size={38} />,
    color: "bg-[#DC382D]",
    category: "backend",
  },
  {
    name: "Capistrano",
    icon: <FaCode size={38} />,
    color: "bg-[#6B7280]",
    category: "backend",
  },
  {
    name: "Hotwire (Turbo + Stimulus)",
    icon: <FaCode size={38} />,
    color: "bg-[#4F46E5]",
    category: "backend",
  },
  {
    name: "JWT",
    icon: <FaCode size={38} />,
    color: "bg-[#9333EA]",
    category: "backend",
  },
  {
    name: "Devise",
    icon: <FaCode size={38} />,
    color: "bg-[#B91C1C]",
    category: "backend",
  },
  {
    name: "Pundit",
    icon: <FaCode size={38} />,
    color: "bg-[#374151]",
    category: "backend",
  },
  {
    name: "RSpec",
    icon: <FaCode size={38} />,
    color: "bg-[#CC342D]",
    category: "backend",
  },
  {
    name: "Docker",
    icon: <FaCode size={38} />,
    color: "bg-[#0EA5E9]",
    category: "backend",
  },
  {
    name: "AWS S3",
    icon: <FaCode size={38} />,
    color: "bg-[#F59E0B]",
    category: "backend",
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
    color: "bg-[#61DAFB]",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={38} />,
    color: "bg-black",
    category: "frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux size={38} />,
    color: "bg-[#764ABC]",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={38} />,
    color: "bg-[#3178C6]",
    category: "language",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={38} />,
    color: "bg-[#F7DF1E]",
    category: "language",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={38} />,
    color: "bg-[#38B2AC]",
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={38} />,
    color: "bg-[#E34F26]",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={38} />,
    color: "bg-[#1572B6]",
    category: "frontend",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "language", label: "Languages" },
];

const SkillCard = ({ skill }: { skill: (typeof skillsData)[number] }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group h-full">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
        <div
          className={`w-32 h-32 ${skill.color} rounded-full -top-12 -right-12 absolute blur-xl`}
        ></div>
        <div
          className={`w-24 h-24 ${skill.color} rounded-full -bottom-8 -left-8 absolute blur-lg`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent"></div>
        <div
          className={`absolute w-full h-16 -bottom-8 left-0 transform rotate-6 scale-125 ${skill.color} opacity-10`}
        ></div>
      </div>

      <div className="flex flex-col items-center p-4 text-center relative z-10">
        <div
          className={`p-3 rounded-full ${skill.color} bg-opacity-15 dark:bg-opacity-30 mb-3 backdrop-blur-sm ring-1 ring-gray-100 dark:ring-gray-700 shadow-md group-hover:shadow-lg transition-all duration-300`}
        >
          <div className="text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(skill.icon, { size: 30 })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-1 text-gray-800 dark:text-gray-200">
            {skill.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const currentRef = skillsRef.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div
      id="skills"
      className="w-full py-16 bg-gray-50 dark:bg-gray-900"
      ref={skillsRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            TECHNICAL SKILLS
          </p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div
          className={`flex flex-wrap justify-center mb-8 gap-3 transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              2
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
              Live production systems
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              4+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
              Years in production
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              3
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
              Environments managed per deployment pipeline
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              20%+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
              Query performance improvement delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
