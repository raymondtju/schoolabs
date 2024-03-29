import Provider from "@/components/provider";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Schoolabs",
  description: "Melangkah Menuju Karir Barumu Bersama",
  openGraph: {
    title: "Schoolabs",
    description: "Melangkah Menuju Karir Barumu Bersama",
    images: "/og.png",
  },
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
        <Provider>
          {children}
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
