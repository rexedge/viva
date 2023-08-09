import React from 'react'
import Section from './section'
import { Styles } from '../../../utils/styles';
import { SocialMedia, footerLinks } from '../../../utils/const';
import Link from 'next/link';

const Footer = () => {
  return (
		<Section
			className={`${Styles.flexCenter} pt-10 pb-10 flex-col font-bold font-4xl bg-primary text-dimWhite`}
		>
			<div className={`flex md:flex-row flex-row`}>
				<div className='mx-10 '>
					<h3>Ⓒ2023 ISCE Wallet</h3>
					<p className={`${Styles.paragraph} mt-4`}>
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
			<div className=' pt-8 mx-10 flex flex-row'>
				<div className='font-semibold pr-8'>
					<h3>Principal member</h3>
					<img src='/image/logowhite.svg' alt='' />
				</div>
				<div className='font-semibold'>
					<h3>Cloud services by</h3>
					<img src='/image/logowhite.svg' alt='' />
				</div>
				<div className='font-semibold pl-20 flex-wrap'>
					<h3>
						ISCE Payment Services Single Member S.A[ISCE
						Payments], Hellenic Business Registry
						no.1816262119, is an electronic-money institution
						licensed by the Bank of Uk for the provision of
						payment services within the EEA and the US.
					</h3>
				</div>
			</div>
		</Section>
  );
}

export default Footer