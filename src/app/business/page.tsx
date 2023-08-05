import Section from '@/components/layout/section';
import React from 'react';

const Business = () => {
	return (
		<div>
			<Section
				width='max-w-[1024px]'
				color='bg-green-500'
			>
				This is a boy
			</Section>
			<Section
				width='max-w-[1440px]'
				color='bg-blue-500'
				height='h-96'
			>
				This is a boy
			</Section>
			<Section
				color='bg-blue-500'
				height='h-96'
			>
				This is a boy
			</Section>
		</div>
	);
};

export default Business;
