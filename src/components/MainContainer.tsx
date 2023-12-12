import { ReactNode } from "react";
import MainSearch from "../components/MainSearch";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "usehooks-ts";
import SidebarSmall from "./SidebarSmall";

export default function MainContainer(props: { children: ReactNode }) {
  const viewSmall = useMediaQuery("(min-width: 768px)");
  return (
    <div className="h-screen w-screen bg-[#0C0F0A] text-white md:flex">
      {viewSmall ? <Sidebar /> : <SidebarSmall />}
      <div className="flex w-full h-[90%] items-center justify-center">
        {props.children}
      </div>
    </div>
  );
}
