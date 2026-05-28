"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import type { Profile, Links } from "@/types";

interface ContactSectionProps {
  profile: Profile;
  links: Links;
}

export function ContactSection({ profile, links }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            If you would like to discuss a project or just say hi,{" "}
            <span className="text-muted">I&apos;m always down to chat.</span>
          </h2>

          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors mb-12"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-8 border-t border-border-1">
            <div>
              <div className="text-xs text-muted mb-2">Mail</div>
              <a
                href={`mailto:${links.email}`}
                className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
              >
                {links.email}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <div className="text-xs text-muted mb-2">LinkedIn</div>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
              >
                @{profile.name.toLowerCase().replace(" ", "")}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <div className="text-xs text-muted mb-2">GitHub</div>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
              >
                @zain-ashraf
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
