import React from 'react'
import LogoSVG from './LogoSVG'
import Link from 'next/link'
import ImgCarousel from './ImgCarousel'

const HeroDesktop = () => {
  return (
    <div className='h-screen flex flex-row overflow-hidden justify-items-center'>
        <div className='fill-dark-1 w-1/2 flex flex-col items-center justify-center'>
            <LogoSVG size={350} color=''/>  
            <p className='hidden hover:underline underline-offset-1 text-dark1 md:contents'><Link href='/' >Home</Link></p> 
            <p className='hidden hover:underline underline-offset-1 text-dark1 md:contents'><Link href='/portfolio'>Portfolio</Link></p>
            <p className='hidden hover:underline underline-offset-1 text-dark1 md:contents'><Link href='/contact'>Contact</Link></p>      
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            <ImgCarousel/>
        </div>
        
    </div>
  )
}

export default HeroDesktop