import Section from '@/components/layout/section';
import React from 'react';

// CHECK OUT MY const-remote.ts FILE IN UTILS
import { REMOTE_IMAGES } from '../../../utils/images-remote';
import Image from 'next/image';

const Business = () => {
	return (
		<div>
			<Section
				height='min-h-[400px]'
				color='bg-[rgb(14_18_26)]'
				className='p-10'
			>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className='text-5xl font-bold text-white p-10 flex flex-col justify-between'>
						Whether you're a business owner or an individual,
						our Tap to Pay app makes payments easy and
						accessible for all.
						<div className='text-sm font-normal mt-10'>
							{`*Available where applicable.`}
						</div>
					</div>
					<div className='text-white flex flex-wrap justify-center items-center max-w-2xl mx-auto px-20 py-5 border border-purple-700 rounded-3xl gap-4'>
						{/* MAPPING THROUGH THE IMAGES HERE. */}
						{REMOTE_IMAGES.map((image, id) => (
							<div
								key={id}
								className='h-14 w-20 rounded-full bg-slate-800 shrink-0 grow-0 flex items-center justify-center'
							>
								<Image
									src={image.src}
									width={500}
									height={500}
									alt={image.name}
									className='w-12 h-12'
								/>
							</div>
						))}
					</div>
				</div>
			</Section>

		</div>
	);
};

export default Business;
