import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';
import { RiComputerFill } from 'react-icons/ri';
import { FaBlog } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='h-12 bg-gradient-to-r from-purple-500 to-pink-500 lg:justify-between'>
			<div className='max-w-screen-xl flex flex-row items-center justify-around'>
				<div className='p-2'>András</div>
				<div className='flex flex-row gap-4 items-center'>
					<FaHome className='text-black opacity-50 hover:opacity-100' />
					<Link href='/'>
						<span className='opacity-50 hover:opacity-100'>Home</span>
					</Link>
					<FcBusinessman className='text-black opacity-50 hover:opacity-100' />
					<Link href='/about'>
						<span className='opacity-50 hover:opacity-100'>About</span>
					</Link>
					<RiComputerFill className='text-black opacity-50 hover:opacity-100' />
					<Link href='/projects'>
						<span className='opacity-50 hover:opacity-100'>Projects</span>
					</Link>
					<FaBlog className='text-black opacity-50 hover:opacity-100' />
					<Link href='/blog'>
						<span className='opacity-50 hover:opacity-100'>Blog</span>
					</Link>
					<AiFillContacts className='text-black opacity-50 hover:opacity-100' />
					<Link href='/contact'>
						<span className='opacity-50 hover:opacity-100'>Contact</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
