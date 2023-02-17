import Link from 'next/link'
import React from 'react'

const ProjectImgLink = ({title, imgLink}) => {
  return (
    <div className='mb-4 h-full w-full'>
        <div className='relative overflow-hidden rounded-lg'>
            <img src={imgLink} className='hover:scale-110 transition duration-300 ease-in-out brightness-50 hover:brightness-100'/>
            <div className='absolute bottom-0 right-0 shadow-lg'>
                <h1 className='text-l md:text-xl text-light1 text-left pr-2 pb-2'>{title}</h1>
            </div>  
        </div>  
    </div>
  )
}

export default ProjectImgLink