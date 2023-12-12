import MainSearch from "../components/MainSearch";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "usehooks-ts";

export default function HomePage() {
  return (
    <MainContainer>
      <div className="flex w-full h-[90%] ">
        <div className="flex w-full items-center justify-center">
          <MainSearch />
        </div>
      </div>
    </MainContainer>
  );
}
