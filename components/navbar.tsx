"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CountDown } from "@/lib/countdown";
import Link from "next/link";
import { Search } from "lucide-react";
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-24 items-center justify-center bg-[#FFF] shadow">
      <div className="container flex items-center justify-between md:px-20">
        <div className="col-span-3 flex items-center space-x-12">
          <Link href="/">
            <Image
              quality={100}
              src="/logo.svg"
              alt="icon"
              width={176}
              height={32}
            />
          </Link>
          <div className="flex w-[28rem] items-center space-x-2 rounded-md border border-gray-300 bg-[#F0F2F5] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
            <Search size={18} />
            <input
              className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
              placeholder="Search here..."
            />
          </div>
        </div>
        <ul className="col-span-1 flex items-center justify-end gap-8">
          <li className="text-base font-semibold">Kelas</li>
          <li className="text-base font-semibold">
            <Link href="/about-us">Tentang Kami</Link>
          </li>
          <li className="h-12 w-20">
            <Link href="/login">
              <Button className="h-full w-full">Login</Button>
            </Link>
          </li>
        </ul>
        {/* <div className="flex justify-between items-center">
          </div> */}
      </div>
    </nav>
  );
}

export function PromotionFlyer() {
  const [mounted, setMounted] = useState(false);
  const [close, setClose] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(
    CountDown("2023-09-23T19:23:01.000Z"),
  );

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(CountDown("2023-09-23T19:23:01.000Z"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!close && (
        <div className="bg-[#102333] py-6">
          <div className="container relative flex items-center justify-between text-[#F5F5FF] lg:px-20">
            <div className="flex max-w-3xl items-center justify-center gap-4">
              <Image
                src="/images/megaphone.webp"
                alt="Megaphone"
                width={100}
                height={100}
              />
              <h1 className="text-3xl font-bold">
                Dapatkan promo Rp 50.000 per kelas dengan menggunakan kode
                “BARUJOIN”
              </h1>
            </div>
            <div className="mr-4 flex flex-col gap-1">
              <p className="text-base font-medium">Waktu tersisa</p>
              <div
                className="flex h-12 items-center gap-1 rounded-lg bg-[#4490D4] px-4 text-3xl font-semibold tracking-widest"
                suppressHydrationWarning
              >
                <span>{timeLeft.hours}</span>
                <span>:</span>
                <span>{timeLeft.minutes}</span>
                <span>:</span>
                <span>{timeLeft.seconds}</span>
              </div>
            </div>
            <Cross1Icon
              onClick={() => setClose(true)}
              className="absolute right-10 top-0 scale-125 cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
}
