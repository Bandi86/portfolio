'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
  type Data = {
    name: string;
    email: string;
    text: string;
    id: string;
  };

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : {};

  const [data, setData] = useState<Data>({
    name: '',
    email: '',
    text: '',
    id: user ? user._id : undefined,
  });

  useEffect(() => {
    if (!user) {
      setData({ ...data, name: data.name, email: data.email, text: data.text });
    } else {
      setData({ ...data, name: user.name, email: user.email, text: data.text });
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/contact', data);

      if (res.status === 201) {
        console.log('Küldés sikeres volt', res.data);
      } else {
        console.error('A küldés sikertelen');
      }
    } catch (error) {
      console.error('Hiba történt a küldés során', error);
    }
  };

  return (
    <div>
      <section className='text-gray-700 body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Vedd fel velem a kapcsolatot
            </h1>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm text-black'
                  >
                    Neved
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={data.name}
                    required
                    autoComplete='true'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-black'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={data.email}
                    required
                    autoComplete='true'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm text-black'
                  >
                    Uzenet
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    autoComplete='true'
                    value={data.text}
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    onChange={(e) => setData({ ...data, text: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full flex justify-center'>
                <button
                  onClick={handleSubmit}
                  className='bg-black text-white font-bold h-14 w-[10rem] p-6 py-2 rounded-full hover:bg-gray-800'
                >
                  Kuldes
                </button>
              </div>
              <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                <a className='text-indigo-500'>susutechno@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
