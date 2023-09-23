import { USPCardTypes } from "./type";
import { BadgeIcon, ClockIcon, SuitcaseIcon, SupportIcon } from "@/components/icon/usp-icon";

export const USPCards: USPCardTypes[] = [
   {
      icon: BadgeIcon,
      title: "Materi Interaktif",
      description: "Berpartisipasi dalam materi kursus yang dinamis dan mendalam dengan kualitas materi yang sesuai standar industri"
   },
   {
      icon: SupportIcon,
      title: "Masukan Personal",
      description: "Dapatkan masukan langsung oleh mentor berpengalaman untuk meningkatkan kemampuan dan pengetahuanmu"
   },
   {
      icon: ClockIcon,
      title: "Lifetime Access",
      description: "Dengan sekali bayar akses materi selamanya dan dapatkan update materi agar tetap relevan dalam perubahan terkini"
   },
   {
      icon: SuitcaseIcon,
      title: "Proyek yang Nyata",
      description: "Terapkan materi pada proyek praktis yang mensimulasikan skenario pekerjaan yang dapat menambah portfolio"
   }
]