import Link from 'next/link';
import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc';
function SiteFooter() {
  return (
    <footer className='relative h-full border-t-l bottom-0 flex items-center theme-header'>
      <nav className='py-4 w-full container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#meet-shayok' className='list-none capitalize flex items-center justify-start w-1/3'>
              <span className='font-megrim text-lg lg:text-lg font-extrabold theme-text hover:text-teal-600 transition'>&copy; Shayok</span>
          </a>
          
          <div className='flex gap-x-4 w-2/3 lg:w-1/3 justify-end max-lg:items-center '>
            <span className='font-space text-base lg:text-lg font-semibold theme-text'>Look me up:</span>
            <Link href={`https://github.com/enohyn`} target='_blank'>
              <VscGithub className='lg:size-6 theme-text hover:text-teal-600 transition' />
            </Link>
            <Link href={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
              <AiOutlineLinkedin className='lg:size-6 theme-text hover:text-teal-600 transition' />
            </Link>
          </div>

        </div>
      </nav>
    </footer>
  )
}

export default SiteFooter;