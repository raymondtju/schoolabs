import { Button } from "@/components/ui/button";
import capitalizeFirstLetter from "@/lib/capitalizeWords";
import Link from "next/link";
import React from "react";
import { ClassSidebar } from "@/components/dashboard/sidebar";
import DashbaordNav from "@/components/dashboard/nav";

function ClassLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {

  return (
    <>
      <main className="grid grid-cols-[290px_1fr] ">
        <ClassSidebar />
        <div className="col-span-2 pl-[17.5rem]">
          <DashbaordNav />

          {children}
        </div>
      </main>
    </>
  );
}

export default ClassLayout;
