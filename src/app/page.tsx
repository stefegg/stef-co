import { Header, IntroTitle, IntroSecond } from "./_components/index";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-full overflow-y-auto">
        <IntroTitle />
        <IntroSecond />
      </div>
    </>
  );
}
