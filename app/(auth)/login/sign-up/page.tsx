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
               <Input className="h-12 placeholder:font-medium border-[#344054] text-base" id="nama" type="text" placeholder="Masukkan nama lengkapmu" />
            </div>
            <div className="flex flex-col space-y-1">
               <label className="text-sm" htmlFor="email">
                  Email
               </label>
               <Input className="h-12 placeholder:font-medium border-[#344054] text-base" id="email" type="text" placeholder="Masukkan alamat emailmu" />
            </div>
            <div className="flex flex-col space-y-1">
               <label className="text-sm" htmlFor="password">
                  Password
               </label>
               <div className="relative">
                  <Input
                     
                     className="h-12 placeholder:font-medium border-[#344054] text-base"
                     id="password"
                     type={!showPassword ? "password" : "text"}
                     placeholder="Rahasiakan dari orang lain"
                  />
                  <span onClick={() => setShowPassword(!showPassword)} className="inline-block cursor-pointer absolute top-[0.8rem] right-4">
                     {showPassword ? <EyeOff  /> : <Eye /> }
                  </span>
               </div>
            </div>
            <Button variant={"outline"} type="submit" className="h-12 font-bold uppercase">
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
         <div className="md:max-w-lg w-full border rounded-3xl bg-[#FFF] p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2">
                  <h3 className="text-4xl font-bold text-center">Pendaftaran akun</h3>
                  <p className="text-base">Bergabung sekarang dan raih karir impianmu!</p>
               </div>
               <div className="w-full grid">
                  <p className="my-6 text-sm text-center">Sudah punya akun?
                     <Link href="/login" className="font-semibold">{""} Masuk dengan akunmu.</Link>
                  </p>
                  <div className="grid gap-3">
                     <Button className="h-12 gap-3 font-semibold uppercase bg-primary/40 hover:bg-primary">
                        <GoogleIcon />
                        Masuk dengan gmail
                     </Button>
                     <Button variant={"outline"} className="h-12 text-[#1D2739] gap-3 font-bold uppercase">
                        <FacebookIcon />
                        Masuk dengan facebook
                     </Button>
                     <Button onClick={() => setShowForm(!showForm)} variant={"outline"} className={`${showForm ? "hidden" : "flex"} h-12 text-[#1D2739] gap-3 font-bold uppercase`}>
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