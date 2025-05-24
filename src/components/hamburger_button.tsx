"use client";
import { motion, MotionConfig } from "motion/react";
import React, { useEffect, useState } from "react";

const Hamburger = ({ open }: { open: boolean }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(open);
  }, [open]);

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((prev) => !prev)}
        className="relative cursor-pointer h-20 w-20 rounded-full"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          className="absolute h-0.5 w-8 bg-zinc-400"
          style={{
            left: "50%",
            top: "40%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            open: {
              rotate: 45,
              top: "50%",
            },
            closed: {
              rotate: 0,
              top: "40%",
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-8 bg-zinc-400"
          style={{
            left: "50%",
            top: "60%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            open: {
              rotate: -45,
              top: "50%",
            },
            closed: {
              rotate: 0,
              top: "60%",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default Hamburger;
