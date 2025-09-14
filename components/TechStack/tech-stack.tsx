import React from "react";
import TextSphere from "./text-sphere";

function TechStack() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 container mx-auto"
    >
      <div className="portfolio-box rounded-xl flex flex-col gap-14">
        <header className="flex flex-col items-center gap-3 text-center">
          <h2
            id="about-heading"
            className="font-space text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-white via-zinc-300 to-teal-800 bg-clip-text text-transparent tracking-wide"
          >
            Tech Stack
          </h2>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-12 items-center lg:rounded-r-2xl rounded-b-2xl lg:bg-gradient-to-r from-transparent via-white/5 to-white/10 bg-gradient-to-b from-transparent via-transparent to-white/10 backdrop-blur-sm">
          {/* Tech Cloud */}

          <div className="rounded-lg min-h-[320px] flex items-center justify-center">
            <TextSphere />
          </div>

          {/* Narrative */}
          <div className="flex flex-col gap-6 text-white  px-4 py-6 rounded-r-2xl">
            <div className="space-y-5 leading-relaxed text-white/85">
              These are the tools I work with every day — not just names on a
              list, but the technologies I rely on to bring ideas to life.
              <ul className="list-disc list-inside mt-2 space-y-4">
                <li>
                  Frontend Precision: React, TypeScript, and Next.js are the
                  foundations I use to build applications that are fast,
                  reliable, and easy to maintain.
                </li>
                <li>
                  Interaction Design: With libraries like dnd-kit and
                  react-select, I craft smooth, intuitive interactions that make
                  interfaces feel polished and effortless to use.
                </li>
                <li>
                  Performance & Data Handling: I’ve solved challenges with
                  pagination, infinite scroll, and state management — making
                  sure apps stay responsive even as data grows more complex.
                </li>
                <li>
                  Architecture & Beyond: I also step into middleware, APIs, and
                  database connections when needed, ensuring the entire flow
                  from UI to backend runs seamlessly. Each of these tools plays
                  a part in helping me do what I value most: turning complex
                  requirements into clean, scalable, and user-friendly
                  experiences.
                </li>
              </ul>
              Lastly but most importantly, turning complex requirements into
              clean, scalable, and user-friendly experiences.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStack;
