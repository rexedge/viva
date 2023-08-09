import React from 'react';
import { SectionP } from '../../../utils/types';

export default function Section({
	children,
	color,
	height,
	width = 'max-w-[1440px]',
	className,
}: SectionP) {
	return (
		<div className={`${color}`}>
			<div
				className={`${width}  mx-auto ${height} ${className}`}
			>
				{children}
			</div>
		</div>
	);
}
