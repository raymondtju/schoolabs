"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function GradePage() {
  return (
    <>
      <div className="sticky top-0 z-[49] flex justify-between border-b bg-white px-8 py-5">
        <h4 className="text-xl font-semibold">Grade</h4>
      </div>

      <div className="flex bg-[#F9FAFB] px-8 py-8">
        <section className="mx-auto">
          <div className="rounded-2xl border bg-white">
            <table className="table-auto">
              <thead className="border-b-2">
                <tr>
                  <th className="px-6 py-3 text-left">Dasar UX Research</th>
                  <th className="px-6 py-3 text-left">Tanggal</th>
                  <th className="px-6 py-3 text-left">Bobot</th>
                  <th className="px-6 py-3 text-left">Nilai</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y-2">
                {Array.from({ length: 10 }).map((_item, i) => (
                  <tr className="font-medium" key={i}>
                    <td className="px-6 py-6 text-center">
                      Kuis Pengenalan UX Research
                    </td>
                    <td className="px-6 py-6 text-center">
                      10 Sept 2023 14:32
                    </td>
                    <td className="px-6 py-6 text-center">10%</td>
                    <td className="px-6 py-6 text-center">100</td>
                    <td className="px-6 py-6 text-center">
                      <div className="rounded-3xl bg-green-100 px-3 py-0.5 text-green-800">
                        Lulus
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <Link href="#" className="text-primary">
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            <p>Selesaikan semua tugas dan dapatkan sertifikatmu</p>
            <Button>Lihat Sertifikat</Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default GradePage;
