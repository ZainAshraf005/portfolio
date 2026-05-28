"use client";

import type { MarqueeItem } from "@/types";

interface MarqueeSectionProps {
  items: MarqueeItem[];
}

export function MarqueeSection({ items }: MarqueeSectionProps) {
  // Double the items for seamless infinite scroll
  const allItems = [...items, ...items];

  return (
    <div className="border-y border-border-1 overflow-hidden py-5 bg-surface-1/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, index) => (
          <div key={index} className="shrink-0 flex items-center gap-4 mx-6">
            <span className="text-xs tracking-[0.2em] uppercase text-muted">
              {item.text}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
