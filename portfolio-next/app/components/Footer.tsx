import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='h-[3.5rem] w-full bg-gradient-to-r from-purple-900 to-pink-500 flex flex-row justify-center items-center gap-10'>
			<div className='flex flex-row text-slate-300'>
				©2023 András Süslecz | All Rights Reserved
			</div>
			<div className='flex flex-row justify-between content-center gap-10'>
				Social Media Links:
				<BsTwitter className='text-blue-600 text-2xl' />
				<BsGithub className='text-black text-2xl' />
				<BsLinkedin className='text-blue-800 text-2xl' />
			</div>
		</div>
	);
};

export default Footer;
