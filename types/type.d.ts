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

type CommonCardsTypes = {
   title: string
}

export type NormalCourseCards = CommonCardsTypes & {
   image: string,
   price: string | number,
   rating: string,
   level: string,
   people_rate: number
} 

export type CourseCardTypes = CommonCardsTypes
   & Partial<NormalCourseCards> & {
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
      type?: string
   }>
}

export type CourseNav = Pick<BenefitClassTypes, "title" | "icon"> & {
   notif?: number;
}

export type Passion = {
   title: string,
   image: string
}

export type FAQ = {
   title: string,
   description: stirng
}
