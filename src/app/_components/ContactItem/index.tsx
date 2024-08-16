import Image from "next/image";

type ContactItemProps = {
  icon: string;
  innerText: string;
};

const ContactItem = (props: ContactItemProps) => {
  const { icon, innerText } = props;
  return (
    <div
      className={`flex flex-row text-primary hover:text-secondary gap-4 cursor-pointer`}
    >
      <Image
        src={icon}
        alt="gmail"
        style={{
          width: "10%",
        }}
      />
      <div className="items-end flex text-2xl font-light">{innerText}</div>
    </div>
  );
};

export default ContactItem;
