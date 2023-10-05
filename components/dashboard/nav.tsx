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
import { LayoutGrid, LogOut, Search, UserCircle2 } from "lucide-react";
import Avatar from "./avatar";
import { BellIcon } from "../icon/dashboard-icon";

function DashbaordNav() {
  return (
    <div className="sticky top-0 z-50 flex justify-between border-b bg-white px-8 py-5">
      <div className="flex w-[28rem] items-center space-x-3 rounded-md bg-[#F9FAFB] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
        <Search size={18} />
        <input
          className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
          placeholder="Search here..."
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-100 grid place-content-center">
          <BellIcon/>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar image="/images/forumAvatar.png" alt="avatar"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-Inter w-[211px]" align="end">
            <DropdownMenuItem className="gap-3 text-gray-700">
              <LayoutGrid size={21}/>
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 text-gray-700">
              <UserCircle2 size={21}/>
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
  );
}

export default DashbaordNav;
