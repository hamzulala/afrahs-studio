import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import projects from '@/data/projects.json'
import Link from 'next/link';
import { motion } from 'framer-motion'

const ImgCarouselDesktop = ({projectId}) => {
    /* 
        Rotate Images with description

        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform

     */
    
      return (
        <Link href='/blog/[slug]' as={`/blog/${projectId}`} className='grid grid-cols-2'>
          <div className='pt-20 p-5'>
              <img src={projects[projectId].images[0]} alt="Image" className='rounded-lg'/>
          </div>
          <div className='pt-2 p-5 pr-5'>
              <img src={projects[projectId].images[1]} alt="Image" className='rounded-lg aspect-square object-cover'/>
              <h3 className='text-sm text-left tracking-wide font-semibold pt-1'>{projects[projectId].title} : </h3>
              <p className='text-xs text-left font-light tracking-tight pt-1 font-sans'>{projects[projectId].description}</p>
          </div>
        </Link>
      )
}

export default ImgCarouselDesktop