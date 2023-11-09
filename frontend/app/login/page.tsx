'use client';

import { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  type FormState = {
    email: string;
    password: string;
  };

  const [registerForm, setRegisterForm] = useState<FormState>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8000/api/users/login',
        registerForm,
        { withCredentials: true }
      );

      if (res.status === 400) {
        console.log(res.data.msg);
      }

      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log('Bejelentkezes sikeres volt');
        router.push('/');
      } else {
        console.error('A bejelentkezes sikertelen');
      }
    } catch (error) {
      console.error('Hiba történt a bejelentkezes során', error);
    }
  };

  return (
    <>
      <h1>Bejelentkezes az oldalra</h1>
      <form
        className='grid grid-cols-1 gap-4 max-w-sm mx-auto'
        onSubmit={handleSubmit}
      >
        <label htmlFor='email'>Email cim</label>
        <input
          type='email'
          required
          id='email'
          placeholder='Email'
          autoComplete='true'
          value={registerForm.email}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, email: e.target.value })
          }
        />
        <label htmlFor='password'>Jelszo</label>
        <input
          type='password'
          required
          id='password'
          placeholder='Jelszó'
          autoComplete='true'
          value={registerForm.password}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, password: e.target.value })
          }
        />

        <button type='submit'>Bejelentkezes</button>
      </form>
    </>
  );
};

export default page;
