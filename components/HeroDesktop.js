import React from 'react'
import LogoSVG from './LogoSVG'
import Link from 'next/link'
import ImgCarousel from './ImgCarousel'
import ImgCarouselDesktop from './ImgCarouselDesktop'

const HeroDesktop = () => {
    /*
        LANDING PAGE FOR DESKTOP VIEW
     */
  return (
    <div className='h-screen grid grid-cols-2 overflow-hidden justify-items-center'>
        <div className='fill-dark-1 flex flex-col justify-center'>
            <LogoSVG size={350} color=''/>
            <div className='flex justify-around'>
            <h2 className='hidden hover:underline underline-offset-1 tracking-widest text-dark1 md:contents'><Link href='/'>Home</Link></h2>
                <h2 className='hidden hover:underline underline-offset-1 tracking-widest text-dark1 md:contents'><Link href='/portfolio'>Portfolio</Link></h2>
                <h2 className='hidden hover:underline underline-offset-1 tracking-widest text-dark1 md:contents'><Link href='/contact'>About</Link></h2>   
            </div>
        </div> 
        <div className=' flex items-center justify-center m-20'>
            <ImgCarouselDesktop/>
        </div>   
    </div>
  )
}

export default HeroDesktop