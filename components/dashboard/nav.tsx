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
import { Search } from "lucide-react";

function DashbaordNav() {
  return (
    <div className="sticky top-0 z-50 flex justify-between border-b bg-white px-8 py-5">
      <div className="flex w-[28rem] items-center space-x-2 rounded-md border border-gray-300 bg-[#F0F2F5] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
        <Search size={18} />
        <input
          className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
          placeholder="Search here..."
        />
      </div>

      <div className="flex items-center gap-3">
        <div></div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200"></DropdownMenuSeparator>
            <DropdownMenuItem>Loogut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default DashbaordNav;
