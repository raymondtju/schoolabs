"use client"
import { EmailIcon, FacebookIcon, GoogleIcon } from "@/components/icon/auth-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function RegisterEmail() {
   const [showPassword, setShowPassword] = useState(false)
   return (
      <>
         <form className="grid gap-4" action="#">
            <div className="flex flex-col space-y-1">
               <label className="text-sm" htmlFor="nama">
                  Nama Lengkap
               </label>
               <Input className="text-xs sm:text-base h-12 placeholder:font-medium border-[#344054]" id="nama" type="text" placeholder="Masukkan nama lengkapmu" />
            </div>
            <div className="flex flex-col space-y-1">
               <label className="text-sm" htmlFor="email">
                  Email
               </label>
               <Input className="text-xs sm:text-base h-12 placeholder:font-medium border-[#344054]" id="email" type="text" placeholder="Masukkan alamat emailmu" />
            </div>
            <div className="flex flex-col space-y-1">
               <label className="text-sm" htmlFor="password">
                  Password
               </label>
               <div className="border border-[#344054] rounded-md flex items-center justify-between px-3 py-1  h-12">
                  <Input
                     className="p-0 border-none text-xs sm:text-base placeholder:font-medium outline-none"
                     id="password"
                     type={!showPassword ? "password" : "text"}
                     placeholder="Rahasiakan dari orang lain"
                  />
                  <span onClick={() => setShowPassword(!showPassword)} className="w-4 h-4 sm:w-8 sm:h-8 inline-block cursor-pointer">
                     {showPassword ? <EyeOff  size="100%"/> : <Eye size="100%"/> }
                  </span>
               </div>
            </div>
            <Button variant={"outline"} type="submit" className="text-xs sm:text-base h-12 font-bold uppercase">
               Buat Akun
            </Button>
         </form>
      </>
   )
}

export default function Register() {
   const [showForm, setShowForm] = useState(false);

   return (
      <>
         <div className="sm:max-w-lg w-full border rounded-3xl bg-[#FFF] p-4 sm:p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-center">Pendaftaran akun</h3>
                  <p className="text-base text-center">Bergabung sekarang dan raih karir impianmu!</p>
               </div>
               <div className="w-full grid">
                  <p className="my-6 text-sm text-center">Sudah punya akun?
                     <Link href="/login" className="font-semibold">{""} Masuk dengan akunmu.</Link>
                  </p>
                  <div className="grid gap-3">
                     <Button className="text-xs sm:text-base h-12 gap-3 font-semibold uppercase bg-primary/40 hover:bg-primary">
                        <GoogleIcon />
                        Masuk dengan gmail
                     </Button>
                     <Button variant={"outline"} className="text-xs sm:text-base h-12 text-[#1D2739] gap-3 font-bold uppercase">
                        <FacebookIcon />
                        Masuk dengan facebook
                     </Button>
                     <Button onClick={() => setShowForm(!showForm)} variant={"outline"} className={`${showForm ? "hidden" : "flex"} text-xs sm:text-base h-12 text-[#1D2739] gap-3 font-bold uppercase`}>
                        <EmailIcon />
                        Masuk dengan email
                     </Button>
                  </div>
                  {showForm && (
                     <>
                        <div className="py-4 flex gap-4 items-center justify-center">
                           <hr className="w-full bg-[#344054]" />
                           <p className="text-sm font-bold">Atau</p>
                           <hr className="w-full bg-[#344054]" />
                        </div>
                        <RegisterEmail />
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   )
}