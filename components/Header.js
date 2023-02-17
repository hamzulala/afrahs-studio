import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import LogoSVG from '@/components/LogoSVG'

//Responsive Transparent to BG Colour Scroll Effect NavBar

const Header = () => {
    
    //color palette
    const light1 = '#DDD5D0'
    const light2 = '#CFC0BD'
    const light3 = '#B8B8AA'
    const dark1 = '#586F6B'
    const dark2 = '#7F9183'

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState(dark1)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> { 
        const changeColor = () => {
            if (window.scrollY >= 10) {
                setColor(dark1)
                setTextColor(light1)
                
            } else {
                setColor('transparent')
                setTextColor(dark1)
            }
        }
        window.addEventListener('scroll', changeColor)
    })

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-5 pt-0 text-light1'>
            <Link href='/'>
                <LogoSVG size={85} color={textColor}/>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 hover:underline underline-offset-1 hover:text-dark2 ease-in duration-100'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 hover:underline underline-offset-1 hover:text-dark2 ease-in duration-100'>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li className='p-4 hover:underline underline-offset-1 hover:text-dark2 ease-in duration-100'>
                    <Link href='/contact'>About</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dark1 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dark1 text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl'>
                        <Link href='/'><h3>Home</h3></Link>
                    </li>
                    <li className='p-4 text-4xl'>
                        <Link href='/portfolio'><h3>Portfolio</h3></Link>
                    </li>
                    <li className='p-4 text-4xl'>
                        <Link href='/contact'><h3>About</h3></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header