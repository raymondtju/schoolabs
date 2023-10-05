"use client";

import { Footer } from "@/components/footer";
import { Navbar, PromotionFlyer } from "@/components/navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <main className="font-PJS">
        {pathname === "/" && <PromotionFlyer />}
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
