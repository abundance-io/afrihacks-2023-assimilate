import { FaAlignLeft, FaFolder, FaParagraph } from "react-icons/fa";
import TypeIt from "typeit-react";
export interface ChatData {
  title: String;
  sources: String[];
  answer: String;
}
export default function ChatItem(props: { data: ChatData }) {
  return (
    <div className="flex flex-col w-full gap-y-7 my-5">
      <div className="text-2xl">{props.data.title}</div>
      <div className="flex flex-col w-full gap-y-2">
        <div className="text-xl flex items-center gap-x-2">
          <FaFolder />
          <p className="">Sources</p>
        </div>
        <div className="flex gap-x-3 w-full items-center md:max-w-none max-w-[400px] overflow-x-scroll">
          {props.data.sources.map((source, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] bg-[#131810] rounded-md text-[#9ca3af] p-3 text-sm cursor-pointer"
            >
              {source}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-2">
        <div className="text-xl flex items-center gap-x-2">
          <FaAlignLeft />
          <p className="">Answer</p>
        </div>
        <div className="w-[80%]">
          <TypeIt
            options={{
              speed: 3,
            }}
          >
            {props.data.answer}
          </TypeIt>
        </div>
      </div>
    </div>
  );
}
