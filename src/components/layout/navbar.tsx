import React, { Fragment, useState } from "react";
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
		<Fragment>
			<Section className='px-6 py-4 lg:px-16 lg:py-8'>
				<div className='flex items-center justify-between'>
					<div
						className={`lg:hidden cursor-pointer text-white`}
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
					<Link href='/'>
						<Image
							alt=''
							height={50}
							width={100}
							src={"/image/logowhite.svg"}
						/>
					</Link>
					<ul className={`hidden lg:flex gap-5`}>
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
					</ul>
					<Button type='secondary' href='/login' text='Log in' />
				</div>
			</Section>
			<div
				className={`${
					!menuOpen && "hidden"
				} w-screen h-screen bg-primary  absolute top-0 left-0 z-[200]`}
			>
				<div className='flex items-center justify-between px-4 py-2'>
					<div
						className={`lg:hidden cursor-pointer text-white`}
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
					<Link href='/'>
						<Image
							alt=''
							height={50}
							width={100}
							src={"/image/logowhite.svg"}
						/>
					</Link>

					<Button type='secondary' href='/login' text='Log in' />
				</div>
				<ul
					className={` flex items-center flex-col lg:hidden gap-6 pt-5 text-white`}
				>
					<li>
						<Link href='/individual'>Individual</Link>
					</li>
					<li>
						<Link href='/business'>Business</Link>
					</li>
					<li>
						<Link href='/help'>Help Center</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Navbar;
