import ClassCard from "@/components/class-card";
import FilterCourse from "@/components/course/filter-course";
import { CourseCards, PassionCards } from "@/types/data";
import Image from "next/image";

function Course() {
  return (
    <>
      <section className="my-8">
        <div className="container lg:px-20">
          <div className="flex flex-col space-y-6">
            <h1 className="text-center text-3xl font-semibold text-black md:text-left md:text-4xl">
              Belajar dengan harga terjangkau
            </h1>
            <div className="grid grid-cols-1 gap-[1.88rem] md:grid-cols-2 lg:grid-cols-4">
              {CourseCards.map((card, index) => (
                <ClassCard
                  className="border-none shadow-md"
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
          <div className="flex flex-col space-y-6">
            <h1 className="text-center text-3xl font-semibold text-black md:text-left md:text-4xl">
              Pilih jalur sesuai minatmu
            </h1>
            <div className="grid grid-cols-1 gap-[1.12rem] md:grid-cols-2 lg:grid-cols-4">
              {PassionCards.map((card, index) => (
                <div
                  key={index}
                  className="relative flex min-h-[10.875rem] grid-cols-1 flex-col-reverse overflow-hidden rounded-3xl shadow-md lg:max-w-[18.1875rem]"
                >
                  <Image
                    className="col-start-1 col-end-3 row-start-1"
                    fill
                    objectFit="cover"
                    src={card.image}
                    alt="image"
                  />
                  <p className="relative col-start-1 row-start-1 py-2 pl-4  text-2xl font-semibold text-[#FFF]">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="container lg:px-20">
          <div className="flex flex-col space-y-6">
            <h1 className="text-center text-3xl font-semibold text-black md:text-left md:text-4xl">
              Temukan materi yang ingin kamu pelajari
            </h1>
            <div className="flex flex-col gap-10 lg:flex-row">
              <FilterCourse />
              <div className="grid flex-[1_0_0%] grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }, (_, index) =>
                  CourseCards.map((card, cardIndex) => (
                    <ClassCard
                      className="border-none shadow-md"
                      title="text-xl"
                      key={`card_${index}_${cardIndex}`}
                      card={card}
                    />
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
