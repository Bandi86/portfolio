import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';
import { RiComputerFill } from 'react-icons/ri';
import { FaBlog } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='h-12 w-full bg-gradient-to-r from-purple-900 to-pink-500 flex items-center justify-center'>
			<div className='max-w-screen-xl'>
				<div className='flex flex-row gap-5 items-center'>
					<FaHome className='text-white' />
					<Link href='/'>
						<span className='hover:text-lg'>Home</span>
					</Link>
					<FcBusinessman className='text-white' />
					<Link href='/about'>
						<span className='hover:text-lg'>About</span>
					</Link>
					<RiComputerFill className='text-white' />
					<Link href='/projects'>
						<span className='hover:text-lg'>Projects</span>
					</Link>
					<FaBlog className='text-white' />
					<Link href='/blog'>
						<span className='hover:text-lg'>Blog</span>
					</Link>
					<AiFillContacts className='text-white' />
					<Link href='/contact'>
						<span className='hover:text-lg'>Contact</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
