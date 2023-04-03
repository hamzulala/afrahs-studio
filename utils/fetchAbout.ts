import { About } from '../typings'

export const fetchAbout = async () => {
    //const res = await fetch(`https://afrahs-studio.vercel.app/api/getAbout`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`)
    
    const data = await res.json()
    const about: About = data.about

    console.log("fetching", about)

    return about
}