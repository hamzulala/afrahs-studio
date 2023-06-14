import { About } from '../typings'

export const fetchAbout = async (): Promise<About> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`)
        
        const data = await res.json()
        const about: About = data?.about

        console.log("fetching", about)

        if (!about) {
            throw new Error("No About data returned from API");
        }

        return about;
    } catch (error) {
        console.error("Error fetching About data:", error)
        return {
            _createdAt: "",
            _id: "",
            _rev: "",
            _updatedAt: "",
            _type: 'about',
            origin: "", 
            about_me: "", 
            awards: [],
        };
    }
}

