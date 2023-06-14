import { useEffect, useState } from "react";
import { motion } from "framer-motion";



const Cursor = ({ primaryColor, secondaryColor, variant = "none" }) => {
  const [mousePosition, setMousePosition] = useState({
    x: -10,
    y: -10,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    none: {
      //make cursor invisible
      opacity: 0,
    },
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    defaultDifference: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: `${secondaryColor}`,
      mixBlendMode: "difference",
    },
    big: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: `${secondaryColor}`,
      mixBlendMode: "difference",
    },
    medium: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: `${secondaryColor}`,
      mixBlendMode: "difference",
    },
  };

  useEffect(() => { 
    setCursorVariant(variant);
  }, [variant]);

  const cursor = { 
    backgroundColor: `${secondaryColor}`,
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    position: "fixed",
    top: "0",
    left: "0",
    pointerEvents: "none",
    zIndex: "999",
  };

  return (
    <motion.div style={cursor} variants={variants} animate={cursorVariant} />
  );
};

export default Cursor;
