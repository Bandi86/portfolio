import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHtml } from 'react-icons/md';
import { SiCss3 } from 'react-icons/si';
import Navbar from './components/Navbar';



export default function Home() {
	return (
		<>
			<Navbar />
			<main
				className='flex items-center justify-center min-h-screen'
				style={{
					backgroundImage: `url('/assets/bg.jpg')`,
					backgroundSize: 'cover',
				}}
			>
				<div className='container flex flex-col items-center justify-center gap-4 max-w-lg p-8 shadow-lg bg-stone-100 border rounded-md'>
					<div className='mb-4'>
						<Image
							src='/assets/me.jpg'
							alt='Me'
							width={200}
							height={200}
							className='rounded-full p-2 hover:scale-150 transition duration-500 ease-in-out'
						/>
					</div>
					<h1 className='text-2xl font-bold mb-2 text-black'>
						Hello i am Süslecz András
					</h1>
					<h2 className='text-xl font-bold mb-2 text-black'>
						Junior Full Stack Web Developer
					</h2>
					<p className='text-base mb-4 tracking-wide text-black selection:bg-fuchsia-300 selection:text-fuchsia-900'>
						I completed a career change bootcamp. I would like to gain work experience, I
						am open to any opportunity for development.
					</p>
					<span className='mb-4 text-black'>Skills:</span>
					<div className='flex flex-row gap-4 mb-6 p-4 bg-slate-400 rounded-md'>
						<MdHtml className='text-purple-700 text-3xl hover:scale-150' />
						<SiCss3 className='text-blue-700 text-3xl hover:scale-150' />
						<IoLogoJavascript className='text-yellow-500 text-3xl hover:scale-150' />
						<FaReact className='text-blue-600 text-3xl hover:scale-150' />
					</div>
					<button className='rounded-full p-4 border-2 bg-slate-400 hover:ease-in duration-300'>
						Download CV
					</button>
				</div>
			</main>
		</>
	);
}
