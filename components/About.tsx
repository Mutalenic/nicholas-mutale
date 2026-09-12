import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/assets/Profile.jpg"

const About: React.FC = () => {
  return (
    <div id="about" className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-darkBg dark:to-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16"> {/* Slightly reduced bottom margin on smaller screens */}
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md shadow-md dark:shadow-blue-900/50 border border-blue-100 dark:border-blue-900/50">
            ABOUT ME
          </p>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2"></div> {/* Added margin top */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Image Column - Adjusted column span */}
          {/* Added hidden on mobile (default) and md:flex to show on medium+ screens */}
          <div className="flex md:col-span-4 order-2 md:order-1 justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative mx-auto md:mx-0 w-fit">
              <div className="relative z-10 overflow-hidden rounded-full shadow-2xl dark:shadow-blue-900/20">
                <Image
                  className="hover:scale-105 transition-all duration-500 rounded-full"
                  src={profileImg}
                  width={300}
                  height={300}
                  alt="Profile of Nicholas Mutale, Full-Stack Engineer"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Content Column - Adjusted column span and padding */}
          {/* Adjusted column span to take full width on mobile */}
          <div className="col-span-1 md:col-span-8 order-1 md:order-2">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-lg dark:shadow-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Building systems that stay reliable under real production load</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                I&apos;m a <span className="font-semibold">Full-Stack Engineer</span> based in Livingstone, Zambia, working across Ruby on Rails, React, and Next.js. I own and scale backend systems for organizations that can&apos;t afford downtime — across government, healthcare, and e-commerce.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                My core strength is <span className="font-semibold">legacy system modernization</span>. I take Rails applications that are multiple major versions behind and upgrade them safely — most recently Rails 5.2 → 7.2 and Ruby 2.6 → 3.2 with <span className="font-semibold">zero downtime</span> on a live multi-subsite CMS serving government bodies. I rebuild the deployment and observability tooling around them so issues get caught before they reach users. The same discipline applies to every codebase I touch: understand the failure modes first, fix root causes, automate the boring parts.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed break-words">
                Beyond modernization, I&apos;ve built <span className="font-semibold">authentication and workflow architecture</span> for a healthcare platform connecting patients with doctors across in-person, home-based, and virtual care — covering diagnostic image pipelines, payment processing, and video consultation integration. I also led a full <span className="font-semibold">WordPress/WooCommerce migration</span> for a European e-commerce store, owning both the technical execution and project management end-to-end.
              </p>

              {/* CTA Button */}
              <Link href="/#work" className="inline-block mt-4 px-8 py-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View my projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;