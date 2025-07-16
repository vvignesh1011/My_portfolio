import React from "react";
import EducationCard from "../../Components/EducationCard";

type Props = {};

export default function EducationSection({}: Props) {
  return (
    <div>
      <p className="sub_title mb-4">Education</p>
      <EducationCard
        duration="2015 to 2019"
        institute="M.I.E.T Engineering College"
        title="Bachelor of Engineering"
      />
    </div>
  );
}
