"use client"
import { Button } from "@/components/ui/button";
import { CheckCircle2, MoveUpRight, Trash2, UploadCloud, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";


const assignmentNav: Array<{
   title: string
}> = [
      {
         title: "Deskripsi Tugas",
      },
      {
         title: "Upload Tugas"
      },
   ]
function AssignmentCourse() {
   const [nav, setNav] = useState<"Deskripsi Tugas" | "Upload Tugas" | string>("Deskripsi Tugas")
   return (
      <>
         <div className="max-w-4xl container grid gap-10">
            <div className="grid gap-4">
               <h1 className="text-4xl font-semibold">Tugas Akhir: UX Research - Menyusun Rencana Penelitian Pengalaman Pengguna</h1>
               <div className="flex gap-4">
                  <p className="text-sm font-semibold">Batas Waktu</p>
                  <p className="text-sm">30 September 2023</p>
               </div>
            </div>
            <div className="mt-6 max-w-4xl mx-auto">
               <div className="rounded-3xl w-[55rem] h-[25rem] bg-gray-200"></div>
            </div>
            <div className="flex justify-center">
               <div className="flex bg-[#F5F5FF] w-fit">
                  {assignmentNav.map((item, index) => (
                     <button onClick={() => setNav(item.title)} key={index} className="relative p-4 font-semibold">
                        {item.title}
                        {nav === item.title && (
                           <motion.div
                              className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#4B4EFC]"
                              layoutId="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#4B4EFC]"
                           />

                        )}
                     </button>
                  ))}
               </div>
            </div>
            {nav === "Deskripsi Tugas" ? (
               <div className="grid gap-8">
                  <div className="grid gap-4">
                     <h5 className="text-2xl font-semibold">Deskripsi Tugas:</h5>
                     <p>Dalam tugas ini, Anda akan merencanakan sebuah penelitian pengalaman pengguna (UX Research) untuk mendapatkan wawasan yang lebih dalam tentang bagaimana pengguna berinteraksi dengan produk atau layanan tertentu. Anda akan merancang rencana penelitian yang mencakup langkah-langkah yang diperlukan untuk mengumpulkan data yang relevan dan analisis yang diperlukan untuk memahami kebutuhan pengguna dan meningkatkan pengalaman mereka.</p>
                  </div>
                  <div className="grid gap-4">
                     <h5 className="text-2xl font-semibold">
                        Format Pengumpulan tugas:
                     </h5>
                     <p>Berikan nama lengkap beserta nama file seperti contoh ini (Ahmad Setiawan_TugasUXR1)</p>
                  </div>
                  <div className="grid gap-4">
                     <h5 className="text-2xl font-semibold">
                        Penilaian:
                     </h5>
                     <p>Tugas ini akan dinilai berdasarkan kejelasan rencana penelitian, pemilihan metode, kecocokan instrumen, dan kesimpulan yang disajikan.</p>
                  </div>
                  <div className="grid gap-4">
                     <h5 className="text-2xl font-semibold">
                        Catatan:
                     </h5>
                     <p>Selamat mengerjakan tugas Anda! Jika Anda memiliki pertanyaan atau butuh bantuan lebih lanjut, jangan ragu untuk menghubungi instruktur Anda.</p>
                  </div>
               </div>
            ) : (
               <div className="container bg-white px-[7.5rem] py-20 rounded-2xl max-w-3xl">
                  <div className="mx-auto max-w-lg grid gap-8">
                     <div className="h-48 max-h-48 rounded-xl border border-primary border-dashed px-4 py-6 grid justify-items-center bg-[#E1E1FE]">
                        <div className="w-14 h-14 rounded-full bg-white grid place-content-center">
                           <UploadCloud size={35}/>
                        </div>
                        <div className="text-center">
                           <p className="text-sm text-[#98A2B3]">
                              <span className="font-semibold text-primary">Click to upload </span>
                              or drag and drop
                           </p>
                           <div className="flex gap-3 text-[#98A2B3]">
                              <p className="text-sm">JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                              <p className="text-sm">| 50MB max</p>

                           </div>
                        </div>
                     </div>
                     <div className="max-h-48 rounded-xl border border-primary border-dashed px-4 py-6 flex gap-4 items-center bg-[#E1E1FE]">
                        <div>
                           <Image width={50} height={50} src="/pdfImage.png" alt="pdf" />
                        </div>
                        <div className="w-full grid gap-2">
                           <h5>Uploading Document</h5>
                           <div className="flex">
                                 <Progress value={45} className="bg-[#F9FAFB]" color="bg-[#40B869]" />
                           </div>
                           <div className="text-xs text-muted flex gap-1">
                              <p>File Title.PDF</p>
                              <span>|</span>
                              <p>
                                 <span className="font-medium">45% </span> Complete
                              </p>
                           </div>
                        </div>
                        <button>
                           <X size={25} />
                        </button>
                     </div>
                     <div className="max-h-48 rounded-xl border border-primary border-dashed px-4 py-6 flex gap-4 items-center bg-[#E1E1FE]">
                        <div className="w-[4.5rem] h-12 rounded-full bg-white grid place-content-center">
                           <CheckCircle2 className="fill-[#0F973D]" size={35} color="#FFF" />
                        </div>
                        <div className="w-full grid">
                           <h5>Uploading Successful</h5>

                           <div className="text-xs text-muted flex gap-1">
                              <p className="font-medium">File Title.PDF</p>
                              <span>|</span>
                              <p className="text-[#98A2B3]">
                                 313 KB . 31 Aug, 2022
                              </p>
                           </div>
                        </div>
                        <button className="font-medium text-xs text-[#98A2B3] flex items-center gap-1">
                           <Trash2 size={22} />
                           <p>Clear</p>
                        </button>
                     </div>
                  </div>
               </div>
            )}
            <div className="grid gap-4">
               <div className="flex gap-4">
                  <p className="text-lg font-medium">Kode Etik Schoolabs</p>
                  <Link className="flex gap-2 text-sm text-[#1E22FB]" href="#">
                     Pelajari lebih lanjut
                     <MoveUpRight size={16} />
                  </Link>
               </div>
               <div className="flex gap-2">
                  <input className="w-6 h-6 outline-[1.5px] outline-black" type="checkbox" />
                  <p>Saya,
                     <span className="font-semibold"> Ahmad Setiawan </span>
                     dengan ini menyatakan bahwa mengumpulkan tugas yang bukan milik saya sendiri dapat menyebabkan saya tidak akan mendapatkan fasilitas sertifikat dan akun Schoolabs saya akan dibekukan.
                  </p>
               </div>
            </div>
            <div className="flex justify-end gap-6">
               <Button className="text-primary hover:text-primary/90 h-12 px-6 border-primary" variant={"outline"}>
                  Simpan Draft
               </Button>
               <Button className="h-12 px-6">
                  Submit Tugas Akhir
               </Button>
            </div>
         </div>
      </>
   )
}

export default AssignmentCourse;