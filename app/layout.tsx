import Provider from "@/components/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";

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
      <Script
        type="text/javascript"
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <body className="font-Inter">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

declare global {
  interface Window {
    snap: any;
  }
}
