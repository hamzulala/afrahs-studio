import Link from 'next/link'
import React from 'react'

const ProjectImgLink = ({title, imgLink}) => {
  return (
    <div className='mb-4 h-full w-full'>
        <div className='relative overflow-hidden'>
            <img src={imgLink} className='hover:scale-110 transition duration-300 ease-in-out brightness-50'/>
            <div className='absolute visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-xl md:text-4xl text-light1 uppercase text-center'>{title}</h1>
            </div>  
        </div>  
    </div>
  )
}

export default ProjectImgLink