import { lobsterFont } from "../fonts";

type ListHeaderProps = {
  title: string;
};

export function ListHeader(props: ListHeaderProps) {
  const { title } = props;
  return (
    <div className={`${lobsterFont.className} mb-6 text-4xl`}>{title}</div>
  );
}
