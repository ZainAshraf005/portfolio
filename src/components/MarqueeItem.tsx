/** @format */

import React, { FC } from "react";
import { motion } from "motion/react";

interface Props {
  images: string[];
  from: number | string;
  to: number | string;
}

const MarqueeItem: FC<Props> = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-16 md:h-30 w-44 md:w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-16 md:h-30 w-44 md:w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
