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
    <div style={{backgroundColor: `${projects[key]?.primaryColor}`}} className='h-screen w-screen'>
      <Header primaryColor={projects[key]?.primaryColor} secondaryColor={projects[key]?.secondaryColor}/>
      <h1 style={{color: `${projects[key]?.secondaryColor}`}} className='mt-20 text-5xl text-center p-10'>{projects[key]?.title}</h1>
      <div className='flex space-x-5 overflow-x-scroll h-96 p-5 snap-x snap-mandatory items-center'>
        {
          projects[key]?.images.map((image) => (
              <img key={key} src={image} alt={projects[key].title} className='rounded-lg snap-center object-cover h-full w-full'/>
          ))
        }
      </div>
      <p className='text:sm p-4' style={{color: `${projects[key]?.secondaryColor}`}}>
        {projects[key]?.description}
      </p>
    </div>
  )
}

export default ProjectPost