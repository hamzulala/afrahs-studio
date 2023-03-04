import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import projects from '@/data/projects.json'
import Link from 'next/link'
import { motion } from "framer-motion"

const ImgCarouselMobile = ({projectId}) => {
    /* 
        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform
        - add animation with framer motion
        - discuss with afrah about the design weather using a random image from a project for the carousel or using a specific image for the carousel

     */

  return (
    <motion.div className='pt-2 p-5 max-w-sm max-h-sm' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.3}} key={projectId}>
      <Link href='/blog/[slug]' as={`/blog/${projectId}`}>
        <img src={projects[projectId].images[Math.floor(Math.random() * projects[projectId].images.length)]} alt="Image" className='rounded-lg aspect-[2/3] object-cover'/>
        <h3 className='text-sm text-left tracking-widest font-semibold pt-1 ease-in duration-300'>{projects[projectId].title} : </h3>
        <p className='text-xs text-left font-thin tracking-widest pt-1 ease-in duration-300'>{projects[projectId].description}</p>
      </Link> 
    </motion.div>
  )
}

export default ImgCarouselMobile