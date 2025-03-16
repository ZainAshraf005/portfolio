/** @format */

"use client";

import { useState } from "react";
import SkillSection from "@/components/pages/skill-section";
import Skill from "@/components/pages/icons-section";
import ProjectSection from "@/components/pages/projects-section";
import Hero from "@/components/pages/hero-section";
import Loader from "@/components/Loader";
import Footer from "@/components/pages/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" min-h-screen bg-boxy bg-gray-950">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Hero />
          <div className="mb-7"></div>
          <SkillSection />
          <div className="mb-7"></div>
          <Skill />
          <div className="mb-7"></div>
          <ProjectSection />
          <div className="mb-7"></div>
          <Footer/>
        </>
      )}
    </div>
  );
}
