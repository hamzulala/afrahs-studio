import Image from "next/image";
import React, { useState, useEffect } from "react";
import projects from "@/data/projects.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";

const ImgCarouselDesktop = ({ project }) => {
  /* 
        Rotate Images with short_description

        *** Currently STATIC and using DEMO Data ***

        ToDo:
        - setup with CMS Platform

     */

  return (
    <div key={project._id}>
      <Link
        href="/blog/[slug]"
        as={`/blog/${project._id}`}
        className="grid grid-cols-2"
      >
        <motion.div
          className="pt-20 p-5"
          initial={{ opacity: 0, scale: 0.8, y: "25%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <img
            src={urlFor(project.images[0])}
            alt="Image"
            className="rounded-lg aspect-[2/3] object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          className="pt-2 p-5 pr-5"
          initial={{ opacity: 0, scale: 0.8, y: "-25%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <img
            src={urlFor(project.images[1])}
            alt="Image"
            className="rounded-lg aspect-square object-cover shadow-lg"
          />
          <h3 className="text-sm text-left tracking-wide font-semibold pt-2">
            {project.title}
          </h3>
          <p className="text-xs text-left font-light tracking-tight pt-2 font-sans">
            {project.short_description}
          </p>
        </motion.div>
      </Link>
    </div>
  );
};

export default ImgCarouselDesktop;
