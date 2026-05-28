import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Zain Ashraf — Senior Software Engineer",
  description:
    "Full stack engineer specializing in clean, maintainable code. Building production software that actually works.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "M Zain Ashraf" }],
  creator: "M Zain Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "M Zain Ashraf — Senior Software Engineer",
    description:
      "Full stack engineer specializing in clean, maintainable code. Building production software that actually works.",
    siteName: "M Zain Ashraf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Zain Ashraf — Senior Software Engineer",
    description:
      "Full stack engineer specializing in clean, maintainable code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
