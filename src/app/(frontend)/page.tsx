"use client";
import Button from "@/components/cbutton";
import RecentProjects from "@/components/recent_projects";
import StackSection from "@/components/stack_section";
import { Dot, MapPin } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Page = () => {
  return (
    <div className="md:px-7 pt-16 overflow-x-hidden">
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-6xl text-4xl capitalize font-semibold"
      >
        Hello Everyone! <br className="md:hidden" /> I&apos;m Zain.{" "}
      </motion.h1>

      <div className="mt-7 leading-snug font-extralight text-lg tracking-wide text-zinc-400 md:w-[46rem] ">
        A dedicated software engineer driven by creativity and precision,
        transforming bold ideas into elegant, intuitive digital experiences.
      </div>
      <div className="mt-12 gap-6 md:gap-0 w-full flex flex-col md:flex-row justify-between">
        <div className="flex items-center gap-2 text-zinc-400 font-light text-sm md:text-md">
          <MapPin className="w-4 h-4 text-glow" />
          Lahore, Pakistan
          <div className="  ml-4 flex text-zinc-600">
            {Array.from({ length: 15 }).map((_, i) => (
              <Dot className="w-3 h-3" key={i} />
            ))}
          </div>
        </div>
        <Button text="More About Me" href="/about" />
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <RecentProjects />
      </motion.div>
      <StackSection />
    </div>
  );
};

export default Page;
