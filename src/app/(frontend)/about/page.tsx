"use client";
import EducationSection from "@/components/education_section";
import ExperienceSection from "@/components/experience_section";
import StackSection from "@/components/stack_section";
import { Dot, MapPin } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Page = () => {
  return (
    <div className="md:px-7 text-zinc-200 pt-16 overflow-x-hidden">
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-6xl text-3xl font-semibold"
      >
        Get to Know Me
      </motion.h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-7 md:leading-snug font-extralight md:text-lg md:tracking-wide text-zinc-400 md:w-[46rem] "
      >
        Hi, I&apos;m Zain — a software engineer who doesn&apos;t just build websites,
        but designs digital experiences that tell a story. My journey started
        with a love for clean design, but over time I&apos;ve evolved into a
        full-stack developer with a strong focus on both functionality and
        performance.
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-12 gap-6 md:gap-0 w-full flex flex-col md:flex-row justify-between"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-zinc-400 font-light text-sm md:text-md">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-glow" />
            Lahore, Pakistan
          </div>
          <div className="  md:ml-4 flex text-zinc-600">
            {Array.from({ length: 45 }).map((_, i) => (
              <Dot className="w-3 h-3" key={i} />
            ))}
          </div>
        </div>
      </motion.div>
      <EducationSection />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <StackSection />
      </motion.div>
      
      <ExperienceSection />
    </div>
  );
};

export default Page;
