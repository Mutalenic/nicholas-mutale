import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { getFeaturedProjects, getAllProjects, ProjectData } from "../data/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for the carousel
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -ml-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <FiChevronLeft size={24} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute right-0 z-10 top-1/2 -translate-y-1/2 -mr-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none"
      onClick={onClick}
      aria-label="Next slide"
    >
      <FiChevronRight size={24} />
    </button>
  );
};

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({ project, index }) => {
  const { title, description, image, techStack, demoLink, codeLink, detailsLink } = project;
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index); // Staggered animation

    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div className="p-4">
      <div 
        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl 
        bg-white dark:bg-gray-800 h-full flex flex-col transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        <div className="relative group">
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Project Image with better hover effects */}
          <div className="overflow-hidden">
            <Image 
              src={image} 
              alt={`${title} project`} 
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Updated overlay with better visual design */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex space-x-4">
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all hover:scale-110"
                  aria-label="View live demo"
                >
                  <FiExternalLink size={18} />
                </a>
                <a 
                  href={codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all hover:scale-110"
                  aria-label="View source code"
                >
                  <FiGithub size={18} />
                </a>
              </div>
              <Link href={detailsLink}>
                <span className="inline-flex items-center bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all">
                  View Details <FiArrowRight className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content area with improved typography and spacing */}
        <div className="p-6 flex-grow flex flex-col relative">
          {/* Subtle tech indicator badge */}
          <div className="absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full shadow-md">
            {techStack[0]} {techStack.length > 1 ? `+ ${techStack.length - 1}` : ""}
          </div>
          
          <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-3">{description}</p>
          
          <div className="mt-auto">
            {/* Tech stack with improved visual design */}
            <div className="flex flex-wrap gap-2 mb-5">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* View details link with animated arrow */}
            <Link href={detailsLink}>
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-all group/link">
                View Project Details
                <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create a wrapper component to handle the TypeScript issues
const SlickCarousel = ({ children, settings, sliderRef }: { 
  children: React.ReactNode;
  settings: any; 
  sliderRef: React.RefObject<any>;
}) => {
  // Using forwardRef to properly handle the ref and avoid TypeScript errors
  return (
    <div className="slider-container">
      {/* @ts-ignore - Ignoring TypeScript error for Slider component */}
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

const ProjectCarousel: React.FC<{ projects: ProjectData[] }> = ({ projects }) => {
  const mainSlider = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Navigate to specific slide when clicking a thumbnail
  const goToSlide = (index: number) => {
    if (mainSlider.current) {
      mainSlider.current.slickGoTo(index);
    }
  };

  return (
    <div className="relative">
      {/* Main Project Carousel */}
      <div className="mb-8">
        <SlickCarousel settings={mainSettings} sliderRef={mainSlider}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </SlickCarousel>
      </div>
      
      {/* Modern Thumbnail Navigator */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`relative mx-1.5 focus:outline-none group transition-all duration-300 ${
                activeSlide === index ? 'scale-110' : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Go to ${project.title} project`}
              title={project.title}
            >
              <div 
                className={`relative w-12 h-12 overflow-hidden rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800' 
                    : 'grayscale hover:grayscale-0'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Active indicator dot */}
              {activeSlide === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              )}
              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {project.title}
                </div>
                <div className="w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Project count indicator */}
      <div className="flex justify-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full">
          {activeSlide + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  
  const projectsToDisplay = showAllProjects ? allProjects : featuredProjects;
  
  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div id="work" className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-xl tracking-widest uppercase text-[#1e1a95] dark:text-blue-400 inline-block bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mb-2">
            Projects
          </p>
          <h2 className="text-4xl font-bold mt-2 dark:text-white">What I've Built</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mt-3 mx-auto"></div>
        </div>
        
        <div className="mx-8 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-3xl"></div>
          
          <div className="relative">
            <ProjectCarousel projects={projectsToDisplay} />
          </div>
        </div>
        
        {allProjects.length > featuredProjects.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={handleToggleProjects}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
            >
              {showAllProjects ? "Show Featured Projects" : "View All Projects"}
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;