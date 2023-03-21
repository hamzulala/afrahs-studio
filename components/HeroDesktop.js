import React, { useEffect, useState } from "react";
import LogoSVG from "./LogoSVG";
import Link from "next/link";
import ImgCarouselDesktop from "./ImgCarouselDesktop";
import projects from "@/data/projects.json";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./Cursor";

const HeroDesktop = ({ projectId }) => {
  /** LANDING PAGE FOR DESKTOP VIEW
   *
   */

  const [logoSize, setLogoSize] = useState(350);
  const [textSize, setTextSize] = useState(17);

  //cursor stuff
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorBig = () => setCursorVariant("big");
  const cursorMedium = () => setCursorVariant("medium");
  const cursorDefault = () => setCursorVariant("default");

  useEffect(() => {
    const handleResize = () => {
      //make it dynamic for window height and width
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        setLogoSize(200);
        setTextSize(8);
      } else if (windowWidth < 768) {
        setLogoSize(250);
        setTextSize(10);
      } else if (windowWidth < 1024) {
        setLogoSize(300);
        setTextSize(10);
      } else {
        setLogoSize(500);
        setTextSize(10);
      }
    };

    handleResize(); //call it once to set the initial size

    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("DOMContentLoaded", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="h-screen grid grid-cols-2 overflow-hidden justify-items-center"
      style={{ cursor: "none" }}
    >
      <Cursor
        primaryColor={projects[projectId].primaryColor}
        secondaryColor={projects[projectId].secondaryColor}
        variant={cursorVariant}
      />
      <motion.div
        className="flex flex-row justify-center items-center m-10"
        style={{ color: `${projects[projectId].secondaryColor}` }}
        onMouseEnter={cursorBig}
        onMouseLeave={cursorDefault}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, x: "-20%" }}
        transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <motion.div
          className="flex flex-col space-y-10 lg:space-y-20 xl:space-y-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, x: "-20%" }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="-rotate-90 mb-4">
            <h2
              className="hidden hover:underline underline-offset-1 tracking-widest md:contents"
              style={{ fontSize: textSize }}
            >
              <Link href="/portfolio">Portfolio</Link>
            </h2>
          </div>
          <div className="-rotate-90">
            <h2
              className="hidden hover:underline underline-offset-1 tracking-widest md:contents"
              style={{ fontSize: textSize }}
            >
              <Link href="/about">About</Link>
            </h2>
          </div>
        </motion.div>
        <LogoSVG size={logoSize} color={projects[projectId].secondaryColor} />
      </motion.div>
      <motion.div
        className=" flex items-center justify-center m-10"
        exit={{ opacity: 0, scale: 0.8, x: "20%" }}
        transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <ImgCarouselDesktop projectId={projectId} />
      </motion.div>
    </motion.div>
  );
};

export default HeroDesktop;
