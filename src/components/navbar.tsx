"use client";
import {
  Award,
  House,
  Layers,
  LayoutDashboard,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Hamburger from "./hamburger_button";
import { motion } from "motion/react";

const navItems = [
  { href: "/", label: "Home", icon: <House /> },
  { href: "/about", label: "About", icon: <User /> },
  { href: "/projects", label: "Projects", icon: <LayoutDashboard /> },
  { href: "/stack", label: "Stack", icon: <Layers /> },
  { href: "/contact", label: "Contact", icon: <Mail /> },
  { href: "/certifications", label: "Certifications", icon: <Award /> },
];

const Navbar = () => {
  const pathname = usePathname();
  const [slide, setSlide] = useState(false);

  const handleCloseMobile = () => setSlide(false);

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex justify-between items-center w-full z-10 bg-background">
        <div className="w-full flex md:gap-1 gap-3 cursor-pointer md:flex-col items-center md:justify-center md:p-10 p-3">
          <div className="image md:block md:w-48 w-14 md:rounded-b-none md:hover:rounded-b-2xl transition-all duration-300 md:rounded-2xl rounded-full overflow-hidden">
            <Image
              src={"/assets/profile.png"}
              alt="profile image"
              className="w-full h-full contrast-125 object-cover"
              width={200}
              height={200}
            />
          </div>

          <div className="w-48 flex items-center text-sm font-light tracking-tight justify-center gap-2 md:rounded-t-none rounded-xl py-1 text-center text-glow mt-2 bg-[#062d1d]">
            <div className="w-2.5 h-2.5 bg-[#4de6a6] rounded-full"></div>
            Available for Work
          </div>
        </div>
        <div onClick={() => setSlide(!slide)} className="md:hidden">
          <Hamburger open={slide} />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="md:w-48 p-5 md:p-0 gap-5 w-full text-sm text-zinc-400 bg-background tracking-wider font-light mt-1 hidden md:flex flex-col md:gap-4">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-3 p-2 rounded-md transition-all duration-300 ${
                isActive ? "bg-[#1a1a1a] text-zinc-200" : "hover:text-glow"
              }`}
            >
              {React.cloneElement(icon, {
                className: `w-4 h-4 transition-all duration-300 ${
                  !isActive && "group-hover:text-glow group-hover:scale-140"
                }`,
              })}
              {label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Links (motion.div) */}
      <motion.div
        className="p-5  gap-5 absolute md:hidden w-full text-sm text-zinc-400 bg-background tracking-wider font-light mt-1 flex flex-col"
        animate={slide ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {
            top: "97%",
            position: "absolute",
          },
          closed: {
            top: "-400%",
            position: "absolute",
            left: 0,
            right: 0,
          },
        }}
      >
        <div>
          {navItems.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={handleCloseMobile}
                className={`group flex ${
                  label === "home" ? "" : "items-center"
                } mt-4 gap-3 p-2 rounded-md transition-all duration-300 ${
                  isActive ? "bg-[#1a1a1a] text-zinc-200" : "hover:text-glow"
                }`}
              >
                {React.cloneElement(icon, {
                  className: `w-4 h-4 transition-all duration-300 ${
                    !isActive && "group-hover:text-glow group-hover:scale-140"
                  }`,
                })}
                {label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
