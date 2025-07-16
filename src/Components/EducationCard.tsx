import React from "react";

type Props = {
  duration: string;
  title: string;
  institute: string;
};

export default function EducationCard({ duration, institute, title }: Props) {
  return (
    <div className="resume_card max-w-[300px]">
      <p color="var(--primary)" className="mb-2 ">
        {duration}
      </p>
      <p className="font-bold" color="var(--secondary)">
        {title}
      </p>
      <li className="mt-8 text-[#A6A5AB] font-semibold">{institute}</li>
    </div>
  );
}
