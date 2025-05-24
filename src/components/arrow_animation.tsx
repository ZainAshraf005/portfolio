"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface props {
  className?: string;
  width?: string;
  height?: string;
  speed?: number;
  padding: string;
  count: number;
}

const MovingArrow: React.FC<props> = ({
  className,
  padding,
  width,
  height,
  speed,
  count,
}) => {
  const arrowCount = count;
  const animation = {
    duration: speed,
    repeat: Infinity,
    ease: "linear",
  };

  const Arrows = () =>
    Array.from({ length: arrowCount }).map((_, i) => (
      <div key={`arrow-${i}`} className={`${padding}`}>
        <ArrowRight className={`${width} ${height} text-glow`} />
      </div>
    ));

  return (
    <div
      className={clsx(
        "overflow-hidden w-full h-full flex items-center ",
        className
      )}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex shrink-0"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={animation}
      >
        <Arrows />
      </motion.div>
      <motion.div
        className="flex shrink-0"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={animation}
      >
        <Arrows />
      </motion.div>
    </div>
  );
};

export default MovingArrow;
