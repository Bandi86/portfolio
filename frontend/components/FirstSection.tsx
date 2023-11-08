import React from 'react';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <div className='p-40 flex flex-row justify-between items-center'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-gray-100'>Hello,</h1>
        <h2 className='text-6xl font-bold text-gray-100 mt-10'>
          Andras vagyok
        </h2>
        <h2 className='text-6xl font-bold text-gray-100 mt-10'>
          Fullstack webfejleszto
        </h2>
      </div>
      <div>
        <Image
          className='rounded-full'
          width={200}
          height={200}
          src='/bigprofile.png'
          alt='profile image'
        />
      </div>
    </div>
  );
};

export default FirstSection;
