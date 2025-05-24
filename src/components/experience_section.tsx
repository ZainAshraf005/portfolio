"use client";
import React from "react";
import { Dot, BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/data";
import { motion } from "motion/react";

const ExperienceSection = () => {
  return (
    <div className=" mt-7 pt-16 overflow-x-hidden">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-4xl text-zinc-200 text-3xl font-semibold"
      >
        Experience
      </motion.h1>

      <div className="my-7 flex flex-col gap-5 text-zinc-400">
        {experience.map((exp, i) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5*(i+1), ease: "easeInOut" }}
            key={i}
            className="mb-6"
          >
            <div className="flex items-center md:text-lg gap-2">
              <BriefcaseBusiness className="w-4 h-4" />
              <span>{exp.title}</span>
            </div>
            <span className="ml-6 text-sm">{exp.company} -- </span>
            <span className=" text-sm">{exp.date}</span>
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

export default ExperienceSection;
