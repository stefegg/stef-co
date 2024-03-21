import { lobsterFont } from "../fonts";

type ListHeaderProps = {
  title: string;
};

export default function ListHeader(props: ListHeaderProps) {
  const { title } = props;
  return (
    <div className={`${lobsterFont.className} mb-6 text-5xl`}>{title}</div>
  );
}
