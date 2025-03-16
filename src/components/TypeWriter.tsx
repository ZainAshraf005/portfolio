/** @format */

"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const words = ["Backend Enthusiast", "Software Engineer", "Database Designer"];

export default function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[index];

      if (!isDeleting && text.length < currentWord.length) {
        // Typing effect
        setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 100);
      } else if (isDeleting && text.length > 0) {
        // Deleting effect
        setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 50);
      } else if (!isDeleting && text.length === currentWord.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text.length === 0) {
        // Move to next word and reset
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, [text, isDeleting]);

  return (
    <motion.div
      className="text-nowrap animate-rainbow text-3xl md:text-5xl  font-bold leading-tight text-blue-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      <span className="animate-blink">|</span> {/* Blinking Cursor */}
    </motion.div>
  );
}
