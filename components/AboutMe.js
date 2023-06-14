import { fetchAbout } from '@/utils/fetchAbout'
import React, { useState, useEffect } from "react";

const AboutMe = ({about}) => {

  return (
    <div className='flex flex-col h-full space-y-3'>
        <h1 className='text-3xl'>About Me</h1>
        <p>{about?.about_me}</p>
    </div>
  )
}


export default AboutMe