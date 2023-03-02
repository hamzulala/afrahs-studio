import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import projects from '@/data/projects.json'
import Link from 'next/link';

const ImgCarouselDesktop = ({projectId}) => {
    /* 

        ToDo:
        - setup with CMS Platform
        - add animation with framer motion

     */
    
      return (
        <div className='grid grid-cols-2'>
          <Link href='/blog/[slug]' as={`/blog/${projectId}`}>
            <div className='pt-20 p-5'>
                <img src={projects[projectId].images[0]} alt="Image" className='rounded-lg'/>
            </div>
            <div className='pt-2 p-5 pr-5'>
                <img src={projects[projectId].images[1]} alt="Image" className='rounded-lg aspect-square object-cover'/>
                <h3 className='text-sm text-left tracking-wide font-semibold pt-1'>{projects[projectId].title} : </h3>
                <p className='text-xs text-left font-light tracking-tight pt-1 font-sans'>{projects[projectId].description}</p>
            </div>
          </Link>

        </div>

      )
}

export default ImgCarouselDesktop