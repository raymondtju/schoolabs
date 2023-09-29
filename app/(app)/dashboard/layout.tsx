import React from "react";

import Sidebar from "@/components/dashboard/sidebar";
import DashbaordNav from "@/components/dashboard/nav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-[280px_1fr]">
      <Sidebar />

      <div>
        <DashbaordNav />
        <div className="px-8 py-8">{children}</div>
      </div>
    </main>
  );
}

export default DashboardLayout;
