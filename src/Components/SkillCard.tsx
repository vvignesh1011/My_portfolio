import React from "react";
import { IconBaseProps } from "react-icons";

type Props = {
  icon: (props: IconBaseProps) => React.ReactNode;
};

export default function SkillCard(Props: Props) {
  return (
    <div
      className="w-[100px] aspect-square rounded-sm bg-[--card-bg] flex justify-center items-center
    cursor-pointer
    "
    >
      <Props.icon size={50} />
    </div>
  );
}
