"use client";

import React from "react";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import DashboardNav from "@/components/dashboard/nav";


function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="lg:grid lg:grid-cols-[290px_1fr]">
      <div className="hidden lg:block">
        <DashboardSidebar />

      </div>
      <div className="lg:col-span-2 lg:pl-[17.5rem]">
        <DashboardNav />
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
