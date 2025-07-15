import React from "react";

type Props = {
  position: string;
  duration: string;
  company: string;
};

function ExperienceCard({ company, duration, position }: Props) {
  return (
    <div className="resume_card max-w-[300px]">
      <p color="var(--primary)" className="mb-2 ">
        {duration}
      </p>
      <p className="font-bold" color="var(--secondary)">
        {position}
      </p>
      <li className="mt-8 text-[#A6A5AB] font-semibold ">{company}</li>
    </div>
  );
}

export default ExperienceCard;
