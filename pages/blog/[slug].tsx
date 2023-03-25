import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import BlogMobile from "@/components/BlogMobile";
import BlogDesktop from "@/components/BlogDesktop";
import projects from "@/data/projects.json";
import { Project } from "@/typings";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchProjects } from '../../utils/fetchProjects'

type Props = {
  project: Project[];
}

const ProjectPost = ({project}: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  const key: number = parseInt(slug as string);
  const projectID = slug?.toString();
  const projectMatch = project?.find(p => p._id === projectID); //getting error here

  console.log(projectMatch);

  if (!projectMatch) {
    return <div>Loading...</div>;
  }


  return (
    <div
      style={{ backgroundColor: `${projectMatch?.primaryColor}` }}
      className="absolute h-screen w-screen"
    >
      <Header
        primaryColor={projectMatch?.primaryColor}
        secondaryColor={projectMatch?.secondaryColor}
      />
      <div className="md:hidden tablet:h-1/2" style={{ backgroundColor: `${projectMatch?.primaryColor}` }}>
        <BlogMobile project={projectMatch} />
      </div>
      <div className="hidden md:contents">
        <BlogDesktop project={projectMatch} />
      </div>
    </div>
  );
};

export default ProjectPost;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project: Project[] = await fetchProjects();

  return {
    props: {
      project
    },

    revalidate: 10 // 24 hours
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: Project[] = await fetchProjects();
  const paths = projects.map(project => ({
    params: { slug: project._id.toString() }
  }));

  return {
    paths,
    fallback: false
  }
}
