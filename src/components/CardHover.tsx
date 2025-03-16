/** @format */

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="container mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Whatsapp",
    link: "https://stripe.com",
  },
  {
    title: "Facebook",
    description:
      "",
    link: "https://netflix.com",
  },
  {
    title: "LinkedIn",
    link: "https://google.com",
  },
  {
    title: "Gravatar",
    link: "https://meta.com",
  },
  {
    title: "Instagram",
    link: "https://amazon.com",
  },
  {
    title: "Gmail",
    link: "https://microsoft.com",
  },
];
