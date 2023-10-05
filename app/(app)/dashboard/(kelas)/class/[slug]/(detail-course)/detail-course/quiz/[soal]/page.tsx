"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const answerButton = [
  {
    label: "Meningkatkan performa server",
    isAnswer: false,
  },
  {
    label: "Memaksimalkan keuntungan bisnis",
    isAnswer: false,
  },
  {
    label: "Memahami dan meningkatkan pengalaman pengguna",
    isAnswer: true,
  },
  {
    label: "Meningkatkan keamanan data",
    isAnswer: false,
  },
];

function Quiz({ params }: { params: { soal: string } }) {
  // console.log(params.soal);

  const trueAns = answerButton.findIndex((item) => item.isAnswer);
  const [dataForm, setDataForm] = useState<{
    selected: number | null;
    isAnswerTrue: boolean;
  }>({
    selected: null,
    isAnswerTrue: false,
  });
  console.log(dataForm);

  return (
    <>
      <div className="grid gap-6">
        <h5 className="text-center text-2xl font-semibold">
          Apa tujuan utama dari UX Research
          <span className="sr-only">{params.soal}</span>
        </h5>
        <div className="flex justify-center gap-4">
          <div className="w-[30rem] max-w-2xl">
            <div className="h-[19rem] rounded-3xl bg-gray-200"></div>
          </div>
          <div className="flex w-[40rem] flex-col gap-4 px-4">
            {answerButton.map((item, index) => (
              <button
                onClick={() => {
                  setDataForm({
                    ...dataForm,
                    selected: index,
                    isAnswerTrue: index === trueAns,
                  });
                  console.log(index);
                  console.log(dataForm);
                }}
                key={index}
                type="button"
                disabled={dataForm.selected !== null}
                className={cn(
                  "flex items-center justify-between rounded-2xl border-[2px] border-[#E4E7EC] bg-[#FFF] p-4 text-base shadow-[0px_4px_0px_0px] shadow-[#E4E7EC]",
                  dataForm.selected !== null && // if user has already selected the button
                    index === dataForm.selected && // if index of button is same as the user selected
                    (answerButton[index].isAnswer
                      ? "border-[#0F973D] shadow-[#0F973D]" // if isAnswer from index of answerButton was true
                      : "border-[#DB2323] shadow-[#DB2323]"), // if false
                  dataForm.selected !== null && // if user has already select the button
                    !dataForm.isAnswerTrue && // if answer hasn't turn to true
                    index === trueAns && // and if index of button was same as actually true ans
                    "border-[#0F973D] shadow-[#0F973D]", // then true
                )}
              >
                {item.label}
                <span className=" grid h-7 w-7 place-content-center rounded-md border p-1">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
