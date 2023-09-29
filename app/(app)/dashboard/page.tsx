"use client";

import ClassCard from "@/components/dashboard/class-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function DashboardPage() {
  return (
    <div className="space-y-20">
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold">Lanjutkan proses belajarmu</h2>
        <div className="relative flex w-full snap-x gap-6 overflow-x-auto">
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Kelas rekomendasi sesuai minatmu
          </h2>
          <Link href="#" className="font-semibold text-gray-500">
            {"Lihat semua >"}
          </Link>
        </div>
        <div className="flex gap-3">
          <Button>UI/UX</Button>
          <Button variant={"outline"} className="text-muted">
            Programmer
          </Button>
        </div>
        <div className="relative flex w-full snap-x gap-6 overflow-x-auto">
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
          <ClassCard
            title="Dasar UX Research"
            className="snap-start"
            description="Supporting or descriptive text for the card goes here like a pro."
            progressValue={70}
          />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Diskusi yang sedang hangat</h2>
          <Link href="#" className="font-semibold text-gray-500">
            {"Lihat semua >"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
