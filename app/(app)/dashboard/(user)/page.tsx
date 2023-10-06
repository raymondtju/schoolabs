"use client";

import ClassCard from "@/components/class-card";
import ForumList from "@/components/dashboard/forum-list";
import { DesignerButtonIcon, DevButtonIcon } from "@/components/icon/dashboard-icon";
import { Button } from "@/components/ui/button";
import { ClassCards } from "@/types/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function DashboardPage() {
  return (
    <div className="bg-[#F9FAFB] px-8 py-8">
      <div className="space-y-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Lanjutkan proses belajarmu</h2>
          <div className="p-3 scroll-px-3 relative flex w-full snap-x gap-8 overflow-x-auto">
            {ClassCards.map((card, i) => (
              <ClassCard className="snap-start" card={card} key={i}/>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Kelas rekomendasi sesuai minatmu
            </h2>
            <Link href="#" className="font-semibold text-lg flex items-center text-gray-500">
              Lihat semua
              <ChevronRight />
            </Link>
          </div>
          <div className="flex gap-3">
            <Button className="gap-2">
              <DesignerButtonIcon/>
              UI/UX
            </Button>
            <Button variant={"outline"} className="gap-2 text-muted">
              <DevButtonIcon/>
              Programmer
            </Button>
          </div>
          <div className="p-3 scroll-px-4 relative flex w-full snap-x gap-8 overflow-x-auto">
            {ClassCards.map((card, i) => (
              <ClassCard className="snap-start" card={card} key={i} />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Diskusi yang sedang hangat
            </h2>
            <Link href="#" className="font-semibold text-lg flex items-center text-gray-500">
              Lihat semua
              <ChevronRight />
            </Link>
          </div>
          <div>
            <ForumList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
