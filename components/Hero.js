import React from 'react'
import LogoSVG from './LogoSVG'
import ImgCarousel from '@/components/ImgCarousel'
import HeroDesktop from '@/components/HeroDesktop'
import HeroMobile from '@/components/HeroMobile'

const Hero = () => {
  return (
    <div className='h-screen bg-light1 flex flex-col space-y-8 items-center justify-center overflow-hidden'>
        <div className='fill-dark1 hidden md:contents'>
            <HeroDesktop/>
        </div>
        <div className='md:hidden'>
            <HeroMobile/>
        </div>
    </div>
  )
}

export default Hero
