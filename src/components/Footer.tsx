import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className='fixed bg-black/95 backdrop-blur-m h-[70px] w-full bottom-0 px-7 flex mt-5 justify-center'>
      <ul className='flex justify-center items-center gap-6'>
        <li>
            <FaGithub className='h-8 w-8 hover:text-green-400'/>
        </li>
        <li>
            <FaLinkedin className='h-8 w-8 hover:text-green-400'/>
        </li>
      </ul>
    </div>
  )
}

export default Footer
