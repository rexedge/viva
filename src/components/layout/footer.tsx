import React from 'react'
import Section from './section'
import { Styles } from '../../../utils/styles';
import { footerLinks } from '../../../utils/const';

const Footer = () => {
  return (
		<Section
			className={`${Styles.flexCenter} ${Styles.paddingY} flex-col font-bold font-4xl bg-gray-800  h-[400px] footer`}
		>
			<div
				className={`${Styles.flexStart} md:flex-row flex-col mb-8 w-full`}
			>
				<div className='flex-1 flex flex-col justify-start pt-10 mr-10'>
					<img
						alt=''
						src={"/image/logowhite.svg"}
						width={"266px"}
						height={"75px"}
						className='object-contain'
					/>
					<p className={`${Styles.paragraph} mt-4 max-w-[310px]`}>
						Introducing the viva.com | Terminal Your phone.
						Your new card terminal.
					</p>
				</div>

				<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
					{footerLinks.map((footerlink, i)=>(
					
						
						<div key={i}>
							
						</div>
					))}
				</div>
			</div>
		</Section>
  );
}

export default Footer