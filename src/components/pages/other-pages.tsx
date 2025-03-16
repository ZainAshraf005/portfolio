/** @format */

"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import Navbar from "../Navbar";
import SkillSection from "./skill-section";
import Skill from "./icons-section";
import ProjectSection from "./projects-section";

export default function OtherPages() {
  const [showNavbar, setShowNavbar] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <div className=" min-h-screen overflow-x-hidden bg-transparent">
      {/* Navbar with animation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 flex justify-center w-full z-50 p-4 shadow-md"
      >
        <Navbar />
      </motion.nav>

      {/* The section to track */}
      <div ref={targetRef} className="">
        <SkillSection />
        <Skill />
        {/* <ProjectSection /> */}
      </div>
    </div>
  );
}
