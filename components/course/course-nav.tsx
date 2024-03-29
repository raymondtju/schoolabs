"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronLeftCircle,
  LayoutGrid,
  LogOut,
  Search,
  UserCircle2,
} from "lucide-react";
import Avatar from "../dashboard/avatar";
import { BellIcon } from "../icon/dashboard-icon";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function CourseNav() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between border-b bg-white px-8 py-5 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()}>
            <ChevronLeftCircle size={22} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">UX Research</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-content-center rounded-full bg-gray-100">
            <BellIcon />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {session?.user?.image && (
                <Avatar image={session.user.image} alt="avatar" />
                
              ) }
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[211px]" align="end">
              <DropdownMenuItem className="gap-3 text-gray-700">
                <LayoutGrid size={21} />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-3 text-gray-700">
                <UserCircle2 size={21} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-200"></DropdownMenuSeparator>
              <DropdownMenuItem className="gap-3 text-gray-700">
                <LogOut size={21} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

export default CourseNav;
