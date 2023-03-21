import React, { useEffect, useState } from "react";
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


  return (
    <div
      style={{ backgroundColor: `${projects[key]?.primaryColor}` }}
      className="absolute h-screen w-screen"
    >
      <Header
        primaryColor={projects[key]?.primaryColor}
        secondaryColor={projects[key]?.secondaryColor}
      />
      <div className="md:hidden tablet:h-1/2" style={{ backgroundColor: `${projects[key]?.primaryColor}` }}>
        <BlogMobile project={projects[key]} />
      </div>
      <div className="hidden md:contents">
        <BlogDesktop project={projects[key]} />
      </div>
    </div>
  );
};

export default ProjectPost;
