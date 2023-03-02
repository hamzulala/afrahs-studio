import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import projects from '@/data/projects.json'
import Link from 'next/link'

const ImgCarousel = ({projectId}) => {
    /* 
        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform
        - add animation with framer motion

     */

  return (
    <div className='pt-2 p-5 max-w-sm max-h-sm ease-in duration-300'>
      <Link href='/blog/[slug]' as={`/blog/${projectId}`}>
        <img src={projects[projectId].images[0]} alt="Image" className='rounded-lg'/>
        <h3 className='text-sm text-left tracking-wide font-semibold pt-1 ease-in duration-300'>{projects[projectId].title} : </h3>
        <p className='text-xs text-left font-thin tracking-wide pt-1 ease-in duration-300'>{projects[projectId].description}</p>
      </Link>
        
    </div>
  )
}

export default ImgCarousel