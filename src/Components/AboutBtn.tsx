import React from "react";

type Props = {
  active?: boolean;
  title: string;
  onClick?: (val: string) => void;
};

function AboutBtn({ active, title, onClick }: Props) {
  return (
    <div
      onClick={() => onClick && onClick(title)}
      className={`${active ? "active" : ""} about_btn`}
    >
      {title}
    </div>
  );
}

export default AboutBtn;
