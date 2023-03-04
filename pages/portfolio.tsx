import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import ProjectImgLink from '@/components/ProjectImgLink'
import projects from '@/data/projects.json'

type Props = {}

const portfolio = (props: Props) => {

  return (
    <div className='flex  items-center justify-center h-screen bg-[#B3A394]'>
        <Header primaryColor={'#B3A394'} secondaryColor={'#102542'}/>
        {/*
         * Should be a dynamic list of all projects
         */}
        <div className='absolute columns-2 md:columns-3 lg:columns-4 p-4 top-20 bg-[#B3A394]'>
          {projects.map((project) => (
            <ProjectImgLink key={project.id} project={project}/>
          ))}
        </div>
    </div>
  )
}

export default portfolio