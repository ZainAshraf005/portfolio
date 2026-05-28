"use client";

import { useState, useEffect } from "react";
import type { Profile, NavItem } from "@/types";

interface NavbarProps {
  profile: Profile;
  navigation: NavItem[];
}

export function Navbar({ profile, navigation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get initials from name
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav
      className={`flex items-center justify-between px-10 py-5 sticky top-0 z-50 border-b border-white/4 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 text-[13px] font-medium tracking-[0.02em] text-foreground">
        <div className="w-7 h-7 bg-accent flex items-center justify-center text-[11px] font-bold text-accent-foreground tracking-[-0.02em]">
          {initials}
        </div>
        {profile.name}
      </div>

      {/* Nav Pill */}
      <div className="flex gap-0.5 bg-surface-2 border border-border-1 p-1 rounded-full">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-4 py-1.5 rounded-full text-[12px] text-muted tracking-[0.01em] hover:bg-surface-3 hover:text-foreground transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right - Availability Badge */}
      <div className="flex items-center gap-2 px-3.5 py-2 border border-green/20 bg-green/10 rounded-full text-[11px] text-green">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5bc85b] animate-glow" />
        Open to opportunities
      </div>
    </nav>
  );
}
