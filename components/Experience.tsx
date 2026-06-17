import React from "react";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="w-full py-16 bg-white dark:bg-gray-900 scroll-mt-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            EXPERIENCE
          </p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 border-l border-gray-200 dark:border-gray-700 space-y-10">
            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      Confidential Public Sector Client
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Backend Engineer (Contract)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    April 2025 – April 2026
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                  Led Rails upgrade, deployment pipeline management, and production incident resolution for a multi-subsite government CMS.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      Bluemify
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Backend Engineer (Contract)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    June 2025 – Present
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                  Built backend infrastructure for a live healthcare platform as one of two backend engineers on a cross-functional team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
