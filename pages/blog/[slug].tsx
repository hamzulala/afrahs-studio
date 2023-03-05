import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import BlogMobile from "@/components/BlogMobile";
import BlogDesktop from "@/components/BlogDesktop";
import projects from "@/data/projects.json";

type Props = {};

const ProjectPost = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  const key: number = parseInt(slug as string);
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
    <div
      style={{ backgroundColor: `${projects[key]?.primaryColor}` }}
      className="h-screen w-screen"
    >
      <Header
        primaryColor={projects[key]?.primaryColor}
        secondaryColor={projects[key]?.secondaryColor}
      />
      <div className="md:hidden tablet:h-1/2 top-20">
        <BlogMobile project={projects[key]} />
      </div>
      <div className="hidden md:contents">
        <BlogDesktop project={projects[key]} />
      </div>
    </div>
  );
};

export default ProjectPost;
