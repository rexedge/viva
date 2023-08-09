import React from 'react'
import Section from './section'
import { Styles } from '../../../utils/styles';
import { SocialMedia, footerLinks } from '../../../utils/const';
import Link from 'next/link';

const Footer = () => {
  return (
		<Section
			className={`${Styles.flexCenter}  pt-10 pb-20 flex-col font-bold font-4xl bg-primary text-dimWhite`}
		>
			<div className={`flex md:flex-row flex-row`}>
				<div className='mx-10 '>
					<h3>Ⓒ2023 ISCE Wallet</h3>
					<p className={`${Styles.paragraph} font-normal mt-4`}>
						All rights reserved
					</p>
				</div>

				<div className='ml-8 flex-[1.5] gap-6 flex-wrap md:mt-0'>
					{SocialMedia.map((SocialMedia) => (
						<Link
							key={SocialMedia.name}
							href={SocialMedia.link}
							className='cursor-pointer  place-content-center rounded-full p-2 inline-flex  bg-gray-700 mx-1.5 overflow-hidden '
						>
							{SocialMedia.icon}
						</Link>
					))}
				</div>
			</div>
			<div className='mx-10 mt-4 justify-start'>
				{footerLinks.map((footerLink) => (
					<div
						key={footerLink.title}
						className='pt-2  text-dimWhite font-medium'
					>
						<h2>{footerLink.title}</h2>
					</div>
				))}
			</div>
			<div className='mx-10  pt-8 col-span-full flex flex-wrap gap-6'>
				<ul className='font-semibold flex gap-6'>
					<li>
						<span>Principal member</span>
						<img
							src='/image/logowhite.svg'
							alt=''
							className='pt-2'
							width={"50px"}
						/>
					</li>
					<li>
						<span>Cloud services by</span>
						<img
							src='/image/logowhite.svg'
							alt=''
							className='pt-2'
							width={"50px"}
						/>
					</li>
				</ul>
				<div className='min-w-[350px] font-semibold  max-w-none flex-1'>
					<p>
						ISCE Payment Services Single Member S.A[ISCE
						Payments], Hellenic Business Registry
						no.1816262119, is an electronic-money institution
						licensed by the Bank of Uk for the provision of
						payment services within the EEA and the US.
					</p>
				</div>
			</div>

			
		</Section>
  );
}

export default Footer