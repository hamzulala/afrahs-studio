import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import ProjectImgLink from "@/components/ProjectImgLink";
import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import { Project } from "../typings";
import { GetStaticProps } from "next";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  project: Project[];
};

const Portfolio = ({ project }: Props) => {
  const [primaryColor, setPrimaryColor] = useState<string>("#B3A394");
  const [secondaryColor, setSecondaryColor] = useState<string>("#102542");

  const [cursorVariant, setCursorVariant] = useState("none");
  const cursorNone = () => setCursorVariant("none");
  const cursorBig = () => setCursorVariant("big");
  const cursorMedium = () => setCursorVariant("medium");
  const cursorDefault = () => setCursorVariant("default");
  const cursorDefaultD = () => setCursorVariant("defaultDifference");

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
      onMouseEnter={cursorDefaultD}
    >
      <Cursor
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        variant={cursorVariant}
      />
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      {/*
       * Should be a dynamic list of all projects
       */}
      <div
        className="absolute columns-2 md:columns-3 max-w-[1240px] lg:columns-4 p-4 top-20 ease-in duration-300"
        style={{ backgroundColor: `${primaryColor}` }}
        onMouseEnter={cursorMedium}
        onMouseLeave={cursorDefaultD}
      >
        {project.map((projec) => (
          <ProjectImgLink
            key={projec._id}
            project={projec}
            handleProjectHover={handleProjectHover}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project: Project[] = await fetchProjects();

  return {
    props: {
      project,
    },

    revalidate: 10,
  };
};
