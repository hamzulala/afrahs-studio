import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import ProjectImgLink from '@/components/ProjectImgLink'

type Props = {}

const portfolio = (props: Props) => {
  return (
    <div className='flex  items-center justify-center h-screen bg-light1 '>
        <Header/>
        {/*
         * Should be a dynamic list of all projects
         */}
        <div className='absolute columns-2 md:columns-3 lg:columns-4 p-4 top-20 bg-light1'>
            <ProjectImgLink imgLink='/images/gucci.jpg' title='Gucci'/>
            <ProjectImgLink imgLink='/images/Lazy-su-5.jpeg' title='Lazy-Su'/>
            <ProjectImgLink imgLink='/images/OHS.jpg' title='Our Satellite Hearts'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80' title='Demo-1'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Demo-2'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' title='Demo-3'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' title='Demo-4'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' title='Demo-5'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' title='Demo-6'/>
            <ProjectImgLink imgLink='https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Demo-7'/>
        </div>
    </div>
  )
}

export default portfolio