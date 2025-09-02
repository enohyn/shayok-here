"use client"
import Image from "next/image"
import Link from "next/link"
import { ShayokIcon } from "../../public/icons/shayok-logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"
import { MENU_PATHS } from "../../constants/menu"
import { useState } from "react"

export function SiteHeader() {
  const [clickState, setClickState] = useState(false);
  const menuClick = () => {
    document.body.style.overflow = clickState ? 'auto' : 'hidden';
    setClickState(!clickState);
  }
  return (
    <header
      className={`sticky top-4 rounded-3xl inset-x-0 z-30 isolate h-[8vh] flex items-center
                 border-b border-white/10 bg-white/10 backdrop-blur-md
                 supports-[backdrop-filter]:bg-white/5
                 shadow-[0_8px_32px_0_rgba(13, 148, 136,0.15)] container ${clickState ? "rounded-b-none" : ""} px-4 lg:px-8`}
    >
      <nav className="w-full flex items-center justify-between">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <ul className="list-none capitalize flex items-center gap-4 text-white w-1/3">
            <li className="hover:text-teal-600">
              <Link href="#">About</Link>
            </li>
            <li className="hover:text-teal-600">
              <Link href="#">Experience</Link>
            </li>
          </ul>

          <Link className="inline-flex w-1/3 justify-center items-center" href="/shayok-portfolio">
            <span className="font-megrim font-extrabold text-2xl text-white hover:text-teal-600 transition inline-flex items-center">
              <ShayokIcon className="size-6" />
              Shayok
            </span>
          </Link>

          <div className="flex gap-x-4 w-1/3 justify-end">
            <Link href="https://github.com/enohyn" target="_blank">
              <VscGithub className="size-6 text-white hover:text-teal-600 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/shayok-here/" target="_blank">
              <AiOutlineLinkedin className="size-6 text-white hover:text-teal-600 transition" />
            </Link>
          </div>
        </div>

        {/* Mobile header bar */}
        <div className="lg:hidden sticky flex items-center justify-between w-full">
          <button
            aria-label="Open menu"
            aria-expanded={clickState}
            aria-controls="mobile-menu"
            onClick={menuClick}
            className="p-2 text-white hover:text-teal-600"
          >
            <GiHamburgerMenu className="w-7 h-7" />
          </button>

          <Link className="inline-flex justify-center items-center" href="/shayok-portfolio">
            <span className="text-2xl font-megrim font-extrabold text-white hover:text-teal-600 transition inline-flex items-center">
              <ShayokIcon className="size-6" />
              Shayok
            </span>
          </Link>

          {/* spacer to balance layout */}
          <span className="w-7" aria-hidden="true" />

          {/* Backdrop (stronger) */}
          <div
            className={`${clickState ? "fixed" : "hidden"} left-0 right-0 bottom-0 top-[8vh] bg-black/60 z-40`}
            onClick={menuClick}
          />

          {/* Slide-in mobile menu (darker for contrast) */}
          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className={`absolute inset-0 w-full h-[calc(100vh-8vh)] top-[8vh] mobile-menu-backdrops flex flex-col items-center justify-start gap-8 text-2xl
                        ${clickState ? "translate-x-0" : "-translate-x-[calc(100%+20%)]"}`}
          >
            <div className="w-full inline-flex justify-end p-3">
              <button
                aria-label="Close menu"
                className="p-2 text-white hover:text-teal-600"
                onClick={menuClick}
              >
                <FaAngleDoubleLeft className="w-6 h-6" />
              </button>
            </div>

            <ul className="px-4 flex flex-col gap-2">
              {MENU_PATHS.map((menu, index) => (
                <li key={index} className="py-2 flex justify-center">
                  <Link
                    href={menu.path}
                    onClick={menuClick}
                    className="text-white text-xl py-2 px-3 rounded hover:text-teal-600 transition"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <div className="flex justify-center items-center gap-x-4 pb-6">
                  <Link href="https://github.com/enohyn" target="_blank" onClick={menuClick}>
                    <VscGithub className="w-7 h-7 text-white hover:text-teal-600 transition" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/shayok-here/" target="_blank" onClick={menuClick}>
                    <AiOutlineLinkedin className="w-7 h-7 text-white hover:text-teal-600 transition" />
                  </Link>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader