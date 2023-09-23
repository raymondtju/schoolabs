"use client";

import { MagnifyingGlassIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { CountDown } from "@/lib/countdown";
import Link from "next/link";
export function Navbar() {

  return (
    <nav className="bg-[#FFF] shadow-md h-24 flex justify-center items-center" >
      <div className="container md:px-20 grid grid-cols-4">
        <div className="col-span-3 gap-8 flex items-center">
          <Image src="/logo.svg" alt="icon" width={280} height={280} />
          <div className="w-[28rem] bg-[#F0F2F5] flex items-center border border-gray-300 rounded-md transition-colors px-3 py-1 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
            <input className="w-full focus:outline-none bg-transparent shadow-none border-none" placeholder="Search here..." />
            <MagnifyingGlassIcon />
          </div>
        </div>
        <ul className="col-span-1 flex justify-end gap-8 items-center">
          <li className="font-semibold">Kelas</li>
          <li className="font-semibold">Tentang Kami</li>
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
  const [mounted, setMounted] = useState(false)
  const [close, setClose] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(CountDown("2023-09-23T19:23:01.000Z"));

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(CountDown("2023-09-23T19:23:01.000Z"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <>
      {!close && (
        <div className="bg-[#102333] py-6">
          <div className="relative container lg:px-20 flex items-center justify-between text-[#F5F5FF]">
            <div className="max-w-3xl flex gap-4 justify-center items-center">
              <Image src="/images/megaphone.webp" alt="Megaphone" width={100} height={100} />
              <h1 className="text-3xl font-bold">Dapatkan promo Rp 50.000 per kelas dengan menggunakan kode “BARUJOIN”</h1>
            </div>
            <div className="mr-4 flex flex-col gap-1">
              <p className="text-base font-medium">Waktu tersisa</p>
              <div className="h-12 px-4 bg-[#4490D4] rounded-lg flex gap-1 items-center text-3xl font-semibold tracking-widest" suppressHydrationWarning>

                <span>{timeLeft.hours}</span>
                <span>:</span>
                <span>{timeLeft.minutes}</span>
                <span>:</span>
                <span>{timeLeft.seconds}</span>
              </div>
            </div>
            <Cross1Icon
              onClick={() => setClose(true)}
              className="scale-125 cursor-pointer absolute right-10 top-0"
            />
          </div>
        </div>
      )}
    </>
  );
}

