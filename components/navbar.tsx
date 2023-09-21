"use client";

import { MagnifyingGlassIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export function Navbar() {
  return (
    <nav className="shadow-md h-24 flex justify-center items-center">
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
            <Button className="h-full w-full">Login</Button>
          </li>

        </ul>
        {/* <div className="flex justify-between items-center">
          </div> */}
      </div>
    </nav>
  );
}

export function PromotionFlyer() {
  const [close, setClose] = useState<boolean>(false);

  return (
    <>
      {!close && (
        <div className="bg-blue-950 text-white relative">
          <div className="absolute right-4 top-4">
            <Cross1Icon
              className="scale-125 cursor-pointer"
              onClick={() => setClose(true)}
            />
          </div>
          <div className="flex justify-between max-w-7xl mx-auto py-8">
            <div className="flex gap-8 items-center">
              <img src="./images/megaphone.svg" alt="megaphone" />

              <p className="text-2xl font-semibold max-w-xl">
                Dapatkan promo Rp 50.000 per kelas dengan menggunakan kode{" "}
                <span className="font-bold">“ BARUJOIN”</span>
              </p>
            </div>

            <div>
              <p>Waktu tersisa</p>

              <div className="bg-sky-500 px-6 py-1 rounded-lg mt-px">
                <span className="text-3xl font-semibold tracking-widest">
                  19:23:01
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
