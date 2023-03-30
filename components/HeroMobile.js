import React from "react";
import ImgCarouselMobile from "./ImgCarouselMobile";
//import projects from "@/data/projects.json";
import Header from "./Header";
import { motion } from "framer-motion";

const HeroMobile = ({ project }) => {
  /*
        LANDING PAGE FOR MOBILE VIEW
     */

  return (
    <div
      className="items-center ease-in duration-300"
      style={{ color: `${project.secondaryColor}` }}
    >
      <div className="md:hidden overflow-y-auto ">
        <Header
          primaryColor={project.primaryColor}
          secondaryColor={project.secondaryColor}
        />
      </div>
      <motion.div exit={{ opacity: 0, scale: 0.8, y: "20%" }} transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
        <ImgCarouselMobile project={project} />
      </motion.div>
    </div>
  );
};

export default HeroMobile;