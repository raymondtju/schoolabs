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
    <div className="bg-[#F9FAFB]">
      <div className="container py-8">
        <div className="space-y-20">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Lanjutkan proses belajarmu</h2>
            <div className="p-3 relative flex flex-col md:flex-row gap-8 md:w-full md:snap-x md:scroll-px-3 md:overflow-x-auto">
              {ClassCards.map((card, i) => (
                <ClassCard className="w-full md:max-w-[19rem] md:shrink-0 md:snap-start" card={card} key={i}/>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
            <div className="p-3 relative flex flex-col md:flex-row gap-8 md:w-full md:snap-x md:scroll-px-3 md:overflow-x-auto">
              {ClassCards.map((card, i) => (
                <ClassCard className="w-full md:max-w-[19rem] md:shrink-0 snap-start" card={card} key={i} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
    </div>
  );
}

export default DashboardPage;
