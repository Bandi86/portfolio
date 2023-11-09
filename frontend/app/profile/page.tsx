'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const router = useRouter();

  const [data, setData] = useState('nothing');

  const getUserDetails = async () => {
    const res = await axios.get('http://localhost:8000/api/users/profile');
    setData(res.data.data._id);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className='p-1 rounded bg-green-500'>
        {data === 'nothing' ? (
          'Nothing'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />

      <button
        className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={getUserDetails}
      >
        get user details
      </button>
    </div>
  );
};

export default ProfilePage;
