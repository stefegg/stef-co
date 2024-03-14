import { lobsterFont } from "./fonts";

export default function Home() {
  return (
    <main
      className={`${lobsterFont.className} flex h-screen flex-col items-center`}
    >
      <div className="flex bg-navy flex-col h-full w-full font-outline-2 font-outline-yellow items-center pt-[20%] text-7xl text-red">
        StefCo
        <div className="bg-red border-yellow border-2 rounded-tl-full rounded-br-full h-[24px] w-1/4 mt-3" />
      </div>
    </main>
  );
}
