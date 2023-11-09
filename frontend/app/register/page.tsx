'use client';

import { useState, SyntheticEvent } from 'react';
import axios from 'axios';

const page = () => {
  type FormState = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const [registerForm, setRegisterForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (registerForm.password !== registerForm.confirmPassword) {
        console.error('A jelszó nem egyezik');
        return;
      }

      const res = await axios.post(
        'http://localhost:8000/api/users/register',
        registerForm
      );

      if (res.status === 400) {
        console.log(res.data.msg);
      }

      if (res.status === 201) {
        console.log('Regisztráció sikeres volt');
      } else {
        console.error('A regisztráció sikertelen');
      }
    } catch (error) {
      console.error('Hiba történt a regisztráció során', error);
    }
  };

  return (
    <>
      <h1>Regisztráció az oldalra</h1>
      <form
        className='grid grid-cols-1 gap-4 max-w-sm mx-auto'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Név</label>
        <input
          type='text'
          required
          id='name'
          placeholder='Név'
          autoComplete='true'
          value={registerForm.name}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, name: e.target.value })
          }
        />
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
        <label htmlFor='password'>Jelszo megerositese</label>
        <input
          type='password'
          required
          id='confirmPassword'
          placeholder='password'
          autoComplete='true'
          value={registerForm.confirmPassword}
          onChange={(e) =>
            setRegisterForm({
              ...registerForm,
              confirmPassword: e.target.value,
            })
          }
        />
        <button type='submit'>Regisztráció</button>
      </form>
    </>
  );
};

export default page;
