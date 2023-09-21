
import StarsIcon from "@/components/icon/stars-icon";
import { BadgeIcon, ClockIcon, EllipseIcon, SuitcaseIcon, SupportIcon } from "@/components/icon/usp-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section className="">
        <div className="relative container md:px-20 flex items-center max-h-full h-[42rem]">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-5xl md:text-[3.25rem] text-[#1D2739] font-bold md:leading-[3.5rem]">
              Melangkah Menuju Karir Barumu Bersama
              <span className="text-primary"> SCHOOLABS</span>
            </h1>
            <p className="max-w-xl text-lg text-[#475367]">
              Schoolabs membantu kamu meraih karir yang kamu inginkan di industri teknologi sebagai UI//UX Designer dan Developer.
            </p>
            <div className="space-y-8 grid">
              <div className="flex gap-4">
                <Image width={200} height={5} src="/images/avatar-group.png" alt="avatar-group" />
                <span className="inline-flex items-center gap-3">
                  <StarsIcon />
                  <p className="text-sm">4.9/5.0  dari 500+ reviews</p>
                </span>
              </div>
              <Button className="w-fit h-10 py-4 px-6 shadow-current">Daftar Sekarang</Button>
            </div>
          </div>
          <Image className="hidden lg:block absolute z-10 right-0 top-0" width={650} height={650} src="/images/hero-landing.webp" alt="hero-image" />
        </div>
      </section>
      <section className="my-28">
        <div className="container md:px-20">
          <div className="bg-primary lg:h-40 px-6 py-9 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-4 text-white">
            <div className="max-w-sm w-[15rem] grid gap-2 place-content-center justify-items-center">
              <p className="text-5xl font-bold">1000+</p>
              <p className="text-2xl font-medium">Siswa</p>
            </div>
            <hr className="shrink-0 w-2/3 h-[3px] lg:h-full lg:w-[3px] rounded-full bg-white" />

            <div className="max-w-sm w-[15rem] grid gap-2 place-content-center justify-items-center">
              <p className="text-5xl font-bold">500+</p>
              <p className="text-2xl font-medium">Materi</p>
            </div>
            <hr className="shrink-0 w-2/3 h-[3px] lg:h-full lg:w-[3px] rounded-full bg-white" />
            <div className="max-w-sm w-[15rem] grid gap-2 place-content-center justify-items-center">
              <p className="text-5xl font-bold">30</p>
              <p className="text-2xl font-medium">Kelas</p>
            </div>
            <hr className="shrink-0 w-2/3 h-[3px] lg:h-full lg:w-[3px] rounded-full bg-white" />
            <div className="max-w-sm w-[15rem] grid gap-2 place-content-center justify-items-center">
              <span className="text-5xl font-bold">10</span>
              <p className="text-2xl font-medium">Mentor</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#9B9DFD] my-28">
        <div className="z-10 relative container md:px-20 py-20">
          <div className="grid gap-8">
            <div className="flex flex-wrap gap-8 justify-start">
              <div className="shadow-lg flex gap-4 max-w-[26rem] rounded-3xl bg-[#F3FBFF] px-8 py-6">
                <div className="bg-primary h-fit rounded-md p-2">
                  <BadgeIcon />
                </div>
                <div className="grid">
                  <h5 className="font-bold text-2xl text-primary">Materi Interaktif</h5>
                  <p className="text-[#475367] text-base ">Berpartisipasi dalam materi kursus yang dinamis dan mendalam dengan kualitas materi yang sesuai standar industri</p>
                </div>
              </div>
              <div className="shadow-lg flex gap-4 max-w-[26rem] rounded-3xl bg-[#F3FBFF] px-8 py-6">
                <div className="bg-primary h-fit rounded-md p-2 ">
                  <SupportIcon />
                </div>
                <div className="grid">
                  <h5 className="font-bold text-2xl text-primary">Masukan Personal</h5>
                  <p className="text-[#475367] text-base ">Dapatkan masukan langsung oleh mentor berpengalaman untuk meningkatkan kemampuan dan pengetahuanmu</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-end">
              <div className="shadow-lg flex gap-4 max-w-[26rem] rounded-3xl bg-[#F3FBFF] px-8 py-6">
                <div className="bg-primary h-fit rounded-md p-2">
                  <ClockIcon />
                </div>
                <div className="grid">
                  <h5 className="font-bold text-2xl text-primary">Lifetime Access</h5>
                  <p className="text-[#475367] text-base ">Dengan sekali bayar akses materi selamanya dan dapatkan update materi agar tetap relevan dalam perubahan terkini</p>
                </div>
              </div>
              <div className="shadow-lg flex gap-4 max-w-[26rem] rounded-3xl bg-[#F3FBFF] px-8 py-6">
                <div className="bg-primary h-fit rounded-md p-2">
                  <SuitcaseIcon />
                </div>
                <div className="grid">
                  <h5 className="font-bold text-2xl text-primary">Proyek yang Nyata</h5>
                  <p className="text-[#475367] text-base ">Terapkan materi pada proyek praktis yang mensimulasikan skenario pekerjaan yang dapat menambah portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EllipseIcon className="absolute bottom-0 " />
        <EllipseIcon className="absolute top-0 right-0 rotate-180" />
      </section>
      <section className="my-28">
        <div className="container md:px-20">
          <h1 className="text-center text-4xl font-bold">Pilih Jalur Karirmu!</h1>
          <div className=" mt-8 flex flex-col lg:flex-row gap-4 justify-around items-center">

            <div className="group rounded-[2.5rem] border border-transparent  hover:border-primary relative overflow-hidden grid grid-cols-1">
              <Image className="col-start-1 col-end-3 row-start-1" src="/images/uiux.png" alt="UI/UX Designer" width={500} height={500} />
              <h1 className="relative mb-8 flex items-center flex-col-reverse col-start-1 row-start-1 text-[#F5F5FF] font-bold text-5xl">UI/UX DESIGNER</h1>
              <div className="sm:max-h-64 h-full px-10 py-6 absolute transition-transform group-hover:translate-y-0 translate-y-full lg:translate-y-[200%] lg:group-hover:translate-y-full text-primary bg-[#FFFFFF] grid gap-4">
                <h5 className="font-bold text-lg sm:text-xl">BELUM MEMILIKI PENGALAMAN DI DUNIA DESAIN?</h5>
                <p className="text-sm">Mulai dengan mempelajari dasar dari UI/UX Design. Ambil kelas dasar visual dan skill UI Design dengan menggunakan tools yang sesuai dengan standar industri desain seperti Figma, Sketch dan Adobe XD.</p>
                <Button className="m-auto w-48">Mulai Belajar</Button>
              </div>

            </div>
            <div className="group rounded-[2.5rem] border border-transparent hover:border-primary relative overflow-hidden grid grid-cols-1">
              <Image className="col-start-1 col-end-3 row-start-1" src="/images/programmer.png" alt="UI/UX Designer" width={500} height={500} />
              <h1 className="relative mb-8 flex items-center flex-col-reverse col-start-1 row-start-1 text-[#F5F5FF] font-bold text-5xl">PROGRAMMER</h1>
              <div className="sm:max-h-64 h-full px-10 py-6 absolute transition-transform group-hover:translate-y-0 translate-y-full lg:translate-y-[200%] lg:group-hover:translate-y-full text-primary bg-[#FFFFFF] grid gap-4">
                <h5 className="font-bold text-lg sm:text-xl">BELUM MEMILIKI PENGALAMAN DI DUNIA PROGRAMMING?</h5>
                <p className="text-sm">Kelas di SchooLabs tersedia bagi yang belum memiliki kemampuan programming (dasar) hingga yang sudah profesional. Temukan berbagai pilihan kursus yang dirancang untuk berbagai tingkat pengalaman di SchooLabs</p>
                <Button className="m-auto w-48">Mulai Belajar</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
