"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const WhatYouGetSection = [
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
    icon: undefined,
  },
];
const JoinStorySection = [
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: "Materi yang diberikan mudah dicerna serta ada prakteknya",
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: "Materi yang diberikan mudah dicerna serta ada prakteknya",
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: "Materi yang diberikan mudah dicerna serta ada prakteknya",
  },
  {
    name: "Ariel Patapon",
    role: "UX Designer",
    rate: 5,
    comment: "Materi yang diberikan mudah dicerna serta ada prakteknya",
  },
];
const ClassListSection = [
  {
    title: "Penegenalan UX Research",
    subClass: [
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
    ],
  },
  {
    title: "Penegenalan UX Research",
    subClass: [
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
    ],
  },
  {
    title: "Penegenalan UX Research",
    subClass: [
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
    ],
  },
  {
    title: "Penegenalan UX Research",
    subClass: [
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
    ],
  },
  {
    title: "Penegenalan UX Research",
    subClass: [
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
      {
        title:
          "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
        icon: undefined,
      },
    ],
  },
];

// function Dropdown<T extends Record<string, any>>({ data }: {data: T}) {
//     const [classDropdownSelected, setClassDropdownSelected] = useState<number>(0);

//   return (
//     <>
//       {data.map((item: any, index) => (
//         <div
//           className="rounded-lg border"
//           key={index}
//           onClick={() => setClassDropdownSelected(index)}
//         >
//           <div className="flex justify-between p-4">
//             <h6 className="text-xl font-medium">
//               Bagian {index + 1}. {item.title}
//             </h6>
//             {/* TO-DO: icon dropdown */}
//           </div>
//           {index === classDropdownSelected && (
//             <div className="py-2">
//               {item.subClass.map((subItem, index) => (
//                 <div className="flex gap-[10px] px-6 py-2" key={index}>
//                   {/* TO-DO: icon per sub-video */}
//                   <p className="text-gray-700">{subItem.title}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </>
//   );
// }

function DasarUxResearchPage() {
  const [classDropdownSelected, setClassDropdownSelected] = useState<number>(0);

  return (
    <main className="relative">
      <Navbar />

      <section className="bg-gradient-to-b from-[#3571A7] to-[#4A8CC8] text-white">
        <div className="container py-14 md:px-20">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold">Dasar UX Research</h1>
            <p className="">
              Kursus yang dirancang untuk memberikan pemahaman mendalam tentang
              metodologi penelitian pengalaman pengguna (UX). Dalam kelas ini,
              peserta akan mempelajari konsep-konsep dasar dalam UX Research,
              termasuk pengumpulan data, analisis pengguna, dan teknik
              pengujian.{" "}
            </p>
            <div className="flex gap-6">
              <div>
                {/* TO-DO: add icon */}
                <span>4.9/5.0</span>
              </div>
              <div>
                {/* TO-DO: add icon */}
                <span>500 siswa</span>
              </div>
              <div>
                {/* TO-DO: add icon */}
                <span>Tingkat pemula</span>
              </div>
              <div>
                {/* TO-DO: add icon */}
                <span>Last Update 23 Mei 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container relative flex w-full flex-1 justify-between py-14 md:px-20">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
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
            <div className="grid w-full grid-cols-2 gap-4">
              {WhatYouGetSection.map((item, index) => {
                return (
                  <div className="flex gap-6 rounded-lg border p-6" key={index}>
                    <div>{/* TO-DO: add icon */}</div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              Apa yang akan kamu pelajari?
            </h3>
            <div className="space-y-2">
              {ClassListSection.map((item, index) => (
                <div className={cn("rounded-lg border")} key={index}>
                  <div
                    className={cn(
                      "flex cursor-pointer justify-between p-4",
                      classDropdownSelected === index && "bg-[#F0F2F5]",
                    )}
                    onClick={() => setClassDropdownSelected(index)}
                  >
                    <h6 className="text-xl font-medium">
                      Bagian {index + 1}. {item.title}
                    </h6>
                    {/* TO-DO: icon dropdown */}
                  </div>
                  {index === classDropdownSelected && (
                    <div className="py-2">
                      {item.subClass.map((subItem, index) => (
                        <div className="flex gap-[10px] px-6 py-2" key={index}>
                          {/* TO-DO: icon per sub-video */}
                          <p className="text-gray-700">{subItem.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              Cerita yang sudah bergabung
            </h3>
            <div className="grid w-full grid-cols-2 gap-4">
              {JoinStorySection.map((item, index) => {
                return (
                  <div className="srounded-lg border px-8 py-6" key={index}>
                    <div className="flex items-center gap-3">
                      <div></div>
                      <div className="">
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <div>
                      <p>{item.rate}/5</p>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Pertanyaan Umum</h3>
            {/* TO-DO: pertanyaan umum dropdown */}
          </div>
        </div>

        <div className="sticky top-6 -mt-72 block h-full max-h-[calc(100vh-9rem)]">
          <div className="max-w-sm space-y-4 rounded-[20px] border bg-white p-4">
            <img
              src="/cards-image/dasar-ux.png"
              alt="dasar-ux thumbnail"
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Dasar UX Research</h2>
            <div className="text-gray-700">
              <p>
                Dengan mengikuti program kelas ini, kamu berkesempatan untuk:
              </p>
              <ul>
                <li>Belajar bagaimana riset UX dilakukan.</li>
                <li>Memiliki portofolio berdasarkan pekerjaan nyata.</li>
                <li>Belajar bagaimana riset UX dilakukan.</li>
              </ul>
            </div>
            <Button className="h-full w-full">
              Beli Kelas • Rp 0 • (Gratis)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DasarUxResearchPage;
