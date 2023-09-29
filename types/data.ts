import { TestimoniCardTypes, USPCardTypes } from "./type";
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

export const CardsTestimoni: TestimoniCardTypes[] = [
   {
      image: "/testimoni-image/ux",
      name: "Raply Masyukur",
      role: "Siswa UI/UX Design Mastery",
      text: '“Saya khusus mendedikasikan waktu saya untuk belajar dasar UI/UX. Di SchooLabs belajarnya step by step, dan sudah tersusun dengan rapi jadi lebih mudah untuk membuat perencanaan pembelajaran. Kalau ada materi yang membuat bingung atau susah dimengerti kita langsung bisa konsultasi dengan para mentor yang sangat berpengalaman”'
   },
   {
      image: "/testimoni-image/dev",
      name: "Julius Cesar",
      role: "Siswa Front-End Mastery",
      text: '“Saya khusus mendedikasikan waktu saya untuk belajar dasar UI/UX. Di SchooLabs belajarnya step by step, dan sudah tersusun dengan rapi jadi lebih mudah untuk membuat perencanaan pembelajaran. Kalau ada materi yang membuat bingung atau susah dimengerti kita langsung bisa konsultasi dengan para mentor yang sangat berpengalaman”'
   },
   {
      image: "/testimoni-image/ux2",
      name: "Maya Rahmawati",
      role: "Siswa UX Research",
      text: '“Saya khusus mendedikasikan waktu saya untuk belajar dasar UI/UX. Di SchooLabs belajarnya step by step, dan sudah tersusun dengan rapi jadi lebih mudah untuk membuat perencanaan pembelajaran. Kalau ada materi yang membuat bingung atau susah dimengerti kita langsung bisa konsultasi dengan para mentor yang sangat berpengalaman”'
   },
   {
      image: "/testimoni-image/dev2",
      name: "Edy Rahmayadi",
      role: "Siswa Javascript Mastery",
      text: '“Saya khusus mendedikasikan waktu saya untuk belajar dasar UI/UX. Di SchooLabs belajarnya step by step, dan sudah tersusun dengan rapi jadi lebih mudah untuk membuat perencanaan pembelajaran. Kalau ada materi yang membuat bingung atau susah dimengerti kita langsung bisa konsultasi dengan para mentor yang sangat berpengalaman”'
   }
]