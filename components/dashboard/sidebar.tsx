"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DashboardMenuList = [
  {
    name: "Home",
    path: "/dashboard",
    icon: undefined,
  },
  {
    name: "Kelas saya",
    path: "/dashboard/kelas-saya",
    icon: undefined,
  },
];

function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen space-y-3 border-r pt-5">
      <Image
        quality={100}
        src="/logo.svg"
        alt="icon"
        width={176}
        height={32}
        className="px-6 py-2"
      />

      <div className="space-y-5 px-2">
        <ul className="space-y-1 ">
          {DashboardMenuList.map((item, i) => {
            return (
              <Link
                href={item.path}
                className={cn(
                  "flex cursor-pointer items-center gap-3 px-4 py-3",
                  pathname === item.path
                    ? "rounded-lg bg-[#f5f5ff] font-semibold "
                    : "",
                )}
                key={i}
              >
                {/* TO-DO: ICONS */}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </ul>
        <div className="">
          <h6 className="px-4">Forum </h6>
          <ul>
            {DashboardMenuList.map((item, i) => {
              return (
                <Link
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3"
                  key={i}
                >
                  {/* TO-DO: ICONS */}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
