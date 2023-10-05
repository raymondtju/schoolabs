function QuizSlugLayout(
   {
      children
   }: {
      children: React.ReactNode
   }) {
   return (
      <>
         <div className="py-[6rem]">
            {children}
         </div>
      </>
   )
}

export default QuizSlugLayout;

