"use client"
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@/components/ui/accordion";


function FilterCourse() {
   return (
      <div className="lg:sticky lg:top-[105px] h-fit px-4 py-6 flex flex-col gap-10 flex-[0_0_auto] lg:w-1/4 border rounded-xl">
         <Accordion multiple>
            <AccordionItem className="border-none">
               <AccordionHeader>
                  <h5 className="text-lg font-semibold">Urutkan</h5>
               </AccordionHeader>
               <AccordionPanel>
                  <div className="mt-3 flex flex-col space-y-3 text-gray-700">
                     <div className="flex space-x-2">
                        <input id="lowest" type="checkbox" />
                        <label htmlFor="lowest">Harga Terendah</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="popular" type="checkbox" />
                        <label htmlFor="popular">Popularitas Tertinggi</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="latest" type="checkbox" />
                        <label htmlFor="latest">Materi Terbaru</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="promo" type="checkbox" />
                        <label htmlFor="promo">Sedang Promo</label>
                     </div>
                  </div>
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-none">
               <AccordionHeader>
                  <h5 className="text-lg font-semibold">Kategori Bidang</h5>
               </AccordionHeader>
               <AccordionPanel>
                  <div className="mt-3 flex flex-col space-y-3 text-gray-700">
                     <div className="flex space-x-2">
                        <input id="designer" type="checkbox" />
                        <label htmlFor="designer">UI/UX Design</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="developer" type="checkbox" />
                        <label htmlFor="developer">Programming</label>
                     </div>
                  </div>
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-none">
               <AccordionHeader>
                  <h5 className="text-lg font-semibold">Tingkat Kesulitan</h5>
               </AccordionHeader>
               <AccordionPanel>
                  <div className="mt-3 flex flex-col space-y-3 text-gray-700">
                     <div className="flex space-x-2">
                        <input id="beginner" type="checkbox" />
                        <label htmlFor="beginner">Pemula</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="intermediate" type="checkbox" />
                        <label htmlFor="intermediate">Menengah</label>
                     </div>
                     <div className="flex space-x-2">
                        <input id="advance" type="checkbox" />
                        <label htmlFor="advance">Mahir</label>
                     </div>
                  </div>
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default FilterCourse;