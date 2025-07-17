import React from "react";
import { IconBaseProps } from "react-icons";

type Props = {
  icon: (props: IconBaseProps) => React.ReactNode;
  title: string;
};

export default function SkillCard(Props: Props) {
  return (
    <div className="group/card relative">
      <div
        className="w-[100px] aspect-square rounded-sm bg-[--card-bg] flex justify-center items-center
    cursor-pointer hover:text-[--primary] transition-all relative
     z-10
    "
      >
        <Props.icon size={50} />
      </div>
      <div
        className="bg-[--onBackground] px-2 absolute top-1 -z-10 text-[--background]
       rounded-sm text-[10px]  group-hover/card:top-[-18px] select-none mx-auto left-0 right-0 w-fit transition-all "
      >
        {Props.title || "HTML"}
      </div>
    </div>
  );
}
