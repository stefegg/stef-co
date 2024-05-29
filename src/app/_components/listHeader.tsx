import { lobsterFont } from "../fonts";

type ListHeaderProps = {
  title: string;
};

export default function ListHeader(props: ListHeaderProps) {
  const { title } = props;
  return <div className={`${lobsterFont.className} text-4xl `}>{title}</div>;
}
