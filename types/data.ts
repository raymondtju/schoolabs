
import { BenefitClassTypes, CourseCardTypes, CourseDetailSubject, SubjectClassTypes, SubjectLearnTypes, TestimoniCardTypes, USPCardTypes } from "./type";
import { BadgeIcon, ClockIcon, SuitcaseIcon, SupportIcon } from "@/components/icon/usp-icon";
import { CheckGreenIcon, SubjectIcon } from "@/components/icon/dashboard-icon";
import { Youtube, FileText, HelpCircle } from "lucide-react";

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

export const ClassCards: CourseCardTypes[] = [
   {
      title: "Dasar UX Research",
      description: "Supporting or descriptive text for the card goes here like a pro.",
      status: 70,
      image: "/cards-image/dasarux.webp"
   },
   {
      title: "Advance Prototyping Figma",
      description: "Supporting or descriptive text for the card goes here like a pro.",
      status: 20,
      image: "/cards-image/dasarux.webp"
   },
   {
      title: "Wireframing",
      description: "Supporting or descriptive text for the card goes here like a pro.",
      status: "Complete",
      image: "/cards-image/dasarux.webp"
   },
   {
      title: "Dasar UX Research",
      description: "Supporting or descriptive text for the card goes here like a pro.",
      status: "Complete",
      image: "/cards-image/dasarux.webp"
   },
]

export const SubjectNavigation: SubjectClassTypes[] = [
   {
      title: "Pengenalan UX Research",
      icon: CheckGreenIcon,
      path: "/dashboard/class/dasar-ux-research/pengenalan-ux-research",
      complete: true
   },
   {
      title: "Metode Penelitian UX",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/metode-penelitian-ux",
      complete: false,
      progress: {
         current: 3,
         max: 4
      }
   },
   {
      title: "Pengumpulan Data",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/pengumpulan-data",
      complete: false,
      progress: {
         current: 0,
         max: 5
      }
   },
   {
      title: "Analisis Data UX",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/analisis-data-ux",
      complete: false,
      progress: {
         current: 0,
         max: 9
      }
   },
   {
      title: "Usability Testing",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/usability-testing",
      complete: false,
      progress: {
         current: 0,
         max: 8
      }
   },
   {
      title: "Penyampaian Temuan Penelitian",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/penyampaian temuan penelitian",
      complete: false,
      progress: {
         current: 0,
         max: 3
      }
   },
   {
      title: "Studi Kasus dan Praktikum",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/studi-kasus-dan-praktikum",
      complete: false,
      progress: {
         current: 0,
         max: 3
      }
   },
   {
      title: "Ujian",
      icon: SubjectIcon,
      path: "/dashboard/class/ujian",
      complete: false,
      progress: {
         current: 0,
         max: 1
      }
   },
   {
      title: "Submission",
      icon: SubjectIcon,
      path: "/dashboard/class/dasar-ux-research/submission",
      complete: false,
      progress: {
         current: 0,
         max: 1
      }
   },
]


export const BenefitClass: BenefitClassTypes[] = [
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
   {
      title: "Sertifikat",
      description:
         "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
      icon: undefined,
   },
];

export const subjectLearnList: SubjectLearnTypes[] = [
   {
      title: "Pengenalan UX Research",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: undefined,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: undefined,
         },
         {
            title:
               "Metode dan strategi UX Research",
            icon: undefined,
         },
         {
            title:
               "Kuis Pengenalan UX research",
            icon: undefined,
         },
      ],
   },
   {
      title: "Metode Penelitian UX",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: undefined,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: undefined,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: undefined,
         },
         {
            title:
               "Kuis Pengenalan UX research",
            icon: undefined,
         },
      ],
   },
   {
      title: "Pengumpulan data",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: Youtube,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
         },
         {
            title:
               "Kuis Pengenalan UX research",
            icon: HelpCircle,
         },
      ],
   },
   {
      title: "Analisis data UX",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: Youtube,
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
         },
         {
            title:
               "Kuis Pengenalan UX research",
            icon: HelpCircle,
         },
      ],
   },
]

export const CourseSubject: CourseDetailSubject[] = [
   {
      title: "Pengenalan UX Research",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
            type: "video"
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
            type: "bacaan"
         },
         {
            title:
               "Quiz",
            icon: HelpCircle,
         },
      ],
   },
   {
      title: "Metode Penelitian UX",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
            type: "video"
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
            type: "bacaan"
         },
         {
            title:
               "Quiz",
            icon: HelpCircle,
         },
      ],
   },
   {
      title: "Pengumpulan data",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
            type: "video"
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
            type: "bacaan"
         },
         {
            title:
               "Quiz",
            icon: HelpCircle,
         },
      ],
   },
   {
      title: "Analisis data UX",
      subClass: [
         {
            title:
               "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX",
            icon: Youtube,
            type: "video"
         },
         {
            title:
               "Peran Utama Penelitian UX dalam Desain Produk",
            icon: FileText,
            type: "bacaan"
         },
         {
            title:
               "Quiz",
            icon: HelpCircle,
         },
      ],
   },
]