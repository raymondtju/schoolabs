import Avatar from "@/components/dashboard/avatar";
import { ForumChatIcon, ForumLikeIcon } from "@/components/icon/forum-icon";
import React from "react";

function HotDiscussionPage() {
  return (
    <section className="mx-auto max-w-4xl flex flex-col items-center justify-center px-8 py-8">
      {Array.from({ length: 6 }).map((_item, i) => {
        return (
          <div
            className="mb-6 w-full space-y-1 divide-y-[1px] rounded-[10px] border bg-white py-4"
            key={i}
          >
            <div className="px-3 md:px-6">
              <div className="flex items-center justify-between">
                <h2 className="truncate w-12 md:w-full text-base md:text-xl font-semibold text-gray-900">
                  Sharing berita & pendapat kamu soal berbagai topik
                </h2>
                <Avatar image="/avatar/avatar.webp" />
              </div>

              <div className="pb-2">
                <div className="flex items-center gap-3 py-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                  <div className="grid">
                    <div className="flex items-center gap-2">
                      <h6 className="font-medium text-gray-900">
                        Admin
                      </h6>
                      <p className="text-[10px] text-gray-900">
                        7 bulan
                      </p>

                    </div>
                    <p className="text-sm md:text-base text-gray-700">Administrator</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base">
                    Sharing berita & pendapat kamu soal topik di industri UI UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm flex gap-2 px-6 pt-2">
              <div className="flex items-center gap-2">
                <ForumLikeIcon/>
                <p>6 Menyukai</p>
              </div>
              <div className="flex items-center gap-2">
                <ForumChatIcon/>
                <p>1 Komentar</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HotDiscussionPage;
