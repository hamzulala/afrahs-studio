import React, { useEffect, useState } from 'react'
import LogoSVG from './LogoSVG'
import Link from 'next/link'
import ImgCarouselDesktop from './ImgCarouselDesktop'
import projects from '@/data/projects.json'
import { motion } from 'framer-motion'

const HeroDesktop = ({projectId}) => {

    /** LANDING PAGE FOR DESKTOP VIEW
     *  
     */

    const [logoSize, setLogoSize] = useState(350)

    useEffect(() => {
      const handleResize = () => { //make it dynamic for window height and width
        const windowWidth = window.innerWidth
        if (windowWidth < 640) {
          setLogoSize(200)
        } else if (windowWidth < 768) {
          setLogoSize(250)
        } else if (windowWidth < 1025) {
          setLogoSize(300)
        } else {
          setLogoSize(450)
        }
      }

      handleResize() //call it once to set the initial size
  
      window.addEventListener('resize', handleResize)
      window.addEventListener('DOMContentLoaded', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('DOMContentLoaded', handleResize)
        }
    }, [])


  return (
    <div className='h-screen grid grid-cols-2 overflow-hidden justify-items-center'>
        <motion.div className='flex flex-col justify-center m-10' style={{color: `${projects[projectId].secondaryColor}`}} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
            <LogoSVG size={logoSize} color={projects[projectId].secondaryColor}/>
            <div className='flex justify-around'>
            <h2 className='hidden hover:underline underline-offset-1 tracking-widest md:contents'><Link href='/'>Home</Link></h2>
                <h2 className='hidden hover:underline underline-offset-1 tracking-widest md:contents'><Link href='/portfolio'>Portfolio</Link></h2>
                <h2 className='hidden hover:underline underline-offset-1 tracking-widest md:contents'><Link href='/contact'>About</Link></h2>   
            </div>
        </motion.div> 
        <div className=' flex items-center justify-center m-10'>
            <ImgCarouselDesktop projectId={projectId}/>
        </div>   
    </div>
  )
}

export default HeroDesktop