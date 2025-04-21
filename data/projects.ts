import { StaticImageData } from 'next/image';
import moviespace from "../public/assets/projects/moviespace2.png";
import spaceTravellers from "../public/assets/projects/SpaceTravellerHub.png";
import digiBudgetApp from "../public/assets/projects/DigiApp.png";
import airquality from "../public/assets/projects/airquality.png";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  demoLink: string;
  codeLink: string;
  detailsLink: string;
  featured?: boolean;
}

// This array can be extended with more projects in the future
export const projectsData: ProjectData[] = [
  {
    id: "air-quality",
    title: "Air Quality",
    description: "This is an app for tracking air pollution in a country. In this web app you will be able to see the current air quality data and also can track the data of air pollution based on gas percentage of air.",
    image: airquality,
    techStack: ["React", "Redux", "CSS", "Restcountries API", "Openweather API"],
    demoLink: "https://deploy-preview-2--stately-kashata-1db13f.netlify.app/",
    codeLink: "https://github.com/Mutalenic/air-quality-data",
    detailsLink: "/airquality",
    featured: true,
  },
  {
    id: "moviespace",
    title: "Moviespace",
    description: "This JavaScript capstone project is about building a web application based on an external API. We selected an API that provides data about a topic we liked and then built the web app around it. The web app has 2 user interfaces.",
    image: moviespace,
    techStack: ["JavaScript", "CSS", "HTML", "TVmazeApi", "Webpack"],
    demoLink: "https://natig25.github.io/MovieSpace/",
    codeLink: "https://github.com/Mutalenic/JS-capstone",
    detailsLink: "/moviespace",
    featured: true,
  },
  {
    id: "digi-budget",
    title: "Digi-Budget",
    description: "The DigiBudget App is a mobile web application that allows the user to manage his/her budget: they have a list of transactions associated with a category, so that the user can see how much money they spend and on a particular category.",
    image: digiBudgetApp,
    techStack: ["Ruby", "Ruby on Rails", "PostgreSQL", "Tailwindcss"],
    demoLink: "https://joli-choucroute-65855.herokuapp.com/",
    codeLink: "https://github.com/Mutalenic/digi_budget",
    detailsLink: "/digibudgetapp",
    featured: true,
  },
  {
    id: "space-travelers",
    title: "Space Travelers Hub",
    description: "Real live data from the SpaceX API. A web application built with React and Redux for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    image: spaceTravellers,
    techStack: ["React", "Redux", "CSS", "SpaceApi"],
    demoLink: "https://6262b54ee8f3d52d5200c258--tiny-bavarois-1b6015.netlify.app/",
    codeLink: "https://github.com/Mutalenic/space_travelers_hub",
    detailsLink: "/spacetraveller",
    featured: true,
  },
  // You can add more projects here
  // Example:
  /*
  {
    id: "new-project",
    title: "New Project Title",
    description: "Description of your new project...",
    image: newProjectImage,  // Import this image at the top
    techStack: ["Tech1", "Tech2", "Tech3"],
    demoLink: "https://demo-link.com",
    codeLink: "https://github.com/yourusername/repo",
    detailsLink: "/project-detail-page",
    featured: true,  // Set to true if you want it to appear on the homepage
  },
  */
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projectsData;
};