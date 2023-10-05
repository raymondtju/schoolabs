import { cn } from "@/lib/utils";
import Image from "next/image";

function Avatar({
   className,
   image,
   alt
}: {
   className?: string,
   image?: string,
   alt?: string
}) {
   return (
      <div className={cn("h-10 w-10 rounded-full bg-gray-100", className)}>
         {(image && alt) && (
            <Image width={40} height={40} src={image} alt={alt} />
         )}
      </div>
   )
}

export default Avatar;