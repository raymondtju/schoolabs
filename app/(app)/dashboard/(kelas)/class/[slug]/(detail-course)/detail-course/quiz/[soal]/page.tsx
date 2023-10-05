"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

const answerButton = [
   {
      title: "Meningkatkan performa server",
      value: 0,
   },
   {
      title: "Memaksimalkan keuntungan bisnis",
      value: 0
   },
   {
      title: "Memahami dan meningkatkan pengalaman pengguna",
      value: 1
   },
   {
      title: "Meningkatkan keamanan data",
      value: 0
   }
]

function Quiz({ params }: { params: { soal: string } }) {
   console.log(params.soal)


   const [select, isSelect] = useState(0)
   const [ans] = useState(1)


   return (
      <>
         <div className="grid gap-6">
            <h5 className="text-center font-semibold text-2xl">
               Apa tujuan utama dari UX Research
               <span className="sr-only">{params.soal}</span>
            </h5>
            <div className="flex justify-center gap-4">
               <div className="max-w-2xl w-[30rem]">
                  <div className="rounded-3xl h-[19rem] bg-gray-200"></div>
               </div>
               <div className="w-[40rem] flex flex-col gap-4 px-4">
                  {answerButton.map((item, index) => (
                     <button
                        onClick={() => {
                           isSelect(index)
                        }}
                        value={item.value}
                        key={index}
                        type="button"
                        className={cn(
                           "text-base flex items-center justify-between p-4 rounded-2xl border-[2px] border-[#E4E7EC] shadow-[#E4E7EC] shadow-[0px_4px_0px_0px] bg-[#FFF]",
                           select === index ?
                              "border-[#0F973D] shadow-[#0F973D]" :
                              "border-[#DB2323] shadow-[#DB2323]"
                        )}>
                        {item.title}
                        <span className=" w-7 h-7 rounded-md p-1 border grid place-content-center">
                           {index + 1}
                        </span>
                     </button>
                  ))}

               </div>
            </div>
         </div>
      </>
   )
}

export default Quiz;