import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";

const BlogMobile = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: "25%" }}
      exit={{ opacity: 0, scale: 0.8, y: "25%" }}
      animate={{ opacity: 1, scale: 1, y: "0%" }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      style={{backgroundColor: `${project?.primaryColor}`}}
    >
      <h1
        style={{ color: `${project?.secondaryColor}` }}
        className="mt-20 text-5xl text-center p-10"
      >
        {project?.title}
      </h1>
      <div className="flex space-x-5 overflow-x-scroll h-96 p-5 snap-x snap-mandatory items-center">
        {project?.images.map((image) => (
          <img
            key={Math.random()}
            src={urlFor(image)}
            alt={project?.title}
            className="rounded-lg snap-center object-cover h-full w-full"
          />
        ))}
      </div>
      <p
        className="text:sm p-4 text-justify tracking-wide"
        style={{
          color: `${project?.secondaryColor}`,
          backgroundColor: `${project?.primaryColor}`,
        }}
      >
        {project?.long_description}
      </p>
    </motion.div>
  );
};

export default BlogMobile;
