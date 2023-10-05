import { Button } from "@/components/ui/button";
import capitalizeFirstLetter from "@/lib/capitalizeWords";
import Link from "next/link";
import React from "react";
import { ClassSidebar } from "@/components/dashboard/sidebar";
import DashbaordNav from "@/components/dashboard/nav";

function ClassLayout(
  {
    children,
    params
  }: {
    children: React.ReactNode,
    params: { slug: string }
  }) {
  return (
    <>
      <main className="font-Inter grid grid-cols-[290px_1fr]">
        <ClassSidebar />
        <div className="col-span-2 pl-[17.5rem]">
          <DashbaordNav />
          <div className="sticky top-0 z-[49] flex justify-between border-b bg-white px-8 py-5">
            <h4 className="text-xl font-semibold">Kelas</h4>
            <Link href={`${params.slug}/detail-course`}>
              <Button>
                Lanjutkan Belajar
              </Button>
            </Link>
          </div>
          <div className="bg-[#F9FAFB] px-8 py-8 flex">{children}</div>
        </div>
      </main>
    </>
  );
}

export default ClassLayout;
