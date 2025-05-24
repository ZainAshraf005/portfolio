"use client";
import MovingArrow from "@/components/arrow_animation";
import { projects } from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Page = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div className="md:mt-20 py-6 w-full ">
      <motion.h1
            className="text-3xl text-center md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            My <span className="text-glow">Remarkable</span> Projects
          </motion.h1>
      <div className="cards hidden md:grid mt-12 md:grid-cols-2 grid-cols-1 gap-6  w-full ">
        {projects.map((image, i) => {
          const slug = `/projects/${image.title.split(" ").join("-")}`;

          return (
            <Link key={i} href={slug}>
              <div className="w-full mt-7 transition-all duration-300 cursor-pointer group">
                <div className="card w-full  rounded-3xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="w-full h-[30rem] transition-all duration-300 group-hover:scale-110 object-cover object-top"
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
                  <div className="w-32 absolute right-10 group-hover:opacity-100 opacity-0 transition-all duration-300 group-hover:translate-x-10 bg-blend-color">
                    <MovingArrow
                      padding={"pr-2"}
                      speed={20}
                      width="w-7"
                      height="h-7"
                      count={10}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="cards mt-7 md:hidden grid md:grid-cols-2 grid-cols-1 gap-6  w-full ">
        {projects.map((image, i) => {
          const slug = `/projects/${image.title.split(" ").join("-")}`;
          return (
            <Link key={i} href={slug}>
              <motion.div className="w-full mt-7 cursor-pointer ">
                <div className="card w-full  rounded-3xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="w-full h-[30rem] object-cover object-top"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex relative gap-6 mt-4 overflow-x-hidden">
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 10, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className=" px-4 "
                  >
                    <div className="  uppercase text-sm text-glow">
                      {image.category}
                    </div>
                    <div className="text-lg  capitalize">{image.title}</div>
                  </motion.div>
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 20, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 absolute right-10   bg-blend-color"
                  >
                    <MovingArrow
                      padding={"pr-2"}
                      speed={20}
                      width="w-7"
                      height="h-7"
                      count={10}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
