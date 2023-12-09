import { ReactNode } from "react";

export default function MainContainer(props: { children: ReactNode }) {
  return <div className="h-screen w-screen bg-black">{props.children}</div>;
}
