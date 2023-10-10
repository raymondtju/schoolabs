"use client"
import Avatar from "@/components/dashboard/avatar";
import { Separator } from "@/components/ui/separator";
import { Image, Paperclip, Play, Send, Smile } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

function ChatPage() {
  const { data: session } = useSession();
  return (
    <section>
      <div className="container pb-[10rem] w-full space-y-4 bg-white py-8 md:px-8">
        <div className="relative flex max-w-full items-center space-x-2">
          <Separator />
          <span className=" absolute right-1/2 -translate-x-1/2 bg-white px-2 text-xs text-muted-foreground">
            SEP 01
          </span>
        </div>

        {Array.from({ length: 3 }).map((_item, i) => (
          <div className="grid grid-cols-[40px_auto] gap-3 py-2" key={i}>
            <Avatar image="/images/forumAvatar.png" alt="avatar"/>
            <div className="space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium">Aspira Yuriza</h4>
                <span className="ml-4 text-xs">08:15 PM</span>
              </div>
              <p className="text-xs md:text-base">
                Hallo teman teman, semoga semua dalam keadaan sehat ya, amin, Oh
                ya, mohon maaf berhubung aku masih belajar, izin mau nanya, 2
                orang yang berkolaborasi dalam pembuatan design system itu siapa
                ya? UI design dan Front End Developer? Mohon info nya ya,
                terimakasih 🙏.
              </p>
              <div className="flex items-center gap-1 p-1">
                <div className="flex gap-2">
                  <Avatar className="w-6 h-6" image="/images/forumAvatar.png" alt="Avatar"/>
                  <Avatar className="w-6 h-6" image="/images/forumAvatar.png" alt="Avatar"/>
                  <p className="font-medium text-gray-900">2 Balasan</p>
                </div>
                <p className="ml-2 truncate text-xs w-[5rem] md:w-[10rem] text-gray-400">
                  Balasan terakhir 2 minggu yang lalu
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="relative flex max-w-full items-center space-x-2">
          <Separator />
          <span className=" absolute right-1/2 -translate-x-1/2 bg-white px-2 text-xs text-muted-foreground">
            SEP 03
          </span>
        </div>

        {Array.from({ length: 3 }).map((_item, i) => (
          <div className="grid grid-cols-[40px_auto] gap-3 py-2" key={i}>
            <Avatar image="/images/forumAvatar.png" alt="avatar" />
            <div className="space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium">Aspira Yuriza</h4>
                <span className="ml-4 text-xs">08:15 PM</span>
              </div>
              <p className="text-xs md:text-base">
                Hallo teman teman, semoga semua dalam keadaan sehat ya, amin, Oh
                ya, mohon maaf berhubung aku masih belajar, izin mau nanya, 2
                orang yang berkolaborasi dalam pembuatan design system itu siapa
                ya? UI design dan Front End Developer? Mohon info nya ya,
                terimakasih 🙏.
              </p>
              <div className="flex items-center gap-1 p-1">
                <div className="flex gap-2">
                  <Avatar className="w-6 h-6" image="/images/forumAvatar.png" alt="Avatar" />
                  <Avatar className="w-6 h-6" image="/images/forumAvatar.png" alt="Avatar" />
                  <p className="font-medium text-gray-900">2 Balasan</p>
                </div>
                <p className="ml-2 truncate text-xs w-[5rem] md:w-[10rem] text-gray-400">
                  Balasan terakhir 2 minggu yang lalu
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 flex w-full gap-3 bg-white px-6 py-4">
        {session?.user?.image && (
          <Avatar image={session.user.image} alt="Avatar"/>
        )}
        <div className="w-full lg:w-[calc(100%-320px)] rounded-lg border p-3">
          <textarea
            placeholder="Tulis Pesan.."
            className="w-full resize-none outline-none"
          />

          <div className="mt-1 flex justify-between">
            <div className="flex gap-2">
              <button className="h-5 w-5">
                <Play size={20} />
              </button>
              <button className="h-5 w-5">
                <Image size={20} />
              </button>
              <button className="h-5 w-5">
                <Smile size={20} />
              </button>
              <button className="h-5 w-5">
                <Paperclip size={20} />
              </button>
            </div>
            <button className="h-5 w-5">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatPage;
