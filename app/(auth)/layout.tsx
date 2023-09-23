import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Schoolabs | Auth",
   description: "Melangkah Menuju Karir Barumu Bersama",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <main className="bg-[#F0F2F5] py-12 min-h-screen">
            <div className="container flex flex-col items-center">
               <Image className="py-12 mix-blend-darken" src="/logo.svg" alt="icon" width={200} height={200} />
               {children}
            </div>
         </main>
      </>
   );
}