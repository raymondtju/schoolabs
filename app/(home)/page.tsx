import StarsIcon from "@/components/icon/stars-icon";
import {
  BottomIcon,
  RightIcon,
} from "@/components/icon/testimoni-icon";
import { EllipseIcon } from "@/components/icon/usp-icon";
import TestimoniCards from "@/components/testimoni-cards";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { USPCards } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="">
        <div className="container relative flex h-[42rem] max-h-full items-center lg:px-20">
          <div className="flex max-w-xl flex-col gap-4">
            <h1 className="text-5xl font-bold text-[#1D2739] md:text-[3.25rem] md:leading-[3.5rem]">
              Melangkah Menuju Karir Barumu Bersama
              <span className="text-primary"> SCHOOLABS</span>
            </h1>
            <p className="max-w-xl text-base md:text-lg text-[#475367]">
              Schoolabs membantu kamu meraih karir yang kamu inginkan di
              industri teknologi sebagai UI//UX Designer dan Developer.
            </p>
            <div className="grid space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  className="object-contain"
                  width={200}
                  height={5}
                  src="/images/avatar-group.png"
                  alt="avatar-group"
                />
                <span className="inline-flex items-center gap-3">
                  <StarsIcon />
                  <p className="text-sm font-medium">4.9/5.0 dari 500+ reviews</p>
                </span>
              </div>
              <div className="flex gap-3">

              <Button asChild variant={"outline"} className="font-semibold text-[#4B4EFC] hover:text-[#4B4EFC]/90 border-[#4B4EFC] h-10 w-fit px-6 py-4 shadow-current">
                <Link href="#">
                  Lihat Kelas
                </Link>

              </Button>
              <Button asChild className="font-semibold h-10 w-fit px-6 py-4 shadow-current hover:bg-primary/90">
              <Link href="/login">
                  Daftar Sekarang
              </Link>
                </Button>
              </div>
            </div>
          </div>
          <Image
            quality={100}
            className="absolute right-0 top-0 z-10 hidden lg:block"
            width={650}
            height={650}
            src="/images/hero-landing.webp"
            alt="hero-image"
          />
        </div>
      </section>
      <section className="my-28">
        <div className="container lg:px-20">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-primary px-6 py-9 text-white md:h-40 md:flex-row">
            <div className="grid w-[15rem] max-w-sm place-content-center justify-items-center gap-2">
              <p className="text-4xl font-bold lg:text-5xl">1000+</p>
              <p className="text-2xl font-medium">Siswa</p>
            </div>
            <hr className="h-[3px] w-2/3 shrink-0 rounded-full bg-white md:h-full md:w-[3px]" />

            <div className="grid w-[15rem] max-w-sm place-content-center justify-items-center gap-2">
              <p className="text-4xl font-bold lg:text-5xl">500+</p>
              <p className="text-2xl font-medium">Materi</p>
            </div>
            <hr className="h-[3px] w-2/3 shrink-0 rounded-full bg-white md:h-full md:w-[3px]" />
            <div className="grid w-[15rem] max-w-sm place-content-center justify-items-center gap-2">
              <p className="text-4xl font-bold lg:text-5xl">30</p>
              <p className="text-2xl font-medium">Kelas</p>
            </div>

            <hr className="h-[3px] w-2/3 shrink-0 rounded-full bg-white md:h-full md:w-[3px]" />
            <div className="grid w-[15rem] max-w-sm place-content-center justify-items-center gap-2">
              <span className="text-4xl font-bold lg:text-5xl">10</span>
              <p className="text-2xl font-medium">Mentor</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative my-28 bg-[#9B9DFD] overflow-hidden">
        <div className="container relative z-10 py-20 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
            <div className="flex flex-wrap gap-8 lg:justify-start">
              {USPCards.slice(0, 2).map((card, index) => (
                <>
                  <div
                    key={index}
                    className="flex lg:max-w-[26rem] flex-col gap-4 rounded-3xl bg-[#F3FBFF] px-8 py-6 shadow-lg lg:flex-row"
                  >
                    <div className="h-fit w-fit rounded-md bg-primary p-2">
                      <card.icon />
                    </div>
                    <div className="grid">
                      <h5 className="space-y-4 text-2xl font-bold text-primary">
                        {card.title}
                      </h5>
                      <p className="text-base text-[#475367] ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end">
              {USPCards.slice(2, 4).map((card, index) => (
                <>
                  <div
                    key={index}
                    className="flex lg:max-w-[26rem] flex-col gap-4  rounded-3xl bg-[#F3FBFF] px-8 py-6 shadow-lg lg:flex-row"
                  >
                    <div className="h-fit w-fit rounded-md bg-primary p-2">
                      <card.icon />
                    </div>
                    <div className="grid">
                      <h5 className="space-y-4 text-2xl font-bold text-primary">
                        {card.title}
                      </h5>
                      <p className="text-base text-[#475367] ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <EllipseIcon className="absolute bottom-0 " />
        <EllipseIcon className="absolute right-0 top-0 rotate-180" />
      </section>
      <section className="my-28">
        <div className="container lg:px-20">
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            Pilih Jalur Karirmu!
          </h1>
          <div className="mt-8 flex flex-col items-center justify-around gap-4 md:flex-row">
            <div className="group relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-transparent hover:border-primary">
              <Image
                quality={100}
                className="col-start-1 col-end-3 row-start-1"
                src="/images/uiux.webp"
                alt="UI/UX Designer"
                width={500}
                height={500}
              />
              <h1 className="relative col-start-1 row-start-1 mb-8 flex flex-col-reverse items-center text-3xl font-bold text-[#F5F5FF]">
                UI/UX DESIGNER
              </h1>
              <div className="absolute grid h-full translate-y-full gap-4 bg-[#FFFFFF] px-8 py-6 text-primary transition-transform group-hover:translate-y-0 lg:max-h-[20rem] lg:translate-y-[200%] lg:group-hover:translate-y-[60%]">
                <h5 className="text-base font-bold sm:text-xl">
                  BELUM MEMILIKI PENGALAMAN DI DUNIA DESAIN?
                </h5>
                <p className="text-base">
                  Mulai dengan mempelajari dasar dari UI/UX Design. Ambil kelas
                  dasar visual dan skill UI Design dengan menggunakan tools yang
                  sesuai dengan standar industri desain seperti Figma, Sketch
                  dan Adobe XD.
                </p>
                <Button className="m-auto w-48">Mulai Belajar</Button>
              </div>
            </div>
            <div className="group relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-transparent hover:border-primary">
              <Image
                quality={100}
                className="col-start-1 col-end-3 row-start-1"
                src="/images/programmer.webp"
                alt="UI/UX Designer"
                width={500}
                height={500}
              />
              <h1 className="relative col-start-1 row-start-1 mb-8 flex flex-col-reverse items-center text-3xl font-bold text-[#F5F5FF]">
                PROGRAMMER
              </h1>
              <div className="absolute grid h-full translate-y-full gap-4 bg-[#FFFFFF] px-8 py-6 text-primary transition-transform group-hover:translate-y-0 lg:max-h-[20rem] lg:translate-y-[200%] lg:group-hover:translate-y-[60%]">
                <h5 className="text-base font-bold sm:text-xl">
                  BELUM MEMILIKI PENGALAMAN DI DUNIA PROGRAMMING?
                </h5>
                <p className="text-base">
                  Kelas di SchooLabs tersedia bagi yang belum memiliki kemampuan
                  programming (dasar) hingga yang sudah profesional. Temukan
                  berbagai pilihan kursus yang dirancang untuk berbagai tingkat
                  pengalaman di SchooLabs
                </p>
                <Button className="m-auto w-48">Mulai Belajar</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-28">
        <div className="container grid lg:px-20">
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            Bingung Mau Belajar yang Mana?
            <span className="text-primary">
              {" "}
              Eksplorasi Kelas Dasar Dulu Aja
            </span>
          </h1>
          <div className="my-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card className="border-none shadow-md" key={i}>
                <CardHeader className="p-0">
                  <Image
                    className="w-full"
                    src="/cards-image/dasarux.webp"
                    alt="Course dasar ux"
                    width={350}
                    height={350}
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xl font-bold">Dasar UX Research</p>
                  <div className="flex gap-5">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Rp - {"(Gratis)"}
                    </p>
                    <span className="inline-flex items-center gap-3">
                      <StarsIcon />
                      <p className="text-xs text-muted-foreground">
                        4.9/5.0 {"(500)"}
                      </p>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M5.41667 10.5H3.75C3.05964 10.5 2.5 11.0596 2.5 11.75V16.75C2.5 17.4404 3.05964 18 3.75 18H5.41667C6.10702 18 6.66667 17.4404 6.66667 16.75V11.75C6.66667 11.0596 6.10702 10.5 5.41667 10.5Z"
                      fill="#4B4EFC"
                    />
                    <path
                      d="M16.25 3H14.5833C13.893 3 13.3333 3.55964 13.3333 4.25V16.75C13.3333 17.4404 13.893 18 14.5833 18H16.25C16.9404 18 17.5 17.4404 17.5 16.75V4.25C17.5 3.55964 16.9404 3 16.25 3Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M10.8333 6.33333H9.16667C8.47631 6.33333 7.91667 6.89298 7.91667 7.58333V16.75C7.91667 17.4404 8.47631 18 9.16667 18H10.8333C11.5237 18 12.0833 17.4404 12.0833 16.75V7.58333C12.0833 6.89298 11.5237 6.33333 10.8333 6.33333Z"
                      fill="#D0D5DD"
                    />
                  </svg>
                  <p className="text-sm text-muted-foreground">
                    Level Dasar - Pemula
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button
            size={"icon"}
            className="mx-auto w-fit border-2 border-[#4B4EFC] px-2 font-semibold text-primary hover:bg-[#4B4EFC]/5 hover:text-[#4B4EFC]/90"
            variant={"outline"}
          >
            Lihat Semua Kelas{""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </section>
      <section className="relative overflow-hidden my-28 bg-[#9B9DFD]">
        <BottomIcon className="absolute bottom-0 left-20" />
        <div className="container relative z-10  py-32 lg:px-20">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-[#FFF]">
            Kesan Peserta yang Belajar Bersama Kami
          </h1>
          <div className="mt-6 py-6">
            <TestimoniCards/>
          </div>
        </div>
        <RightIcon className="absolute right-0 top-0" />
      </section>
      <section className="my-28">
        <div className="container lg:px-20">
          <h1 className="text-center text-4xl font-bold">
            Mitra yang Bekerjasama dengan Kami
          </h1>
          <div className="mt-10 grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-6">
            <Image
              src="/company-image/google.webp"
              alt="Google"
              width={130}
              height={130}
            />
            <Image
              src="/company-image/gojek.webp"
              alt="Gojek"
              width={130}
              height={130}
            />
            <Image
              src="/company-image/microsoft.webp"
              alt="Microsoft"
              width={130}
              height={130}
            />
            <Image
              src="/company-image/indosat.webp"
              alt="Indosat"
              width={130}
              height={130}
            />
            <Image
              src="/company-image/bangkit.webp"
              alt="Bangkit"
              width={130}
              height={130}
            />
            <Image
              src="/company-image/merdeka.webp"
              alt="Kampus Merdeka"
              width={130}
              height={130}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5FF]">
        <div className="container relative py-20 lg:px-20">
          <div className="relative z-10 flex flex-col lg:flex-row">
            <Image
              quality={100}
              src="/images/cta-hero.webp"
              alt="Call to Action"
              width={450}
              height={450}
            />
            <div className="flex flex-col justify-center gap-4">
              <h1 className="mt-4 text-3xl md:text-4xl font-bold">
                Masih Belum Tahu Apa Minat Karirmu?
              </h1>
              <p className="text-base text-muted">
                Tidak usah khawatir, education counselor kami siap untuk
                berbincang denganmu kapanpun kamu butuhkan. Kami dengan senang
                hati menjawab pertanyaanmu, memberikan panduan mengenai proses
                pendaftaran, dan membantu kamu mengejar impianmu. Diskusi
                melalui Whatsapp, dan kami akan dengan senang hati membantu
                perjalanan pendidikanmu.
              </p>
              <Button className="mt-6 h-12 w-fit gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.39002 4.05045L4.92556 3.51491C6.09713 2.34334 7.99662 2.34334 9.1682 3.51491L10.0971 4.44379C11.052 5.39873 11.2512 6.87404 10.5836 8.04802L10.5287 8.14455C9.99391 9.08509 9.99645 10.249 10.6308 11.1255C10.9468 11.5622 11.3039 12.0145 11.6431 12.3537C11.9823 12.693 12.4346 13.05 12.8713 13.366C13.7478 14.0004 14.9117 14.0029 15.8523 13.4681L15.9488 13.4132C17.1228 12.7456 18.5981 12.9448 19.553 13.8997L20.4819 14.8286C21.6535 16.0002 21.6535 17.8997 20.4819 19.0713L19.9464 19.6068C19.3838 20.1694 18.6173 20.4828 17.8437 20.2969C16.1904 19.8996 13.0045 18.665 9.1682 14.8286C5.33186 10.9923 4.09723 7.80637 3.6999 6.1531C3.51397 5.37948 3.82741 4.61305 4.39002 4.05045Z"
                    fill="white"
                  />
                </svg>
                Hubungi Sekarang
              </Button>
            </div>
          </div>
          <BottomIcon
            className="absolute right-0 top-14"
            width={400}
            height={500}
            viewBox="0 0 474 700"
          />
        </div>
      </section>
    </>
  );
}
