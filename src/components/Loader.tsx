"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Delay before hiding loader
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of loading

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-transparent text-white text-5xl font-bold z-50"
    >
      {progress}%
    </motion.div>
  );
}
