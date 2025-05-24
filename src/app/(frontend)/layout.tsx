import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full pt-7 px-7  min-h-screen">
      {children}
      <div className="w-full relative text-center mb-16 md:my-26  h-40">
        <Footer />
      </div>
    </div>
  );
}
