import React, { useState } from "react";
import Button from "./button";
import Section from "./section";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const pathName = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Section className='flex justify-between items-center px-6 py-4 lg:px-16 lg:py-8 relative'>
			<div className='flex items-center'>
				<Link href='/' className='text-white flex items-center'>
					<Image
						alt=''
						height={50}
						width={100}
						src={"/image/logowhite.svg"}
					/>
				</Link>
				<div
					className={`lg:hidden ml-auto cursor-pointer text-white`}
					onClick={toggleMenu}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</div>
			</div>
			<ul
				className={`${
					menuOpen ? "flex flex-col items-center" : "hidden"
				} lg:flex lg:flex-row gap-5`}
			>
				<li>
					<Button
						href='/individual'
						text='Individual'
						active={pathName === "/individual"}
					/>
				</li>
				<li>
					<Button
						href='/business'
						text='Business'
						active={pathName === "/business"}
					/>
				</li>
				<li>
					<Button href='/help' text='Help Center' />
				</li>
				<li>
					<Button type='secondary' href='/login' text='Log in' />
				</li>
			</ul>
		</Section>
	);
};

export default Navbar;
