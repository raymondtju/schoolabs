"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function GradePage() {
  return (
    <>
      <div className="sticky top-0 z-[49] flex justify-between border-b bg-white px-8 py-5">
        <h4 className="text-xl font-semibold">Grade</h4>
        <Link href={`/detail-course`}>
          <Button>Lanjutkan Belajar</Button>
        </Link>
      </div>

      <div className="flex bg-[#F9FAFB] px-8 py-8"></div>
    </>
  );
}

export default GradePage;
