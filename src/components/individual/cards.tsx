import React from "react";
import { CardP } from "../../../utils/types";

const Cards = ({ image, num, text }: CardP) => {
	return (
		<div className='justify-center bg-primary md:w-1/2 item-center text-center'>
			<div className=" justify-center">
				<img className='mx-auto w-96 h-80' src={image} alt='' />
				<div className=' text-6xl text-zinc-400'>{num}</div>
				<div className=' text-white font-bold w-auto text-lg'>{text}</div>
			</div>
		</div>
	);
};

export default Cards;
