import CourseNav from "@/components/course/course-nav";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="">
        <CourseNav />
        {children}
      </main>
    </>
  );
}

export default RootLayout;
