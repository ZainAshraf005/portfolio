"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile, Links } from "@/types";

interface FooterProps {
  profile: Profile;
  links: Links;
}

export function Footer({ profile, links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-border-1">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="text-xs text-muted">
          {currentYear} {profile.name}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${links.email}`}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
