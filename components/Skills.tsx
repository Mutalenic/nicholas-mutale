import React, { useState, useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Ruby",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "HAML",
      "ERB",
      "SCSS",
      "Bash/Shell",
      "PHP",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Ruby on Rails", "React", "Next.js", "Redux", "Hotwire (Turbo + Stimulus)"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "ActiveRecord ORM"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Capistrano",
      "Gemfury",
      "Passenger/Nginx",
      "rbenv",
      "Docker",
      "Linux server administration",
      "SSH bastion access",
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: ["Sentry", "New Relic", "Structured log analysis", "Incident response playbooks"],
  },
  {
    title: "Security & APIs",
    skills: [
      "RESTful API design",
      "JWT",
      "Devise",
      "Pundit",
      "CanCanCan",
      "OmniAuth/OAuth2",
      "OTP/2FA",
      "Content Security Policy",
    ],
  },
  {
    title: "Testing",
    skills: [
      "RSpec",
      "FactoryBot",
      "Capybara",
      "Selenium",
      "Cypress",
      "Jest",
      "Brakeman",
      "RuboCop",
    ],
  },
  {
    title: "Integrations",
    skills: [
      "Zoom API",
      "Payment gateways (SasaPay, DPO Pay, Mollie)",
      "Cloudinary",
      "AWS S3",
      "Google OAuth2",
    ],
  },
  {
    title: "E-Commerce & CMS",
    skills: ["WordPress", "WooCommerce", "Elementor", "Multi-site CMS architecture"],
  },
];

const stats = [
  { value: "3", label: "Industries Served in Production" },
  { value: "20%+", label: "Query Performance Gains Delivered" },
  { value: "70%", label: "Reduction in Operational Toil" },
  { value: "Zero-Downtime", label: "Major Version Upgrades Led" },
];

const Skills: React.FC = () => {
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
          className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
