"use client";
import React from "react";
import MovingArrow from "./arrow_animation";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <Link
        href={"/contact"}
        className=" hidden group relative cursor-pointer w-full  md:flex items-center justify-center tracking-tight whitespace-nowrap text-5xl lg:text-[9rem] pt-7"
      >
        <div className="bg-background z-10 opacity-0 group-hover:opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative font-sans">
          Let&apos;s Connect!
          <MovingArrow
            padding={"pr-20"}
            speed={20}
            width={"w-20"}
            height={"h-20"}
            count={10}
            className="group-hover:flex group z-20 absolute top-0 hidden transition-all duration-300"
          />
        </div>
      </Link>
      <Link
        href={"/contact"}
        className=" md:hidden group relative cursor-pointer w-full  flex items-center justify-center tracking-tight whitespace-nowrap text-5xl lg:text-[9rem] pt-7"
      >
        <div className="bg-background z-10 opacity-60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative font-sans">
          Let&apos;s Connect!
          <MovingArrow
            padding={"pr-10"}
            speed={20}
            width={"w-10"}
            height={"h-10"}
            count={10}
            className="flex group z-20 absolute top-0 transition-all duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
