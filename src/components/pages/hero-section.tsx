/** @format */

"use client";

import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import { motion } from "motion/react";
import TypewriterEffect from "../TypeWriter";

const Hero = () => {
  return (
    <div id="home" className="relative text-white overflow-hidden bg-box">
      {/* Radial Gradient Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-radial from-purple-500 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-radial from-blue-500 to-transparent opacity-50 blur-3xl"></div>

      <div className="h-screen px-6 flex flex-col justify-center items-center container mx-auto relative">
        <Navbar />

        <div className="flex pt-12 flex-col  lg:flex-row gap-20 md:gap-0  items-center w-full">
          {/* Left Side - Text Content */}
          <motion.div
            className="md:pl-12 flex-1 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }} // Start from left
            animate={{ x: 0, opacity: 1 }} // Animate to center
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <h3 className="text-lg font-medium tracking-wide mb-2">
              Hey, this is{" "}
              <span className="text-purple-400 font-semibold">Zain Ashraf</span>
            </h3>
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-nowrap font-bold leading-tight">
              A Full Stack Developer & <br />
              <span className="text-blue-400">
                <TypewriterEffect />
              </span>
            </h1>
            <p className="text-gray-400 text-lg mt-3">
              I love building scalable and high-performance applications.
            </p>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex-1 relative flex justify-center items-center"
            initial={{ x: 100, opacity: 0 }} // Start from right
            animate={{ x: 0, opacity: 1 }} // Animate to center
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <div className="relative w-60 h-60 md:w-fit md:h-fit overflow-hidde  flex items-center justify-center border rounded-br-2xl border-r-0 border-b-0 border-gray-700">
              <div className="absolute md:hidden top-6 w-12 h-12 flex justify-center items-center text-xl left-4 z-20 bg-blue-500 p-2 rounded-lg">
                TS
              </div>
              <div className="absolute md:hidden -bottom-3 w-12 h-12 flex justify-center items-center text-xl right-1 z-20 bg-yellow-500 text-black font-bold p-2 rounded-lg">
                JS
              </div>
              <Image
                className=" rotate-y-180 rounded-3xl drop-shadow-lg"
                src="/noBg.png"
                height={300}
                width={300}
                alt="profilePic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
