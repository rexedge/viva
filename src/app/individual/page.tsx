'use client';
import ClickBtn from '@/components/individual/clickbtn';
import Cards from '@/components/individual/cards';

import React from 'react';
import { CLICK_BUTTONS } from '../../../utils/ec';
import Image from 'next/image';
import Section from '@/components/layout/section';

const Individual = () => {
	const [selected, setSelected] = React.useState({
		image: CLICK_BUTTONS[0].image,
		text: CLICK_BUTTONS[0].text,
	});

	return (
		<Section
			color='bg-primary'
			className=' w-full'
		>
			<div className='flex'>
				<div className='w-full lg:w-1/2 '>
					<div className='py-10 px-10'>
						{CLICK_BUTTONS.map((item, i) => (
							<ClickBtn
								key={i}
								button={item.button}
								image={item.image}
								text={item.text}
								selected={item.image === selected.image}
								setSelected={setSelected}
							/>
						))}
					</div>
				</div>
				<div className='hidden lg:flex w-1/2 justify-center items-center'>
					<div className='mt-4 w-full flex flex-col gap-4'>
						<Image
							width={600}
							height={600}
							src={selected.image}
							alt='Image'
							className='mx-auto'
						/>
						<p className=' text-white text-center'>
							{selected.text}
						</p>
					</div>
				</div>
			</div>
			<h2 className=' text-white font-bold text-5xl text-center pt-16'>
				How to receive money on your phone
			</h2>
			<div className='flex flex-col md:flex-row flex-wrap justify-center max-w-[800px] mx-auto'>
				<Cards
					image='/image/card1.avif'
					num={1}
					text='Download and open the viva.com | Terminal.'
				/>
				<Cards
					image='/image/card2.avif'
					num={2}
					text='Enter the payment amount you wish to accept.'
				/>
				<Cards
					image='/image/card3.avif'
					num={3}
					text="Tap the other person's card or mobile device onto the back of your phone."
				/>
				<Cards
					image='/image/card4.avif'
					num={4}
					text='Receive the money into your bank account.'
				/>
			</div>
		</Section>
	);
};

export default Individual;
