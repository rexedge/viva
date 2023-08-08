"use client";
import React, { useState } from "react";

const ClickBtn = ({ button, image, text, setSelected }: ClickBtnP) => {
	const [showImage, setShowImage] = useState(false);

	const handleButtonClick = () => {
		setShowImage(!showImage);
		setSelected({
			image: image,
			text: text,
		});
	};

	return (
		<div className='flex flex-col mx-auto mb-5 lg:mb-0 mt-[10px]'>
			<button
				onClick={handleButtonClick}
				className=' flex justify-between items-center px-4 bg-[#0E121A] h-20 text-white rounded-2xl outline outline-1 outline-gray-600'
			>
				{button}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					className={`${
						showImage && "rotate-180"
					} lg:rotate-90 w-6 h-6`}
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M4.5 15.75l7.5-7.5 7.5 7.5'
					/>
				</svg>
			</button>
			<div className='lg:hidden'>
				{showImage && (
					<div className='mt-4 w-full h-96'>
						<img
							src={image}
							alt='Image'
							className='mx-auto'
						/>
						<p className=' text-white px-6'>{text}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ClickBtn;
