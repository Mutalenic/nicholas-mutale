import { StaticImageData } from "next/image";
import portfolioImg from "../public/assets/portfolioImg.png";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  demoLink?: string;
  codeLink?: string;
  detailsLink?: string;
  featured?: boolean;
  badge?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "keelfine",
    title: "Keelfine",
    description:
      "A personal finance application built for everyday users. Rails backend, Tailwind CSS v4, Devise authentication, and vanilla JavaScript. Architected with a semantic CSS token system supporting full light/dark theming. Built for the Zambian market with a focus on simplicity and mobile usability.",
    image: portfolioImg,
    techStack: [
      "Ruby on Rails",
      "Tailwind CSS v4",
      "Devise",
      "PostgreSQL",
      "Vanilla JS",
    ],
    demoLink: "https://keelfine.app",
    featured: true,
  },
  {
    id: "bluemify",
    title: "Bluemify — Healthcare Platform",
    description:
      "Backend engineering on a live healthcare platform connecting patients with doctors across in-person, home-based, and virtual consultation types. Built as one of two backend engineers on a cross-functional team of four. Delivered the radiology workflow, patient dashboard API, Zoom integration for virtual consultations, Cloudinary-backed document storage, and full authentication hardening including JWT, OTP/2FA, and role-based access control.",
    image: portfolioImg,
    techStack: [
      "Ruby on Rails 7.1",
      "PostgreSQL",
      "JWT",
      "Devise",
      "Pundit",
      "Zoom API",
      "Cloudinary",
      "RSpec",
    ],
    badge: "Live · Confidential",
    featured: true,
  },
  {
    id: "public-sector-cms",
    title: "Public Sector CMS — Multi-site Platform",
    description:
      "Part-time contract on a high-availability multi-subsite CMS used by government bodies across Europe. Led a zero-downtime Rails 5.2 → 7.2 and Ruby 2.6 → 3.2 upgrade across multiple independently deployed subsites, each with their own staging and production environments managed via Capistrano 3 pipelines. Reduced operational toil by 70% and improved admin query performance by 20%+.",
    image: portfolioImg,
    techStack: [
      "Ruby on Rails 7.2",
      "Capistrano 3",
      "PostgreSQL",
      "Gemfury",
      "Passenger/Nginx",
      "Sentry",
    ],
    badge: "Live · Confidential",
    featured: true,
  },
];

export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

export const getAllProjects = () => {
  return projectsData;
};
