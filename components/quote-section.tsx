"use client";

import { motion } from "framer-motion";
import type { Quote } from "@/types";

interface QuoteSectionProps {
  quote: Quote;
}

export function QuoteSection({ quote }: QuoteSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 border-y border-border-1 bg-surface-1/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-serif italic leading-relaxed text-foreground/90"
        >
          &ldquo;{quote.text}{" "}
          <span className="text-accent not-italic">{quote.emphasis}</span>&rdquo;
        </motion.blockquote>
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block mt-6 text-xs text-muted not-italic"
        >
          {quote.author}, {quote.title}
        </motion.cite>
      </div>
    </section>
  );
}
