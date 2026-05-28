"use client";

import { motion } from "framer-motion";
import type { Philosophy, CodeExample } from "@/types";

interface PhilosophySectionProps {
  philosophy: Philosophy[];
  codeExample: CodeExample;
}

export function PhilosophySection({
  philosophy,
  codeExample,
}: PhilosophySectionProps) {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 border-b border-border-1"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-3">How I Work</h2>
          <p className="text-muted text-sm max-w-lg">
            Principles that guide my approach to building software.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              {/* Tag */}
              <div className="text-[10px] tracking-widest uppercase text-accent mb-4">
                {item.tag}
              </div>

              {/* Headline */}
              <h3 className="text-lg font-medium tracking-tight mb-3 text-foreground">
                {item.headline}{" "}
                <span className="font-serif italic text-muted">
                  {item.headlineEmphasis}
                </span>
              </h3>

              {/* Body */}
              <p className="text-sm text-muted leading-relaxed">
                {item.bodyEmphasis ? (
                  <>
                    {item.body.split(item.bodyEmphasis)[0]}
                    <span className="text-foreground">{item.bodyEmphasis}</span>
                    {item.body.split(item.bodyEmphasis)[1]}
                  </>
                ) : (
                  item.body
                )}
              </p>

              {/* Code Block (only for approach section) */}
              {item.hasCodeBlock && (
                <div className="mt-6 rounded-lg border border-border-1 overflow-hidden bg-surface-1">
                  {/* Code Header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-1 bg-surface-2">
                    <span className="w-2 h-2 rounded-full bg-muted/30" />
                    <span className="w-2 h-2 rounded-full bg-muted/30" />
                    <span className="w-2 h-2 rounded-full bg-muted/30" />
                    <span className="ml-3 text-[10px] text-muted font-mono">
                      {codeExample.filename}
                    </span>
                  </div>
                  {/* Code Content */}
                  <div className="p-4 text-xs font-mono leading-loose">
                    <div className="text-muted/40">
                      {codeExample.badComment}
                    </div>
                    <div className="text-muted">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">d</span> ={" "}
                      <span className="text-purple-400">await</span> db.q(
                      <span className="text-green-400">
                        {'"SELECT * FROM u"'}
                      </span>
                      )
                    </div>
                    <div className="mt-4 text-muted/40">
                      {codeExample.goodComment}
                    </div>
                    <div className="text-muted">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">user</span> ={" "}
                      <span className="text-purple-400">await</span> userRepo.
                      <span className="text-blue-400">findById</span>(userId)
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
