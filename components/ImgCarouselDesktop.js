import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const ImgCarouselDesktop = () => {
    /* 
        Rotate Images with description

        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform

     */

        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const images = [
          {path1: '/images/Lazy-su-5.jpeg', path2:'/images/Lazy-su-2.png', title:'Lazy-su', description: 'Funky Pan-Asian eatery offering a raw bar, bao burgers & small plates, plus hearty homestyle mains.'},
          {path1: '/images/OSH.jpg', path2:'/images/OSH-2.jpeg', title:'Our Satellite Hearts', description: 'A modern study space is functional, minimalist, and sleek, featuring ergonomic furniture, high-tech equipment, natural lighting, and greenery to create a calming, focused, and productive ambiance.'},
          {path1:'/images/gucci.jpg', path2:'/images/gucci-2.jpeg', title:'Gucci', description:'The immersive, multimedia exhibition Gucci Garden Archetypes first held in Florence.The exhibition invites you to explore a selection of advertising campaigns envisioned by Creative Director Alessandro Michele, and the various multi-sensory influences that define them, from music and art to travel and pop culture.'}
        ];
    
        useEffect(() => { 
            /*
                - useEffect is used to set up an interval that changes the currentImageIndex state every 2 seconds. 
                - The img tag then uses this state to determine which image to display. 
                - The clearInterval function is used in the cleanup function to stop the interval when the component unmounts.
             */
    
            const intervalId = setInterval(() => {
              setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 3000);
        
            return () => {
              clearInterval(intervalId);
            };
          }, []);
    
      return (
        <div className='grid grid-cols-2'>
            <div className='pt-20 p-5'>
                <img src={images[currentImageIndex].path1} alt="Image" className='rounded-lg'/>
            </div>
            <div className='pt-2 p-5 pr-5'>
                <img src={images[currentImageIndex].path2} alt="Image" className='rounded-lg aspect-square object-cover'/>
                <h3 className='text-sm text-left tracking-wide font-semibold pt-1'>{images[currentImageIndex].title} : </h3>
                <p className='text-xs text-left font-light tracking-tight pt-1 font-sans'>{images[currentImageIndex].description}</p>
            </div>
        </div>

      )
}

export default ImgCarouselDesktop