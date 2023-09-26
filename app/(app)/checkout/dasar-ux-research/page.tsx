"use client";

import { Button } from "@/components/ui/button";
import { VercelLogoIcon } from "@radix-ui/react-icons";
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
const Benefit = [
  {
    title: "Forum dan Grup Privat",
    description:
      "Forum memungkinkan pertukaran informasi dan pengalaman antara anggota komunitas dengan fokus pada topik-topik dikelas yang kalian pilih, sementara grup privat menawarkan keamanan tinggi untuk diskusi atau kolaborasi yang lebih rahasia 1-on-1 bersama mentor berpengalaman.",
    icon: undefined,
  },
  {
    title: "Forum dan Grup Privat",
    description:
      "Forum memungkinkan pertukaran informasi dan pengalaman antara anggota komunitas dengan fokus pada topik-topik dikelas yang kalian pilih, sementara grup privat menawarkan keamanan tinggi untuk diskusi atau kolaborasi yang lebih rahasia 1-on-1 bersama mentor berpengalaman.",
    icon: undefined,
  },
  {
    title: "Forum dan Grup Privat",
    description:
      "Forum memungkinkan pertukaran informasi dan pengalaman antara anggota komunitas dengan fokus pada topik-topik dikelas yang kalian pilih, sementara grup privat menawarkan keamanan tinggi untuk diskusi atau kolaborasi yang lebih rahasia 1-on-1 bersama mentor berpengalaman.",
    icon: undefined,
  },
];

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-bold">{children}</h1>;
}

function CheckoutPage() {
  const router = useRouter();
  const [dropdownBenefit, setDropdownBenefit] = useState<Boolean[]>(
    Array(Benefit.length).fill(false),
  );

  return (
    <main className="container mt-20 flex items-start gap-6 md:px-20">
      <button onClick={() => router.back()}>
        {/* TO-DO: back icon */}
        back
      </button>

      <div className="overflow-hidden rounded-2xl border">
        <img
          src="/cards-image/dasar-ux.png"
          className="w-[480px]"
          alt="dasar-ux"
        />
        <div className="px-4 py-8">
          <CardTitle>Dasar UX Research</CardTitle>
          <div className="mt-10 flex justify-between text-sm font-semibold">
            <div>
              {/* TO-DO: icons */}
              <span>4.9/5.0</span>
            </div>
            <div>
              {/* TO-DO: icons */}
              <span>50 siswa</span>
            </div>
            <div>
              {/* TO-DO: icons */}
              <span>Level Dasar - Pemula</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        <div className="space-y-4 rounded-2xl border p-10">
          <CardTitle>Keuntungan Bergabung</CardTitle>
          <p>Dengan mengikuti program kelas ini, kamu akan mendapatkan:</p>
          <div className="space-y-4">
            {Benefit.map((item, i) => {
              return (
                <div className="rounded-lg border" key={i}>
                  <div
                    className="flex cursor-pointer gap-4 p-4"
                    onClick={() => {
                      setDropdownBenefit((prevDropdownState) => {
                        const newDropdownState = [...prevDropdownState];
                        newDropdownState[i] = !newDropdownState[i];
                        return newDropdownState;
                      });
                    }}
                  >
                    {/* TO-DO: icon */}
                    <h3>{item.title}</h3>
                  </div>
                  {dropdownBenefit[i] && (
                    <div className="p-4 pt-0">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8 rounded-2xl border p-10">
          <div className="space-y-4">
            <CardTitle>Metode Pembayaran</CardTitle>
            <div className="flex gap-5">
              {PaymentMethod.map((item, i) => (
                <div key={i} className="flex gap-2 rounded-lg border px-2 py-1">
                  {/* TO-DO: icon */}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <CardTitle>Kode Promo</CardTitle>
            <div className="flex gap-4 rounded-lg border px-4 py-[18px]">
              {/* TO-DO: input icon */}
              <input
                placeholder="Masukkan kode promo"
                type="text"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-4">
            <CardTitle>Detail Pembayaran</CardTitle>
            <ul>
              <li className="flex justify-between">
                <span>Harga Kelas (termasuk PPN 11%)</span>
                <span>Rp - (Gratis)</span>
              </li>
              <li className="flex justify-between">
                <span>Harga Kelas (termasuk PPN 11%)</span>
                <span>Rp - (Gratis)</span>
              </li>
              <li className="flex justify-between">
                <span>Harga Kelas (termasuk PPN 11%)</span>
                <span>Rp - (Gratis)</span>
              </li>
            </ul>
          </div>

          <Button className="w-full">Bayar Sekarang</Button>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
