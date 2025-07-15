import React from "react";

type Props<T extends string> = {
  active?: boolean;
  title: T;
  onClick?: (val: T) => void;
};

function AboutBtn<T extends string>({ active, title, onClick }: Props<T>) {
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
