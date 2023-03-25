import React, { useState } from "react";
import { motion } from "framer-motion";

const MapFX = ({ src1, src2, alt, ...restProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? src2 : src1}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    />
  );
};

export default MapFX;