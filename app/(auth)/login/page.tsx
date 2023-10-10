"use client"

import {
   EmailIcon,
   FacebookIcon,
   GoogleIcon
} from "@/components/icon/auth-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

function InputEmail() {
   return (
      <>
         <form className="flex flex-col space-y-4" action="#">
            <div className="flex flex-col space-y-1">
               <label className="sr-only" htmlFor="email">
                  Email
               </label>
               <Input className="h-[3.25rem] placeholder:text-gray-400  border text-sm" id="email" type="text" placeholder="Alamat Email" />
            </div>
            <div className="flex flex-col space-y-1">
               <label className="sr-only" htmlFor="password-email">
                  Password
               </label>
               <Input className="h-[3.25rem] placeholder:text-gray-400  border text-sm" id="password-email" type="text" placeholder="Password" />
            </div>
            <Button variant={"outline"} className="text-gray-600 h-12 font-semibold uppercase">
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
         <div className="sm:max-w-md w-full border rounded-3xl bg-[#FFF] p-4 sm:p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2 text-gray-700">
                  <h3 className="text-3xl md:text-4xl font-bold text-center">Masuk akun</h3>
                  <p className=" text-center">Lanjutkan proses belajar dan raih impianmu</p>
                  <p className="text-sm text-center">Belum punya akun?
                     <Link href="/login/sign-up" className="font-semibold">{""} Daftarkan akun baru.</Link>
                  </p>
               </div>
               <div className="mt-6 w-full grid">
                  <div className="grid gap-3">
                     <Button className="rounded-md h-12 gap-3 font-semibold uppercase bg-primary">
                        <GoogleIcon />
                        Masuk dengan gmail
                     </Button>
                     <Button variant={"outline"} className="rounded-md h-12 text-gray-600 gap-3 font-semibold uppercase">
                        <FacebookIcon />
                        Masuk dengan facebook
                     </Button>
                     <Button onClick={() => setShowForm(!showForm)} variant={"outline"} className={`${showForm ? "hidden" : "flex"} rounded-md h-12 text-gray-600 gap-3 font-semibold uppercase`}>
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
