/** @format */

import React from "react";
import { motion } from "motion/react";
import HoverButton from "./hover-button";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="border-b z-50  text-md bg-gray/10 backdrop-blur-lg shadow-lg border-zinc-600 flex justify-center absolute top-5 p-4 px-11 container"
    >
      <div>M. ZainAshraf</div>
      {/* <ul className="lg:flex hidden gap-4">
        <li>
          <Link href={"#home"}>
            <HoverButton> Home</HoverButton>
          </Link>
        </li>
        <li>
          <HoverButton> About</HoverButton>
        </li>
        <li>
          <HoverButton> Projects</HoverButton>
        </li>
        <li>
          <HoverButton> Contact</HoverButton>
        </li>
      </ul> */}
    </motion.div>
  );
};

export default Navbar;
