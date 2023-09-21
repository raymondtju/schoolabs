"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icon/footer-icon";

export function Footer() {
   return (
      <footer className="py-6">
         <div className="container md:px-20">
            <hr />
            <div className="my-6 flex flex-col lg:flex-row lg:justify-between">
               <Image src="/logo.svg" alt="icon" width={250} height={250} />
               <div className="flex flex-col gap-6 lg:flex-row">
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
                  <div className="w-64 grid gap-3 text-muted-foreground">
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