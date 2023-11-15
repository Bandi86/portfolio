'use client';
import { useEffect, useState } from 'react';

const page = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    // postok letoltese
  }, []);

  return (
    <main className='flex'>
      {/* Első oszlop */}
      <div className='flex-none bg-blue-500 p-4 w-1/4'>
        {/* Tartalom az első oszlopban */}
        <h1 className='text-white text-2xl'>Első oszlop</h1>
      </div>

      {/* Második oszlop */}
      <div className='flex-none bg-green-500 p-4 w-2/4'>
        {/* Tartalom a második oszlopban */}
        <h1 className='text-white text-2xl'>Második oszlop</h1>
        {/* tartalom renderelese */}
      </div>

      {/* Harmadik oszlop */}
      <div className='flex-grow bg-yellow-500 p-4 w-1/4'>
        {/* Tartalom a harmadik oszlopban */}
        <h1 className='text-white text-2xl'>Harmadik oszlop</h1>
      </div>
    </main>
  );
};

export default page;
