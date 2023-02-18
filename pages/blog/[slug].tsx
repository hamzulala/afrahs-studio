import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'

type Props = {}

const ProjectPost = (props: Props) => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>ProjectPost</div>
  )
}

export default ProjectPost