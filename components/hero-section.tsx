"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import type { Profile, About, Stats, Links } from "@/types";

interface HeroSectionProps {
  profile: Profile;
  about: About;
  stats: Stats;
  links: Links;
}

export function HeroSection({ profile, about, stats }: HeroSectionProps) {
  return (
    <section className="border-b border-border-1">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-6 md:mb-7">
              <span className="w-6 md:w-8 h-px bg-border-2" />
              <span className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted">
                {profile.tagline}
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[42px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-[-0.04em] font-bold mb-2"
            >
              I build things
              <br />
              that {""}
              <span className="font-serif font-normal italic text-accent">
                actually
              </span>
              <br />
              <span className="text-outline">work.</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[14px] md:text-[15px] text-muted leading-[1.7] max-w-130 my-5 md:my-6 font-light"
            >
              Full stack engineer at{" "}
              <strong className="text-foreground font-medium">
                {profile.company}
              </strong>
              . I don&apos;t copy-paste and ship. I write{" "}
              <strong className="text-foreground font-medium">
                clean, intentional code
              </strong>{" "}
              — systems that are a pleasure to maintain, not a nightmare to
              inherit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 bg-accent text-accent-foreground text-[12px] md:text-[13px] font-semibold tracking-[0.02em] rounded-lg hover:bg-[#f5ff6b] hover:-translate-y-0.5 transition-all"
              >
                <ArrowDown className="w-4 h-4" />
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 bg-transparent text-muted text-[12px] md:text-[13px] font-medium tracking-[0.02em] border border-border-2 rounded-lg hover:border-foreground hover:text-foreground transition-all"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s talk
              </a>
            </motion.div>
          </div>

          {/* Right Column - Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2.5 lg:pt-2"
          >
            {/* Primary Stat Card - Accent */}
            <div className="bg-accent border border-accent p-4 md:p-5 px-5 md:px-6 rounded-xl">
              <div className="text-[32px] md:text-[40px] font-bold tracking-[-0.04em] leading-none text-accent-foreground">
                {stats.yearsExperience}
              </div>
              <div className="text-[11px] md:text-[12px] text-accent-foreground/60 mt-1 tracking-[0.02em]">
                Years shipping production software
              </div>
            </div>

            {/* Two Column Stats */}
            <div className="flex gap-2.5">
              <div className="flex-1 bg-surface-1 border border-border-1 p-4 md:p-5 px-5 md:px-6 rounded-xl">
                <div className="text-[32px] md:text-[40px] font-bold tracking-[-0.04em] leading-none text-foreground">
                  {stats.productsInProduction}
                </div>
                <div className="text-[11px] md:text-[12px] text-muted mt-1 tracking-[0.02em]">
                  Products in production
                </div>
              </div>
              <div className="flex-1 bg-surface-1 border border-border-1 p-4 md:p-5 px-5 md:px-6 rounded-xl">
                <div className="text-[32px] md:text-[40px] font-bold tracking-[-0.04em] leading-none text-foreground">
                  {stats.technologiesMastered}
                </div>
                <div className="text-[11px] md:text-[12px] text-muted mt-1 tracking-[0.02em]">
                  Technologies mastered
                </div>
              </div>
            </div>

            {/* Code Editor Style Quality Card */}
            <div className="bg-[#1a1a1a] border border-border-1 rounded-xl overflow-hidden">
              {/* Editor Title Bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] border-b border-border-1">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10px] text-muted ml-2 font-mono">
                  code_quality.ts
                </span>
              </div>
              {/* Code Content */}
              <div className="p-4 font-mono text-[11px] md:text-[12px] leading-[1.9]">
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">1</span>
                  <div>
                    <span className="text-[#c586c0]">const</span>{" "}
                    <span className="text-[#9cdcfe]">principles</span>{" "}
                    <span className="text-foreground">=</span>{" "}
                    <span className="text-[#569cd6]">[</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">2</span>
                  <div className="pl-4">
                    <span className="text-[#6a9955]">{`"✓ clean architecture"`}</span>
                    <span className="text-foreground">,</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">3</span>
                  <div className="pl-4">
                    <span className="text-[#ce9178]">{`"✓ no spaghetti code"`}</span>
                    <span className="text-foreground">,</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">4</span>
                  <div className="pl-4">
                    <span className="text-[#dcdcaa]">{`"✓ readable by humans"`}</span>
                    <span className="text-foreground">,</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">5</span>
                  <div className="pl-4">
                    <span className="text-[#4ec9b0]">{`"✓ maintainable by default"`}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-dim select-none w-4 text-right">6</span>
                  <div>
                    <span className="text-[#569cd6]">]</span>
                    <span className="text-foreground">;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
