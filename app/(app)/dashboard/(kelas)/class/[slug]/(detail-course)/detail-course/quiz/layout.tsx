import QuizNav from "@/components/course/quiz-nav"

import { usePathname } from "next/navigation"

function QuizLayout(
   {
      children
   }: {
      children: React.ReactNode
   }
) {


   return (
      <>
         <main className="font-Inter">
            <QuizNav />
            <div className="bg-[#F9FAFB]">
               {children}
            </div>
         </main>
      </>
   )
}

export default QuizLayout;