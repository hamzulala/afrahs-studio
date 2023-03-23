import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProjectImgLink = ({ project, handleProjectHover }) => {
  const handleHover = () => {
    //handles hover event for project image
    handleProjectHover(project.primaryColor, project.secondaryColor);
  };
  return (
    <motion.div
      className="mb-4 h-full w-full rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1] }}
      style={{ cursor: "none" }}
    >
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleHover}
      >
        <Link href="/blog/[slug]" as={`/blog/${project.id}`}>
          <img
            src={project.images[0]}
            className="hover:scale-110 shadow-lg transition duration-300 ease-in-out brightness-50 hover:rounded-lg hover:brightness-100"
          />
          <div className="absolute bottom-0 right-0 shadow-lg">
            <h1 className="text-l md:text-xl text-light1 text-left pr-2 pb-2">
              {project.title}
            </h1>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectImgLink;
