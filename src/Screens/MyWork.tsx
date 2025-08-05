import React, { useEffect } from "react";
import ProjectCard, { ProjectInfo } from "../Components/mywork/ProjectCard";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {};

const projects: Omit<ProjectInfo, "sNo">[] = [
  {
    title: "WhatsApp Frontend Clone",
    description:
      "A responsive frontend clone of WhatsApp built with Angular. Ideal for learning Angular component structure, routing, and state management.",
    githubLink: "https://github.com/vvignesh1011/whatsAppClone",
    techStack: "Angular",
    liveLink: "",
    image: "/projectImgs/whatsapp_mockup.jpg",
  },
  {
    title: "MCQ Test Portal",
    description:
      " is a web-based application that allows users to take multiple-choice quizzes online.quiz creation by admins, real-time scoring, and result tracking. The system supports dynamic question loading, timer-based tests, and detailed result analysis, making it suitable for educational institutions and online assessments.",
    githubLink: "https://github.com/vvignesh1011/mcqTestDjango/tree/version_2",
    techStack: "Django",
    liveLink: "",
    image: "/projectImgs/mcq_mockup.jpg",
  },
  {
    title: "Tree CLI",
    description:
      "Tree CLI is a command-line tool that visually displays the directory structure of a given path in a tree-like format. It helps developers quickly understand project hierarchies and file organization,",
    githubLink: "https://github.com/vvignesh1011/tree-cli",
    techStack: "NodeJS",
    liveLink: "",
    image: "/projectImgs/tree_cli.png",
  },
];

export default function MyWork({}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla select-none" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((info, i) => (
          <div className="embla__slide">
            <ProjectCard {...info} sNo={`${i + 1}`.padStart(2, "0")} />
          </div>
        ))}
      </div>

      {/* button container */}
      <div className="flex justify-end gap-3">
        <span
          onClick={() => emblaApi?.scrollPrev()}
          className="w-8 h-8 hover:cursor-pointer rounded-sm flex justify-center items-center bg-[--primary] text-[--background]"
        >
          <FaChevronLeft />
        </span>
        <span
          onClick={() => emblaApi?.scrollNext()}
          className="w-8 h-8 hover:cursor-pointer rounded-sm flex justify-center items-center bg-[--primary] text-[--background]"
        >
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}
