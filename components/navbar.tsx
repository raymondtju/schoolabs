"use client";

import { MagnifyingGlassIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export function LandingPageNavbar() {
  return (
    <nav className="flex gap-4 bg-white py-6 max-w-7xl mx-auto">
      {/* logo */}
      <img src="./logo.svg" alt="logo" />

      {/* searchbar and navitems */}
      <div className="flex justify-between flex-1 items-center">
        <div className="flex flex-row gap-2 items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-md w-5/12">
          <MagnifyingGlassIcon className="scale-125" />
          <input
            type="text"
            className="outline-none focus:outline-none bg-transparent w-full"
            placeholder="Search here..."
          />
        </div>
        <ul className="flex flex-row gap-8">
          <li>Kelas</li>
          <li>Tentang Kami</li>
          <li>Login</li>
        </ul>
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
