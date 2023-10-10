import { BadgeCheckIcon, BriefcaseIcon, GraduatingCapIcon, ShuffleIcon } from "@/components/icon/about-icon";
import { BottomIcon, RightIcon } from "@/components/icon/testimoni-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
   return (
      <>
         <section className="-mb-8 md:-mb-14 md:pb-4 about-hero h-[30rem] overflow-hidden rounded-b-3xl md:rounded-b-[2.5rem] flex flex-col justify-center items-center">
            <div className="md:mb-20 py-4 md:py-8 container lg:px-20 text-white gap-4 flex flex-col space-y-4">
               <h1 className="text-base font-semibold text-center md:text-left">Tentang SchooLabs</h1>
               <div className="flex flex-col items-center lg:items-start md:flex-row gap-4 justify-between">
                  <h1 className="text-center md:text-left max-w-lg text-4xl lg:text-5xl font-bold">Kami memiliki misi memberdayakan siswa di dunia IT</h1>
                  <p className="text-center md:text-left lg:ml-auto md:max-w-[20rem] lg:max-w-[25rem] text-sm sm:text-base font-medium">Kami adalah tim yang berdedikasi untuk membantu Anda mencapai potensi terbaik Anda dalam dunia pengembangan dan desain. Dengan pengalaman bertahun-tahun dalam industri ini, kami telah menyadari pentingnya pendidikan yang berkualitas dan berfokus pada praktik terbaik.</p>
               </div>
            </div>
         </section>
         <section className="mb-28">
            <div className="container lg:px-20">
               <div className="bg-[#FFF] grid mb-7 rounded-3xl shadow-2xl px-4 pb-4 md:px-20 pt-8 md:pt-10  md:pb-20">
                  <hr className="mx-auto h-[8px] w-56 rounded-full bg-primary"/>
                  <div className="my-10 flex flex-col items-center justify-center space-y-4">
                     <h1 className="text-4xl md:text-5xl font-bold text-center">Mengapa Memilih Kami?</h1>
                     <p className="text-base md:text-lg text-center">Kami tahu ada banyak pilihan kursus di luar sana, tetapi kami unggul dalam beberapa hal:</p>
                  </div>
                  <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
                     <div className="rounded-2xl bg-[#F5F5FF] flex flex-col space-y-6 px-4 md:px-8 py-10">
                        <BadgeCheckIcon />
                        <div className="grid gap-4">
                           <h3 className="text-2xl md:text-3xl font-semibold">Kualitas Terbaik</h3>
                           <p className="text-base">Kualitas adalah prioritas kami. Kami memastikan bahwa Anda mendapatkan pendidikan terbaik yang mungkin.</p>
                        </div>
                     </div>
                     <div className="rounded-2xl bg-[#FBEAE9] flex flex-col space-y-6 px-4 md:px-8 py-10">
                        <BriefcaseIcon />
                        <div className="grid gap-4">
                           <h3 className="text-2xl md:text-3xl font-semibold">Kesempatan Kerja</h3>
                           <p className="text-base">Bekerja sama dengan perusahaan terkemuka, kami membantu siswa kami mengejar karier yang sukses.</p>
                        </div>
                     </div>
                     <div className="rounded-2xl bg-[#E7F6EC] flex flex-col space-y-6 px-4 md:px-8 py-10">
                        <GraduatingCapIcon />
                        <div className="grid gap-4">
                           <h3 className="text-2xl md:text-3xl font-semibold">Kurikulum yang Relevan</h3>
                           <p className="text-base">Kurikulum yang selalu diperbarui sesuai standar industri, agar peserta didik siap untuk dunia IT yang terus berubah.</p>
                        </div>
                     </div>
                     <div className="rounded-2xl bg-[#F3FBFF] flex flex-col space-y-6 px-4 md:px-8 py-10">
                        <ShuffleIcon />
                        <div className="grid gap-4">
                           <h3 className="text-2xl md:text-3xl font-semibold">Fleksibelitas Belajar</h3>
                           <p className="text-base">Menawarkan berbagai pilihan kursus dan materi yang bersifat lifetime sehingga dapat diakses kapan saja dan dimana saja.</p>
                        </div>
                     </div>

                  </div>

               </div>
            </div>
         </section>
         <section className="my-28">
            <div className="container lg:px-20">
               <h1 className="text-center text-3xl md:text-4xl font-bold">Apa yang Kami Tawarkan</h1>
               <div className="mt-10 grid gap-8">
                  <div className="p-8 lg:p-14 shadow-xl rounded-2xl flex flex-col lg:flex-row gap-8">
                     <Image
                        quality={100}
                        src="/about-image/hero-UIX.svg" alt="UI/UX Designer"
                        className="w-full"
                        width={500}
                        height={500} />
                     <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-4xl font-semibold">UI/UX Designer</h3>
                        <p className="text-base md:text-lg">Tertarik untuk menjadi UI/UX designer? Gabunglah dengan kursus UI/UX design kami untuk mengasah keterampilan desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) Anda. Instruktur berpengalaman kami akan membimbing Anda melalui proyek digital praktis dan membantu Anda mempersiapkan portofolio yang memikat untuk karir di dunia desain.</p>
                     </div>
                  </div>
                  <div className="p-8 lg:p-14 shadow-xl rounded-2xl flex flex-col lg:flex-row-reverse gap-8">
                     <Image
                        quality={100}
                        src="/about-image/hero-dev.svg" 
                        className="w-full"
                        alt="Developer" width={500} height={500} />
                     <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-4xl font-semibold">Developer</h3>
                        <p className="text-base md:text-lg">Dalam rangka mendukung pemula hingga tingkat lanjut, kami menawarkan beragam kursus pengembangan web, aplikasi, dan perangkat lunak yang dipandu oleh para mentor yang ahli dan berpengalaman diindustri. Anda ingin memulai karir baru atau meningkatkan keterampilan, kursus-kursus kami membuka peluang untuk kesuksesan Anda di dunia teknologi yang selalu berubah.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="my-28">
            <div className="container lg:px-20 grid justify-items-center md:justify-items-start gap-8 md:gap-0 md:grid-cols-2">
               <div className="max-w-[26rem] flex flex-col space-y-3 md:space-y-6">
                  <h3 className="text-2xl text-center md:text-left">Visi Schoolabs</h3>
                  <div className="flex flex-col space-y-4">
                     <h5 className="text-3xl md:text-4xl text-primary text-center md:text-left font-bold"> Belajar Dengan Praktik Terbaik</h5>
                     <p className="text-base md:text-lg font-medium">Kami mengintegrasikan proyek dunia nyata dan studi kasus ke dalam kurikulum kami, memastikan Anda mendapatkan pengalaman praktis.</p>
                  </div>
               </div>
               <div className="max-w-[26rem] flex flex-col space-y-3 md:space-y-6">
                  <h3 className="text-2xl text-center md:text-left">Misi Schoolabs</h3>
                  <div className="flex flex-col space-y-4">
                     <h5 className="text-3xl md:text-4xl text-primary text-center md:text-left font-bold">Dukungan Tim Berpengalaman</h5>
                     <p className="text-base md:text-lg font-medium">Kami mengintegrasikan proyek dunia nyata dan studi kasus ke dalam kurikulum kami, memastikan Anda mendapatkan pengalaman praktis.</p>
                  </div>
               </div>
            </div>
         </section>
         <section className="relative overflow-hidden bg-[#E1E1FE]">
            <svg className="absolute bottom-0 left-5" width="500" height="252" viewBox="0 0 500 252" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.5" clipPath="url(#clip0_1015_9519)">
                  <path d="M494.311 176.135L349.984 319.355C346.339 322.97 341.397 325 336.244 325C331.091 325 326.149 322.97 322.504 319.355L280.736 277.908C277.094 274.291 275.048 269.387 275.048 264.273C275.048 259.159 277.094 254.255 280.736 250.638L355.816 176.135C359.458 172.518 361.504 167.614 361.504 162.5C361.504 157.386 359.458 152.482 355.816 148.865L280.736 74.3618C277.094 70.7448 275.048 65.8405 275.048 60.727C275.048 55.6134 277.094 50.7091 280.736 47.0921L322.504 5.64512C326.149 2.03048 331.091 0 336.244 0C341.397 0 346.339 2.03048 349.984 5.64512L494.311 148.865C497.954 152.482 500 157.386 500 162.5C500 167.614 497.954 172.518 494.311 176.135Z" fill="#F5F5FF" />
                  <path d="M250 77.6168L177.496 5.64512C173.851 2.03048 168.909 0 163.756 0C158.603 0 153.661 2.03048 150.016 5.64512L146.736 8.90012L5.68875 148.865C2.04618 152.482 0 157.386 0 162.5C0 167.614 2.04618 172.518 5.68875 176.135L150.016 319.355C153.661 322.97 158.603 325 163.756 325C168.909 325 173.851 322.97 177.496 319.355L328.675 169.335C329.579 168.44 330.296 167.376 330.785 166.205C331.274 165.034 331.526 163.779 331.526 162.512C331.526 161.245 331.274 159.99 330.785 158.819C330.296 157.648 329.579 156.584 328.675 155.689L250 77.6168ZM226.237 237.329L170.62 292.423C169.718 293.319 168.646 294.031 167.466 294.516C166.286 295.002 165.021 295.251 163.744 295.251C162.467 295.251 161.202 295.002 160.022 294.516C158.842 294.031 157.77 293.319 156.868 292.423L32.8291 169.311C31.9254 168.416 31.2086 167.352 30.7195 166.181C30.2304 165.01 29.9786 163.755 29.9786 162.488C29.9786 161.221 30.2304 159.965 30.7195 158.795C31.2086 157.624 31.9254 156.56 32.8291 155.664L156.868 32.5772C157.77 31.6805 158.842 30.9692 160.022 30.4838C161.202 29.9985 162.467 29.7486 163.744 29.7486C165.021 29.7486 166.286 29.9985 167.466 30.4838C168.646 30.9692 169.718 31.6805 170.62 32.5772L226.237 87.6711C228.047 89.4781 229.063 91.9226 229.063 94.4705C229.063 97.0184 228.047 99.4628 226.237 101.27L178.201 148.865C174.558 152.482 172.512 157.386 172.512 162.5C172.512 167.614 174.558 172.518 178.201 176.135L226.237 223.706C228.055 225.514 229.075 227.964 229.075 230.517C229.075 233.071 228.055 235.521 226.237 237.329Z" fill="#F5F5FF" />
               </g>
               <defs>
                  <clipPath id="clip0_1015_9519">
                     <rect width="500" height="325" fill="white" />
                  </clipPath>
               </defs>
            </svg>

            <div className="z-10 relative container lg:px-20 py-10">
               <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between">
                  <div className="max-w-xl flex flex-col gap-10">
                     <h3 className="text-3xl md:text-4xl font-bold">Gabunglah dengan Kami dan Mulai Bangun Masa Depan Anda</h3>
                     <p className="text-base md:text-lg">Kami berkomitmen untuk membantu Anda mencapai impian Anda dalam dunia pengembangan dan desain. Bergabunglah dengan kami hari ini dan mulailah perjalanan menuju kesuksesan Anda.</p>
                     <Button className="px-6 h-12 w-fit">Daftar Sekarang</Button>
                  </div>
                  <Image quality={100} width={400} height={400} src="/about-image/cta-hero.webp" alt="Join Us"/>
               </div>
            </div>
            <RightIcon stroke="#F5F5FF" className="absolute right-0 top-0"/>
         </section>
      </>
   )
}