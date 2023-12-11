import { FaArrowUp, FaPlusCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";

const values = [
  {
    title: "The first question",
    sources: [
      "EIE 416 module 1",
      "Benefits of Electromagnetism",
      "Random Source",
      "+ 2 more",
    ],
    answer:
      "this is a very long and convoluted answer to a question that seems really simple is the answer wrong just because its correct or are we just all tripping on a lot of things i'm not really real and you're not really fake this is AI we're talking about",
  },
];

export default function AnswerPage() {
  const [answers, setAnswers] = useState(values);
  const [Prompt, setPrompt] = useState("");
  return (
    <div className="h-screen w-screen bg-[#0C0F0A] text-white flex">
      <Sidebar />
      <div className="flex flex-col w-full  justify-between p-10">
        <div>
          <ChatContainer chats={answers} />
        </div>
        <div className="w-[65%] rounded-full h-[80px] bg-[#131810] flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-x-1 w-[98%] py-3 px-7 bg-[#131810] focus:outline-none  text-[#9ca3af] border-[#464545] border rounded-full h-[70%]">
            <FaPlusCircle />
            <input
              className="w-[98%] py-3 px-3 bg-[#131810] focus:outline-none text-[#9ca3af] h-[70%]"
              placeholder="Ask Follow-up question"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              onKeyDown={(e) => {
                const keyCode = e.key;
                if (keyCode == "Enter") {
                  setAnswers([
                    ...answers,
                    {
                      ...answers[0],
                      title: Prompt,
                    },
                  ]);

                  setPrompt("");
                }
              }}
            />
            <div className="bg-[#464545] h-7 w-7 rounded-full flex items-center justify-center cursor-pointer">
              <FaArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
