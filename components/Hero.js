import React, { useState, useEffect } from "react";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";

const Hero = () => {
  const [projectId, setProjectId] = useState(0);

  useEffect(() => {
    /*
        - useEffect is used to set up an interval that changes the currentImageIndex state every 2 seconds. 
        - The img tag then uses this state to determine which image to display. 
        - The clearInterval function is used in the cleanup function to stop the interval when the component unmounts.
     */

    const intervalId = setInterval(() => {
      setProjectId((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden ease-in duration-300"
      style={{ backgroundColor: `${projects[projectId].primaryColor}` }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <div
        className="hidden md:contents"
        style={{ color: `${projects[projectId].secondaryColor}` }}
      >
        <HeroDesktop projectId={projectId} />
      </div>
      <div className="md:hidden tablet:h-1/2 top-20">
        <HeroMobile projectId={projectId} />
      </div>
    </motion.div>
  );
};

export default Hero;
