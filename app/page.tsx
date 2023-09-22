
import StarsIcon from "@/components/icon/stars-icon";
import { BottomIcon, ButtonIconLeft, ButtonIconRight, RightIcon } from "@/components/icon/testimoni-icon";
import { BadgeIcon, ClockIcon, EllipseIcon, SuitcaseIcon, SupportIcon } from "@/components/icon/usp-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
              <Button className="w-fit hover:bg-primary/90 h-10 py-4 px-6 shadow-current">Daftar Sekarang</Button>
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
          <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-around items-center">

            <div className="group rounded-[2.5rem] border border-transparent  hover:border-primary relative overflow-hidden grid grid-cols-1">
              <Image className="col-start-1 col-end-3 row-start-1" src="/images/uiux.webp" alt="UI/UX Designer" width={500} height={500} />
              <h1 className="relative mb-8 flex items-center flex-col-reverse col-start-1 row-start-1 text-[#F5F5FF] font-bold text-5xl">UI/UX DESIGNER</h1>
              <div className="sm:max-h-64 h-full px-10 py-6 absolute transition-transform group-hover:translate-y-0 translate-y-full lg:translate-y-[200%] lg:group-hover:translate-y-full text-primary bg-[#FFFFFF] grid gap-4">
                <h5 className="font-bold text-lg sm:text-xl">BELUM MEMILIKI PENGALAMAN DI DUNIA DESAIN?</h5>
                <p className="text-sm">Mulai dengan mempelajari dasar dari UI/UX Design. Ambil kelas dasar visual dan skill UI Design dengan menggunakan tools yang sesuai dengan standar industri desain seperti Figma, Sketch dan Adobe XD.</p>
                <Button className="m-auto w-48">Mulai Belajar</Button>
              </div>

            </div>
            <div className="group rounded-[2.5rem] border border-transparent hover:border-primary relative overflow-hidden grid grid-cols-1">
              <Image className="col-start-1 col-end-3 row-start-1" src="/images/programmer.webp" alt="UI/UX Designer" width={500} height={500} />
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
      <section className="my-28">
        <div className="container md:px-20 grid">
          <h1 className="text-center text-4xl font-bold">
            Bingung Mau Belajar yang Mana?
            <span className="text-primary"> Eksplorasi Kelas Dasar Dulu Aja</span>
          </h1>
          <div className="my-8 flex justify-center flex-wrap gap-7">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card className="max-w-xs w-[17rem] shadow-md border-none" key={i}>
                <CardHeader className="p-0">
                  <Image src="/cards-image/dasarux.webp" alt="Course dasar ux" width={350} height={350} />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xl font-bold">Dasar UX Research</p>
                  <div className="flex gap-5">
                    <p className="font-semibold text-sm text-muted-foreground">Rp - {"(Gratis)"}</p>
                    <span className="inline-flex items-center gap-3">
                      <StarsIcon />
                      <p className="text-xs text-muted-foreground">4.9/5.0 {"(500)"}</p>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M5.41667 10.5H3.75C3.05964 10.5 2.5 11.0596 2.5 11.75V16.75C2.5 17.4404 3.05964 18 3.75 18H5.41667C6.10702 18 6.66667 17.4404 6.66667 16.75V11.75C6.66667 11.0596 6.10702 10.5 5.41667 10.5Z" fill="#4B4EFC" />
                    <path d="M16.25 3H14.5833C13.893 3 13.3333 3.55964 13.3333 4.25V16.75C13.3333 17.4404 13.893 18 14.5833 18H16.25C16.9404 18 17.5 17.4404 17.5 16.75V4.25C17.5 3.55964 16.9404 3 16.25 3Z" fill="#D0D5DD" />
                    <path d="M10.8333 6.33333H9.16667C8.47631 6.33333 7.91667 6.89298 7.91667 7.58333V16.75C7.91667 17.4404 8.47631 18 9.16667 18H10.8333C11.5237 18 12.0833 17.4404 12.0833 16.75V7.58333C12.0833 6.89298 11.5237 6.33333 10.8333 6.33333Z" fill="#D0D5DD" />
                  </svg>
                  <p className="text-sm text-muted-foreground">Level Dasar - Pemula</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button size={"icon"} className="mx-auto px-2 w-fit border-2 border-[#4B4EFC] hover:bg-[#4B4EFC]/5 hover:text-[#4B4EFC]/90 text-primary font-semibold" variant={"outline"}>
            Lihat Semua Kelas{""}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

          </Button>
        </div>
      </section>
      <section className="relative bg-[#9B9DFD] my-28">
        <BottomIcon className="absolute bottom-0 left-20" />
        <div className="z-10 relative container md:px-20 py-32 grid place-content-center">
          <h1 className="text-center text-[#FFF] text-4xl font-bold">
            Kesan Peserta yang Belajar Bersama Kami
          </h1>
          <div className="mt-6 py-6 px-10">
            <div className="my-4 mr-4 flex justify-end gap-8">
              <Button size={"icon"} className="w-10 h-10 pt-[0.4rem] rounded-full bg-[#F5F5FF] hover:bg-[#F5F5FF]/90">
                <ButtonIconLeft/>
              </Button>
              <Button size={"icon"} className="w-10 h-10 pt-[0.4rem] rounded-full bg-[#F5F5FF] hover:bg-[#F5F5FF]/90">
                <ButtonIconRight/>
              </Button>
            </div>
            <div className="max-w-[64rem] max-h-[24rem] h-full flex bg-[#F3FBFF] rounded-3xl">
              <Image className="object-cover rounded-l-3xl" src="/testimoni-image/ux.png" alt="testimoni budi" width={350} height={350} />
              <div className="px-6 py-8 grid">
                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="64" height="49" viewBox="0 0 64 49" fill="none">
                  <path d="M30.1137 0V14.5516C30.1137 18.6835 29.3053 22.9053 27.6884 27.2168C26.1165 31.4835 24.0056 35.5256 21.3558 39.3432C18.706 43.1158 15.8091 46.327 12.6653 48.9768L0 41.4989C2.24561 37.9509 4.22175 34.021 5.92842 29.7095C7.68 25.3979 8.55579 20.3902 8.55579 14.6863V0H30.1137ZM64 0V14.5516C64 18.6835 63.1916 22.9053 61.5747 27.2168C60.0028 31.4835 57.8919 35.5256 55.2421 39.3432C52.5923 43.1158 49.673 46.327 46.4842 48.9768L33.8189 41.4989C36.1095 37.9509 38.1081 34.021 39.8147 29.7095C41.5663 25.3979 42.4421 20.3902 42.4421 14.6863V0H64Z" fill="#4B4EFC" />
                </svg>
                <div className="pb-6 grid gap-1">
                  <h1 className="font-bold text-2xl">Raply Masyukur</h1>
                  <p className="text-xl">Siswa UI/UX Design Mastery</p>
                </div>
                <p className="text-base text-muted">“Saya khusus mendedikasikan waktu saya untuk belajar dasar UI/UX. Di SchooLabs belajarnya step by step, dan sudah tersusun dengan rapi jadi lebih mudah untuk membuat perencanaan pembelajaran. Kalau ada materi yang membuat bingung atau susah dimengerti kita langsung bisa konsultasi dengan para mentor yang sangat berpengalaman”</p>
                <Separator className="mt-8" orientation="horizontal"/>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-primary"/>
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#F3FBFF]"/>
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#F3FBFF]"/>
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#F3FBFF]"/>
            </div>
          </div>
        </div>
        <RightIcon className="absolute right-0 top-0" />
      </section>
      <section>
        <div className="container md:px-20">
          <h1 className="text-center text-4xl  font-bold">
            Mitra yang Bekerjasama dengan Kami
          </h1 >
          <div className="mt-8 grid justify-items-center grid-cols-1 lg:grid-cols-6">
            <Image src="/company-image/google.png" alt="Google" width={130} height={130}/>
            <Image src="/company-image/gojek.png" alt="Gojek" width={130} height={130}/>
            <Image src="/company-image/microsoft.png" alt="Microsoft" width={130} height={130}/>
            <Image src="/company-image/indosat.png" alt="Indosat" width={130} height={130}/>
            <Image src="/company-image/bangkit.png" alt="Bangkit" width={130} height={130}/>
            <Image src="/company-image/merdeka.png" alt="Kampus Merdeka" width={130} height={130}/>
          </div>
        </div>
      </section>
    </>
  );
}
