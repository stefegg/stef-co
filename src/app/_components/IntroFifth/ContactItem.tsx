import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../_providers";

type ContactItemProps = {
  icon: string;
  innerText: string;
};

const ContactItem = (props: ContactItemProps) => {
  const { appTheme } = useContext(ThemeContext);
  const { icon, innerText } = props;
  return (
    <div className={`flex flex-row text-${appTheme}-text gap-4 cursor-pointer`}>
      <Image
        src={icon}
        alt="gmail"
        style={{
          width: "10%",
        }}
      />
      <div className="items-end flex text-xl">{innerText}</div>
    </div>
  );
};

export default ContactItem;
