"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 border-b border-border-1">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            InProgress Projects
          </h2>
          <p className="text-muted text-sm max-w-lg">
            Projects I&apos;me currently working on
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-start justify-between gap-6 py-8 border-b border-border-1 last:border-0 hover:bg-surface-1/50 -mx-4 px-4 rounded transition-colors cursor-pointer"
            >
              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                
                <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-wider uppercase text-muted/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="text-xs text-muted font-mono shrink-0">
                {project.year || "2024"}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
