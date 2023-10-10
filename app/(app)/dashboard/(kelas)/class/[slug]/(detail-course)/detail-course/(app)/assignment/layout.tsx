function AssignmentLayout(
   {
      children
   }: {
         children: React.ReactNode
   }
) {
   return (
      <>
         <div className="bg-[#F9FAFB] py-10">
            <div className="flex container">
               {children}
            </div>
         </div>
      </>
   )
}

export default AssignmentLayout;