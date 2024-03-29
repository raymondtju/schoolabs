"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid, LogOut, Menu, Search, UserCircle2 } from "lucide-react";
import Avatar from "./avatar";
import { BellIcon } from "../icon/dashboard-icon";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CourseSidebar from "../course/course-sidebar";
import { ClassSidebar, DashboardSidebar } from "./sidebar";
import Link from "next/link";

function getCurrentDimension() {
  return {
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  };
}

function DashbaordNav() {
  const { data: session } = useSession();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(getCurrentDimension());
      };
      window.addEventListener("resize", updateDimension);

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, []);

  const handleSignOut = async () => {
    const res = await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    router.replace(`${res.url ?? ""}`);
  };

  return (
    <div className="sticky top-0 z-50 border-b bg-white ">
      <div className=" container flex items-center justify-between py-5">
        <Sheet open={screenSize.width > 1024 ? false : undefined}>
          <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
            <Menu className="block lg:hidden" />
          </SheetTrigger>
          <SheetContent className="block lg:hidden" side="left">
            {pathname === "/dashboard/class/dasar-ux-research" ? (
              <ClassSidebar />
            ) : (
                <DashboardSidebar/>
            )}
          </SheetContent>
        </Sheet>

        <div className="hidden w-[28rem] items-center space-x-3 rounded-md bg-[#F9FAFB] px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:flex ">
          <Search size={18} />
          <input
            className="h-7 w-full border-none bg-transparent text-sm shadow-none focus:outline-none"
            placeholder="Search here..."
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="cursor-pointer grid h-10 w-10 place-content-center rounded-full bg-gray-100">
            <BellIcon />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {session?.user?.image && (
                <Avatar
                  className="border"
                  image={session.user.image}
                  alt="avatar"
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[211px] font-Inter" align="end">
              <DropdownMenuItem asChild className="gap-3 text-gray-700">
                <Link href="/dashboard">
                  <LayoutGrid size={21} />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-3 text-gray-700">
                <UserCircle2 size={21} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-200"></DropdownMenuSeparator>
              <DropdownMenuItem
                onClick={handleSignOut}
                className="gap-3 text-gray-700"
              >
                <LogOut size={21} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default DashbaordNav;
