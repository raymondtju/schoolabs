import { Button } from "@/components/ui/button";
import React from "react";

function ClassLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-[49] flex justify-between border-b bg-white px-8 py-5">
        <h4 className="text-xl font-semibold">Kelas Dasar UX Research</h4>
        <Button>Lanjutkan belajar</Button>
      </div>
      <div className="bg-[#F9FAFB] px-8 py-8">{children}</div>
    </>
  );
}

export default ClassLayout;
