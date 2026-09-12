export type ProjectIcon = "government" | "healthcare" | "ecommerce" | "finance";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  gradient: string;
  icon: ProjectIcon;
  techStack: string[];
  demoLink?: string;
  codeLink?: string;
  detailsLink?: string;
  featured?: boolean;
  badge?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "public-sector-cms",
    title: "Public Sector CMS — Multi-site Platform",
    description:
      "Part-time contract on a high-availability multi-subsite CMS used by government bodies across Europe. Led a zero-downtime Rails 5.2 → 7.2 and Ruby 2.6 → 3.2 upgrade across multiple independently deployed subsites, each with their own staging and production environments managed via Capistrano 3 pipelines. Reduced operational toil by 70% and improved admin query performance by 20%+.",
    category: "Government Platform",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    icon: "government",
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
  {
    id: "bluemify",
    title: "Bluemify — Healthcare Platform",
    description:
      "Backend engineering on a live healthcare platform connecting patients with doctors across in-person, home-based, and virtual consultation types. Built as one of two backend engineers on a cross-functional team of four. Delivered the radiology workflow, patient dashboard API, Zoom integration for virtual consultations, Cloudinary-backed document storage, and full authentication hardening including JWT, OTP/2FA, and role-based access control.",
    category: "Healthcare",
    gradient: "from-teal-500 via-cyan-600 to-sky-600",
    icon: "healthcare",
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
    id: "ecommerce-migration",
    title: "E-Commerce Platform Migration",
    description:
      "Led the migration of a European e-commerce store from a legacy website builder to a custom WordPress/WooCommerce build — acting as both developer and project manager. Owned theme customization with Elementor, Mollie payment gateway integration, EU VAT/tax and shipping-zone compliance, shipping-provider tooling, and systematic multi-pass UI audits to catch regressions before launch.",
    category: "E-Commerce",
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    icon: "ecommerce",
    techStack: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "Mollie",
    ],
    featured: true,
  },
  {
    id: "keelfine",
    title: "Keelfine",
    description:
      "A personal finance application built for everyday users. Rails backend, Tailwind CSS v4, Devise authentication, and vanilla JavaScript. Architected with a semantic CSS token system supporting full light/dark theming. Built for the Zambian market with a focus on simplicity and mobile usability.",
    category: "Personal Finance",
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    icon: "finance",
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
];

export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

export const getAllProjects = () => {
  return projectsData;
};
