import { ChatData } from "./ChatItem";
import ChatItem from "./ChatItem";

export default function ChatContainer(props: { chats: ChatData[] }) {
  return (
    <div className="overflow-y-scroll max-h-[450px] ">
      {props.chats.map((chat, index) => (
        <div className="flex flex-col">
          <ChatItem data={chat} key={index} />
          <div className="h-[1px] bg-[#464545] w-[80%]"></div>
        </div>
      ))}
    </div>
  );
}
