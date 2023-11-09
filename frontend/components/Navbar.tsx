import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from './DownloadButton'
import NavAuth from './auth/NavAuth';

const Navbar = () => {
  return (
    <nav className='flex border-b bg-white p-4 items-center justify-between'>
      <div className='flex items-center'>
        <Image
          src="/profile.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <span className='ml-2 text-gray-900'>Bandi</span>
      </div>
      <div className='flex gap-6 ml-4'>
        <Link href='/' passHref>
          <span className='text-gray-900 no-underline hover:text-gray-700'>Kezdőlap</span>
        </Link>
        <Link href='/rolam' passHref>
          <span className='ml-4 text-gray-900 no-underline hover:text-gray-700'>Rólam</span>
        </Link>
        <Link href='/portfolio' passHref>
          <span className='ml-4 text-gray-900 no-underline hover:text-gray-700'>Portfolio</span>
        </Link>
        <Link href='/kontakt' passHref>
          <span className='ml-4 text-gray-900 no-underline hover:text-gray-700'>Kontakt</span>
        </Link>
        <Link href='/blog' passHref>
          <span className='ml-4 text-gray-900 no-underline hover:text-gray-700'>Blog</span>
        </Link>
      </div>
      <div className='flex row gap-6 items-center'>
        <NavAuth />
      <DownloadButton />
      </div>
      
    </nav>
  );
};

export default Navbar;

