import { Project } from '../typings'

export const fetchProjects = async () => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const res = await fetch(`https://afrahs-studio.vercel.app/api/getProjects`)
    const data = await res.json()
    //console.log("data", data)
    const project: Project[] = data.project

    //console.log("fetching", project)

    return project
}