import { Button } from "@/components/ui/button";

export default function Onboarding() {
   return (
      <>
         <form action="#" className="max-w-lg w-[33rem] border rounded-3xl bg-[#FFF] p-8">
            <div className="grid justify-items-center">
               <div className="flex flex-col gap-2 max-w-sm">
                  <h3 className="text-4xl font-semibold tracking-tighter text-center">Optimalkan belajarmu</h3>
                  <p className="text-base text-center">Dengan menambahkan informasi ini kami bisa menyarankan kelas yang sesuai untukmu.</p>
               </div>
               <div className="w-full grid">

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