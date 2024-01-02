'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './SectionHeading';
import SubmitBtn from './SubmitBtn';

const Contact = () => {
  
  const { ref } = useSectionInView('Kontakt');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Kapcsolat</SectionHeading>
      <p className='text-gray-700 mt-6 dark:text-white/80'>
        Lépj kapcsolatba velem:{' '}
        <a className='underline' href='mailto:susutechno@gmail.com'>
          susutechno@gmail.com
        </a>{' '}
        vagy használd az alábbi űrlapot.
      </p>

      <form
        className='mt-10 flex flex-col justify-center dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Sikeresen elküldve!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Email címed'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Üzenet'
          required
          maxLength={5000}
        />
        <div className='flex justify-center pt-4'>
        <SubmitBtn />

        </div>
      </form>
    </motion.section>
  );
};

export default Contact;