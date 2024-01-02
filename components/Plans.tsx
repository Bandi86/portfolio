'use client';

import React from 'react';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import { wantedToLearn } from '@/lib/data';

const Experience = () => {
  const { ref } = useSectionInView('Tervek');

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section id='plans' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Tervezem tanulni</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {wantedToLearn.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-black mt-4 text-white borderBlack rounded-xl px-4 py-2 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
