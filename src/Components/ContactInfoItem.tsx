import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon?: IconType;
  onclick?: () => void;
};

export default function ContactInfoItem({
  description,
  title,
  icon: Icon,
  onclick,
}: Props) {
  return (
    <div
      onClick={onclick}
      className="flex gap-3 items-center cursor-pointer group"
    >
      <div className="w-12 h-12 bg-[--card-bg] flex items-center justify-center rounded-sm">
        {Icon && <Icon color="var(--primary)" size={16} />}
      </div>
      <div>
        <p className="text-sm text-[--tertiary] group-hover:text-inherit transition-all">
          {title}
        </p>
        <p className=" font-medium group-hover:text-[--primary] transition-all">
          {description}
        </p>
      </div>
    </div>
  );
}
