import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section id="meet-shayok" className="relative h-[calc(100vh-100px)]">
      {/* Mobile/Tablet (under lg): image fills section, heading overlaps bottom */}
      <div className="container mx-auto h-full lg:hidden">
        <div className="relative h-full w-full flex justify-center">
          <Image
            src="/images/enohyn.png"
            alt="shayok"
            fill
            style={{ objectFit: 'contain', borderRadius: '1rem' }}
            className=""
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
          <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
            <div className="relative w-full md:w-3/4 bg-white/10 backdrop-blur-sm shadow-lg rounded-xl px-4 py-10 text-center outer-box">
              <h1 className="font-space drop-shadow-xl hero-gradient text-4xl font-semibold">
                {`<h1>Shayok</h1>`}
              </h1>
              <h1 className="mt-1 font-space hero-gradient text-4xl font-semibold">
                Front End Developer
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop (lg and up): your previous layout */}
      <div className="hidden lg:flex container mx-auto h-full items-center">
        <div className="outer-box w-6/12 text-center flex justify-center border-t-r py-10">
          <div className="inner-box h-full w-full flex flex-col justify-center">
            <div className="max-sm:py-10 text-4xl font-semibold lg:text-5xl py-40">
              <h1 className='font-space drop-shadow-xl hero-gradient'>
                {`<h1>Shayok</h1>`}
              </h1>
              <h1 className='font-space hero-gradient'>
                Front End Developer
              </h1>
            </div>
          </div>
        </div>

        <div className="w-6/12 flex justify-end items-start">
          <Image src="/images/enohyn.png" width={320} height={400} className="rounded-xl" alt="shayok" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection