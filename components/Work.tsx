import React, { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaLandmark, FaHeartbeat, FaShoppingCart, FaWallet } from "react-icons/fa";
import { getFeaturedProjects, ProjectData, ProjectIcon } from "../data/projects";

const projectIcons: Record<ProjectIcon, React.ComponentType<{ size?: number; className?: string }>> = {
  government: FaLandmark,
  healthcare: FaHeartbeat,
  ecommerce: FaShoppingCart,
  finance: FaWallet,
};

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({
  project,
  index,
}) => {
  const { title, description, category, gradient, icon, techStack, demoLink, codeLink, badge } =
    project;
  const [isVisible, setIsVisible] = useState(false);
  const Icon = projectIcons[icon];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);

    return () => clearTimeout(timer);
  }, [index]);

  const hasLinks = Boolean(demoLink || codeLink);

  return (
    <div className="p-4">
      <div
        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:bg-gray-800 h-full flex flex-col transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="relative group">
          <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gradient}`}>
            {/* Decorative shapes */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-16 -left-8 w-44 h-44 rounded-full bg-black/10"></div>
            <Icon
              size={160}
              className="absolute -right-6 -bottom-8 text-white/10 rotate-[-12deg]"
            />
            <div className="relative h-full flex flex-col items-center justify-center gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
                <Icon size={44} className="text-white drop-shadow-md" />
              </div>
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>

          {badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 text-xs rounded-full shadow">
              {badge}
            </div>
          )}

          {hasLinks && (
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all hover:scale-110"
                    aria-label="View live"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all hover:scale-110"
                    aria-label="View source code"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col relative">
          <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-5">
            {description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const projects = getFeaturedProjects();

  return (
    <div
      id="work"
      className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-xl tracking-widest uppercase text-[#1e1a95] dark:text-blue-400 inline-block bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mb-2">
            Projects
          </p>
          <h2 className="text-4xl font-bold mt-2 dark:text-white">
            What I&apos;ve Built
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mt-3 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
