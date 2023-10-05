import QuizNav from "@/components/course/quiz-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
               <div className="container">
                  {children}
               </div>
            </div>
            <div className="h-24 w-full bg-[#FFF] flex items-center justify-center">
               <Button asChild className="h-14 w-[10.5rem]">
                  <Link href="quiz/soal-1">
                     Mulai
                  </Link>
               </Button>
            </div>
         </main>
      </>
   )
}

export default QuizLayout;