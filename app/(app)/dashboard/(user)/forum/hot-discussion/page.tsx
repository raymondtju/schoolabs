import React from "react";

function HotDiscussionPage() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center px-8 py-8">
      {Array.from({ length: 6 }).map((_item, i) => {
        return (
          <div
            className="mb-6 w-[896px] space-y-1 divide-y-[1px] rounded-[10px] border bg-white py-4"
            key={i}
          >
            <div className="px-6">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Sharing berita & pendapat kamu soal berbagai topik
                </h2>
                <div className="h-10 w-10 rounded-full bg-slate-100"></div>
              </div>

              <div className="pb-2">
                <div className="flex items-center gap-3 py-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                  <div>
                    <h6 className="relative font-medium text-gray-900">
                      Admin
                      <span className="absolute -right-2 top-[4px] text-[10px]">
                        7 bulan
                      </span>
                    </h6>
                    <p className="text-sm text-gray-700">Administrator</p>
                  </div>
                </div>
                <div>
                  <p>
                    Sharing berita & pendapat kamu soal topik di industri UI UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 px-6 pt-2">
              <div className="flex gap-2">
                {/* TO-DO: icon like */}
                <span>6 Menyukai</span>
              </div>
              <div className="flex gap-2">
                {/* TO-DO: icon like */}
                <span>1 Komentar</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HotDiscussionPage;
