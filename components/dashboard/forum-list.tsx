"use client";

import React from "react";
import { ForumChatIcon, ForumLikeIcon } from "../icon/forum-icon";
import Avatar from "./avatar";

function ForumList() {
  return (
    <div className="divide-y rounded-[10px] border bg-white">
      {Array.from({ length: 5 }).map((item, i) => (
        <div key={i} className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Avatar image="/images/forumAvatar.png" alt="Avatar"/>
            <div>
              <h6 className="font-medium text-gray-900">
                Interaksi dalam UX Research
              </h6>
              <p className="text-sm text-gray-700">
                Ariel post 20 jam yang lalu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-2 items-center">
              <ForumLikeIcon />
              <span>6</span>
            </div>
            <div className="flex gap-2 items-center">
              <ForumChatIcon />
              <span>4</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumList;
