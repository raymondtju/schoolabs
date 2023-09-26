import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
