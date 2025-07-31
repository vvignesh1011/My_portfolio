import React from "react";
import ProjectCard, { ProjectInfo } from "../Components/mywork/ProjectCard";

type Props = {};

const projects: Omit<ProjectInfo, "sNo">[] = [
  {
    title: "WhatsApp Frontend Clone",
    description:
      "A responsive frontend clone of WhatsApp built with Angular. Ideal for learning Angular component structure, routing, and state management.",
    githubLink: "https://github.com/vvignesh1011/whatsAppClone",
    techStack: "Angular",
    liveLink: "",
  },
];

export default function MyWork({}: Props) {
  return (
    <div>
      {projects.map((info, i) => (
        <ProjectCard {...info} sNo={`${i + 1}`.padStart(2, "0")} />
      ))}
    </div>
  );
}
