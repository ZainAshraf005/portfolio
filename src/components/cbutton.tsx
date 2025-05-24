'use client';
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface props {
  text: string;
  href: string;
}

const Button: React.FC<props> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="px-4 w-full md:w-auto leading-snug tracking-wide text-sm transition-all duration-300 font-extralight group md:ml-2 flex cursor-pointer capitalize items-center gap-2 py-2 border border-zinc-500 text-zinc-300 hover:border-zinc-900 hover:text-glow rounded-lg hover:bg-zinc-900"
    >
      {text}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all duration-300" />
    </Link>
  );
};

export default Button;
