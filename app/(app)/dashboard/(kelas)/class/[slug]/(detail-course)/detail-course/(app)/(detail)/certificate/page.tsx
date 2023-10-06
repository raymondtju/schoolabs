"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function CertificateClassPage() {
  return (
    <>
      <div className="grid pl-[26rem] pr-20">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">
            Selamat atas Kesuksesan Anda dalam Menyelesaikan Kursus UX Research
            Kami!
          </h1>
          <p>
            Selamat, kamu adalah peserta yang telah berhasil menyelesaikan
            kursus UX Research kami! Kami sangat menghargai komitmen Anda dalam
            mengembangkan keterampilan dan pengetahuan Anda dalam bidang
            penelitian pengguna. Kami dengan bangga memberikan sertifikat
            sebagai pengakuan atas pencapaian Anda.
          </p>
          <img src="/images/e-cert.png" className="mx-auto" />

          <hr className="h-0.5 bg-black"></hr>

          <div className="flex justify-center gap-4">
            <Button variant="secondary">DOWNLOAD SERTIFIKAT</Button>
            <Button>SHARE SERTIFIKAT</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateClassPage;
