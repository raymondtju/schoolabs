"use client";

import BarChart from "@/components/icon/bar-chart";
import StarsIcon from "@/components/icon/stars-icon";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card";
import { BenefitJoinClass } from "@/types/data";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import { Ticket, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PaymentMethod = [
  {
    name: "Transfer Bank",
    icon: undefined,
  },
  {
    name: "E-Wallet",
    icon: undefined,
  },
  {
    name: "Transfer Bank",
    icon: undefined,
  },
  {
    name: "Transfer Bank",
    icon: undefined,
  },
];

function CheckoutPage() {
  const router = useRouter();

  return (
    <main className="container mt-20 flex flex-col md:flex-row items-start gap-6 md:px-20">
      <button onClick={() => router.back()}>
        {/* TO-DO: back icon */}
        back
      </button>

      <Card className="md:shadow-md md:sticky md:top-[6.5rem] md:z-10 max-w-[30rem] w-full overflow-hidden rounded-2xl border"> 
        <CardHeader className="h-[21rem] relative overflow-hidden">
          <Image
            fill
            objectFit="cover"
            src="/cards-image/uxr.webp"
            alt="dasar-ux"
            
          />
        </CardHeader>
        <CardContent className="px-4 py-6">
          <h1 className="text-2xl font-semibold">Dasar UX Research</h1>
        </CardContent>
        <CardFooter className="flex gap-2 md:gap-0 md:justify-between flex-col md:flex-row items-start md:items-center">
          <div className="text-sm flex items-center space-x-2">
            <StarsIcon size={16} />
            <p className="font-medium">
              4.9/5.0
            </p>
          </div>
          <div className="text-sm flex items-center space-x-2">
            <Users size={16} />
            <p className="font-semibold">50 siswa</p>
          </div>
          <div className="text-sm flex items-center space-x-2">
            <BarChart size={16} />
            <p className="font-semibold">Level Dasar-Pemula</p>
          </div>
        </CardFooter>
      </Card>

      <div className="flex-1 space-y-10">
        <div className="md:shadow-md space-y-4 rounded-2xl border p-5 md:p-10">
          <h3 className="text-2xl font-semibold">Keuntungan Bergabung</h3>
          <p>Dengan mengikuti program kelas ini, kamu akan mendapatkan:</p>
          <div className="space-y-4">
            <Accordion multiple defaultIndex={0}>
              {BenefitJoinClass.map((item, index) => (
                <AccordionItem
                className="rounded-lg md:shadow-md"
                  key={index}>
                  <AccordionHeader className="p-4">
                    <div className="flex gap-4 items-center">
                      <span className="hidden md:inline-block">
                        {item.icon && <item.icon />}
                      </span>
                      <h5 className="text-sm md:text-lg">{item.title}</h5>
                    </div>
                  </AccordionHeader>
                  <AccordionPanel>
                    <div className="text-gray-700 p-4 pt-0">
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="space-y-8 rounded-2xl border p-5 md:p-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Kode Promo</h3>
            <div className="flex items-center gap-4 rounded-lg border px-4 h-12">
              <Ticket color="#667185"/>
              <input
                placeholder="Masukkan kode promo"
                type="text"
                className="text-sm w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Detail Pembayaran</h3>
            <ul className="grid gap-3 text-sm">
              <li className="flex flex-col md:flex-row md:items-center justify-between">
                <p>Harga Kelas (termasuk PPN 11%)</p>
                <p className="font-semibold">Rp - (Gratis)</p>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between">
                <p>Diskon kode promo</p>
                <p className="font-semibold"> - </p>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between">
                <p>Total harga</p>
                <p className="font-semibold">Rp - (Gratis)</p>
              </li>
            </ul>
          </div>

          <Button className="h-12 w-full">Bayar Sekarang</Button>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
