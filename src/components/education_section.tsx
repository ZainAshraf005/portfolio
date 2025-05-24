"use client";
import React from "react";
import { Dot, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { qualification } from "@/data/data";

const EducationSection = () => {
  return (
    <div className=" mt-7 pt-16 overflow-x-hidden">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-4xl text-zinc-200 text-3xl font-semibold"
      >
        Education
      </motion.h1>

      <div className="mt-7 text-zinc-400">
        {qualification.map((qual, i) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 * (i + 1), ease: "easeInOut" }}
            key={i}
            className="mb-6"
          >
            <div className="flex items-center md:text-lg gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>{qual.title}</span>
            </div>
            <span className="ml-6 text-sm">{qual.description}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 gap-6 md:gap-0 w-full flex flex-col md:flex-row justify-between">
        <div className=" text-zinc-400 font-light text-sm md:text-md">
          <div className=" overflow-x-hidden font-extralight flex text-zinc-600">
            {Array.from({ length: 45 }).map((_, i) => (
              <Dot className="w-3 h-3" key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
