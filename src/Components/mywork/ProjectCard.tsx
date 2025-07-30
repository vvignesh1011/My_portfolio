import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

export default function ProjectCard({}: Props) {
  return (
    <div className="flex gap-3">
      {/* left */}
      <div className="flex-1">
        <h1
          className="bold text-[transparent] text-[60px] font-bold "
          style={{ WebkitTextStroke: "1px white" }}
        >
          01
        </h1>
        <h2 className="sub_title">Project Title</h2>
        <p className="text-[--tertiary] my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          voluptatibus!
        </p>
        <p className="text-[--primary]">Html, Css, Java Script</p>
        <p className="bg-[--tertiary] h-[1px] my-3"></p>
        <div className="flex gap-3">
          <FaGithub size={16} color="var(--onBackground)" />
          <GoArrowUpRight size={16} color="var(--onBackground)" />
        </div>
      </div>

      {/* right */}
      <div className="flex-1">
        <img
          src="https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
