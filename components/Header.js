import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoSVG from "@/components/LogoSVG";

//Responsive Transparent to BG Colour Scroll Effect NavBar

const Header = ({ primaryColor = "#DDD5D0", secondaryColor = "#586F6B" }) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(primaryColor);
  const [textColor, setTextColor] = useState(secondaryColor);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor(secondaryColor);
        setTextColor(primaryColor);
      } else {
        setColor("transparent");
        setTextColor(secondaryColor);
      }
    };
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  return (
    <motion.div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-5 pt-0 h-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: "-40%" }}
          exit={{ opacity: 0, scale: 0.8, x: "-40%" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Link href="/" className="pt-3">
            <LogoSVG size={85} color={textColor} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: "40%" }}
          exit={{ opacity: 0, scale: 0.8, x: "40%" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4 hover:underline underline-offset-1 hover:opacity-50">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-1 hover:opacity-50">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </motion.div>

        {/* Mobile Button */}
        <motion.div
          onClick={handleNav}
          className="block sm:hidden z-10 pt-3"
          initial={{ opacity: 0, scale: 0.8, x: "40%" }}
          exit={{ opacity: 0, scale: 0.8, x: "40%" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${primaryColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <div
          style={{ backgroundColor: `${secondaryColor}` }}
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <ul style={{ color: `${primaryColor}` }}>
            <li className="p-4 text-4xl">
              <Link href="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/portfolio">
                <h3>Portfolio</h3>
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/about">
                <h3>About</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
