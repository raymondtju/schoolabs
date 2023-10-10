"use client";
import { useState } from "react";
import { HomeIcon, SingleChatIcon } from "../icon/dashboard-icon";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../ui/accordion";
import { CourseSubject } from "@/types/data";
import Avatar from "../dashboard/avatar";
import { motion } from "framer-motion";
import { AtSign, Image, Paperclip, Send, Smile, Video } from "lucide-react";
import { CourseNav } from "@/types/type";

const sidebarNav: CourseNav[] = [
  {
    title: "Materi",
    icon: HomeIcon,
  },
  {
    title: "Komentar",
    icon: SingleChatIcon,
    notif: 5,
  },
];

function CourseSidebar() {
  const [sidebar, setSidebar] = useState<"Materi" | "Komentar" | string>(
    "Materi",
  );
  console.log(sidebar);
  return (
    <div className="fixed top-0 z-[40] flex h-[41rem] w-[19.5rem] max-w-xs flex-col pt-20">
      <div className="sticky top-0 z-[10] flex bg-[#FFF] py-4">
        {sidebarNav.map((item, index) => (
          <button
            key={index}
            onClick={() => setSidebar(item.title)}
            className={`relative flex h-12 w-1/2 items-center justify-center gap-2 px-4 py-2 ${
              item.title === sidebar && "text-[#4B4EFC]"
            }`}
          >
            <span className="h-5 w-5">
              {item.icon && (
                <item.icon
                  stroke={item.title === sidebar ? "#4B4EFC" : "#344054"}
                />
              )}
            </span>
            <p className="text-sm font-medium">{item.title}</p>
            {item.notif && (
              <span className="ml-auto h-fit rounded-full bg-[#F0F2F5] px-2 py-1 text-xs font-medium">
                5
              </span>
            )}
            {sidebar === item.title && (
              <motion.div
                className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#4B4EFC]"
                layoutId="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#4B4EFC]"
              />
            )}
          </button>
        ))}
      </div>
      <div className="relative inset-0 h-screen overflow-y-auto pb-2 pr-3">
        {sidebar === "Materi" ? (
          <div className="grid gap-2">
            <Accordion multiple>
              {CourseSubject.map((item, index) => (
                <AccordionItem className="border-none" key={index}>
                  <AccordionHeader
                    activeAccordion="bg-[#F5F5FF] border-transparent"
                    className="border-y px-4 py-2"
                  >
                    <h5 className="font-semibold text-gray-900">
                      {item.title}
                    </h5>
                  </AccordionHeader>
                  <AccordionPanel>
                    {item.subClass.map((subItem, index) => (
                      <div
                        className="flex gap-3 border-l-[3px] border-l-transparent px-4 py-3 transition-all hover:border-[#4B4EFC] hover:bg-[#E1E1FE]"
                        key={index}
                      >
                        <span className="h-5 w-5">
                          {subItem.icon && <subItem.icon />}
                        </span>
                        <p className="text-sm text-[#1A1A1A]">
                          {typeof subItem.type !== "undefined" && (
                            <span className="font-bold capitalize">
                              {subItem.type}:{" "}
                            </span>
                          )}
                          {subItem.title}
                        </p>
                      </div>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <>
            <div className="grid gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-2">
                  <Avatar className="flex-[0_0_auto]" />
                  <div className="flex flex-col gap-2">
                    <div className="grid">
                      <p className="font-bold">Ariel Candra</p>
                      <p className="text-xs text-muted">
                        19:30/12 September 2023
                      </p>
                    </div>
                    <p className="text-[15px] leading-[1.25rem]">
                      Halo guys mau tanya, Kalian dalam misal buat study kasus
                      gitu dalam prosesnya kalian menggunakan iterasi apa ya?
                      misal selain design thinking yang sudah umumdan mungkin
                      ada yang mau share pendapat kalian mengenai iterasi itu
                      sendiri,silakan.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {sidebar === "Komentar" && (
        <div className="px-4">
          <div className="mt-4 flex flex-col rounded-lg border">
            <div className="w-full">
              <textarea
                placeholder="Tuangkan yang ingin kamu sampaikan..."
                className="w-full resize-none rounded-t-2xl border-none p-2 text-sm outline-none"
              />
            </div>
            <div className="flex gap-2 px-3 py-2 text-muted">
              <button className="h-5 w-5">
                <Image size={20} />
              </button>
              <button className="h-5 w-5">
                <Smile size={20} />
              </button>
              <button className="h-5 w-5">
                <AtSign size={20} />
              </button>
              <button className="h-5 w-5">
                <Video size={20} />
              </button>
              <button className="h-5 w-5">
                <Paperclip size={20} />
              </button>
              <button className="ml-auto h-5 w-5">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseSidebar;
