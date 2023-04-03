import { Project } from '../typings'

export const fetchProjects = async () => {
    const res = await fetch(`https://afrahs-studio.vercel.app/api/getProjects`)
    const data = await res.json()
    
    const project: Project[] = data.project

    return project
}