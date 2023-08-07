import ClickBtn from '@/components/individual/clickbtn';
import Cards from '@/components/individual/page';

import React from 'react';


const Individual = () => {
	return (

		<div className=' bg-gray-900'>
			
				<div className=''>
				<ClickBtn />
				</div>
			<Cards
				image='/image/card1.avif'
				num={1}
				text='Any random text'
			/>
			<Cards
				image='/image/card1.avif'
				num={1}
				text='Any random text'
			/>
		</div>
	
	);
};

export default Individual;
