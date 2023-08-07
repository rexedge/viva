'use client';
import React from 'react';
import Navbar from './navbar';
import Button from './button';
import { usePathname } from 'next/navigation';
import { headerSGV1 } from '../../../utils/const';
import Index from '../home';

const Header = () => {
	const pathname = usePathname();
	const h1 = `${
		pathname === '/'
			? 'Introducing the viva.com | Terminal'
			: pathname === '/individual'
			? ''
			: ''
	}`;
	const h2 = `${
		pathname === '/'
			? 'Get paid on your phone'
			: pathname === '/individual'
			? 'Get paid on your phone'
			: 'Your phone. Your new card terminal.'
	}`;
	const p = `${
		pathname === '/'
			? "Get paid effortlessly with just your phone and existing bank account. No need for card terminals — it's that simple!"
			: pathname === '/individual'
			? 'Receive money conveniently on your phone with just a tap using the viva.com | Terminal!'
			: ''
	}`;
	return (
		<div className='min-h-[550px] max-w-[1440px] mx-auto relative'>
			<video
				src='/video/bgviva.mp4'
				autoPlay
				loop
				className='-z-50 absolute top-0 left-0 w-full h-full object-cover hidden lg:flex'
			></video>
			<Navbar />
			<div className='grid lg:grid-cols-2 px-16 items-center'>
				<div className='text-white flex flex-col h-full'>
					<h1 className='max-w-[1440px] mt-5 font-bold mb-5 text-xl'>
						{h1}
					</h1>
					<h2 className='font-semibold text-7xl mb-4 w-[500px]'>
						{h2}
					</h2>
					<p className='text-base mb-8'>{p}</p>
					<div className='flex  gap-4 mb-10'>
						{headerSGV1.map((svg, index) => {
							return (
								<>
									<div
										key={index}
										className='flex h-10 gap-6 place-content-center rounded-md border-2 border-white/50 bg-black py-1 px-2'
									>
										{svg.svgPath}
									</div>
									<div
										key={index}
										className='flex h-10 gap-6 place-content-center rounded-md border-2 border-white/50 bg-black py-1 px-2'
									>
										{svg.svgPath2}
									</div>
								</>
							);
						})}
					</div>
					<div className='w-72'>
						<Button
							href='/login'
							type='secondary'
							text='Get Started'
						/>
					</div>
				</div>
				<div>
					<video
						src='/video/bgviva.mp4'
						autoPlay
						loop
						className='w-full h-full object-cover lg:hidden'
					></video>
				</div>
			</div>
			<Index/>
		</div>
	);
};

export default Header;
