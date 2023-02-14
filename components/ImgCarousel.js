import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const ImgCarousel = () => {
    /* Rotate Images with Logo overlay
     * 
     */

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      {path: '/images/Lazy-su-2.png', title:'Lazy-su 2', description: 'A modern bar area is sleek, stylish, and sophisticated with an industrial and minimalist design, mood lighting, designer furniture, and craft cocktails, creating an artistic, high-tech, chic, and urban ambiance that is polished, social, and vibrant, featuring exposed brick, concrete floors, and entertainment-focused amenities.'},
      {path: '/images/Lazy-su-3.png', title:'Lazy-su 3', description: 'A modern bar area is sleek, stylish, and sophisticated with an industrial and minimalist design, mood lighting, designer furniture, and craft cocktails, creating an artistic, high-tech, chic, and urban ambiance that is polished, social, and vibrant, featuring exposed brick, concrete floors, and entertainment-focused amenities.'},
      {path: '/images/RMIT.png', title:'RMIT', description: 'A modern study space is functional, minimalist, and sleek, featuring ergonomic furniture, high-tech equipment, natural lighting, and greenery to create a calming, focused, and productive ambiance.'},
      {path: '/images/RMIT-2.png', title:'RMIT 1', description: 'A modern study space is functional, minimalist, and sleek, featuring ergonomic furniture, high-tech equipment, natural lighting, and greenery to create a calming, focused, and productive ambiance.'},
      {path: '/images/RMIT-3.png', title:'RMIT 2', description: 'A modern study space is functional, minimalist, and sleek, featuring ergonomic furniture, high-tech equipment, natural lighting, and greenery to create a calming, focused, and productive ambiance.'}
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

  return (
    <div className='pt-2 p-5 md:w-1/2'>
        <img src={images[currentImageIndex].path} alt="Image"/>
        <h3 className='text-sm text-left font-mono tracking-tighter pt-1'>{images[currentImageIndex].title} : </h3>
        <p className='text-xs text-left font-mono tracking-tighter'>{images[currentImageIndex].description}</p>
    </div>
  )
}

export default ImgCarousel