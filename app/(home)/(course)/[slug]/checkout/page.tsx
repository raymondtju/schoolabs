"use client";

import BarChart from "@/components/icon/bar-chart";
import StarsIcon from "@/components/icon/stars-icon";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BenefitJoinClass } from "@/types/data";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import { Ticket, Users } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSnapToken } from "./action";
import { useSession } from "next-auth/react";

declare global {
  interface Window {
    snap: any;
  }
}

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
  const [snapToken, setSnapToken] = useState("");

  const session = useSession();
  if (!session.data) return router.replace("/login");

  return (
    <main className="container mt-20 flex flex-col items-start gap-6 md:flex-row md:px-20">
      <button onClick={() => router.back()}>
        {/* TO-DO: back icon */}
        back
      </button>

      <Card className="w-full max-w-[30rem] overflow-hidden rounded-2xl border md:sticky md:top-[6.5rem] md:z-10 md:shadow-md">
        <CardHeader className="relative h-[21rem] overflow-hidden">
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
        <CardFooter className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center space-x-2 text-sm">
            <StarsIcon size={16} />
            <p className="font-medium">4.9/5.0</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users size={16} />
            <p className="font-semibold">50 siswa</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <BarChart size={16} />
            <p className="font-semibold">Level Dasar-Pemula</p>
          </div>
        </CardFooter>
      </Card>

      <div className="flex-1 space-y-10">
        <div className="space-y-4 rounded-2xl border p-5 md:p-10 md:shadow-md">
          <h3 className="text-2xl font-semibold">Keuntungan Bergabung</h3>
          <p>Dengan mengikuti program kelas ini, kamu akan mendapatkan:</p>
          <div className="space-y-4">
            <Accordion multiple defaultIndex={0}>
              {BenefitJoinClass.map((item, index) => (
                <AccordionItem className="rounded-lg md:shadow-md" key={index}>
                  <AccordionHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <span className="hidden md:inline-block">
                        {item.icon && <item.icon />}
                      </span>
                      <h5 className="text-sm md:text-lg">{item.title}</h5>
                    </div>
                  </AccordionHeader>
                  <AccordionPanel>
                    <div className="p-4 pt-0 text-gray-700">
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
            <div className="flex h-12 items-center gap-4 rounded-lg border px-4">
              <Ticket color="#667185" />
              <input
                placeholder="Masukkan kode promo"
                type="text"
                className="w-full text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Detail Pembayaran</h3>
            <ul className="grid gap-3 text-sm">
              <li className="flex flex-col justify-between md:flex-row md:items-center">
                <p>Harga Kelas (termasuk PPN 11%)</p>
                <p className="font-semibold">Rp - (Gratis)</p>
              </li>
              <li className="flex flex-col justify-between md:flex-row md:items-center">
                <p>Diskon kode promo</p>
                <p className="font-semibold"> - </p>
              </li>
              <li className="flex flex-col justify-between md:flex-row md:items-center">
                <p>Total harga</p>
                <p className="font-semibold">Rp - (Gratis)</p>
              </li>
            </ul>
          </div>

          <Button
            className="h-12 w-full"
            onClick={async () => {
              const snap = await getSnapToken();
              if (snap.token) {
                window.snap.pay(snap.token, {
                  onSuccess: () => {
                    console.log("success");
                    router.push("/dashboard");
                  },
                  onPending: (result: any) => {
                    console.log("pending transaction", result);
                  },
                  onError: (result: any) => {
                    console.log("error transaction", result);
                  },
                  onClose: () => {
                    console.log(
                      "customer close the popup window without the finishing the payment",
                    );
                  },
                });
              }
            }}
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
