import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar, PromotionFlyer } from "@/components/navbar";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schoolabs",
  description: "Melangkah Menuju Karir Barumu Bersama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pjs.style} ${inter.style} font-inter`}>
        <PromotionFlyer />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
