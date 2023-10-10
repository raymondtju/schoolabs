import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Schoolabs | Auth",
   description: "Melangkah Menuju Karir Barumu Bersama",
}

export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <main className=" bg-[#F0F2F5] py-9 min-h-screen">
            <div className="container flex flex-col items-center">
               <Link href="/">
                  <Image className="py-12" src="/logo.png" alt="icon" width={200} height={200} />
               </Link>
               {children}
            </div>
         </main>
      </>
   );
}