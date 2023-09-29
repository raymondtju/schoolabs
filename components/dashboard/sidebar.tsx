"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Book, Home, LucideIcon } from "lucide-react";
import { GroupChatsIcon, SingleChatIcon } from "../icon/dashboard-icon";

type DashboardMenuType = {
  name: string,
  path: string,
  icon: LucideIcon
};

type ForumMenuType = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  notif: number
} & Pick<DashboardMenuType, "name" | "path">;

const DashboardMenuList: DashboardMenuType[] = [
  {
    name: "Home",
    path: "/dashboard",
    icon: Home  
  },
  {
    name: "Kelas saya",
    path: "/dashboard/kelas-saya",
    icon: Book 
  },
];

const ForumMenuList: ForumMenuType[] = [
  {
    name: "Diskusi Topik Hangat",
    path: "/dashboard",
    icon: GroupChatsIcon,
    notif: 2

  },
  {
    name: "Chat",
    path: "/dashboard/kelas-saya",
    icon: SingleChatIcon,
    notif: 16
  }
]

function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="col-span-2 fixed top-0 h-screen space-y-3 border-r pt-5">
      <Image
        quality={100}
        src="/logo.svg"
        alt="icon"
        width={176}
        height={32}
        className="px-6 py-2"
      />

      <div className="space-y-5 px-2">
        <ul className="space-y-1">
          {DashboardMenuList.map((item, i) => {
            return (
              <Link
                href={item.path}
                className={cn(
                  "flex cursor-pointer font-medium items-center gap-3 px-4 py-3 text-[#344054]",
                  pathname === item.path
                    ? "rounded-lg bg-[#f5f5ff] font-semibold "
                    : "",
                )}
                key={i}
              >
                {/* TO-DO: ICONS */}
                <item.icon stroke={pathname === item.path ? "#4B4EFC" : "#344054"}/>
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </ul>
        <hr className="border-[#F0F2F5]"/>
        <div className="">
          <h6 className="px-4 text-sm font-medium text-[#98A2B3]">Forum</h6>
          <ul>
            {ForumMenuList.map((item, i) => {
              return (
                <Link
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3"
                  key={i}
                >
                  <item.icon/>
                  <span className="text-sm">{item.name}</span>
                  <span className="ml-auto bg-[#F0F2F5] text-xs font-medium rounded-full px-2 py-1">{item.notif}</span>
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
