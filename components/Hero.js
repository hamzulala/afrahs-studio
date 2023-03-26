import React, { useState, useEffect } from "react";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
//import projects from "@/data/projects.json";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { fetchProjects } from '../utils/fetchProjects'

const Hero = () => {
  const [project, setProject] = useState();


  useEffect(() => {
    /*
        need to refactor ths code to work with sanity
     */

    fetchProjects().then((projects) => {

      //loop though all projects every 5 seconds 
      //and set the project state to the next project

      let i = 0;
      setInterval(() => {
        if (i < projects.length) {
          setProject(projects[i]);
          i++;
        } else {
          i = 0;
        }
      }, 5000);
    })
  }, []);


  if(!project){ //add a loading screen here
    console.log(project)
    return (
      <div>
        Loading...
      </div>
    )
  }

  console.log(project)

  return (
    <motion.div
      className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden ease-in duration-300"
      style={{ backgroundColor: `${project.primaryColor}` }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
    >
      {
        console.log(project)
      }
      <div
        className="hidden md:contents"
        style={{ color: `${project.secondaryColor}` }}
      >
        <HeroDesktop project={project} />
      </div>
      <div className="md:hidden tablet:h-1/2 top-20">
        <HeroMobile project={project} />
      </div>
    </motion.div>
  );
};

export default Hero;
