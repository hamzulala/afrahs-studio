import React from 'react'
import LogoSVG from './LogoSVG'
import ImgCarousel from '@/components/ImgCarousel'

const Hero = () => {
  return (
    <div className='h-screen bg-light1 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <div className='fill-dark1 hidden md:contents'>
            <LogoSVG size={350} color=''/>
        </div>
        <div>
            <ImgCarousel/>
        </div>
    </div>
  )
}

export default Hero
