import Link from 'next/link';
import React from 'react';
import { ButtonP } from '../../../utils/types';

const Button = ({
	text,
	active,
	type = 'primary',
	href,
	className,
	
}: ButtonP) => { 
	
	if (type === 'primary' ) {
		return (
			<Link
				href={href}
				className={`${className} ${
					active &&
					'bg-gradient-to-r from-slate-300 to-slate-500'
				} hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 cursor-pointer px-4 py-2 rounded-full text-white transition duration-300 ease-in-out relative overflow-hidden text-lg font-medium`}
			>
				{text}
			</Link>
		);
	} else {
		return (
			<Link
				href={href}
				className={`hover:scale-105 bg-slate-300 hover:bg-slate-100 cursor-pointer px-6 py-4 rounded-full text-slate-700 hover:text-black transition duration-300 ease-in-out relative overflow-hidden  text-lg font-medium`}
			>
				{text}
			</Link>
		);
	}
};


export default Button;
