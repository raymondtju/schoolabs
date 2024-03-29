"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CountDown } from "@/lib/countdown";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useSession } from "next-auth/react";
export function Navbar() {
  const [animation, setAnimation] = useState("closed");

  const onClick = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };

  const topBorderVariants: Variants = {
    open: {
      translateY: 5,
      rotate: 45,
    },
    closed: {
      translateY: 0,
      rotate: 0,
    },
  };

  const midBorderVariants: Variants = {
    open: {
      translateX: 45,
      opacity: 0,
    },
    closed: {
      translateX: 0,
      opacity: 1,
    },
  };

  const bottomBorderVariants: Variants = {
    open: {
      translateY: -11,
      rotate: -45,
    },
    closed: {
      translateY: 0,
      rotate: 0,
    },
  };

  const session = useSession();

  return (
    <nav className=" sticky top-0 z-50 flex h-24 items-center justify-center bg-[#FFF] shadow">
      <div className="container flex items-center justify-between md:px-20">
        <div className="col-span-3 flex items-center space-x-12">
          <Link href="/">
            <Image
              quality={100}
              src="/logo.png"
              alt="icon"
              width={176}
              height={32}
            />
          </Link>
          <div className="hidden w-[28rem] items-center space-x-2 rounded-md border border-gray-300 bg-[#F0F2F5] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring lg:flex ">
            <Search size={18} />
            <input
              className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div>
          {session.data ? (
            <Button asChild className="h-full w-full">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
              <Button asChild className="h-[3.25rem] w-20">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
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
      setTimeLeft(CountDown("2023-10-12T19:23:01.000Z"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!close && (
        <div className="bg-[#102333] py-4 relative">
          <div className="max-w-[25rem] md:max-w-none container flex flex-col justify-between gap-2 text-[#F5F5FF] lg:flex-row lg:items-center lg:px-20">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/megaphone.webp"
                alt="Megaphone"
                width={100}
                height={100}
              />
              <h1 className="text-base font-semibold lg:text-2xl">
                Dapatkan promo Rp 50.000 dengan menggunakan kode “ BARUJOIN”
              </h1>
            </div>
            <div className="mr-4 flex flex-col gap-1">
              <p className="hidden md:block text-base font-medium">Waktu tersisa</p>
              <div
                className="flex h-12 items-center justify-center md:justify-start gap-1 rounded-lg bg-[#4490D4] px-4 text-xl font-semibold tracking-widest md:text-3xl"
                suppressHydrationWarning
              >
                <span>{timeLeft.hours}</span>
                <span>:</span>
                <span>{timeLeft.minutes}</span>
                <span>:</span>
                <span>{timeLeft.seconds}</span>
              </div>
            </div>
          </div>
            <Cross1Icon
              onClick={() => setClose(true)}
              className="absolute text-white right-[1.5rem] top-[16px] scale-125 cursor-pointer"
            />
        </div>
      )}
    </>
  );
}
