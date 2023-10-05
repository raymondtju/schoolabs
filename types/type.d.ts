import React from "react"
import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

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
   status: "Complete" | number,
   image: string
}

export type SubjectClassTypes = {
   title: string,
   icon: LucideIcon | React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
   path: string,
   complete: boolean,
   progress?: {
      current: number,
      max: number
   }
}

export type BenefitClassTypes = {
   title: string,
   description: string,
   icon: undefined | LucideIcon | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export type SubjectLearnTypes = {
   title: string,
   subClass: Array<{
      title: string,
      icon: undefined | LucideIcon | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
   }>
}

export type CourseDetailSubject = Pick<SubjectLearnTypes, "title"> & {
   subClass: Array<{
      title: string,
      icon: undefined | LucideIcon | React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
      type?: string;
   }>
}

export type CourseNav = Pick<BenefitClassTypes, "title" | "icon"> & {
   notif?: number;
}