import React from "react";
import EducationCard from "../../Components/EducationCard";

type Props = {};

export default function EducationSection({}: Props) {
  return (
    <div>
      <p className="sub_title mb-4">Education</p>
      <EducationCard
        duration="Nov 2022 - Present"
        company="Looperex Technologies"
        position="Full stack developer"
      />
    </div>
  );
}
