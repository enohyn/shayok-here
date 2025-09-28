"use client";
import React, { useState } from "react";
import { FiCode } from "react-icons/fi";

const projectExperienceData = [
  {
    duration: `August 1 2023 - ${new Date().toDateString()}`,
    projectName: "Self-Sign On, Webshop , Show-case, Reservation",
    clientName: "Klikit",
    responsiblities: [
      "Maintain and create reusable components with React JS, Formik, Redux toolkit for business owners to sign-up and create a Web shop for their chain of restaurants.",
      "Using browsers native functionality to maintain a Web shop for consumers to place order and gain seamless insight of order details and Reservation",
      "Design and maintain website for business owner to “Show case” their restaurant and food.",
      "Maintain and update user experience for consumers",
      "Localization support for consumer-end web application i.e Webshop and Reservation",
      "Debugging and bug fixes for features developed",
      "Make a responsive design for different devices using Sass and Tailwind CSS",
    ],
  },
  {
    duration: "November 2022 - July 2023",
    projectName: "Software for disabled people-SD17",
    clientName: "Bangladesh Computer Council",
    responsiblities: [
      "Visual component analysis to use in web application specifically for disabled people",
      "Create reusable components for web application using React JS",
      "Make a responsive design for different devices using Tailwind CSS",
    ],
  },
  {
    duration: "April 2022 - October 2022",
    projectName:
      "Data Analytics using BI (Business Intelligence) tool Qlik Sense",
    clientName: "Mandara Stocks, Early data, ASEAN data",
    responsiblities: [
      "Create and design data models for data visualization",
      "Maintain extract transform and load process for incremental data",
      "Dashboard preparation, Analysis, and Reporting for data-driven companies",
      "Determine data visualization components from UI/UX perspective",
    ],
  },
];

const ProjectExperience = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="portfolio" className="flex h-full xl:h-[100vh]">
      <div className="md:container md:mx-auto flex flex-col w-full h-[900px] gap-y-12 py-24">
        <h2
          id="about-heading"
          className="font-space text-3xl sm:text-4xl text-center font-semibold hero-gradient tracking-wide"
        >
          Project Experience
        </h2>
        <div className="scroll-content container scroll-smooth">
          <ul className="timeline theme-text">
            {projectExperienceData.map((exp, idx) => {
              const isOpen = openIdx === idx;
              return (
                <li key={idx} className={`mb-6 ml-4 relative ${isOpen ? 'shadow-sm shadow-teal-900 rounded-xl' : ''}`}>
                  {/* left icon dot */}
                  <span className="absolute inline-flex justify-center items-center w-8 h-8 bg-gradient-to-br from-zinc-900 via-zinc-700 to-teal-900 rounded-full mt-2 -translate-x-1/2 -left-5 border border-teal-700 dark:border-gray-900 dark:bg-gray-700">
                    <FiCode color="#d1d5db" className="z-10 text-xl rotate-6" width={8} height={8} />
                  </span>

                  {/* Header button */}
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-panel-${idx}`}
                    className={`w-full p-5 shadow-teal-900/70 text-left bg-gradient-to-tl from-transparent via-transparent to-white/10 rounded-xl flex items-center justify-between gap-4 transition-all ${isOpen ? 'rounded-b-none' : 'shadow-sm'}`}
                  >
                    <div className="flex flex-col items-start gap-x-4 gap-y-2">
                      <time className="text-sm font-bold leading-none theme-text opacity-60">
                        {exp.duration}
                      </time>
                      <span className="text-lg font-semibold">
                        <span className="text-teal-600">Project: </span>{exp.projectName}
                      </span>
                      <span className="text-base font-medium theme-text opacity-75">
                        <span className="text-teal-600">Client: </span>{exp.clientName}
                      </span>
                    </div>
                    <span className={`theme-text opacity-75 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                  </button>

                  {/* Body with expand/collapse transition */}
                  <div
                    id={`exp-panel-${idx}`}
                    role="region"
                    aria-labelledby={`exp-header-${idx}`}
                    className={`ml-2 grid transition-all duration-300 ease-out ${
                      isOpen ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-gradient-to-br from-transparent via-transparent to-white/10 rounded-b-xl rounded-t-none px-6 py-4 theme-text opacity-85">
                        <ul className="list-disc space-y-2">
                          {exp.responsiblities.map((res, i) => (
                            <li key={i}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
