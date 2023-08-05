import React from 'react';

export default function Section({
	children,
	color,
}: {
	children: React.ReactNode;
	color?: string;
}) {
	return (
		<div className={`${color}`}>
			<div className='max-w-[1440px] mx-auto min-h-screen'>
				{children}
			</div>
		</div>
	);
}
