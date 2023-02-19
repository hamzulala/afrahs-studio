import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import projects from '@/data/projects.json'

type Props = {}

const ProjectPost = (props: Props) => {
  const router = useRouter()
  const { slug } = router.query
  const key: number = parseInt(slug as string)
  /*
  
          {
          projects[key]?.images.map((image) => (
            <div key={key} className='aspect-square'>
              <img src={image} alt={projects[key].title} className='flex rounded-lg h-full object-cover'/>
            </div>
          ))
        }
  
  */
  return (
    <div>
      <Header/>
      <h1 className='mt-20 text-5xl text-center p-10 text-dark1'>{projects[key]?.title}</h1>
      <div className='flex space-x-5 overflow-x-scroll h-96 p-5 snap-x snap-mandatory items-center'>
        {
          projects[key]?.images.map((image) => (
              <img src={image} alt={projects[key].title} className='rounded-lg snap-center object-cover h-full w-full'/>
          ))
        }
      </div>
      <p className='text:sm p-4'>
        {projects[key]?.description}
      </p>
    </div>
  )
}

export default ProjectPost