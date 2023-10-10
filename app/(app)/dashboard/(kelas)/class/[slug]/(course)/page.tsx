"use client";

import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  useAccordion,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { subjectLearnList } from "@/types/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ClassPage() {
  return (
    <>
      <div className="sticky top-0 z-[49] flex justify-between border-b bg-white px-8 py-5">
        <h4 className="text-xl font-semibold">Kelas</h4>
        <Link href={`/detail-course`}>
          <Button>Lanjutkan Belajar</Button>
        </Link>
      </div>

      <div className="flex bg-[#F9FAFB] px-8 py-8">
        <div className="m-auto grid max-w-3xl gap-8">
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold text-gray-900">
              Tentang Kelas
            </h1>
            <div className="rounded-xl border bg-white p-4">
              <p className="leading-[1.45rem] text-gray-700">
                Kursus yang dirancang untuk memberikan pemahaman mendalam
                tentang metodologi penelitian pengalaman pengguna (UX). Dalam
                kelas ini, peserta akan mempelajari konsep-konsep dasar dalam UX
                Research, termasuk pengumpulan data, analisis pengguna, dan
                teknik pengujian.
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold text-gray-900">
              Course Progress
            </h1>
            <div className="grid gap-3 rounded-xl border bg-white p-4">
              <p className="text-sm">Complete 2 dari 24 Materi</p>
              <span className="flex items-center gap-3 text-sm font-semibold">
                <Progress value={20} />
                20%
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold text-gray-900">
              Course Content
            </h1>
            <div className="flex justify-between">
              <p className="flex gap-1 font-medium">
                8 Bagian
                <span>•</span>
                24 Materi
              </p>
              <button className="font-semibold text-muted">
                Collapse all sections
              </button>
            </div>
            <div className="mt-3 grid gap-2">
              <Accordion multiple defaultIndex={[0, 1]}>
                {subjectLearnList.map((item, index) => (
                  <AccordionItem
                    key={index}
                    className="rounded-lg border-[#9B9DFD]"
                  >
                    <AccordionHeader className="p-4">
                      <h5 className="text-base font-semibold leading-6 tracking-tight md:text-xl">
                        Bagian {index + 1}. {item.title}
                      </h5>
                    </AccordionHeader>
                    <AccordionPanel>
                      {item.subClass.map((subItem, index) => (
                        <div key={index} className="px-6 py-2">
                          <div className="flex items-center gap-4">
                            <span className="inline-block">
                              {subItem.icon ? (
                                <subItem.icon size={21} />
                              ) : (
                                <CheckCircle2 size={21} color="#0F973D" />
                              )}
                            </span>
                            <p className="text-sm text-gray-700">
                              {subItem.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ClassPage;
