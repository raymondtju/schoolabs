import ClassCard from "@/components/class-card";
import { Button } from "@/components/ui/button";
import { ClassCards } from "@/types/data";
import Link from "next/link";

import React from "react";

function KelasSayaPage() {
  return (
    <div className="bg-[#F9FAFB] px-8 py-8">
      <div className="grid space-y-5 text-[#101928]">
        <h1 className="text-2xl font-bold">Kelas Saya</h1>
        <div className="flex gap-3">
          <Button>Semua Kelas</Button>
          <Button variant={"outline"} className="text-muted">
            Sedang Dipelajari
          </Button>
          <Button variant={"outline"} className="text-muted">
            Selesai
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {ClassCards.map((card, i) => (
            <>
              <Link href={`class/${card.title.toLowerCase().replace(/ /g, "-")}`} key={i}>
                <ClassCard className="w-full" card={card}/>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KelasSayaPage;
