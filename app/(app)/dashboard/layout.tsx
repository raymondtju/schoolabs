import React from "react";

import Sidebar from "@/components/dashboard/sidebar";
import DashbaordNav from "@/components/dashboard/nav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-[290px_1fr]">
      <Sidebar />
      <div className="pl-[15.6rem] col-span-2">
        <DashbaordNav />
        <div className="px-8 py-8 bg-[#F9FAFB]">{children}</div>
      </div>
    </main>
  );
}

export default DashboardLayout;
