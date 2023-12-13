import { FaArrowUp, FaPlusCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import { useMediaQuery } from "usehooks-ts";

interface ChatData {
  title: string,
  sources: string[],
  answer: string
}

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
  {
    title: "hi",
    sources: [],
    answer: "Hi, how can I help you today?"
  },
  { title: "help me with my biology homework on mitochondria ", }
];

function handleStudentQuery(input: string): ChatData {
  switch (input) {
    case "hi":
      return {
        title: "hi",
        sources: ["Cambridge IGCSE™ Biology 4th Edition (D G Mackean Dave Hayward).pdf"],
        answer: "Hi, how can I help you today?"
      };
    case "help me with my biology homework on mitochondria":
      return {
        title: "Mitochondria functions and structure",
        sources: ["https://en.wikipedia.org/wiki/Mitochondrion"],
        answer:
          "Mitochondria are membrane-bound organelles responsible for generating most of the cell's supply of ATP, serving as a source of chemical energy. They consist of outer and inner membranes, cristae, inter-membrane space, and a matrix.",
      };
    case "tell me more about their structure?":
      return {
        title: "Mitochondria structure",
        sources: ["https://en.wikipedia.org/wiki/Mitochondrion#Structure"],
        answer:
          "The structure of mitochondria includes an outer membrane, an inter-membrane space, an inner membrane, cristae, and a matrix, all of which play crucial roles in cellular respiration. You can find a diagram here: https://en.wikipedia.org/wiki/File:Mitochondrion_mini.svg",
      };
    case "can you reference my textbook on cellular respiration instead":
      return {
        title: "Textbook reference on mitochondria",
        sources: ["Cambridge IGCSE™ Biology 4th Edition (D G Mackean Dave Hayward).pdf"],
        answer:
          `Sure, in Cambridge IGCSE™ Biology's chapter 2.1 on 'Cell structure and organisation', at page 72: 
              "Mitochondria are tiny organelles, which may appear<br>
              slipper-shaped, circular or oval when viewed in section. In three
              dimensions, they may be spherical, rod-like or extended. They
              have an outer membrane and an inner membrane with many
              inward-pointing folds. Mitochondria are most frequent in regions
              of rapid chemical activity. They are responsible for releasing
              energy from food substances through the process of aerobic
              respiration (see Chapter 12).

              Note that prokaryotes do not possess mitochondria in their
              cytoplasm."
          `,
      };
    case "what are my upcoming assignments?":
      return {
        title: "Upcoming assignments",
        sources: ["Winchester local activites"],
        answer:
          "Your upcoming assignments are Biology Homework due on Friday, Math Quiz next Monday, and English Essay at the end of next week.",
      };
    default:
      return {
        title: "Oops",
        sources: [],
        answer:
          "Sorry, I can't help with that right now.",
      };
  }
}

export default function AnswerPage() {
  const [answers, setAnswers] = useState([handleStudentQuery("hi")]);
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
                    handleStudentQuery(Prompt)
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
