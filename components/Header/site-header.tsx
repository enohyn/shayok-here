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
  const ListClass = `text-white `
  const [clickState, setClickState] = useState(false);
  const menuClick = () => {
    document.body.style.overflow = clickState ? 'auto' : 'hidden';
    setClickState(!clickState);
  }
  return (
    <header className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-900 h-[8vh] sticky top-0 z-20 flex items-center '>
      <nav className=' max-lg:hidden flex justify-between items-center w-full container'>
        <ul className='list-none capitalize flex items-center gap-2  text-white justify-start w-1/3'>
          <li className="hover:text-teal-600">
            <Link href="#">
              About
            </Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="#">
              Experience
            </Link>
          </li>
        </ul>
        <Link className='inline-flex w-1/3 justify-center  items-center' href='/shayok-portfolio'>
          <span className='font-megrim font-extrabold text-2xl text-white hover:text-teal-600 transition inline-flex items-center'>
            <ShayokIcon className="size-6" />
            Shayok
          </span>
        </Link>
        <div className='flex gap-x-4 w-1/3 justify-end '>
          <Link href={`https://github.com/enohyn`} target='_blank'>
            <VscGithub className='size-6 text-white hover:text-teal-600 transition' />
          </Link>
          <Link href={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
            <AiOutlineLinkedin className='size-6 text-white hover:text-teal-600 transition' />
          </Link>
        </div>
      </nav>
      <nav className="lg:hidden flex items-center">
        <button onClick={menuClick} className=" text-white text-3xl absolute right-4">
          <GiHamburgerMenu />
        </button>
        <div className={clickState ? 'absolute inset-0 w-full h-screen mobile-menu-backdrops flex flex-col items-center justify-center gap-8 text-2xl text-white lg:hidden' : 'hidden'}>
          <button onClick={menuClick} className=" text-white text-3xl absolute top-8 right-4">
            <FaAngleDoubleLeft />
          </button>
          <ul className='list-none capitalize flex flex-col items-center gap-10  text-white justify-start '>
            {MENU_PATHS.map((menu, index) => (
              <li key={index} className={ListClass}>
                <Link onClick={menuClick} href={menu.path}>
                  {menu.title}
                </Link>
              </li>
            ))}
            <div className='flex gap-x-4 justify-center '>
              <Link href={`https://github.com/enohyn`} target='_blank'>
                <VscGithub className='w-8 h-8 text-white hover:text-teal-600 transition' />
              </Link>
              <Link href={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
                <AiOutlineLinkedin className='w-8 h-8 text-white hover:text-teal-600 transition' />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader