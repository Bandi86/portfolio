import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { MdHtml } from 'react-icons/md';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='flex items-center justify-center min-h-screen'>
				<div className='container flex flex-col items-center justify-center gap-4 border-gray-100 max-w-lg p-8'>
					<div className='mb-4'>
						<Image
							src='/assets/me.jpg'
							alt='Me'
							width={200}
							height={200}
							className='rounded-full p-2'
						/>
					</div>
					<h1 className='text-2xl font-bold mb-2'>Hello, I am Süslecz András</h1>
					<h2 className='text-xl font-bold mb-2'>Full Stack Web Developer</h2>
					<p className='text-base mb-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis
						commodi similique, id possimus temporibus cumque incidunt, sit quaerat ratione
						nihil nemo explicabo doloribus repellendus obcaecati nesciunt eos architecto
						perferendis.
					</p>
					<span className='mb-4'>Skills:</span>
					<div className='flex flex-row gap-4 mb-6'>
						<MdHtml className='text-purple-700 text-3xl' />
						<SiCss3 className='text-blue-700 text-3xl' />
						<IoLogoJavascript className='text-yellow-500 text-3xl' />
						<FaReact className='text-blue-600 text-3xl' />
					</div>
					<button className='border-white p-2'>Download CV</button>
				</div>
			</main>
		</>
	);
}

