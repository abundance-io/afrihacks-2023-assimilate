import { ReactNode, useState } from "react";
import { FaPlusCircle, FaArrowRight, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const recommends = [
  "🗼 maybe try this",
  "🚑 or mabybe try that",
  "🚦 or maybe this",

  "🗼 maybe try this",
  "🚑 or mabybe try that",
  "🚦 or maybe this",

  "🗼 maybe try this",
];
export default function MainSearch() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col gap-y-7 items-center justify-center md:w-[60%] w-full mx-4">
      <p className="text-3xl">Learn Anything Now</p>
      <div className="w-full h-[120px] bg-[#131810] rounded-lg border-2 border-[#464545] flex flex-col justify-between p-3 text-[#888F98] ">
        <input
          placeholder="Ask me anything..."
          className="w-full bg-[#131810] focus:outline-none"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            const keyCode = e.key;
            if (keyCode == "Enter") {
              navigate(`/search/${inputValue}`);
            }
          }}
        />

        <div className="flex justify-between items-center">
          <div className="flex text-sm gap-x-5">
            <div className="flex center gap-x-1 justify-center rounded-full cursor-pointer hover:text-[#d8d6d6]">
              <div className="flex items-center justify-center ">
                <FaSearch />
              </div>
              Focus
            </div>

            <div
              className="flex center gap-x-1 justify-center rounded-full cursor-pointer hover:text-[#d8d6d6]"
              onClick={() => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.click();
              }}
            >
              <div className="flex items-center justify-center">
                <FaPlusCircle />
              </div>
              File
            </div>
          </div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#464545] flex items-center justify-center cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-x-2 gap-y-1 items-center justify-center cursor-pointer">
        {recommends.map((value, index) => {
          return (
            <div
              className="border border-[#464545] rounded-full text-xs p-1 text-[#888F98]"
              key={index}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
