import { lobsterFont } from "../../fonts";

type LogoProps = {
  text: string;
};

const Logo = ({ text }: LogoProps) => {
  return (
    <div
      className={`logo-outline text-background text-7xl flex flex-col items-center ${lobsterFont.className}`}
    >
      {text}
      <div className="bg-background border-link h-[16px] w-full mt-3 border-2 rounded-tl-full rounded-br-full" />
    </div>
  );
};

export default Logo;
