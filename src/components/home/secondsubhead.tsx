import React from "react";
import Section from "../layout/section";
import Button from "../layout/button";
import Button2 from "./button2";


const Secondsubhead = () => {
	return (
		<Section
			color={"bg-primary"}
			className={`flex flex-col md:flex-row p-5 md:p-10 gap-10 min-h-[380px]`}
		>
			<div className='relative h-[350px]  w-1/2 bg-[url("/Image/individuals.png")]  bg-bottom bg-no-repeat bg-cover flex flex-col justify-between px-4 py-8 border border-purple-700 rounded-3xl overflow-hidden'>
				<div>
					<h2
						className=' md:text-2xl font-bold
					 lg:text-3xl pb-2 mx-4 lg:pb-4 text-white'
					>
						Individuals
					</h2>
					<h4 className='text-2xl mx-4 text-white  font-bold '>
						Recieve money on your phone <br className="md:text-2xl  " />
						instantly{" "}
					</h4>
				</div>
				<div className='w-72 m-4 '>
					<Button2
						href='/individual'
						type='tertiary'
						text='Find out more'
					/>
				</div>
			</div>
			<div className='relative  h-[350px] w-1/2 bg-[url("/Image/business.png")] bg-bottom bg-no-repeat bg-cover flex flex-col justify-between px-4 py-8 border border-purple-700 rounded-3xl overflow-hidden'>
				<div>
					<h2
						className=' md:text-2xl font-bold
					 lg:text-3xl pb-2 mx-4 lg:pb-4 text-white'
					>
						Business
					</h2>
					<h4 className='text-2xl mx-4 text-white font-bold '>
						Accept payments on your phone
					</h4>
				</div>
				<div className='w-72 m-4 text-white font-bold'>
					<Button2
						href='/business'
						type='tertiary'
						text='Find out  more'
					/>
				</div>
			</div>
		</Section>
	);
};

export default Secondsubhead;
