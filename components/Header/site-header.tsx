"use client";
import Link from "next/link";
import { ShayokIcon } from "../../public/icons/shayok-logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleLeft } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MENU_PATHS } from "../../constants/data";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle/theme-toggle";

export function SiteHeader() {
  const [clickState, setClickState] = useState(false);

  useEffect(() => {
    if (!clickState) {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
  }, [clickState]);

  const menuClick = () => {
    setClickState((prev) => !prev);
  };
  return (
    <header
      className={`sticky top-4 rounded-xl inset-x-0 z-30 isolate py-2 lg:py-4 flex items-center
                 theme-header backdrop-blur-md
                 supports-[backdrop-filter]:bg-white/5
                 shadow-[0_8px_32px_0_rgba(13, 148, 136,0.15)] header-container ${
                   clickState ? "rounded-b-none" : ""
                 } px-3 lg:px-4`}
    >
      <nav className="w-full flex items-center justify-between">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <ul className="list-none capitalize flex items-center gap-4 theme-text w-1/3">
            <li className="hover:text-teal-600">
              <Link href="#tech-stack">Tech stack</Link>
            </li>
            <li className="hover:text-teal-600">
              <Link href="#portfolio">Experience</Link>
            </li>
          </ul>

          <Link
            className="inline-flex w-1/3 justify-center items-center"
            href="/"
          >
            <span className="font-megrim font-extrabold text-2xl hover:text-teal-600 transition inline-flex items-center">
              <ShayokIcon className="size-6" />
              Shayok
            </span>
          </Link>

          <div className="flex gap-x-4 w-1/3 justify-end items-center">
            <ThemeToggle />
            <Link href="https://github.com/enohyn" target="_blank">
              <VscGithub className="size-6 theme-text hover:text-teal-600 transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shayok-here/"
              target="_blank"
            >
              <AiOutlineLinkedin className="size-6 theme-text hover:text-teal-600 transition" />
            </Link>
          </div>
        </div>

        {/* Mobile header bar */}
        <div className="lg:hidden sticky flex items-center justify-between w-full">
          <span className="w-7" aria-hidden="true" />

          <Link className="inline-flex justify-center items-center" href="/">
            <span className="text-2xl font-megrim font-semibold hover:text-teal-600 transition inline-flex items-center">
              <ShayokIcon className="size-6" />
              Shayok
            </span>
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={clickState}
            aria-controls="mobile-menu"
            onClick={menuClick}
            className="p-2 theme-text hover:text-teal-600"
          >
            {clickState ? (
              <FaAngleLeft className="size-7" />
            ) : (
              <GiHamburgerMenu className="size-7" />
            )}
          </button>

          {/* spacer to balance layout */}

          {/* Backdrop (stronger) */}
          <div
            className={`${
              clickState ? "fixed" : "hidden"
            } left-0 right-0 bottom-0 top-[7vh] bg-black/60 z-40`}
            onClick={menuClick}
          />

          {/* Slide-in mobile menu (darker for contrast) */}
          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className={`fixed top-[7vh] w-full h-[calc(100vh-8vh)] mobile-menu-backdrops z-50 transform transition-transform duration-300
              ${
                clickState
                  ? "translate-x-0 left-0"
                  : "-translate-x-[100vw] -left-4"
              }`}
          >
            <ul className="px-4 flex flex-col gap-2">
              {MENU_PATHS.map((menu, index) => (
                <li key={index} className="py-2 flex justify-center">
                  <Link
                    href={menu.path}
                    onClick={menuClick}
                    className="theme-text text-xl py-2 px-3 rounded hover:text-teal-600 transition"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <div className="flex flex-col items-center gap-4 pb-6">
                  <ThemeToggle />
                  <div className="flex justify-center items-center gap-x-4">
                    <Link
                      href="https://github.com/enohyn"
                      target="_blank"
                      onClick={menuClick}
                    >
                      <VscGithub className="w-7 h-7 theme-text hover:text-teal-600 transition" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/shayok-here/"
                      target="_blank"
                      onClick={menuClick}
                    >
                      <AiOutlineLinkedin className="w-7 h-7 theme-text hover:text-teal-600 transition" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
