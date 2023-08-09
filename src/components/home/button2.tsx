import React from 'react'
import { ButtonH } from '../../../utils/types'
import Link from 'next/link'

const Button2 = ({text, href, className,type }:ButtonH) => { if(type === 'tertiary'){
 return (
  <Link href={href}
  className={`${className} bg-transparent border border-dimWhite px-4 py-2 cursor-pointer rounded-full  overflow-hidden text-white text-lg font-bold `}>
    {text}
  </Link>
 );
} else{
    return (
		<Link
			href={href}
			className={`hover:scale-110 bg-transparent cursor-pointer px-6 py-4 rounded-full text-white relative overflow-hidden  text-lg font-medium`}
		>
            {text}
        </Link>
    );
}
 
};

export default Button2