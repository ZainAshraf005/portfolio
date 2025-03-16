/** @format */

import type { Metadata } from "next";
import { Cedarville_Cursive, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const cedarville = Cedarville_Cursive({
  variable: "--font-cedarville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "M. ZainAshraf",
  description: "a full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={` ${poppins.className}  ${cedarville.variable} bg-gray-950 font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
