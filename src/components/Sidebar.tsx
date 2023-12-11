import {
  FaSearch,
  FaPlusCircle,
  FaPlus,
  FaArrowRight,
  FaBookOpen,
  FaCompass,
  FaSquare,
  FaSignInAlt,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="h-screen w-[20%] bg-[#131810] border-r-[0.5px] border-[#464545] flex flex-col py-2">
      <div className="text-2xl flex items-center justify-center w-full">
        <div className="flex items-center px-5 gap-x-2 w-full">
          <FaBookOpen />
          Assimilate
        </div>
      </div>
      <div className="w-full flex items-center justify-center ">
        <input
          placeholder="Search"
          className=" mt-8 w-[90%] h-[40px] bg-[#131810] focus:outline-none rounded-full border-2 border-[#464545] px-3 text-[#d8d6d6]"
        />
      </div>
      <div className="flex flex-col w-full px-5 mt-8 gap-y-3">
        <div className="flex items-center gap-x-2 text-[#d8d6d6] text-lg w-full cursor-pointer">
          <FaSearch />
          Home
        </div>

        <div className="flex items-center gap-x-2 text-[#777373] text-lg w-full cursor-pointer">
          <FaCompass />
          Discover
        </div>

        <div className="flex items-center gap-x-2 text-[#777373] text-lg w-full cursor-pointer">
          <FaSquare />
          Library
        </div>

        <div className="flex items-center gap-x-2 text-[#777373] text-lg w-full cursor-pointer">
          <FaSignInAlt />
          Login
        </div>
      </div>
      <div className=" w-full items-center mt-[220px] px-5 text-[#777373]">
        <p>Assimilate is your AI university learning assistant..</p>
      </div>
    </div>
  );
}
