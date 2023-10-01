"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React from "react";

const listPage = {
  "hot-discussion": "Diskusi Topik Hangat",
  chat: "Chat",
};

function ForumLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-20 z-[49] flex justify-between border-b bg-white px-8 py-5">
        <h4 className="text-xl font-semibold">
          {listPage[`${pathname.split("/dashboard/forum/")[1]}`]}
        </h4>

        {!pathname.includes("chat") && <Button>New Post</Button>}
      </div>

      <div className="w-full bg-[#F9FAFB]">{children}</div>
    </>
  );
}

export default ForumLayout;
