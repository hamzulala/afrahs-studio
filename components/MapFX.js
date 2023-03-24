import React, { useState } from "react";
import "./MapFx.css";
import { motion } from "framer-motion";

const MapFX = ({ src1, src2, alt, ...restProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='ease-in duration-300'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.4, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <img
        src={src1}
        alt={alt}
        className=""
        {...restProps}
      />
      <img
        src={src2}
        alt={alt}
        className=""
        {...restProps}
      />
    </motion.div>
  );
};

export default MapFX;
