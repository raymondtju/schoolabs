"use client";

import BarChart from "@/components/icon/bar-chart";
import StarsIcon from "@/components/icon/stars-icon";
import { Button } from "@/components/ui/button";
import { BenefitClass, FAQClass, subjectLearnList } from "@/types/data";
import { CalendarPlus, CheckCircle2, Users, Video } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  useAccordion,
} from "@/components/ui/accordion";
import Avatar from "@/components/dashboard/avatar";
import Link from "next/link";

const JoinStorySection = [
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: `"Materi yang diberikan mudah dicerna serta ada prakteknya"`,
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: `"Materi yang diberikan mudah dicerna serta ada prakteknya"`,
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: `"Materi yang diberikan mudah dicerna serta ada prakteknya"`,
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: `"Materi yang diberikan mudah dicerna serta ada prakteknya"`,
  },
];

function DasarUxResearchPage() {
  return (
    <main className="relative">
      <section className="bg-gradient-to-b from-[#3571A7] to-[#4A8CC8] text-white">
        <div className="container py-14 md:px-20">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Dasar UX Research
            </h1>
            <p className="text-base">
              Kursus yang dirancang untuk memberikan pemahaman mendalam tentang
              metodologi penelitian pengalaman pengguna (UX). Dalam kelas ini,
              peserta akan mempelajari konsep-konsep dasar dalam UX Research,
              termasuk pengumpulan data, analisis pengguna, dan teknik
              pengujian.{" "}
            </p>
            <div className="item-scenter flex flex-wrap justify-between">
              <div className="flex items-center space-x-2 text-sm">
                <StarsIcon size={16} />
                <p>4.9/5.0</p>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users size={16} />
                <p>500 siswa</p>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <BarChart size={16} />
                <p>Tingkat pemula</p>
              </div>
              <div className="mt-4 flex items-center space-x-2 text-sm sm:mt-0">
                <CalendarPlus size={16} />
                <p>Last Update 23 Mei 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container relative flex w-full flex-1 justify-between py-14 md:px-20">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Belajar bersama mentor berpengalaman
            </h3>
            <div className="flex gap-24">
              <div>Robi Orlando</div>
              <div>Robi Orlando</div>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              Apa yang akan kamu dapatkan?
            </h3>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              {BenefitClass.map((item, index) => {
                return (
                  <div className="flex gap-6 rounded-lg border p-6" key={index}>
                    <div className="h-7 w-7">
                      {item.icon && <item.icon size={25} color="#344054" />}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Apa yang akan kamu pelajari?
            </h3>
            <div className="space-y-2">
              <Accordion multiple defaultIndex={0}>
                {subjectLearnList.map((item, index) => (
                  <AccordionItem
                    key={index}
                    className="rounded-lg"
                    activeAccordion="border-[#9B9DFD]"
                  >
                    <AccordionHeader
                      className="p-4"
                      activeHeader="bg-[#F5F5FF]"
                    >
                      <h5 className="text-lg font-medium">
                        Bagian {index + 1}. {item.title}
                      </h5>
                    </AccordionHeader>
                    <AccordionPanel>
                      <div className="py-3">
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
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Cerita yang sudah bergabung
            </h3>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              {JoinStorySection.map((item, index) => {
                return (
                  <div
                    className="grid gap-4 rounded-lg border px-8 py-6"
                    key={index}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar />
                      <div className="">
                        <h4 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-xs  text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <StarsIcon key={i} />
                          ))}
                        </div>
                        <p>{item.rate}/5</p>
                      </div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Pertanyaan Umum</h3>
            <div className="space-y-2">
              <Accordion multiple defaultIndex={0}>
                {FAQClass.map((item, index) => (
                  <AccordionItem
                    key={index}
                    className="rounded-lg"
                    activeAccordion="border-[#9B9DFD]"
                  >
                    <AccordionHeader
                      className="p-4"
                      activeHeader="bg-[#F5F5FF]"
                    >
                      <h5 className="text-lg font-medium">{item.title}</h5>
                    </AccordionHeader>
                    <AccordionPanel>
                      <div className="px-6 py-2">
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <div className="sticky top-28 -mt-80 hidden h-full max-h-[calc(100vh-9rem)] md:block">
          <div className="max-w-sm space-y-4 rounded-[20px] border bg-white p-4">
            <div className="relative h-[16rem] max-h-[16rem] w-full overflow-hidden rounded-t-lg">
              <Image
                quality={100}
                fill
                objectFit="cover"
                src="/cards-image/uxr.webp"
                alt="dasar-ux thumbnail"
              />
            </div>
            <h2 className="text-xl font-semibold">Dasar UX Research</h2>
            <div className="flex flex-col space-y-2 text-gray-700">
              <p>
                Dengan mengikuti program kelas ini, kamu berkesempatan untuk:
              </p>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="inline-block">
                    <CheckCircle2 color="#0F973D" size={20} />
                  </span>
                  <p>Belajar bagaimana riset UX dilakukan.</p>
                </li>
                <li className="flex gap-2">
                  <span className="inline-block">
                    <CheckCircle2 color="#0F973D" size={20} />
                  </span>
                  <p>Memiliki portofolio berdasarkan pekerjaan nyata.</p>
                </li>
                <li className="flex gap-2">
                  <span className="inline-block">
                    <CheckCircle2 color="#0F973D" size={20} />
                  </span>
                  <p>Belajar bagaimana riset UX dilakukan.</p>
                </li>
              </ul>
            </div>
            <Button asChild className="h-12 w-full">
              <Link href="dasar-ux-research/checkout">
                Beli Kelas • Rp 0 • (Gratis)
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DasarUxResearchPage;
