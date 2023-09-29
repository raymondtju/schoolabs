"use client"
import { Separator } from "@/components/ui/separator";
import {
   ButtonIconLeft,
   ButtonIconRight,
} from "@/components/icon/testimoni-icon";
import { Button } from "./ui/button";
import Image from "next/image";
import useEmblaCarousel, {
   EmblaCarouselType,
} from 'embla-carousel-react';
import AutoPlay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react";
import { CardsTestimoni } from "@/types/data";

export default function TestimoniCards() {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()])
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
   const [selectedIndex, setSelectedIndex] = useState(0)
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

   const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
   )
   const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
   )
   const scrollTo = useCallback(
      (index: number) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi]
   )

   const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList())
   }, [])

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
   }, [])

   useEffect(() => {
      if (!emblaApi) return

      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
   }, [emblaApi, onInit, onSelect])

   return (
      <>
         {/* Button */}
         <div className="my-4 mr-4 flex justify-end gap-8">
            <Button
               onClick={scrollPrev} disabled={prevBtnDisabled}
               size={"icon"}
               className="h-10 w-10 rounded-full bg-[#F5F5FF] pt-[0.4rem] hover:bg-[#F5F5FF]/90"
            >
               <ButtonIconLeft />
            </Button>
            <Button
               onClick={scrollNext} disabled={prevBtnDisabled}
               size={"icon"}
               className="h-10 w-10 rounded-full bg-[#F5F5FF] pt-[0.4rem] hover:bg-[#F5F5FF]/90"
            >
               <ButtonIconRight />
            </Button>
         </div>

         {/* Content */}



         <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-4 touch-pan-y">
               {CardsTestimoni.map((card, i) => (
                  <div key={i} className="snap-center flex-[0_0_100%] min-w-0 ">
                     <div className="bg-[#F3FBFF] rounded-3xl h-full flex flex-col lg:flex-row ">

                     <div className="contents lg:max-w-7xl w-full">
                        <Image
                           objectFit="cover"
                           quality={100}
                           width={350}
                           height={350}
                           className="w-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                           src={`${card.image}.webp`}
                           alt={`testimoni ${card.name}`}
                        />
                     </div>
                     <div className="grid px-6 py-8">
                        <svg
                           className="w-12 md:w-20 h-full ml-auto"
                           xmlns="http://www.w3.org/2000/svg"
                           width="64"
                           height="49"
                           viewBox="0 0 64 49"
                           fill="none"
                        >
                           <path
                              d="M30.1137 0V14.5516C30.1137 18.6835 29.3053 22.9053 27.6884 27.2168C26.1165 31.4835 24.0056 35.5256 21.3558 39.3432C18.706 43.1158 15.8091 46.327 12.6653 48.9768L0 41.4989C2.24561 37.9509 4.22175 34.021 5.92842 29.7095C7.68 25.3979 8.55579 20.3902 8.55579 14.6863V0H30.1137ZM64 0V14.5516C64 18.6835 63.1916 22.9053 61.5747 27.2168C60.0028 31.4835 57.8919 35.5256 55.2421 39.3432C52.5923 43.1158 49.673 46.327 46.4842 48.9768L33.8189 41.4989C36.1095 37.9509 38.1081 34.021 39.8147 29.7095C41.5663 25.3979 42.4421 20.3902 42.4421 14.6863V0H64Z"
                              fill={i % 2 !== 0 ? "#D42620" : "#4B4EFC"}
                           />
                        </svg>
                        <div className="grid items-center pb-4">
                           <h1 className="text-2xl font-bold">{card.name}</h1>
                           <p className="text-xl">{card.role}</p>
                        </div>
                        <p className="text-base text-muted">
                           {card.text}
                        </p>
                        <Separator className="hidden lg:block mt-2" orientation="horizontal" />
                     </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center gap-2">
               {scrollSnaps.map((_, index) => (
                  <button
                     onClick={() => scrollTo(index)}
                     key={index}
                     type="button"
                     className={
                        index === selectedIndex ? ' h-[1.2rem] w-[1.2rem] rounded-full bg-primary' : "h-[1.2rem] w-[1.2rem] rounded-full bg-[#F3FBFF]"
                     }
                  />
               ))}
            </div>
         </div>
      </>
   )
}