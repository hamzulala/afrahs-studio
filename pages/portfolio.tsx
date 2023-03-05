import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import ProjectImgLink from "@/components/ProjectImgLink";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";

type Props = {};

const Portfolio = (props: Props) => {
  const [primaryColor, setPrimaryColor] = useState<string>("#B3A394");
  const [secondaryColor, setSecondaryColor] = useState<string>("#102542");

  const handleProjectHover = (
    primary: string = "#B3A394",
    secondary: string = "#102542"
  ) => {
    //Handles the hover effect on the project images
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  };

  return (
    <motion.div
      className="flex  items-center justify-center h-screen ease-in duration-300"
      style={{ backgroundColor: `${primaryColor}` }}
    >
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      {/*
       * Should be a dynamic list of all projects
       */}
      <div
        className="absolute columns-2 md:columns-3 lg:columns-4 p-4 top-20 ease-in duration-300"
        style={{ backgroundColor: `${primaryColor}` }}
      >
        {projects.map((project) => (
          <ProjectImgLink
            key={project.id}
            project={project}
            handleProjectHover={handleProjectHover}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
