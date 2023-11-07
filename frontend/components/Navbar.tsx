import React from 'react';

const Navbar = () => {
  return (
    <nav className='border-b white p-4 items-center'>
      <ul className='flex justify-evenly pt-4'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/blog'>Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
