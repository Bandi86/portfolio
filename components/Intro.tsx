'use client';

import Image from 'next/image';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSection } from '@/context/active-section-context';

const Intro = () => {
  const { ref } = useSectionInView('Kezdolap', 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSection()

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/en.jpg'
              alt='András'
              width={200}
              height={200}
              quality={95}
              priority={true}
              className='h-30 w-30 rounded-full border-[0.35rem] object-cover border-white shadow-xl hover:shadow-2xl transition-shadow'
            />
          </motion.div>
          <motion.span
            className='absolute text-4xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello én <span className='font-bold'>András</span> vagyok. Junior fullstack fejlesztő.
      </motion.p>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='/contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition-transform hover:bg-gray-950 active:scale-105'
          onClick={() =>  {setActiveSection("Kontakt"); setTimeOfLastClick(Date.now())}}
        >
          Kapcsolat
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition-transform active:scale-105 cursor-pointer borderBlack dark:bg-white/10'
          href='/CV_Suslecz_Andras.pdf'
          download
        >
          Önéletrajz letöltése{' '}
          <HiDownload className='opacity-60 group-hover:transalte-y-1 transition' />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition-transform active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/andras-suslecz/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition-transform active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/Bandi86'
          target='_blank'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;