import { X } from "lucide-react";
import { Progress } from "../ui/progress";

function QuizNav() {
   return (
      <nav className="bg-white h-24 flex items-center justify-center">
         <div className="max-w-4xl container">
            <div className="flex items-center gap-3">
               <X />
               <Progress className="#F9FAFB" />
               <span className="rounded-full bg-[#98A2B3] px-3 py-1 text-xs text-[#F9FAFB] font-medium">
                  0/10
               </span>
            </div>
         </div>
      </nav>
   )
}

export default QuizNav