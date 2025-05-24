import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Zain Ashraf",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} text-zinc-200 scroll-smooth overflow-x-hidden flex flex-col md:flex-row h-screen  antialiased`}
      >
        <div className="md:w-[22%] h-[10%] border-b md:border-r md:border-b-0 bg-background z-10 border-zinc-800 w-full md:h-screen fixed top-0 left-0 ">
          <Navbar />
        </div>
        <div className=" md:ml-[22%] mt-[20%] md:mt-0  w-full">
          {children}
          
        </div>
      </body>
    </html>
  );
}
