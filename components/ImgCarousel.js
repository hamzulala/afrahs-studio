import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import projects from '@/data/projects.json'

const ImgCarousel = () => {
    /* 
        Rotate Images with description

        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform

     */

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => { 
        /*
            - useEffect is used to set up an interval that changes the currentImageIndex state every 2 seconds. 
            - The img tag then uses this state to determine which image to display. 
            - The clearInterval function is used in the cleanup function to stop the interval when the component unmounts.
         */

        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % projects.length);
        }, 3000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

  return (
    <div className='pt-2 p-5 w-full h-full'>
        <img src={projects[currentImageIndex].images[0]} alt="Image" className='rounded-lg'/>
        <h3 className='text-sm text-left tracking-wide font-semibold pt-1'>{projects[currentImageIndex].title} : </h3>
        <p className='text-xs text-left font-thin tracking-wide pt-1'>{projects[currentImageIndex].description}</p>
    </div>
  )
}

export default ImgCarousel