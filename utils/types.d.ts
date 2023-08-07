interface CardP {
	image: string;
	num: number;
	text: string;
}

interface SectionP {
	children: React.ReactNode;
	color?: string;
	height?: string;
	width?: string;
	className?: string;
	
}

interface ButtonP {
	text: string;
	type?: 'primary' | 'secondary';
	active?: boolean;
	href: string;
	className?: string;
}


