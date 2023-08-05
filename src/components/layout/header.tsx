import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='min-h-[550px] relative'>
        <video src='/video/bgviva.mp4' autoPlay loop playsInline className='-z-50 absolute top-0 left-0 w-full h-full object-cover' />
        <Navbar />
    </div>
  )
}

export default Header