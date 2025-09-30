"use client";
import React, { useState } from "react";
import { FiCode } from "react-icons/fi";

const projectExperienceData = [
  {
    duration: "June 2025 – Present",
    projectName: "Collaborate Sourcing Services",
    clientName: "Collaborate Sourcing Services",
    responsiblities: [
      "Developed end-to-end solution to parse Excel booking forms and map entries to Purchase Order (PO) spreadsheets to produce a report with inline validation and manual correction",
      "Maintained admin workflows and data entities (factories, suppliers, users) to support mapping and reconciliation, improving operational efficiency",
      "Delivered downloadable business-ready reports and a lightweight dashboard, reducing manual reconciliation time and data errors",
    ],
  },
  {
    duration: "Mar 2025 – May 2025",
    projectName: "Resource Management Platform",
    clientName: "Vivasoft Limited",
    responsiblities: [
      "Lead frontend development of a micro-frontend resource-tracking dashboard using React.js, React Query, and Tailwind CSS",
      "Built allocation widgets, filter controls, and drag-and-drop assignment features for real-time staffing visibility",
      "Collaborated with stakeholders to translate requirements into modular UI components, reducing resource conflicts by 30%",
    ],
  },
  {
    duration: "Jan 2025 – Feb 2025",
    projectName: "Vivakit UI-Library",
    clientName: "Vivakit",
    responsiblities: [
      "Designed and developed a reusable React component library (Tabs, Select, Datepicker, Modal) with Prop-driven APIs",
      "Published package to npm and maintained semantic versioning",
      "Authored usage documentation and examples, cutting UI development time by 40%",
    ],
  },
  {
    duration: "Aug 2024 – Dec 2024",
    projectName: "Maxis Digital Insights",
    clientName: "Maxis Digital Insights",
    responsiblities: [
      "Implemented multi-tenant dashboards with Next.js, Redux Toolkit, and React Hook Form",
      "Developed tenant-specific theming and authentication flows",
      "Optimized chart rendering and page-load performance, achieving 99.8% uptime and 35% faster load times",
    ],
  },
  {
    duration: "Aug 2023 – Jul 2024",
    projectName: "Klikit Webshop Platform",
    clientName: "Klikit",
    responsiblities: [
      "Developed merchant onboarding and consumer storefront features using React.js, Next.js, Redux Toolkit, and Formik",
      "Implemented responsive layouts with Tailwind CSS and Sass for cross-device compatibility",
      "Added localization support and date-fns integration for time-zone-aware reservation logic",
    ],
  },
  {
    duration: "Jul 2022 – Jun 2023",
    projectName: "SD17 Sign-Language Platform",
    clientName: "Bangladesh Computer Council",
    responsiblities: [
      "Built accessible video chat, live-caption, and sign-language glossary components in React.js",
      "Ensured low-bandwidth performance and mobile responsiveness with Tailwind CSS",
      "Integrated RESTful APIs for real-time interpretation sessions",
    ],
  },
  {
    duration: "Apr 2022 – Sep 2022",
    projectName: "BI Analytics Dashboard",
    clientName: "Mandara Stocks, Early data, ASEAN data",
    responsiblities: [
      "Designed and implemented ETL pipelines for incremental sales and product data",
      "Developed interactive React.js visualizations (tables, charts) and drill-down filters",
      "Collaborated on UI/UX to deliver predictive insights, improving forecast accuracy by 20%",
    ],
  },
];

const ProjectExperience = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="portfolio">
      <div className="flex flex-col w-full gap-y-12 py-24">
        <h2
          id="about-heading"
          className="font-space text-3xl sm:text-4xl text-center font-semibold hero-gradient tracking-wide"
        >
          Project Experience
        </h2>
        <div className="scroll-content container scroll-smooth h-[calc(100vh_-_400px)] pt-1 overflow-y-auto">
          <ul className="timeline theme-text">
            {projectExperienceData.map((exp, idx) => {
              const isOpen = openIdx === idx;
              return (
                <li
                  key={idx}
                  className={`mb-6 ml-4 relative ${
                    isOpen ? "shadow-sm shadow-teal-900 rounded-xl" : ""
                  }`}
                >
                  {/* left icon dot */}
                  <span className="absolute inline-flex justify-center items-center w-8 h-8 bg-gradient-to-br from-zinc-900 via-zinc-700 to-teal-900 rounded-full mt-2 -translate-x-1/2 -left-5 border border-teal-700 dark:border-gray-900 dark:bg-gray-700">
                    <FiCode
                      color="#d1d5db"
                      className="z-10 text-xl rotate-6"
                      width={8}
                      height={8}
                    />
                  </span>

                  {/* Header button */}
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-panel-${idx}`}
                    className={`w-full p-5 shadow-teal-900/70 text-left bg-gradient-to-tl from-transparent via-transparent to-white/10 rounded-xl flex items-center justify-between gap-4 transition-all ${
                      isOpen ? "rounded-b-none" : "shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col items-start gap-x-4 gap-y-2">
                      <time className="text-sm font-bold leading-none theme-text opacity-60">
                        {exp.duration}
                      </time>
                      <span className="text-lg font-semibold">
                        <span className="text-teal-600">Project: </span>
                        {exp.projectName}
                      </span>
                      <span className="text-base font-medium theme-text opacity-75">
                        <span className="text-teal-600">Client: </span>
                        {exp.clientName}
                      </span>
                    </div>
                    <span
                      className={`theme-text opacity-75 transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  </button>

                  {/* Body with expand/collapse transition */}
                  <div
                    id={`exp-panel-${idx}`}
                    role="region"
                    aria-labelledby={`exp-header-${idx}`}
                    className={`ml-2 grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "[grid-template-rows:1fr]"
                        : "[grid-template-rows:0fr]"
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
