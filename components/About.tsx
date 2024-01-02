'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('Rolam');

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>Rólam</SectionHeading>
      <p className='mb-3'>
        Sziasztok! <span className='text-primary'>András</span> vagyok, egy
        fullstack fejlesztő. 2023-ban végeztem egy bootcampet jelenleg pedig állást keresek
      </p>
      <p>
        Mindig is érdekelt a programozás minden témája és a webfejlesztés.
        Jelenleg a <span className='text-primary'>React</span> és a{' '}
        <span className='text-primary'>Next.js</span> iránt érdeklődöm a
        legjobban, de a <span className='text-primary'>Node.js</span> és a{' '}
        <span className='text-primary'>MongoDB</span> is közel áll hozzám.
      </p>
    </motion.section>
  );
};

export default About;