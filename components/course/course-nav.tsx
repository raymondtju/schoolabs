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
import { ChevronLeftCircle, LayoutGrid, LogOut, Search, UserCircle2 } from "lucide-react";
import Avatar from "../dashboard/avatar";
import { BellIcon } from "../icon/dashboard-icon"
import { useRouter } from "next/navigation";

function CourseNav() {
   const router = useRouter();
   return (
      <>
         <div className="shadow-sm sticky top-0 z-50 flex justify-between border-b b px-8 py-5">g-white
            <div className="flex items-center gap-4">
               <button onClick={() => router.back()}>
                  <ChevronLeftCircle size={22} />
               </button>
               <h1 className="text-2xl font-bold text-gray-900">UX Research</h1>
            </div>

            <div className="flex items-center gap-4">
               <div className="h-10 w-10 rounded-full bg-gray-100 grid place-content-center">
                  <BellIcon />
               </div>
               <DropdownMenu>
                  <DropdownMenuTrigger>
                     <Avatar image="/images/forumAvatar.png" alt="avatar" />
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
   )
}

export default CourseNav;