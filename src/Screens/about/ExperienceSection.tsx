import React from "react";
import ExperienceCard from "../../Components/ExperienceCard";

type Props = {};

export default function ExperienceSection({}: Props) {
  return (
    <div>
      <p className="sub_title mb-4">My Experience</p>
      <ExperienceCard
        duration="Nov 2022 - Present"
        company="Looperex Technologies"
        position="Full stack developer"
      />
    </div>
  );
}
