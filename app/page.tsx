
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="relative container flex items-center max-h-full h-[42rem]">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-5xl font-bold">
              Melangkah Menuju Karir Barumu Bersama
              <span className="text-primary"> SCHOOLABS</span>
            </h1>
            <p className="text-lg text-[#475367]">
              Schoolabs membantu kamu meraih karir yang kamu inginkan di industri teknologi sebagai UI//UX Designer dan Developer.
            </p>
            <div>
              <Button size={"lg"} >Daftar Sekarang</Button>
            </div>
          </div>
          <Image className="absolute z-10 right-0 top-0" width={650} height={650} src="/images/hero-landing.webp" alt="hero-image" />
        </div>
      </section>
    </>
  );
}
