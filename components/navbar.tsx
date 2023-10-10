"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CountDown } from "@/lib/countdown";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion, type Variants } from 'framer-motion';
export function Navbar() {

  const [animation, setAnimation] = useState('closed')

  const onClick = () => {
    setAnimation('moving');
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed")
    }, 200)
  }

  const topBorderVariants: Variants = {
    open: {
      translateY: 5,
      rotate: 45
    },
    closed: {
      translateY: 0,
      rotate: 0
    }
  }

  const midBorderVariants: Variants = {
    open: {
      translateX: 45,
      opacity: 0
    },
    closed: {
      translateX: 0,
      opacity: 1
    }
  }

  const bottomBorderVariants: Variants = {
    open: {
      translateY: -11,
      rotate: -45
    },
    closed: {
      translateY: 0,
      rotate: 0
    }
  }

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
          <div className="hidden lg:flex w-[28rem] items-center space-x-2 rounded-md border border-gray-300 bg-[#F0F2F5] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
            <Search size={18} />
            <input
              className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
              placeholder="Search here..."
            />
          </div>

        </div>
        <ul className="hidden lg:flex col-span-1 items-center justify-end gap-8">
          {/* <li className="text-base font-semibold">
            <Link href="/course">
              Kelas
            </Link>
          </li>
          <li className="text-base font-semibold">
            <Link href="/about-us">Tentang Kami</Link>
          </li> */}
          <li className="h-[3.25rem] w-20">
            <Button asChild className="h-full w-full">
              <Link href="/login">
                Login
              </Link>
            </Button>
          </li>
        </ul>
        <button type="submit" className="relative block lg:hidden" onClick={onClick}>
          <motion.span
            animate={animation}
            variants={topBorderVariants}
            className='w-[30px] h-[4px] block bg-black rounded my-1' />
          <motion.span

            animate={animation}
            variants={midBorderVariants}
            className='w-[30px] h-[4px] block bg-black rounded my-1' />
          <motion.span
            animate={animation}
            variants={bottomBorderVariants}
            className='w-[30px] h-[4px] block bg-black rounded my-1' />
        </button>
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
        <div className="bg-[#102333] py-4">
          <div className="container relative flex flex-col gap-2 lg:flex-row lg:items-center justify-between text-[#F5F5FF] lg:px-20">
            <div className="flex items-center justify-center gap-4">
              <Image
                className="hidden md:block"
                src="/images/megaphone.webp"
                alt="Megaphone"
                width={100}
                height={100}
              />
              <h1 className="text-base lg:text-2xl font-semibold">
                Dapatkan promo Rp 50.000 dengan menggunakan kode “ BARUJOIN”
              </h1>
            </div>
            <div className="mr-4 flex flex-col gap-1">
              <p className="text-base font-medium">Waktu tersisa</p>
              <div
                className="flex h-12 items-center gap-1 rounded-lg bg-[#4490D4] px-4 text-base md:text-3xl font-semibold tracking-widest"
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
