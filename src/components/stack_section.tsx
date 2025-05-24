"use client";
import Image from "next/image";
import React from "react";
import Button from "./cbutton";
import { stacks } from "@/data/data";
import { Dot } from "lucide-react";
import { motion } from "motion/react";

const StackSection = () => {
  return (
    <div className="mt-20 py-6 w-full">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-4xl text-zinc-200 text-3xl font-semibold"
      >
        Stack
      </motion.h1>

      <div className=" w-full flex flex-col md:flex-row gap-4 mt-12 items-center">
        {stacks.slice(0, 3).map((stack, i) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 * (i + 1), ease: "easeInOut" }}
            key={i}
            className="rounded-xl cursor-pointer bg-neutral-900 flex items-center gap-4 p-4 w-full "
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src={stack.image}
                alt={stack.name}
                className="w-full h-full object-cover"
                width={70}
                height={70}
              />
            </div>
            <div>
              <div className="font-semibold tracking-wide">{stack.name}</div>
              <div className="text-zinc-400 font-light leading-snug ">
                {stack.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex lg:items-center lg:justify-between px-2  mt-16 ">
        <div className="tracking-widest hidden md:block text-yellow-600 font-extralight ">
          <div className="  ml-4 flex text-zinc-600">
            {Array.from({ length: 60 }).map((_, i) => (
              <Dot className="w-3 h-3" key={i} />
            ))}
          </div>
        </div>
        <Button text="view all stack" href="/stack" />
      </div>
    </div>
  );
};

export default StackSection;
