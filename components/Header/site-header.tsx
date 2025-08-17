import Image from "next/image"
import Link from "next/link"
import { ShayokIcon } from "../../public/icons/shayok-logo"

export function SiteHeader() {
  return (
    <header className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-900 h-[8vh] sticky top-0 z-20 flex items-center '>
      <nav className='flex justify-between items-center w-full container'>
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
          <span className='font-megrim font-extrabold text-4xl text-white hover:text-teal-600 transition inline-flex items-center'>
            <ShayokIcon className="size-8" />
            Shayok
          </span>
        </Link>
        <div className='flex gap-x-4 w-1/3 justify-end '>
          <Link href={`https://github.com/enohyn`} target='_blank'>

          </Link>
          <Link href={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default SiteHeader