"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Trophy, Link as Chain, Menu } from "lucide-react";
import {
  ClassIcon,
  GroupChatsIcon,
  HomeIcon,
  SingleChatIcon,
} from "../icon/dashboard-icon";
import { SubjectNavigation } from "@/types/data";

type DashboardMenuType = {
  name: string;
  path: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

type ForumMenuType = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  notif: number;
} & DashboardMenuType;

const DashboardMenuList: DashboardMenuType[] = [
  {
    name: "Home",
    path: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Kelas saya",
    path: "/dashboard/kelas-saya",
    icon: ClassIcon,
  },
];

const ForumMenuList: ForumMenuType[] = [
  {
    name: "Diskusi Topik Hangat",
    path: "/dashboard/forum/hot-discussion",
    icon: GroupChatsIcon,
    notif: 2,
  },
  {
    name: "Chat",
    path: "/dashboard/forum/chat",
    icon: SingleChatIcon,
    notif: 16,
  },
];

export function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 z-[60] hidden h-screen w-full max-w-[280px] space-y-3 overflow-y-auto border-r bg-[#FFF] pb-7 pt-5 lg:block">
      <Image
        quality={100}
        src="/logo.png"
        alt="icon"
        width={176}
        height={32}
        className="cursor-pointer px-6 py-2"
        onClick={() => router.push("/")}
      />
      {/* <Menu /> */}
      <div className="space-y-5 px-2">
        <ul className="space-y-1">
          {DashboardMenuList.map((item, i) => {
            return (
              <Link
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 font-medium text-[#344054]",
                  pathname === item.path
                    ? "rounded-lg bg-[#f5f5ff] font-semibold "
                    : "",
                )}
                key={i}
              >
                <item.icon
                  stroke={pathname === item.path ? "#4B4EFC" : "#344054"}
                />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </ul>
        <hr className="border-gray-100" />
        <div>
          <h6 className="text-sm font-medium text-[#98A2B3]">Forum</h6>
          <ul>
            {ForumMenuList.map((item, i) => {
              return (
                <Link
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 font-medium text-[#344054]",
                    pathname === item.path
                      ? "rounded-lg bg-[#f5f5ff] font-semibold "
                      : "",
                  )}
                  key={i}
                >
                  <item.icon
                    stroke={pathname === item.path ? "#4B4EFC" : "#344054"}
                  />
                  <span className="text-sm">{item.name}</span>
                  <span className="ml-auto rounded-full bg-[#F0F2F5] px-2 py-1 text-xs font-medium">
                    {item.notif}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ClassSidebar() {
  return (
    <div className="fixed top-0 z-[60] h-screen w-full max-w-[295px] md:max-w-[360px] lg:max-w-[280px] space-y-3 overflow-y-auto border-r bg-[#FFF] pb-7 pt-5 lg:block">
      <Image
        quality={100}
        src="/logo.svg"
        alt="icon"
        width={176}
        height={32}
        className="px-6 py-2"
      />
      <div className="grid gap-3 px-2">
        <h6 className="text-sm font-medium text-[#98A2B3]">Materi Kelas</h6>
        <ul className="grid gap-1">
          {SubjectNavigation.map((item, i) => {
            return (
              <li key={i}>
                <Link className="flex gap-3 px-2 py-3" href={item.path}>
                  <span className="inline-block h-5 w-5">
                    <item.icon />
                  </span>
                  <span className="text-sm">{item.title}</span>
                  {item.progress && (
                    <span className="ml-auto h-fit rounded-full bg-[#F0F2F5] px-2 py-1 text-xs font-medium">
                      {item.progress?.current}/{item.progress.max}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr className="border-gray-100" />
        <ul className="grid gap-1">
          <li>
            <Link
              href="/dashboard/class/dasar-ux-research/grade"
              className="flex gap-3 px-2 py-3 text-sm"
            >
              <Trophy size={20} />
              Grade
            </Link>
          </li>
          <li>
            <Link href="/dashboard/class/dasar-ux-research/forum" className="flex gap-3 px-2 py-3 text-sm">
              <SingleChatIcon stroke="black" />
              Diskusi
            </Link>
          </li>
        </ul>

        <hr className="border-gray-100" />
        <h6 className="text-sm font-medium text-gray-400">Resources</h6>
        <ul className="grid gap-1">
          <li>
            <Link href="#" className="flex gap-3 px-2 py-3 text-sm">
              <span className="inline-block h-5 w-5">
                <Chain size={20} />
              </span>
              Template pertanyaan interview
            </Link>
          </li>
          <li>
            <Link href="#" className="flex gap-3 px-2 py-3 text-sm">
              <span className="inline-block h-5 w-5">
                <Chain size={20} />
              </span>
              Template persona
            </Link>
          </li>
          <li>
            <Link href="#" className="flex gap-3 px-2 py-3 text-sm">
              <span className="inline-block h-5 w-5">
                <Chain size={20} />
              </span>
              Template pertanyaan usability testing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
