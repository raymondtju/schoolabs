"use client"

import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  useAccordion
} from "@/components/ui/accordion";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { subjectLearnList } from "@/types/data";



function ClassPage() {

  return (
    <>
      <div className="m-auto max-w-3xl grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-gray-900 text-lg font-semibold">Tentang Kelas</h1>
          <div className="rounded-xl border bg-white p-4">
            <p className="leading-[1.45rem] text-gray-700">
              Kursus yang dirancang untuk memberikan pemahaman mendalam tentang metodologi penelitian pengalaman pengguna (UX). Dalam kelas ini, peserta akan mempelajari konsep-konsep dasar dalam UX Research, termasuk pengumpulan data, analisis pengguna, dan teknik pengujian.
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="text-gray-900 text-lg font-semibold">Course Progress</h1>
          <div className="grid rounded-xl border bg-white p-4 gap-3">
            <p className="text-sm">Complete 2 dari 24 Materi</p>
            <span className="text-sm flex items-center font-semibold gap-3">
              <Progress value={20} />
              20%
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="text-gray-900 text-lg font-semibold">Course Content</h1>
          <div className="flex justify-between">
            <p className="flex font-medium gap-1">
              8 Bagian
              <span>
                •
              </span>
              24 Materi
            </p>
            <button className="text-muted font-semibold">
              Collapse all sections
            </button>
          </div>
          <div className="mt-3 grid gap-2">
            <Accordion multiple defaultIndex={[0, 1, 2]}>
              {subjectLearnList.map((item, index) => (
                <AccordionItem key={index} className="rounded-lg border-[#9B9DFD]">
                  <AccordionHeader className="p-4">
                    <h5 className="text-xl leading-6 tracking-tight font-semibold">Bagian {index + 1}. {item.title}</h5>
                  </AccordionHeader>
                  <AccordionPanel>
                    {item.subClass.map((subItem, index) => (
                      <div key={index} className="px-6 py-2">
                        <div className="flex gap-4 items-center">
                          {subItem.icon ? (
                            <subItem.icon size={21}/>
                          ) : (
                            <CheckCircle2 size={21} color="#0F973D" />
                            
                          )}
                          <p className="text-gray-700 leading-7">{subItem.title}</p>
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
    </>
  );
}
export default ClassPage;
