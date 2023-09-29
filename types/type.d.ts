import React from "react"
import { StaticImageData } from "next/image";

export type USPCardTypes = {
   icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   title: string,
   description: string
}

export type TestimoniCardTypes = {
   image: string,
   name: string,
   role: string,
   text: string
}

export type CourseCardTypes = {
   title: string,
   description: string,
   status: "Complete" | number

}