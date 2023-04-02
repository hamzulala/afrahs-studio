import { Project } from '../typings'

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const text = await res.text()
    console.log(text)
    const data = JSON.parse(text)
    
    const project: Project[] = data.project

    return project
}