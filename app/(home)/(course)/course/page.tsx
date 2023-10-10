import ClassCard from "@/components/class-card"
import FilterCourse from "@/components/course/filter-course"
import { CourseCards, PassionCards } from "@/types/data"
import Image from "next/image"


function Course() {
   return (
      <>
         <section className="my-8">
            <div className="container lg:px-20">
               <div className="flex space-y-6 flex-col">
                  <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-black">Belajar dengan harga terjangkau</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.88rem]">
                     {CourseCards.map((card, index) => (
                        <ClassCard
                           className="shadow-md border-none"
                           key={index}
                           card={card}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <section className="my-8">
            <div className="container lg:px-20">
               <div className="flex space-y-6 flex-col">
                  <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-black">Pilih jalur sesuai minatmu</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.12rem]">
                     {PassionCards.map((card, index) => (
                        <div key={index} className="relative grid-cols-1 flex flex-col-reverse overflow-hidden lg:max-w-[18.1875rem] min-h-[10.875rem] rounded-3xl shadow-md">
                           <Image className="col-start-1 col-end-3 row-start-1"
                              fill
                              objectFit="cover"
                              src={card.image}
                              alt="image"
                           />
                           <p className="relative col-start-1 row-start-1 pl-4 py-2  text-2xl font-semibold text-[#FFF]">{card.title}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <section className="my-8">
            <div className="container lg:px-20">
               <div className="flex flex-col space-y-6">
                  <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-black">Temukan materi yang ingin kamu pelajari</h1>
                  <div className="flex flex-col lg:flex-row gap-10">
                     <FilterCourse/>
                     <div className="flex-[1_0_0%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                        {Array.from({ length: 3 }, (_, index) => CourseCards.map((card, cardIndex) => (
                           <ClassCard
                              className="shadow-md border-none"
                              title="text-xl"
                              key={`card_${index}_${cardIndex}`}
                              card={card}
                           />
                        )))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Course