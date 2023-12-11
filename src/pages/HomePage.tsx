import MainSearch from "../components/MainSearch";
import MainContainer from "../components/MainSearch";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-[#0C0F0A] text-white flex">
      <Sidebar />
      <div className="flex w-full items-center justify-center">
        <MainSearch />
      </div>
    </div>
  );
}
