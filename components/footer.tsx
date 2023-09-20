"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icon/footer-icon";

export function Footer() {
   return (
      <footer className="">
         <div className="container px-16">
            <hr />
            <div className="my-6 flex justify-between">
               <Image src="/logo.svg" alt="icon" width={250} height={250} />
               <div className=" flex">
                  <ul className="w-64 grid gap-2 text-muted-foreground">
                     <li>Tentang Kami</li>
                     <li>FAQ</li>
                     <li>Mitra</li>
                  </ul>
                  <ul className="w-64 grid gap-2 text-muted-foreground">
                     <li>Programming</li>
                     <li>Daftar Instruktur</li>
                     <li>Mitra</li>
                  </ul>
                  <div className="w-64 grid text-muted-foreground">
                     <p>Temukan Kami</p>
                     <div className="flex gap-3">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedinIcon />
                     </div>
                  </div>
               </div>
            </div>
            <p className="text-center text-muted-foreground">&copy; Copyright 2023 SchooLabs.  All rights reserved.</p>
         </div>
      </footer>
   )
}