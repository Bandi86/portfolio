'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await axios.get('http://localhost:8000/api/users/logout', {
      withCredentials: true,
    });
    if (res.status == 200) {
      localStorage.removeItem('user');
      router.push('/');
      
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Kijelentkezés</button>
    </>
  );
};

export default Logout;
