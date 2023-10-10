import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Onboarding() {
   return (
      <>
         <form action="#" className="sm:max-w-lg w-full border  rounded-3xl bg-[#FFF] p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2 max-w-sm">
                  <h3 className="text-4xl font-semibold tracking-tighter text-center">Optimalkan belajarmu</h3>
                  <p className="text-base text-center">Dengan menambahkan informasi ini kami bisa menyarankan kelas yang sesuai untukmu.</p>
               </div>
               <div className="my-6 w-full grid gap-6">
                  <div className="flex flex-col space-y-1">
                     <label className="text-sm" htmlFor="karir">Apa karir yang ingin kamu capai?</label>
                     <Button type="button" className="h-12 border border-[#344054] text-base font-semibold justify-between" variant={"outline"}>
                        UX Researcher
                        <ChevronDown size={18} />

                     </Button>
                  </div>
                  <div className="flex flex-col space-y-1">
                     <label className="text-sm" htmlFor="karir">Seberapa mahir kamu saat ini?</label>
                     <Button type="button" className="h-12 border border-[#344054] text-base font-semibold justify-between" variant={"outline"}>
                        Pemula
                        <ChevronDown size={18} />

                     </Button>
                  </div>
               </div>
               <div className="w-full grid gap-8 grid-cols-4">
                  <Button size={"lg"} variant={"outline"} className="col-span-2 font-semibold uppercase text-[#1D2739]">
                     Lewati
                  </Button>
                  <Button size={"lg"} className="col-span-2 font-semibold uppercase bg-primary/40 hover:bg-primary">
                     Kirim
                  </Button>
               </div>
            </div>
         </form>
      </>
   )
}