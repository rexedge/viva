'use client';
import ClickBtn from '@/components/individual/clickbtn';
import Cards from '@/components/individual/cards';

import React from 'react';
import { CLICK_BUTTONS } from '../../../utils/ec';
import Image from 'next/image';

const Individual = () => {
	const [selected, setSelected] = React.useState({
		image: CLICK_BUTTONS[0].image,
		text: CLICK_BUTTONS[0].text,
	});

	return (
		<div className=' w-full bg-[#0E121A]'>
			<div className='grid lg:grid-cols-2'>
				<div className=''>
					<div className='py-10 px-10'>
						{CLICK_BUTTONS.map((item, i) => (
							<ClickBtn
								key={i}
								button={item.button}
								image={item.image}
								text={item.text}
								setSelected={setSelected}
							/>
						))}
					</div>
				</div>
				<div className='hidden lg:block'>
					<div className=''>
						<div className='mt-4 w-full h-96'>
							<Image
								width={600}
								height={600}
								src={selected.image}
								alt='Image'
								className='mx-auto'
							/>
							<p className=' text-white'>
								{selected.text}
							</p>
						</div>
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
		</div>
	);
};

export default Individual;
