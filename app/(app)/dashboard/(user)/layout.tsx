"use client";

import React from "react";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import DashboardNav from "@/components/dashboard/nav";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className=" grid grid-cols-[290px_1fr]">
      <DashboardSidebar />
      <div className="col-span-2 pl-[17.5rem]">
        <DashboardNav />
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
