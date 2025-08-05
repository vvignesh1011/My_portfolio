import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  sNo: string;
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  liveLink?: string;
  image?: string;
};
export type ProjectInfo = Props;

export default function ProjectCard({
  sNo,
  description,
  githubLink,
  techStack,
  title,
  liveLink,
  image,
}: Props) {
  const viewGithub = () => githubLink && window.open(githubLink, "_blank");
  const viewLive = () => liveLink && window.open(liveLink, "_blank");
  return (
    <div className="flex gap-3">
      {/* left */}
      <div className="flex-1">
        <h1
          className="bold text-[transparent] text-[60px] font-bold "
          style={{ WebkitTextStroke: "1px white" }}
        >
          {sNo}
        </h1>
        <h2 className="sub_title">{title}</h2>
        <p className="text-[--tertiary] my-3">{description}</p>
        <p className="text-[--primary]">{techStack}</p>
        <p className="bg-[--tertiary] h-[1px] my-3"></p>
        <div className="flex gap-3">
          {githubLink && (
            <span
              onClick={viewGithub}
              className="w-[32px] h-[32px] rounded-full bg-[--card-bg] justify-center items-center flex cursor-pointer"
            >
              <FaGithub size={16} color="var(--onBackground)" />
            </span>
          )}
          {liveLink && (
            <span
              onClick={viewLive}
              className="w-[32px] h-[32px] rounded-full bg-[--card-bg] justify-center items-center flex cursor-pointer"
            >
              <GoArrowUpRight size={16} color="var(--onBackground)" />
            </span>
          )}
        </div>
      </div>

      {/* right */}
      <div className="flex-1">
        <img
          src={
            image ||
            "https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
          }
          alt=""
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
    </div>
  );
}
