'use client';
import React from 'react';
import Button from './button';
import Section from './section';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	const pathName = usePathname();
	return (
		<Section className='flex justify-between px-5 py-2 relative'>
				<Link
				href='/'
				className='text-white flex items-center'
				>
					<Image
						className=''
						alt=''
						height={50}
						width={100}
						src={'/image/logowhite.svg'}
					/>
				</Link>
			<ul className='flex items-center gap-5'>
				<li>
					<Button
						href='/individual'
						text='Individual'
						active={pathName === '/individual'}
					/>
				</li>
				<li>
					<Button
						href='/business'
						text='Business'
						active={pathName === '/business'}
					/>
				</li>
				<li>
					<Button
						href='/help'
						text='Help Center'
					/>
				</li>
			</ul>
			<Button
				type='secondary'
				href='/login'
				text='Log in'
			/>
		</Section>
	);
};

export default Navbar;
