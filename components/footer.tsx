"use client";

import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./icon/footer-icon";

export function Footer() {
  return (
    <footer className="mt-12 pb-6 ">
      <div className="container md:px-20">
        <hr />
        <div className="my-6 flex flex-col lg:flex-row lg:justify-between">
          <div className="max-w-sm w-[10rem]">
            <Image
              quality={100}
              src="/logo.png"
              alt="icon"
              width={250}
              height={250}
            />
          </div>
          <div className="my-8 md:my-0 flex flex-col gap-6 lg:flex-row">
            <ul className="grid w-64 gap-2 text-gray-600">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Mitra</li>
            </ul>
            <ul className="grid w-64 gap-2 text-gray-600">
              <li>Programming</li>
              <li>Daftar Instruktur</li>
              <li>Mitra</li>
            </ul>
            <div className="grid w-64 gap-3 text-gray-600">
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
        <p className="text-center text-muted-foreground">
          &copy; Copyright 2023 SchooLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
