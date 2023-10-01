import { Separator } from "@/components/ui/separator";
import React from "react";

function ChatPage() {
  return (
    <section>
      <div className="mb-20 w-full space-y-4 bg-white px-8 py-8">
        <div className="relative flex max-w-full items-center space-x-2">
          <Separator />
          <span className=" absolute right-1/2 -translate-x-1/2 bg-white px-2 text-xs text-muted-foreground">
            SEP 01
          </span>
        </div>

        {Array.from({ length: 3 }).map((_item, i) => (
          <div className="grid grid-cols-[40px_auto] gap-3 py-2" key={i}>
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium">Aspira Yuriza</h4>
                <span className="ml-4 text-xs">08:15 PM</span>
              </div>
              <p>
                Hallo teman teman, semoga semua dalam keadaan sehat ya, amin, Oh
                ya, mohon maaf berhubung aku masih belajar, izin mau nanya, 2
                orang yang berkolaborasi dalam pembuatan design system itu siapa
                ya? UI design dan Front End Developer? Mohon info nya ya,
                terimakasih 🙏.
              </p>
              <div className="flex items-center gap-1 p-1">
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <span className="font-medium text-gray-900">2 Balasan</span>
                <span className="text-[12px] text-gray-400">
                  Balasan terakhir 2 minggu yang lalu
                </span>
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
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium">Aspira Yuriza</h4>
                <span className="ml-4 text-xs">08:15 PM</span>
              </div>
              <p>
                Hallo teman teman, semoga semua dalam keadaan sehat ya, amin, Oh
                ya, mohon maaf berhubung aku masih belajar, izin mau nanya, 2
                orang yang berkolaborasi dalam pembuatan design system itu siapa
                ya? UI design dan Front End Developer? Mohon info nya ya,
                terimakasih 🙏.
              </p>
              <div className="flex items-center gap-1 p-1">
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <span className="font-medium text-gray-900">2 Balasan</span>
                <span className="text-[12px] text-gray-400">
                  Balasan terakhir 2 minggu yang lalu
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 flex w-full gap-3 bg-white px-6 py-4">
        <div className="block h-10 w-10 shrink-0 rounded-full bg-gray-200"></div>
        <div className="w-[calc(100%-320px)] rounded-lg border p-3">
          <textarea
            placeholder="Tulis Pesan.."
            className="w-full resize-none outline-none"
          />

          <div className="mt-1 flex justify-between">
            <div className="flex gap-2">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <button>send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatPage;
