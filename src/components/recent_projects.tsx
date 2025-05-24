"use client";
import Image from "next/image";
import React from "react";
import MovingArrow from "./arrow_animation";
import Button from "./cbutton";
import { projects } from "@/data/data";
import { Dot } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const RecentProjects = () => {
  return (
    <div className="mt-20 py-6 w-full ">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-4xl text-zinc-200 text-3xl font-semibold"
      >
        Recent Projects
      </motion.h1>
      <div className="cards mt-7 flex md:flex-row flex-col gap-6  w-full ">
        {projects.slice(0, 2).map((image, i) => (
          <Link
            href={"/projects"}
            key={i}
            className="w-full transition-all duration-300 cursor-pointer group"
          >
            <div className="card w-full  rounded-3xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                className="w-full h-[30rem]  transition-all duration-300 group-hover:scale-110 object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="flex relative gap-6 mt-4 overflow-x-hidden">
              <div className=" px-4 group-hover:translate-x-5 transition-all duration-300">
                <div className="  uppercase text-sm text-glow">
                  {image.category}
                </div>
                <div className="text-lg  capitalize">{image.title}</div>
              </div>
              <div className="w-32 absolute right-10 md:group-hover:opacity-100 opacity-100 md:opacity-0 transition-all duration-300 md:group-hover:translate-x-10 bg-blend-color">
                <MovingArrow
                  padding={"pr-2"}
                  speed={20}
                  width="w-7"
                  height="h-7"
                  count={10}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex  md:items-center md:justify-between px-2  mt-16 ">
        <div className=" hidden md:ml-4 md:flex text-zinc-600">
          {Array.from({ length: 45 }).map((_, i) => (
            <Dot className="w-3 h-3" key={i} />
          ))}
        </div>
        <Button text="view all Projects" href="/projects" />
      </div>
    </div>
  );
};

export default RecentProjects;
