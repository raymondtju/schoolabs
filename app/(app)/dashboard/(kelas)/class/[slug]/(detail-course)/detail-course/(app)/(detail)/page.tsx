import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

function DetailCourse() {
  return (
    <>
      <div className="grid pl-[26rem] pr-20">
        <div className="flex items-center justify-between pb-6 pt-2">
          <h1 className="text-3xl font-bold">Pengenalan UX Research</h1>
          <div className="flex gap-6">
            <button className="h-8 w-8">
              <ChevronLeftCircle size={32} />
            </button>
            <button className="h-8 w-8">
              <ChevronRightCircle size={32} />
            </button>
          </div>
        </div>
        <div className="h-[26.625rem] w-[50.5rem] bg-gray-100"></div>
        <div className="flex items-center justify-between py-6">
          <p className="p-4 text-sm font-medium">Transcript</p>
          <Button className="h-12" size={"lg"}>
            Tandai Selesai
          </Button>
        </div>
        <hr />
        <div className="mt-2 grid gap-6 text-base leading-[28px]">
          <p>
            <span className="font-semibold text-gray-900">Pembicara: </span>
            Selamat datang di video ini tentang
            {
              "Pengenalan Pengalaman Pengguna (UX) dan Pentingnya Penelitian UX."
            }{" "}
            Dalam video ini, kita akan menjelaskan apa itu Pengalaman Pengguna
            (UX) dan mengapa penelitian UX sangat penting dalam pengembangan
            produk dan layanan.
          </p>
          <div>
            <p className="font-semibold text-gray-900">
              Apa itu Pengalaman Pengguna (UX)?
            </p>
            <p>
              Pengalaman Pengguna, atau yang sering disebut sebagai UX, adalah
              bagaimana seseorang merasa saat berinteraksi dengan produk atau
              layanan. Ini mencakup semua aspek interaksi, mulai dari desain
              antarmuka hingga kenyamanan pengguna, kecepatan, dan efektivitas
              penggunaan. UX bertujuan untuk membuat pengguna merasa nyaman,
              puas, dan berhasil saat menggunakan produk atau layanan.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Mengapa UX Penting?</p>
            <ol className="ml-5 grid list-decimal gap-3">
              <li>
                Kepuasan Pengguna: Produk atau layanan yang baik dalam UX akan
                membuat pengguna senang dan puas. Pengguna yang puas lebih
                cenderung untuk kembali menggunakan produk tersebut dan
                merekomendasikannya kepada orang lain.
              </li>
              <li>
                Peningkatan Retensi: UX yang baik dapat meningkatkan retensi
                pengguna. Pengguna akan lebih lama menggunakan produk atau
                layanan Anda jika mereka memiliki pengalaman yang positif.
              </li>
              <li>
                Efisiensi dan Efektivitas: UX yang baik dapat meningkatkan
                efisiensi dan efektivitas penggunaan produk atau layanan. Ini
                dapat menghemat waktu dan usaha pengguna.
              </li>
              <li>
                UX yang baik menciptakan reputasi positif bagi perusahaan Anda.
                Pengalaman yang buruk dapat merusak citra perusahaan dan
                berdampak negatif pada penjualan dan kepercayaan pelanggan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailCourse;
