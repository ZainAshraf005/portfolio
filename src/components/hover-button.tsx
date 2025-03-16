/** @format */

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string; // Allowing additional styles
};

const HoverButton = ({ children, className }: Props) => {
  return (
    <div className={`group relative overflow-hidden cursor-pointer ${className}`}>
      <div className="group-hover:-translate-y-20 transition-all duration-300">
        {children}
      </div>
      <div className="translate-y-20 top-0 absolute group-hover:translate-y-0 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default HoverButton;
