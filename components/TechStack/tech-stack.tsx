import React from 'react'
import TextSphere from './text-sphere'

function TechStack() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24"
    >
      <div className="container mx-auto">
        <div className="portfolio-box rounded-xl py-14 flex flex-col gap-14">
          <header className="flex flex-col items-center gap-3 text-center">
            <h2
              id="about-heading"
              className="font-space text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-white via-zinc-300 to-teal-800 bg-clip-text text-transparent tracking-wide"
            >
                Techstack
            </h2>
          </header>

            {/* Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-12 items-center lg:rounded-r-2xl rounded-b-2xl lg:bg-gradient-to-r from-transparent via-white/5 to-white/10 bg-gradient-to-b from-transparent via-transparent to-white/10 backdrop-blur-sm">
            {/* Tech Cloud */}
            
              <div className="rounded-lg min-h-[320px] flex items-center justify-center">
                <TextSphere />
              </div>

            {/* Narrative */}
            <div className="flex flex-col gap-6 text-white  p-4 rounded-r-2xl">
              <h3 className="font-space text-xl tracking-wide">
                A Unique Perspective on Life & Work
              </h3>
              <div className="space-y-5 text-sm leading-relaxed text-white/85">
                <p className="indent-2">
                  As a front-end developer, I combine my love for coding with my passion for design to create beautiful and functional experiences. My core stack includes HTML, CSS, JavaScript, React, Tailwind, and CMS platforms—and I stay curious about emerging tools.
                </p>
                <p className="indent-2">
                  When I&apos;m not coding, I recharge outdoors—hiking, biking, or playing sports. Staying active helps keep my mind sharp and my problem-solving fresh.
                </p>
                <p className="indent-2">
                  I value clarity, performance, and maintainability. I enjoy collaborating, refactoring thoughtfully, and delivering interfaces that feel intentional.
                </p>
                <p className="indent-2">
                  I aim to bring enthusiasm, craft, and resilience to every project I join.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default TechStack;