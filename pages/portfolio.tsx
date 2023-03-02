import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import ProjectImgLink from '@/components/ProjectImgLink'
import projects from '@/data/projects.json'

type Props = {}

const portfolio = (props: Props) => {
  return (
    <div className='flex  items-center justify-center h-screen bg-[#F87060]'>
        <Header primaryColor={'#F87060'} secondaryColor={'#102542'}/>
        {/*
         * Should be a dynamic list of all projects
         */}
        <div className='absolute columns-2 md:columns-3 lg:columns-4 p-4 top-20 bg-[#F87060]'>
          {projects.map((project) => (
            <ProjectImgLink key={project.id} project={project}/>
          ))}
        </div>
    </div>
  )
}

export default portfolio