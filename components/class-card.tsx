"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Progress } from "./ui/progress";
import { CheckCircle2 } from "lucide-react";
import { CourseCardTypes, NormalCourseCards } from "@/types/type";
import { cn } from "@/lib/utils";
import StarsIcon from "./icon/stars-icon";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  key?: number | string;
  card: Partial<CourseCardTypes>;
  className?: string;
  title?: string;
}

function ClassCard({ key, card, className, title }: CourseCardProps) {
  const router = useRouter();

  return (
    <Card
      key={key}
      className={cn("w-full cursor-pointer border-none shadow-md", className)}
      onClick={() => router.push(card.href || "#")}
    >
      <CardHeader className="rounded-xl p-0">
        {card.image && (
          <Image
            className="w-full"
            src={card.image}
            alt={card.image}
            width={350}
            height={350}
          />
        )}
      </CardHeader>

      {card.rating ? (
        <CardContent className="flex flex-col space-y-2 pt-6">
          <h5 className={cn("truncate text-2xl font-bold", title)}>
            {card.title}
          </h5>
          <div className="flex justify-between">
            <p className="text-sm font-semibold text-muted-foreground">
              {card.price === 0 ? (
                <>Rp - {"(Gratis)"}</>
              ) : (
                <>Rp - {card.price}</>
              )}
            </p>

            <div className="inline-flex items-center gap-1">
              <StarsIcon />
              <p className="text-xs text-muted-foreground">
                {card.rating} {`(${card.people_rate})`}
              </p>
            </div>
          </div>
        </CardContent>
      ) : (
        <CardContent className="flex flex-col gap-4 px-4 py-6">
          <h5 className={cn("truncate text-2xl font-bold", title)}>
            {card.title}
          </h5>
          <p className="text-sm text-muted">{card.description}</p>
        </CardContent>
      )}

      {card.level ? (
        <CardFooter className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5.41667 10.5H3.75C3.05964 10.5 2.5 11.0596 2.5 11.75V16.75C2.5 17.4404 3.05964 18 3.75 18H5.41667C6.10702 18 6.66667 17.4404 6.66667 16.75V11.75C6.66667 11.0596 6.10702 10.5 5.41667 10.5Z"
              fill="#4B4EFC"
            />
            <path
              d="M16.25 3H14.5833C13.893 3 13.3333 3.55964 13.3333 4.25V16.75C13.3333 17.4404 13.893 18 14.5833 18H16.25C16.9404 18 17.5 17.4404 17.5 16.75V4.25C17.5 3.55964 16.9404 3 16.25 3Z"
              fill="#D0D5DD"
            />
            <path
              d="M10.8333 6.33333H9.16667C8.47631 6.33333 7.91667 6.89298 7.91667 7.58333V16.75C7.91667 17.4404 8.47631 18 9.16667 18H10.8333C11.5237 18 12.0833 17.4404 12.0833 16.75V7.58333C12.0833 6.89298 11.5237 6.33333 10.8333 6.33333Z"
              fill="#D0D5DD"
            />
          </svg>
          <p className="text-sm text-muted-foreground">Level Dasar - Pemula</p>
        </CardFooter>
      ) : (
        <CardFooter className="mt-auto gap-1 px-4 pt-0">
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
              <p className="text-base font-semibold text-[#475367]">Complete</p>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  );
}

export default ClassCard;
