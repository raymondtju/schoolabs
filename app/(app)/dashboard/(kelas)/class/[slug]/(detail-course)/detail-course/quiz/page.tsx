import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock3, FileText } from "lucide-react";
import Link from "next/link";

function QuizCourse() {
   return (
      <>
         <div className="container">
            <div className="py-[5rem] max-w-2xl mx-auto grid gap-6">
               <h5 className="text-gray-700 text-3xl font-semibold">Kuis Pengenalan UX Research</h5>
               <p className="text-xl text-gray-700">Ini adalah modul untuk menguji pengetahuan Anda tentang materi yang telah dipelajari. Terdapat 10 pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa ketentuan dari ujian ini adalah:</p>

               <div className="flex gap-8">
                  <div className="w-[11rem] flex flex-col gap-4 bg-[#FFF] rounded-xl p-4">
                     <p className="text-sm">Durasi</p>
                     <div className="flex gap-3">
                        <Clock3 color="#52ADFF"/>
                        <p className="text-xl font-semibold text-gray-700">5 menit</p>
                     </div>
                  </div>
                  <div className="w-[11rem] flex flex-col gap-4 bg-[#FFF] rounded-xl p-4">
                     <p className="text-sm">Soal</p>
                     <div className="flex item-scenter gap-3">
                        <FileText color="#0F973D"/>
                        <p className="text-xl font-semibold text-gray-700">10</p>
                     </div>
                  </div>
               </div>

               <div className="grid text-gray-700">
                  <h6 className="text-xl">Aturan</h6>
                  <ul className="grid gap-3">
                     <li className="flex px-4 py-2 gap-2">
                        <CheckCircle2 size={24} />
                        <p>Kamu harus menyelesaikan test sesuai waktu yang ditentukan</p>
                     </li>
                     <li className="flex px-4 py-2 gap-2">
                        <CheckCircle2 size={24} />
                        <p>Waktu akan terus berjalan jika kamu keluar dari halaman</p>
                     </li>
                     <li className="flex px-4 py-2 gap-2">
                        <CheckCircle2 size={24} />
                        <p>Gunakan device laptop untuk membantu kelancaran internetmu</p>
                     </li>
                     <li className="flex px-4 py-2 gap-2">
                        <CheckCircle2 size={24} />
                        <p>Batas nilai maksimum untuk mengerjakan kuis ini yaitu 70%.</p>
                     </li>
                  </ul>
               </div>

               <p className="font-semibold">Selamat Mengerjakan!</p>
            </div>
         </div>
         <div className="h-24 w-full bg-[#FFF] flex items-center justify-center">
            <Button asChild className="h-14 w-[10.5rem]">
               <Link href="quiz/soal-1">
                  Mulai
               </Link>
            </Button>
         </div>
      </>
   )
}

export default QuizCourse;