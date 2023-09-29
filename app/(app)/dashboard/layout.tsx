"use client";

import React from "react";

import Sidebar from "@/components/dashboard/sidebar";
import DashboardNav from "@/components/dashboard/nav";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="grid grid-cols-[290px_1fr]">
      <Sidebar />
      <div className="col-span-2 pl-[15.6rem]">
        <DashboardNav />

        {pathname.startsWith("/dashboard/class") && (
          <div className="sticky top-0 z-50 flex justify-between border-b bg-white px-8 py-5">
            <h4 className="text-xl font-semibold">Kelas Dasar UX Research</h4>
            <Button>Lanjutkan belajar</Button>
          </div>
        )}
        <div className="bg-[#F9FAFB] px-8 py-8">{children}</div>
      </div>
    </main>
  );
}

export default DashboardLayout;
