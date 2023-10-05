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
               <div className="relative grid place-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                     <path d="M32 8C37.7341 8 43.2787 10.053 47.63 13.7873C51.9814 17.5216 54.852 22.6905 55.7221 28.3582C56.5922 34.0258 55.4043 39.8177 52.3735 44.6854C49.3428 49.553 44.6694 53.1747 39.1994 54.8947C33.7293 56.6148 27.8243 56.3196 22.5531 54.0625C17.2819 51.8055 12.993 47.7358 10.4628 42.5901C7.93265 37.4445 7.32839 31.563 8.75943 26.0103C10.1905 20.4577 13.5623 15.6009 18.2644 12.3192L21.2862 16.649C17.6186 19.2087 14.9886 22.997 13.8724 27.3281C12.7561 31.6591 13.2275 36.2467 15.201 40.2603C17.1746 44.2739 20.5199 47.4483 24.6314 49.2088C28.7429 50.9693 33.3489 51.1996 37.6155 49.8579C41.8821 48.5163 45.5274 45.6913 47.8914 41.8946C50.2554 38.0978 51.1819 33.5801 50.5032 29.1594C49.8245 24.7386 47.5855 20.7069 44.1914 17.7941C40.7974 14.8813 36.4726 13.28 32 13.28V8Z" fill="#F3A218" />
                  </svg>
                  <p className="absolute text-xl font-semibold">30</p>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default QuizNav