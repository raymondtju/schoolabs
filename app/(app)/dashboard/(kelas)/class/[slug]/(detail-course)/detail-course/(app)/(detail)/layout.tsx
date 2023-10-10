import CourseSidebar from "@/components/course/course-sidebar";
import React from "react";

function DetailClassLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container relative grid grid-cols-[315px_1fr]">
        <CourseSidebar />
        <div className="col-span-2">{children}</div>
      </div>
    </>
  );
}

export default DetailClassLayout;
