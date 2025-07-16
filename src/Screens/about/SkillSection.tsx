import React from "react";
import SkillCard from "../../Components/SkillCard";
import {
  FaAngular,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  TbBrandDocker,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiDjango, DiNginx } from "react-icons/di";

type Props = {};

export default function SkillSection({}: Props) {
  return (
    <div>
      <p className="sub_title mb-4">My Skills</p>
      <div className="grid gap-8 grid-cols-4 w-fit pb-6 scroll-auto">
        <SkillCard icon={FaHtml5} />
        <SkillCard icon={FaCss3} />
        <SkillCard icon={FaJs} />
        <SkillCard icon={TbBrandTypescript} />

        <SkillCard icon={FaNodeJs} />
        <SkillCard icon={SiExpress} />
        <SkillCard icon={TbBrandMongodb} />
        <SkillCard icon={FaReact} />

        <SkillCard icon={TbBrandReactNative} />
        <SkillCard icon={FaAngular} />
        <SkillCard icon={TbBrandNextjs} />
        <SkillCard icon={TbBrandRedux} />
        <SkillCard icon={RiTailwindCssFill} />
        <SkillCard icon={TbBrandDocker} />
        <SkillCard icon={DiNginx} />

        <SkillCard icon={FaGit} />
        <SkillCard icon={FaJava} />
        <SkillCard icon={FaPython} />
      </div>
    </div>
  );
}
