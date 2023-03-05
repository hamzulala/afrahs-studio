import React from "react";
import { motion } from "framer-motion";

const BlogDesktop = ({ project }) => {
  return (
    <div className="h-screen grid grid-cols-2 overflow-hidden justify-items-center">
      <motion.div
        className="mt-20 overflow-x-scroll rounded-lg scrollbar"
        initial={{ opacity: 0, scale: 0.8, x: "-25%" }}
        exit={{ opacity: 0, scale: 0.8, x: "-25%" }}
        animate={{ opacity: 1, scale: 1, x: "0%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h1
          style={{ color: `${project?.secondaryColor}` }}
          className="text-5xl text-center pl-10 pr-10 pb-10"
        >
          {project?.title}
        </h1>
        <p
          className="text:lg pl-10 text-justify tracking-wide"
          style={{ color: `${project?.secondaryColor}` }}
        >
          {project?.long_description}
        </p>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-col space-y-10 overflow-x-scroll p-8 snap-y snap-mandatory items-center rounded-lg scrollbar"
        initial={{ opacity: 0, scale: 0.8, x: "25%" }}
        exit={{ opacity: 0, scale: 0.8, x: "25%" }}
        animate={{ opacity: 1, scale: 1, x: "0%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        {project?.images.map((image) => (
          <img
            key={Math.random()}
            src={image}
            alt={project?.title}
            className="rounded-lg snap-center object-cover h-full w-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogDesktop;
