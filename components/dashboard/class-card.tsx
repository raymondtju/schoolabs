"use client";

import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

function ClassCard({
  title,
  description,
  progressValue,
  className,
}: {
  title?: string;
  description?: string;
  progressValue?: number;
  className?: string;
}) {
  return (
    <div className={cn("shrink-0", className)}>
      <div className="w-[300px] overflow-hidden rounded-2xl border bg-white">
        <img src={"/cards-image/dasar-ux.png"} alt="dasar-ux" />
        <div className="space-y-4 px-4 py-6">
          <h5 className="text-2xl font-bold text-gray-900">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex items-center gap-3">
            <Progress value={progressValue} />
            <span className="text-sm font-semibold text-gray-700">
              {progressValue}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
