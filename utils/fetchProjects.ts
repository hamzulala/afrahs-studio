import { Project } from "../typings";

export const fetchProjects = async() => {
    try {
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
        const data = await res.json()
        const project: Project[] = data?.project || [] 
    
        console.log("fetching", project)
        return project

    } catch (error) {
        console.log(error)
        return []
    }
}

/**
 * 
 * import { Project } from '../typings'

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const data = await res.json()
    
    const project: Project[] = data.project

    return project
}
 */