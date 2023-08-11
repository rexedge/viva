'use client';
import React from 'react';
import { CLICK_BUTTONS } from '../../../utils/dc';
import ClickBtn from '@/components/individual/clickbtn';
import Benefits from '@/components/business/benefits';
import Payment from '@/components/business/payment';
import Image from 'next/image';
import Section from '@/components/layout/section';

const Business = () => {
	const [selected, setSelected] = React.useState({
		image: CLICK_BUTTONS[0].image,
		text: CLICK_BUTTONS[0].text,
	});
	return (
		<Section color='bg-primary'>
			<div className='grid lg:grid-cols-2'>
				<div className=''>
					<div className='py-10 px-10'>
						{CLICK_BUTTONS.map((item, i) => (
							<ClickBtn
								key={i}
								button={item.button}
								image={item.image}
								text={item.text}
								selected={item.text === selected.text}
								setSelected={setSelected}
							/>
						))}
					</div>
				</div>
				<div className='hidden lg:block pr-[40px]'>
					<div className=''>
						<div className='mt-4 w-full h-96'>
							<Image
								height={600}
								width={600}
								src={selected.image}
								alt='Image'
								className='mx-auto'
							/>
							<p className=' text-white mt-[10px]'>
								{selected.text}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-secondary rounded-3xl flex flex-col p-6 gap-6'>
				<h3 className='text-white font-bold text-[30px]'>
					Key benefits
				</h3>
				<div className='grid gap-6 grid-cols-2 justify-around'>
					<Benefits
						image='image/workoffline.svg'
						title='Working Offline'
						description='With the ‘’Offline Transactions’’ feature no transactions are ever lost. Even if your network goes down during peak hours, you will still be able to accept 100% of your transactions (coming soon).'
					/>
					<Benefits
						image='image/tips.svg'
						title='Tips'
						description='Go contactless without saying goodbye to tips! The viva.com | Terminal gives your customers the chance to tip, regardless of how they choose to pay.'
					/>
					<Benefits
						image='image/batches.svg'
						title='Batches'
						description="Easily track shifts using the Batches feature. Use it to segment transactions and generate reports that give you a comprehensive view of your business's performance."
					/>
					<Benefits
						image='image/devices.svg'
						title='Multiple Devices'
						description="The viva.com | Terminal is available for download on any employee's phone, at absolutely no additional cost, helping you increase productivity and boost sales!"
					/>
				</div>
			</div>
			<div className='text-white text-center w-ful bg-primary'>
				<h5 className='lg:text-[45px] text-[30px] pt-[50px] font-bold px-[28px] md:text-[40px]'>
					Accepting all payment methods across Europe*
				</h5>
				<div className='lg:px-[18rem]'>
					<Payment />
				</div>
				<p className='italic'>*Available where applicable.</p>
			</div>
		</Section>
	);
};

export default Business;
