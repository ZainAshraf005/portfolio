"use client";
import { stacks } from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

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
    <div className="md:mt-20 my-10 py-6 w-full ">
      <motion.h1
            className="text-4xl text-center md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            My Tech <span className="text-glow">Toolbox</span>
          </motion.h1>
      <div className=" w-full flex flex-col gap-4 mt-12  items-center">
        {stacks.map(({ name, description, image, theory }) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={name}
            className="rounded-xl mt-3 cursor-pointer bg-neutral-900 flex items-center gap-3 p-4 w-full "
          >
            <div className="flex items-center md:items-start gap-5 md:gap-3">
              <div className="md:w-16 md:h-16 w-14 h-10 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  width={70}
                  height={70}
                />
              </div>
              <div className="w-full flex flex-col pt-3">
                <div>
                  <div className="font-semibold tracking-wide capitalize">
                    {name}
                  </div>
                  <div className="text-zinc-500 font-light leading-snug ">
                    {description}
                  </div>
                </div>
                <div className=" text-zinc-500 overflow-ellipsis hidden md:block w-[70%] h-26 mt-5 ">
                  {theory}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
