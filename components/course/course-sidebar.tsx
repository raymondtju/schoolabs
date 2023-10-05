"use client"
import { useState } from "react";
import {
   HomeIcon,
   SingleChatIcon,
} from "../icon/dashboard-icon";
import {
   Accordion,
   AccordionHeader,
   AccordionItem,
   AccordionPanel
} from "../ui/accordion";
import { CourseSubject } from "@/types/data";
import Avatar from "../dashboard/avatar";
import { motion } from "framer-motion";
import { AtSign, Image, Paperclip, Send, Smile, Video } from "lucide-react";
import { CourseNav } from "@/types/type";

const sidebarNav: CourseNav[] = [
   {
      title: "Materi",
      icon: HomeIcon
   },
   {
      title: "Komentar",
      icon: SingleChatIcon,
      notif: 5
   },
]

function CourseSidebar() {
   const [sidebar, setSidebar] = useState<"Materi" | "Komentar" | string>("Materi");
   console.log(sidebar)
   return (
      <div className="pt-20 fixed top-0 z-[40] flex flex-col h-[41rem] max-w-xs w-[19.5rem]">
         <div className="bg-[#FFF] sticky top-0 z-[10] py-4 flex">
            {sidebarNav.map((item, index) => (
               <button
                  key={index}
                  onClick={() => setSidebar(item.title)}
                  className={`relative w-1/2 h-12 px-4 py-2 flex gap-2 items-center justify-center ${item.title === sidebar && "text-[#4B4EFC]"}`}
               >
                  <span className="w-5 h-5">
                     {item.icon && (
                        <item.icon stroke={item.title === sidebar ? "#4B4EFC" : "#344054"} />
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
         <div className="relative inset-0 overflow-y-auto pb-2 h-screen pr-3">
            {sidebar === "Materi" ? (
               <div className="grid gap-2">
                  <Accordion multiple>
                     {CourseSubject.map((item, index) => (
                        <AccordionItem className="border-none" key={index}>
                           <AccordionHeader activeClassName="bg-[#F5F5FF] border-transparent" className="border-y px-4 py-2">
                              <h5 className="text-gray-900 font-semibold">{item.title}</h5>
                           </AccordionHeader>
                           <AccordionPanel>
                              {item.subClass.map((subItem, index) => (
                                 <div className="border-l-[3px] hover:border-[#4B4EFC] hover:bg-[#E1E1FE] border-l-transparent flex gap-3 px-4 py-3 transition-all" key={index}>
                                    <span className="w-5 h-5">
                                       {subItem.icon && (
                                          <subItem.icon />
                                       )}
                                    </span>
                                    <p className="text-sm text-[#1A1A1A]">
                                       {typeof subItem.type !== "undefined" && (
                                          <span className="font-bold capitalize">{subItem.type}: </span>
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
                                 <p className="text-xs text-muted">19:30/12 September 2023</p>
                              </div>
                              <p className="text-[15px] leading-[1.25rem]">
                                 Halo guys mau tanya, Kalian dalam misal buat study kasus gitu dalam prosesnya kalian menggunakan iterasi apa ya? misal selain design thinking yang sudah umumdan mungkin ada yang mau share pendapat kalian mengenai iterasi itu sendiri,silakan.
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
               <div className="mt-4 flex flex-col border rounded-lg">
                  <div className="w-full">
                     <textarea placeholder="Tuangkan yang ingin kamu sampaikan..." className="w-full p-2 outline-none rounded-t-2xl border-none resize-none text-sm" />
                  </div>
                  <div className="px-3 py-2 flex gap-2 text-muted">
                     <button className="w-5 h-5">
                        <Image size={20} />
                     </button>
                     <button className="w-5 h-5">
                        <Smile size={20} />
                     </button>
                     <button className="w-5 h-5">
                        <AtSign size={20} />
                     </button>
                     <button className="w-5 h-5">
                        <Video size={20} />
                     </button>
                     <button className="w-5 h-5">
                        <Paperclip size={20} />
                     </button>
                     <button className="ml-auto w-5 h-5">
                        <Send size={20} />
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default CourseSidebar;