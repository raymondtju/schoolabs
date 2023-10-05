"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { CheckCircle2 } from "lucide-react";
import { CourseCardTypes } from "@/types/type";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  key?: number | string,
  card: CourseCardTypes,
  className?: string
}

function ClassCard({ key, card, className }: CourseCardProps) {
  return (
    <Card key={key} className={cn("max-w-xs min-w-[18.75rem] w-[18.75rem] shrink-0 border-none shadow-md", className)}>
      <CardHeader className="overflow-hidden p-0">
        <Image
          className="w-full"
          src={card.image}
          alt="Course dasar ux"
          width={350}
          height={350}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 px-4 py-6">
        <h5 className="text-2xl font-bold truncate">{card.title}</h5>
        <p className="text-sm text-muted">{card.description}</p>
      </CardContent>
      <CardFooter className="mt-auto gap-3 px-4 pt-0">
        {typeof card.status === "number" ? (
          <>
            <Progress className="bg-[#F0F2F5]" value={card.status} />
            <span className="text-[0.8125rem] font-semibold leading-5 text-muted">
              {card.status}%
            </span>
          </>
        ) : (
          <>
            <CheckCircle2 stroke="#475367" />
            <p className="text-base font-semibold text-[#475367]">
              Complete
            </p>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

export default ClassCard;
