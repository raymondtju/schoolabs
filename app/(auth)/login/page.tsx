"use client"

import {
   EmailIcon,
   FacebookIcon,
   GoogleIcon
} from "@/components/icon/auth-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function InputEmail() {
   return (
      <>
         <form className="grid gap-4" action="#">
            <div className="grid">
               <label htmlFor="email">
                  Email
               </label>
               <Input className="h-12 border-[#344054] text-[#344054] text-base" id="email" type="text" placeholder="Masukkan alamat emailmu" />
            </div>
            <div className="grid">
               <label htmlFor="password-email">
                  Password
               </label>
               <Input className="h-12 border-[#344054] text-[#344054] text-base" id="password-email" type="text" placeholder="Rahasiakan dari orang lain" />
            </div>
            <Button className="h-12 shadow-none border text-[#1D2739] gap-3 bg-[#F3FBFF] hover:bg-[#F3FBFF]/50 font-bold uppercase">
               Login
            </Button>
            <Button variant={"link"} className="text-base text-primary">Forgot Password?</Button>
         </form>
      </>
   )
}

export default function Login() {
   const [showForm, setShowForm] = useState(false)
   return (
      <>
         <div className="max-w-lg w-[32rem] border rounded-3xl bg-[#FFF] p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2">
                  <h3 className="text-4xl font-bold text-center">Masuk akun</h3>
                  <p className="text-base">Lanjutkan proses belajar dan raih impianmu</p>
               </div>
               <div className="w-full grid">
                  <p className="my-6 text-sm text-center">Belum punya akun?
                     <span className="font-semibold">{""} Daftarkan akun baru.</span>
                  </p>
                  <div className="grid gap-3">
                     <Button className="h-12 gap-3 font-semibold uppercase bg-primary/40 hover:bg-primary">
                        <GoogleIcon />
                        Masuk dengan gmail
                     </Button>
                     <Button  variant={"outline"} className="h-12 text-[#1D2739] gap-3 font-bold uppercase">
                        <FacebookIcon />
                        Masuk dengan facebook
                     </Button>
                     <Button onClick={() => setShowForm(!showForm)} variant={"outline"} className="h-12 text-[#1D2739] gap-3 font-bold uppercase">
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
                        <InputEmail />
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   )
}
