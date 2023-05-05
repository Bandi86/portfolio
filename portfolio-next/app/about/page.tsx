import React from 'react';

const page = () => {
	return (
		<div
			className='h-screen'
			style={{
				backgroundImage: `url('/assets/bg.jpg')`,
				backgroundSize: 'cover',
			}}
		>
			<h1 className='text-slate-200'>About</h1>
		</div>
	);
};

export default page;
