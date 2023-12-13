import { FaArrowUp, FaPlusCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import { useMediaQuery } from "usehooks-ts";

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
  const viewSmall = useMediaQuery("(min-width: 768px)");
  return (
    <MainContainer>
      <div className="flex flex-col w-full h-[90%] md:h-full justify-between p-10 overflow-y-scroll">
        <div className="overflow-y-scroll max-h-[400px]">
          <ChatContainer chats={answers} />
        </div>
        <div className="md:w-[65%] h-[50px] md:my-0 my-5 rounded-full md:h-[80px] bg-[#131810] flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-x-1 w-[98%] py-3 px-7 bg-[#131810] focus:outline-none  text-[#9ca3af] border-[#464545] md:border rounded-full md:h-[60px] h-[30px]">
            <label htmlFor="file-upload" className="cursor-pointer">
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  // Handle the selected file here
                }}
              />
              <FaPlusCircle />
            </label>
            <input
              className="w-[98%]  py-3 px-3 bg-[#131810] focus:outline-none text-[#9ca3af] text-sm md:text-base"
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
            {viewSmall ? (
              <div className="bg-[#464545] h-7 w-7 rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowUp />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
