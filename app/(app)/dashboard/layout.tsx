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

        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
