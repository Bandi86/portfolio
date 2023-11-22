import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillHtml5, AiFillLinkedin, AiFillTwitterCircle, AiOutlineConsoleSql } from 'react-icons/ai';
import { BsFiletypeCss } from 'react-icons/bs';
import { DiJavascript1, DiMongodb, DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const FirstSection = () => {
  const iconStyle =
    'flex items-center p-2 bg-black';
  return (
    <div className='p-10 flex flex-row justify-evenly'>
      {/* Bal oldali rész */}
      <div className='flex flex-col w-1/4'>
        {/* Készségek */}
        <div className='py-8'>
          <span className='block text-2xl font-bold mb-4 text-center'>
            Skills:
          </span>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {/* Készség ikonok */}
            <div className={iconStyle}>
              <AiFillHtml5 className='text-4xl text-red-500' />
              <span className='text-sm text-white'>HTML</span>
            </div>
            <div className={iconStyle}>
              <DiJavascript1 className='text-4xl text-yellow-500' />
              <span className='text-sm text-white'>JavaScript</span>
            </div>
            <div className={iconStyle}>
              <BsFiletypeCss className='text-4xl text-blue-500' />
              <span className='text-sm text-white'>CSS</span>
            </div>

            <div className={iconStyle}>
              <SiTailwindcss className='text-4xl text-cyan-500' />
              <span className='text-sm text-white'>Tailwind CSS</span>
            </div>
            <div className={iconStyle}>
              <FaReact className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>React</span>
            </div>
            <div className={iconStyle}>
              <AiFillGithub className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>Github</span>
            </div>
            <div className={iconStyle}>
              <DiNodejs className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>NodeJs</span>
            </div>
            <div className={iconStyle}>
              <SiExpress className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>Express</span>
            </div>
            <div className={iconStyle}>
              <AiOutlineConsoleSql className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>SQL</span>
            </div>
            <div className={iconStyle}>
              <DiMongodb className='text-4xl text-blue-300' />
              <span className='text-sm text-white'>MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Középső rész */}
      <div className='w-1/4'>
        <Image
          className='rounded-full'
          width={300}
          height={300}
          src='/en.jpg'
          alt='profile image'
        />
        <h1 className='text-2xl font-bold text-gray-100'>Hello,</h1>
        <h2 className='text-2xl font-bold text-gray-100 mt-10'>
          Andras vagyok
        </h2>
        <h2 className='text-2xl font-bold text-gray-100 mt-10'>
          Junior Fullstack webfejlesztő
        </h2>
        {/* Social Media ikonok */}
        <div className='flex py-4 justify-center gap-4 mt-4'>
          <span className='text-xl text-white'>Social Media:</span>
          <Link
            href='https://twitter.com/ardorras'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillTwitterCircle className='text-3xl' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/andras-suslecz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin className='text-3xl' />
          </Link>
        </div>
      </div>

      {/* Jobb oldali rész - Recent Blog Posts */}
      <div className='w-1/4 flex flex-row justify-center py-4'>
        <h1 className='text-black text-2xl font-medium'>Legfrisebb blogbejegyzesek:</h1>
        {/* render last 5 blogpost */}
      </div>
    </div>
  );
};

export default FirstSection;
