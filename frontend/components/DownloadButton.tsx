import { AiOutlineDownload } from "react-icons/ai"; 
import React from 'react'
import Link from 'next/link';

const downloadButton = () => {
  return (
    <div>
        <Link href='/oneletrajz' passHref>
          <button className='bg-gray-900 text-white font-bold h-14 w-[10rem] p-6 py-2 rounded-full hover:bg-gray-800'>
            <span className="flex justify-between items-center">
              Önéletrajz
              <AiOutlineDownload />
              </span>
            </button>
        </Link>
      </div>
  )
}

export default downloadButton