import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CourseCards } from "@/types/data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function KelasSayaPage() {
  return (
    <>
      <div className="grid space-y-5">
        <h1 className="text-4xl font-bold">Kelas Saya</h1>
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
          {CourseCards.map((card, i) => (
            <Card key={i} className="border-none shadow-md">
              <CardHeader className="p-0">
                <Image
                  className="w-full"
                  src="/cards-image/dasarux.webp"
                  alt="Course dasar ux"
                  width={350}
                  height={350}
                />
              </CardHeader>
              <CardContent className="flex flex-col gap-4 px-4 py-6">
                <h5 className="text-xl font-bold">{card.title}</h5>
                <p className="text-sm text-muted">{card.description}</p>
              </CardContent>
              <CardFooter className="gap-3 px-4 pt-0">
                {typeof card.status === "number" ? (
                  <>
                    <Progress className="bg-[#F0F2F5]" value={card.status} />
                    <span className="text-[0.8125rem] font-semibold leading-5 text-muted">
                      {card.status}%
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 stroke="#475367" />
                    <p className="text-base font-semibold text-[#475367]">
                      Complete
                    </p>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default KelasSayaPage;
